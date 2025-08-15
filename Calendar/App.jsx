import './App.css'
import Calendar from './Calendar'

function App() {

  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  
  return (
    <>
       <Calendar months={months} _MS_PER_DAY={_MS_PER_DAY} />
    </>
  )
}

export default App
