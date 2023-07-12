import { useQuery } from "@tanstack/react-query";
import getPhones from "../../api/getPhones/getPhones";

const queryKey = ["getPhonesQueryKey"];

const useGetPhones = () => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: queryKey,
    queryFn: getPhones,
  });

  return { data, error, isError, isLoading };
};

export default useGetPhones;
