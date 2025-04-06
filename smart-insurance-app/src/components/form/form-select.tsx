

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../ui/select";
import {  useEffect, useState } from "react";

interface FormSelectProps {
  placeholder: string | undefined;
  items: { value: string | boolean | null; label: string }[] | undefined;
  defaultValue?: string;
  onChange: (value: string | boolean | null) => void;
  value: string | boolean | null;
  name: string;
  disabled?: boolean;
  className?: string;
  id: string;
  query?:string;
  dynamicOptions?:{dependsOn:string,endpoint:string} | undefined
}
const FormSelect = ({
  value,
  query,
  items,
  defaultValue,
  onChange,
  name,
  id,
  className,
  disabled,
  dynamicOptions
}: FormSelectProps) => {
  const [data, setData] = useState<any>(null);
 

  useEffect(() => {
    if(query&&dynamicOptions){
       const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}${  dynamicOptions?.endpoint}?${dynamicOptions?.dependsOn}=${query}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
      
      } finally {
    
      }

    };
    fetchData();}
  
  }, [query]); // Empty dependency array means this runs once on mount

  return (
    <div className={className}>
      <Select
        autoComplete="off"
        name={name}
        onValueChange={onChange}
        value={value as string}
        defaultValue={defaultValue}
        disabled={disabled}
      >
        <SelectTrigger  id={id} >
          <SelectValue placeholder={'Choose an option'} />
        </SelectTrigger>
        <SelectContent>
          {items?items?.map((item:any, index) => (
            <SelectItem key={index} value={item as unknown as string}>
              {item}
            </SelectItem>
          )):data&&data?.states?.map((item: any,index:number) => (
            <SelectItem key={index} value={item as string}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FormSelect;
