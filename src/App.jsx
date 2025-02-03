import Header from "../src/components/Header.jsx"
import Home from "./components/Home.jsx";


function App() {
  return (
    <>
    <div className=" overflow-hidden ">
      <div className="z-50 "><Header/></div> 
      <div className="pt-32"><Home/></div>
    </div>
    </> 
  );
}

export default App;