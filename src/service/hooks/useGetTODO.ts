import { UseQueryResult, useQuery } from "react-query";
import { api } from "../../api";
import { Task } from "../../interfaces/Task";

async function getTODO(): Promise<Task[]> {
  const result = await api.get("tasks");

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return result.data;
}

export function useGetTODO(): UseQueryResult<Task[]> {
  return useQuery(["TODOS"], async () => await getTODO());
}
