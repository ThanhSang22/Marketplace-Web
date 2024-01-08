import "./App.css";
import Content from "./components/content/content";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Slidebar from "./components/slidebar/slidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Slidebar />
      <Content />
    </div>
  );
}

export default App;
