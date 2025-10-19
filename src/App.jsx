import './App.css'
import TaskList from './components/TaskList'

function App() {

  return (
    <main className='main--container'>
      <aside>Aside</aside>
      <section>
        Main
        <TaskList />
        
        </section>
    </main>
  )
}

export default App
