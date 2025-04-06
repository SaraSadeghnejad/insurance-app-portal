import Loader from "@/components/Loader.tsx"
import { DataTable } from "../../components/table/data-table"
import { useLogic } from "./useLogic.tsx"

const HomeContainer = () => {
    const {columns,draftData,data}= useLogic()
  const rowData = draftData.length>0? draftData: data?.data
  return (
    <>{columns.length > 0 ? (
        <DataTable columns={columns} data={rowData} />
      ) : (
       <Loader/>
      )}
</>
  )
}

export default HomeContainer