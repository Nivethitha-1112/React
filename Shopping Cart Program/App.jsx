import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { Cart } from './Components/Cart'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/Cart" element={<Cart/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
