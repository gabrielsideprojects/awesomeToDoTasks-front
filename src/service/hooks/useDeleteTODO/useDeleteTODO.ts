import { MutationFunction, useMutation, useQueryClient } from "react-query";
import { api } from "../../../api";
import { ResponseData } from "../../../interfaces/Api";

const deleteTODO: MutationFunction<ResponseData, number> = async (
  taskId: number,
) => {
  const result = await api.delete(`tasks/${taskId}`);
  return result.data;
};

export function useDeleteTODO() {
  const client = useQueryClient();
  return useMutation<ResponseData, Error, number>(
    ["DeleteTodos"],
    async (taskId: number) => await deleteTODO(taskId),
    {
      onSuccess: () => {
        client.invalidateQueries("TODOS");
      },
    },
  );
}
