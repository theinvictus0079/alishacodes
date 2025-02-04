import { Routes, Route } from 'react-router-dom'
import Header from "../src/components/Header.jsx"
import Home from "./components/Home.jsx";
import About from './components/About.jsx';


function App() {
  return (
    <>
    
      <div className="overflow-hidden bg-[#c4c0c0]">
        <div className="z-50">
          <Header />
        </div>
        <div className="pt-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    
    </> 
  );
}

export default App;