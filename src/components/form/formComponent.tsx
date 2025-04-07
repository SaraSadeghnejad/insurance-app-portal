import { FieldValues, useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { FormFieldProps, FormProps } from "../../lib/type";
import FormSelect from "./form-select";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { z } from "zod";


const FormComponent = <TFieldValues extends FieldValues>({
  onSubmit,
  defaultValues,
  className,
  schemaType,
  formField,
}: FormProps<TFieldValues>) => {
  const { t } = useTranslation();
  const allFormsData = formField;


  const flattenFields = (forms:any) => {
    return forms?.reduce((acc: string | any[], form: { fields: any; }) => {
      return acc.concat(form.fields);
    }, []);
  };

  const form = useForm<z.output<typeof schemaType>>({
    defaultValues,
    // resolver: zodResolver(schemaType),
  });
  const [selectedValue,setSelectedValue]= useState('');
  const fields = flattenFields(allFormsData);
  const handleSelectedItem = (value:string) => {
      setSelectedValue(value);
    
  };
  useEffect(() => {
    
    
  }, [form]);

  // Watch form data and save to local storage whenever it changes
  const formData = form.watch();
  useEffect(() => {
    localStorage.setItem('formDraft', JSON.stringify(formData));
  }, [formData]);
  const renderField = (item: FormFieldProps<TFieldValues>) => {
    
    const dependsOnValues = fields.flatMap((item:any) =>
      item.fields ? item.fields.map((option:any) => option.dynamicOptions?.dependsOn).filter((dependsOn:string) => dependsOn) : []
    );   const isVisible = () => {
      if (item.visibility && item.visibility.dependsOn) {
        const dependsOnValue = form.getValues(item.visibility.dependsOn);
        return dependsOnValue === item.visibility.value; // Show if the condition matches
      }
      return true; // Default to visible if no visibility rules
    };

    // Only render if the field is visible
    if (!isVisible()) return null;
   

    const fieldId = item.id;
    return (
      <FormField
        key={fieldId}
        control={form.control}
        name={fieldId as string}
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor={fieldId} className="mt-3">
              {t(fieldId)  || "Label not provided"}
              {item.required && <span className="text-black-1">*</span>}
            </FormLabel>
            <FormControl>
              {item.fields ? (
                // Recursive call for nested groups
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 border-2 border-solid border-gray-200 p-4 rounded-md bg-white-300 dark:bg-gray-900 p-2 shadow-lg">
                  {item.fields.map((nestedField) => renderField(nestedField))}
                </div>
              ) : item.type === 'radio' ? (
                <div>
                  {item.options.map((option:any) => (
                    <label key={option}>
                      <input
                        type="radio"
                        {...field}
                        value={option}
                        className="mx-3"
                        checked={field.value === option}
                        onChange={() => {
                          field.onChange(option);
                        }}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ) : item.type === 'checkbox' ? (
                <div>
                  {item.options.map((option:any) => (
                    <label key={option}>
                      <input
                        type="checkbox"
                        {...field}
                        value={option}
                        className="mx-3"
                        checked={field.value === option}
                        onChange={() => {
                          field.onChange(option);
                        }}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ) : item.type === 'select' ? (
                <FormSelect
                  placeholder={item.placeholder}
                  items={item?.options}   
                  id={fieldId}
                  value={field.value}
                  onChange={(value) => {
                    field.onChange(value); 
                   item.options&&  dependsOnValues&&dependsOnValues.includes(item.id) &&handleSelectedItem(value as any)
                  }}
                  name={item.label as string}
                  disabled={item.disabled}
                  className="w-full"
                  query={selectedValue}
                  dynamicOptions={item?.dynamicOptions as any}
                />
              ) :(
                <Input
                  {...field}
                  placeholder={item.placeholder}
                  type={item.type}
                  id={fieldId}
                   value={field.value || ''}
                />
              )}
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("overflow-hidden bg-white-300 dark:bg-black p-2", className)}>
        <div>
          {fields && fields.map(renderField)}
        </div>
        <div className={cn("flex justify-end mt-5")}>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default FormComponent;