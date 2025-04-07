import useCallMutation from "@/utils/call-api";
import { useFormsQuery } from "../../api/form-query"
import { FormSchemaType } from "@/lib/type";
import { useNavigate } from "react-router";

export const useLogic =()=>{
  const router =useNavigate()
    const {data} = useFormsQuery({enabled:true});
    const mutation = useCallMutation("SubmitForm", {
      onSuccess: async () => {
      router('/')
      },
    });
    function saveDataToLocalStorage(key: string, newData: FormSchemaType) {
      // Retrieve existing data from localStorage
      const existingData = localStorage.getItem(key);
      
      // Parse existing data or create an empty array if it doesn't exist
      let data2 = existingData ? JSON.parse(existingData) : [];
    
      // Ensure data2 is an array
      if (!Array.isArray(data2)) {
        console.error(`Expected data to be an array, but got:`, data2);
        data2 = []; // Reset to an empty array if necessary
      }
    
      // Combine existing data with new data
      if (Array.isArray(newData)) {
        data2.push(...newData); // Merge the new data into existing data
      } else {
        data2.push(newData); // If newData is not an array, push it as a single entry
      }
    
      // Store the combined data back in localStorage
      localStorage.setItem(key, JSON.stringify(data2));
    }
    
    const handleSubmit = (data: FormSchemaType ) => {
      saveDataToLocalStorage('formData', data);
      mutation.mutate({ body: data });
    };
    return{
      data,
      handleSubmit
    }
}