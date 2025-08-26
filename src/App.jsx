import './App.css';
import Home from './components/pages/Home';
import RootLayout from './components/layouts/RootLayout';
import { Routes, Route} from 'react-router-dom';
import About from './components/pages/About';
import Shope from './components/pages/Shope';
import Contacts from './components/pages/Contacts';
import Journal from './components/pages/Journal';
import Error from './components/pages/Error';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="Shope" element={<Shope/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="Contacts" element={<Contacts/>}/>
      <Route path="Journal" element={<Journal/>}/>
      <Route path="*" element={<Error/>}/>
      </Route>
    </Routes>
     </>
  )
}

export default App
