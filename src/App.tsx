import { AddTaskInput } from "./components/AddTaskInput";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { CreateTaskButton } from "./components/CreateTaskButton";
import { TaskStatusLabel } from "./components/TaskStatusLabel";
import { TaskBox } from "./components/TaskBox";
import { ListInfoLabel } from "./components/ListInfoLabel";
import { useGetTODO } from "./service/hooks/useGetTODO";
import { useState } from "react";
import { useCreateTODO } from "./service/hooks/useCreateTODO";
import { useDeleteTODO } from "./service/hooks/useDeleteTODO";
import { useMarkTaskAsCompleted } from "./service/hooks/useMarkTaskAsCompleted";
import { Clipboard, WarningOctagon } from "phosphor-react";
import { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

function App() {
  const [taskText, setTaskText] = useState("");
  const {
    data: tasks,
    isLoading: isLoadingGetTodoTasks,
    isError: isErrorGetTodoTasks,
    refetch: refetchTODOTasks,
  } = useGetTODO();
  const { mutate, isLoading: isLoadingCreateTODO } = useCreateTODO();
  const {
    mutate: markTaskAsCompleted,
    isLoading: isLoadingMarkTaskAsCompleted,
  } = useMarkTaskAsCompleted();
  const { mutate: deleteTaskMutate, isLoading: isLoadingDeleteTODO } =
    useDeleteTODO();

  const isThereTasks = tasks?.length;

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

  function renderTaskLists() {
    if (isLoadingGetTodoTasks) {
      return <p>is loading</p>;
    }
    if (isErrorGetTodoTasks) {
      return (
        <div className={styles.listLabelContainer}>
          <ListInfoLabel
            title={"Error to obtain TODO tasks"}
            subtitle={"Touch here to try again"}
            refetch={refetchTODOTasks}
            icon={<WarningOctagon size={50} />}
          />
        </div>
      );
    }

    if (isThereTasks) {
      return (
        <ul>
          {tasks.map((item) => (
            <li className={styles.taskBoxContainer} key={item.id}>
              <TaskBox
                onMarkTaskAsCompletedPress={() => markTaskAsCompleted(item.id)}
                onTrashIconPress={() => deleteTaskMutate(item.id)}
                text={item.title}
                isCompleted={!!item.completedAt}
              />
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div className={styles.listLabelContainer}>
        <ListInfoLabel
          title={"You don't have tasks yet"}
          subtitle={"Create tasks and organize your TODO itens"}
          icon={<Clipboard size={50} />}
        />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.mainContainer}>
          <div className={styles.inputAndCreateButtonContainer}>
            <AddTaskInput onChangeText={setTaskText} value={taskText} />
            <Toaster />
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
            <ClipLoader
              color={"#00875f"}
              loading={
                isLoadingCreateTODO ||
                isLoadingDeleteTODO ||
                isLoadingMarkTaskAsCompleted
              }
              size={15}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <TaskStatusLabel
              labelText={"Completed"}
              badgeLabelValue={mountCompletedTasksBadgeValueText()}
            />
          </div>
          <div className={styles.dividerLine} />
          {renderTaskLists()}
        </div>
      </div>
    </div>
  );
}

export default App;
