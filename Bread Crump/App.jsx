import Breadcrumb from "./Breadcrumb";

function App() {
const paths = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "/shop" },
  { name: "Electronics", link: "/shop/electronics" },
  { name: "Laptops" }
];

  return (
    <div>
      <Breadcrumb paths={paths} />
    </div>
  );
}

export default App;
