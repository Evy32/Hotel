import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataProvider from './components/context/dataContext';
import Home from './components/home';
import './App.css'

function App() {

  return (
    <>
    
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  )
}

export default App
