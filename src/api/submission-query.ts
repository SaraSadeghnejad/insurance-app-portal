


import { QueryFunctionContext, useQuery, UseQueryOptions } from "react-query";
import { QueryKey } from "../lib/type";
import http from "../utils/http";
import { API_ENDPOINTS } from "../utils/api-endpoints";

export const fetchSubmissions = async ({
  queryKey
}: QueryFunctionContext<QueryKey>) => {
  const [_key] = queryKey;
  const { data } = await http.get(_key);
  return data as any;
};
export const useSubmissionsQuery = (options: UseQueryOptions) => {

  return useQuery<any, Error, any, QueryKey>({
    queryKey: [API_ENDPOINTS.INSURANCE.SUBMISSIONS],
    queryFn: fetchSubmissions,
    enabled: !!options.enabled
  });
};
