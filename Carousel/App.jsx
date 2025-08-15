import CarosuelNew from "./CarosuelNew";

function App() {
  return (
    <CarosuelNew  width={300} auto={true} delay={2000}>
      <div style={{ backgroundColor: "red", height: "200px" }}>Slide 1</div>
      <div style={{ backgroundColor: "blue", height: "200px" }}>Slide 2</div>
      <div style={{ backgroundColor: "green", height: "200px" }}>Slide 3</div>
    </CarosuelNew>
  );
}

export default App;
