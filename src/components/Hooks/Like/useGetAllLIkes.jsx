import { useQuery } from "react-query";
import apis from "shared/api/main";
import { QueryKeys } from "shared/QueryKeys";

const useGetAllLIkes = (payload) => {
  const fetcher = async () => {
    const { data } = await apis.getAllLikes(payload);
    return data;
  };

  return useQuery(QueryKeys.like, fetcher);
};

export default useGetAllLIkes;
