import { AddTaskInput } from "./components/AddTaskInput";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { CreateTaskButton } from "./components/CreateTaskButton";
import { TaskStatusLabel } from "./components/TaskStatusLabel";
import { TaskBox } from "./components/TaskBox";
import { EmptyListLabel } from "./components/EmptyListLabel";
import { useGetTODO } from "./service/hooks/useGetTODO";
import { useEffect, useState } from "react";
import { useCreateTODO } from "./service/hooks/useCreateTODO";
import { useDeleteTODO } from "./service/hooks/useDeleteTODO";

function App() {
  const [taskText, setTaskText] = useState("");
  const { data: tasks } = useGetTODO();
  const { mutate } = useCreateTODO();
  const { mutate: deleteTaskMutate } = useDeleteTODO();
  const isThereTasks = tasks?.length;

  useEffect(() => {
    console.log("meus TODOS", tasks);
  }, [tasks]);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.mainContainer}>
          <div className={styles.inputAndCreateButtonContainer}>
            <AddTaskInput onChangeText={setTaskText} value={taskText} />
            <div className={styles.createButtonContainer}>
              <CreateTaskButton onClick={() => mutate(taskText)} />
            </div>
          </div>
          <div className={styles.createdTasksAndConcludedContainer}>
            <TaskStatusLabel labelText={"Created tasks"} badgeLabelValue={0} />
            <TaskStatusLabel labelText={"Completed"} badgeLabelValue={0} />
          </div>
          <div className={styles.dividerLine} />
          {isThereTasks ? (
            <ul>
              {tasks.map((item) => (
                <li className={styles.taskBoxContainer} key={item.id}>
                  <TaskBox
                    onTrashIconPress={() => deleteTaskMutate(item.id)}
                    text={item.title}
                    isCompleted={!!item.completedAt}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.emptyListLabelContainer}>
              <EmptyListLabel />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
