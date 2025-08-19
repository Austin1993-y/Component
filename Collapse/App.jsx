import Collapse from "./Collapse";

function App() {
  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <Collapse title="Section 1">
        <p>This is the content of section 1.</p>
      </Collapse>
      
      <Collapse title="Section 2">
        <p>More details inside section 2.</p>
      </Collapse>
    </div>
  );
}

export default App;
