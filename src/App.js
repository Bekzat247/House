import { Routes, Route } from "react-router-dom";
import "./App.css"
import Header from './pages/homepage/header'
import Login from "./pages/loginpage/login";
import Ads from "./pages/adspage/ads"
import Maker from "./pages/makepage/make";
import Detail from "./pages/detailpage/detail";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Header/>}/>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/home" element={<Header />}/>
        <Route path ="/ads" element={<Ads />}/>
        <Route path ="/maker" element={<Maker/>}/>
        <Route path ="/detail/*" element={<Detail id='*'/>}/>
        <Route path="*" element={<h1>404</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
