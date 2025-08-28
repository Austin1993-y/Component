import Dropdown from "./Drapdown"

function App() {
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (value) => {
    console.log("Selected:", value);
  };

  return (
    <div>
      <h2>React Dropdown Example</h2>
      <Dropdown options={options} onSelect={handleSelect} />
    </div>
  );
}

export default App;
