import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouteContent } from './routes/Route.jsx';
import { DashboardTopico } from './pages/DashboardTopico.jsx';
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteContent />}>
             <Route path='/DashboardTopico' element={<DashboardTopico/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
