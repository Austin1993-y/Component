import Carousel from "./Carousel";

function App() {
  const images = [
    "https://picsum.photos/id/1018/400/250",
    "https://picsum.photos/id/1015/400/250",
    "https://picsum.photos/id/1016/400/250"
  ];

  return (
    <div>
      <h1>React Carousel</h1>
      <Carousel images={images} />
    </div>
  );
}

export default App;
