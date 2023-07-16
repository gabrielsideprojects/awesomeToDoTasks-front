import { AddTaskInput } from './components/AddTaskInput'
import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { CreateTaskButton } from './components/CreateTaskButton'


function App() {


  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <div className={styles.inputAndCreateButtonContainer}>
          <AddTaskInput/>
          <div className={styles.buttonContainer}>
            <CreateTaskButton/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
