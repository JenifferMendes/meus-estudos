import './styles/global.css'

import { Habit } from "./components/Habit"

function App() {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={0} />
      <Habit completed={20}/>
      <Habit completed={2}/>
      <Habit completed={1}/>
      <Habit completed={9}/>
      <Habit completed={9}/>
    </div>
  )
}

export default App
