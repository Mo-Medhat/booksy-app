import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { Routes, Route} from "react-router-dom";
import Details from "./Components/Details/Details";
import ViewAllBooks from './Components/ViewAllBooks/ViewAllBooks';

function App() {

  return <>

  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="booksy-app" element={<Home />} />
    <Route path="Details" element={<Details />} >
    <Route path=":id" element={<Details />} />
    </Route>
    <Route path="ViewAll" element={<ViewAllBooks/>} />
    <Route path="*" element={<>
    <div className="text-center flex justify-center items-center h-96">
      <h1 className="text-8xl">4 0 4</h1>
    </div>
    </>} />
  </Routes>
  
  </>
}

export default App;
