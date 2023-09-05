import { Routes, Route } from "react-router-dom";
import "./App.css"
import Header from './pages/homepage/header'
import Login from "./pages/loginpage/login";
import Ads from "./pages/adspage/ads"
import Maker from "./pages/makepage/make";
import Detail from "./pages/detailpage/detail";
import Herder from "./components/header/header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProtectorRoute from "./components/route/ProtectorRoute";
import PublicRoute from "./components/route/PublicRoute";
import { fetchHouses } from "./pages/redux/AsuncThunk";


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHouses())
  }, [])

  return (
    <div className="App">
      <Herder/>
      <Routes>
        <Route path ="/" element={<Header />}/>
        <Route path ="/login" element={
          <PublicRoute>
            <Login/>
          </PublicRoute>
        }/>
        <Route path ="/home" element={<Header />}/>
        <Route path ="/ads" element={
        <ProtectorRoute>
          <Ads/>
        </ProtectorRoute>}/>
        <Route path ="/maker" element={
          <ProtectorRoute>
            <Maker/>
          </ProtectorRoute>
        }/>
        <Route path ="/detail/:id" element={<Detail/>}/>
        <Route path="*" element={<h1>404</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
