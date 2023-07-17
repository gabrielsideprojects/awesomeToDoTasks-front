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
import { useMarkTaskAsCompleted } from "./service/hooks/useMarkTaskAsCompleted";

function App() {
  const [taskText, setTaskText] = useState("");
  const { data: tasks } = useGetTODO();
  const { mutate } = useCreateTODO();
  const { mutate: deleteTaskMutate } = useDeleteTODO();
  const { mutate: markTaskAsCompleted } = useMarkTaskAsCompleted();
  const isThereTasks = tasks?.length;

  useEffect(() => {
    console.log("meus TODOS", tasks);
  }, [tasks]);

  function mountCompletedTasksBadgeValueText() {
    if (tasks) {
      if (tasks.length > 0) {
        const completedTasks = tasks?.filter((task) => task.completedAt !== "")
          .length;
        return `${completedTasks} of ${tasks.length}`;
      }
    }
    return "0";
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.mainContainer}>
          <div className={styles.inputAndCreateButtonContainer}>
            <AddTaskInput onChangeText={setTaskText} value={taskText} />
            <div className={styles.createButtonContainer}>
              <CreateTaskButton
                onClick={() => {
                  setTaskText("");
                  mutate(taskText);
                }}
              />
            </div>
          </div>
          <div className={styles.createdTasksAndConcludedContainer}>
            <TaskStatusLabel
              labelText={"Created tasks"}
              badgeLabelValue={String(tasks?.length ?? 0)}
            />
            <TaskStatusLabel
              labelText={"Completed"}
              badgeLabelValue={mountCompletedTasksBadgeValueText()}
            />
          </div>
          <div className={styles.dividerLine} />
          {isThereTasks ? (
            <ul>
              {tasks.map((item) => (
                <li className={styles.taskBoxContainer} key={item.id}>
                  <TaskBox
                    onMarkTaskAsCompletedPress={() =>
                      markTaskAsCompleted(item.id)
                    }
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
