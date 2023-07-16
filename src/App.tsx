import { AddTaskInput } from './components/AddTaskInput'
import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { CreateTaskButton } from './components/CreateTaskButton'
import { TaskStatusLabel } from './components/TaskStatusLabel'


function App() {


  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
     <div className={styles.mainContainer}>
        <div className={styles.inputAndCreateButtonContainer}>
            <AddTaskInput/>
            <CreateTaskButton/>
        </div>
        <div className={styles.createdTasksAndConcludedContainer}>
            <TaskStatusLabel labelText={'Created tasks'} badgeLabelValue={0}/>
            <TaskStatusLabel labelText={'Completed'} badgeLabelValue={0}/>
        </div>
          <div className={styles.dividerLine}/>
      </div>
      </div>

    </div>
  )
}

export default App
