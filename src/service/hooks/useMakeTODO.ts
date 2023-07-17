import { UseMutationResult, useMutation, useQueryClient } from "react-query";
import { api } from "../../api";

async function makeTODO(title: string): Promise<{
  title: string;
}> {
  const result = await api.post("tasks", { title });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return result.data;
}

export function useMakeTODO(): UseMutationResult<{
  title: string;
}> {
  const client = useQueryClient();
  return useMutation(
    ["MakeTodos"],
    async (title: string) => await makeTODO(title),
    {
      onSuccess: () => {
        client.invalidateQueries("TODOS");
      },
    },
  );
}
