import DataTable from "./DataTable";
import "./index.css";

function App() {
  const data = [
    { id: 1, name: "John Doe", age: 28, email: "john@example.com" },
    { id: 2, name: "Jane Smith", age: 34, email: "jane@example.com" },
    { id: 3, name: "Mike Johnson", age: 41, email: "mike@example.com" },
  ];

  return (
    <div className="app-container">
      <h1>Basic DataTable</h1>
      <DataTable data={data} />
    </div>
  );
}

export default App;
