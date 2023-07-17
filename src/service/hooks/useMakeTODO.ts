import { MutationFunction, useMutation, useQueryClient } from "react-query";
import { api } from "../../api";
import { ResponseData } from "../../interfaces/Api";

const makeTODO: MutationFunction<ResponseData, string> = async (
  title: string,
) => {
  const result = await api.post("tasks", { title });
  return result.data;
};

export function useMakeTODO() {
  const client = useQueryClient();
  return useMutation<ResponseData, Error, string>(
    ["MakeTodos"],
    async (title: string) => await makeTODO(title),
    {
      onSuccess: () => {
        client.invalidateQueries("TODOS");
      },
    },
  );
}
