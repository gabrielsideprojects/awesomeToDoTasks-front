import { MutationFunction, useMutation, useQueryClient } from "react-query";
import { api } from "../../../api";
import { ResponseData } from "../../../interfaces/Api";

const createTODO: MutationFunction<ResponseData, string> = async (
  title: string,
) => {
  const result = await api.post("tasks", { title });
  return result.data;
};

export function useCreateTODO() {
  const client = useQueryClient();
  return useMutation<ResponseData, Error, string>(
    ["MakeTodos"],
    async (title: string) => await createTODO(title),
    {
      onSuccess: () => {
        client.invalidateQueries("TODOS");
      },
    },
  );
}
