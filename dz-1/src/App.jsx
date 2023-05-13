import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route index element={<MainPage/>}/>
              <Route path='/about/:id' element={<AboutPage/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
