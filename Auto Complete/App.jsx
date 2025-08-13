import './App.css'
import './AutoCompleteNew'
import AutoComplete from './AutoComplete';

function App() {
  const   fruits = [
    "Apple", "Banana", "Orange", "Grape", "Strawberry",
    "Blueberry", "Raspberry", "Mango", "Pineapple", "Kiwi",
    "Peach", "Pear", "Plum", "Cherry", "Apricot",
    "Watermelon", "Cantaloupe", "Honeydew", "Lemon", "Lime",
    "Grapefruit", "Pomegranate", "Fig", "Avocado", "Coconut",
    "Date", "Guava", "Lychee", "Passion Fruit", "Dragon Fruit"
]

  return (
   <div>
      <AutoComplete suggestions={fruits} />
   </div>
  )
}

export default App
