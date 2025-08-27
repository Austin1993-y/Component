import Drawer from "./Drawer";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Drawer>
        <ul style={{listStyleType: "none"}}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </Drawer>
    </div>
  );
}

export default App;
