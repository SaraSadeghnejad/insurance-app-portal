import { formSchema } from "@/components/ui/formSchema"
import FormComponent from "../../components/form/formComponent"
import { useLogic } from "./useLogic"
import Loader from "@/components/Loader"
import { FormSchemaType } from "@/lib/type"


const RegisterContainer = () => {
    const {data, handleSubmit} =useLogic()
  return (
 <>{ data?  
 <FormComponent
  formField={data } // Pass fields for the selected form
  onSubmit={(data) => { handleSubmit(data as  FormSchemaType ) } }
  defaultValues={{}} // Set default values if needed
  schemaType={formSchema} // Your Zod schema for validation
  className="mx-auto px-10 mt-5 " />:<Loader/>}</>
  )
}

export default RegisterContainer