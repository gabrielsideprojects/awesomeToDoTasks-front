import { MutationFunction, useMutation, useQueryClient } from "react-query";
import { api } from "../../../api";
import { ResponseData } from "../../../interfaces/Api";

const markTaskAsCompleted: MutationFunction<ResponseData, number> = async (
  id: number,
) => {
  const result = await api.patch(`tasks/complete-task/${id}`);
  return result.data;
};

export function useMarkTaskAsCompleted() {
  const client = useQueryClient();
  return useMutation<ResponseData, Error, number>(
    ["MarkTaskAsCompleted"],
    async (id: number) => await markTaskAsCompleted(id),
    {
      onSuccess: () => {
        client.invalidateQueries("TODOS");
      },
    },
  );
}
