import { MutationFunction, useMutation, useQueryClient } from "react-query";
import { api } from "../../../api";
import { ResponseData } from "../../../interfaces/Api";
import toast from "react-hot-toast";

const markTaskAsCompleted: MutationFunction<ResponseData, number> = async (
  id: number,
) => {
  const result = await api.patch(`tasks/complete-task/${id}`);
  return result.data;
};

export function useMarkTaskAsCompleted() {
  const notifyErrorToMarkTaskAsCompleted = () =>
    toast.error("Error to mark the task as completed . Please try again");
  const client = useQueryClient();
  return useMutation<ResponseData, Error, number>(
    ["MarkTaskAsCompleted"],
    async (id: number) => await markTaskAsCompleted(id),
    {
      onSuccess: () => {
        client.invalidateQueries("TODOS");
      },
      onError: () => {
        notifyErrorToMarkTaskAsCompleted();
      },
    },
  );
}
