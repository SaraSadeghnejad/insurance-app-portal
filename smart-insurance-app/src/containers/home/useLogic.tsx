import { useEffect, useState } from "react";
import { useSubmissionsQuery } from "../../api/submission-query"
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ColumnCell, ColumnDef } from "@/lib/type";
import { useLocation } from "react-router";


export const useLogic =()=>{
  const router=useLocation()
    const [columns, setColumns] = useState<ColumnCell>([]);
    const [draftData,setDraftData]= useState<ColumnCell>([])
    const { data } = useSubmissionsQuery({ enabled: router.pathname==='/' });
   const {t} = useTranslation()
  
  
  
  type MyColumnDef = ColumnDef<ColumnCell, string>; // Define your ColumnDef type
  
  // Inside your component or where you use useEffect
  useEffect(() => {
    if (data?.columns) {
      const formattedColumns:ColumnCell = data.columns.map((column:any ) => ({
        header: ({ column: col }: { column: MyColumnDef }) => ( // Explicitly typing the function parameter
          <Button
            variant="ghost"
            onClick={() => col.toggleSorting(col.getIsSorted() === "asc")}
          >
            {t(column)} 
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
        accessorKey: column, // The key in the data — should also map accurately to MyColumnData
      }));
      setColumns(formattedColumns);
    }
  }, [data]); 

  useEffect(() => {
    const draft = localStorage.getItem('formData');
    if (draft) {
      let parsedDraft = JSON.parse(draft); 
  
      // Check if parsedDraft is an array
      if (Array.isArray(parsedDraft)) {
        const newArr = parsedDraft.map((entry, index) => {
            const today = new Date();
            const birthDateObj = new Date(entry.dob);
  
            // Get the current year and the birth year
            const currentYear = today.getFullYear();
            const birthYear = birthDateObj.getFullYear();
  
            // Calculate age
            let age = currentYear - birthYear;
  
            return {
              id: index + 10, // Use entry.id if available, otherwise generate by index
              "Full Name": `${entry.first_name} ${entry.last_name}`,
              Age: age,
              Gender: entry.gender || 'Female', // Providing a default
              "Insurance Type": entry.insuranceType || 'Health', // Providing a default
              City: entry.city,
            }
        });
  

        const finalData =(Array.isArray(data?.data) ? data.data : []).concat(newArr);
        setDraftData(finalData);
        
      } else {
        console.warn('Draft data is not an array');
      }
    }
  }, [data]);
    return{
        data,
        draftData,
        columns
    }
}