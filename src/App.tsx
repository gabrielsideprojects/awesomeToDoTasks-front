import { AddTaskInput } from './components/AddTaskInput'
import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { CreateTaskButton } from './components/CreateTaskButton'
import { TaskStatusLabel } from './components/TaskStatusLabel'
import { TaskBox } from './components/TaskBox'
import { EmptyListLabel } from './components/EmptyListLabel'


function App() {
  const thereIsTasks = false

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
          {
            thereIsTasks ?   <div className={styles.taskBoxContainer}>
            <TaskBox text='Integer urna interdum massa libero auctor neque turpis turpis semper. 
              Duis vel sed ames integer' isCompleted={false}/>
        </div> : <div className={styles.emptyListLabelContainer}> <EmptyListLabel/> </div>
          }
   
      </div>
  
      </div>

    </div>
  )
}

export default App
