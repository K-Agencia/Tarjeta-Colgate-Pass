import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tablets from './pages/Tablets';
import Occ from './pages/Occ';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Tablets />} />
        <Route exact path={'/virtual'} element={<Occ />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
