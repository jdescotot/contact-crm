import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboards/Dashboard';
import ClientForm from './Components/Dashboards/ClientForm';
import ClientList from './Components/Dashboards/ClientList';
import ClientDetail from './Components/Dashboards/ClientDetail';
import FatList from './Components/Dashboards/FatList';
import FAT001 from './Components/Dashboards/FAT/Fat001/Fat001';
import FAT003 from './Components/Dashboards/FAT/Fat003/Fat003';
import FAT004 from './Components/Dashboards/FAT/Fat004/Fat004';
import FAT005 from './Components/Dashboards/FAT/Fat005/FAT005';
import FAT006 from './Components/Dashboards/FAT/Fat006/FAT006';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-client" element={<ClientForm />} />
          <Route path="/clients" element={<ClientList />} />
          <Route path="/clients/:id" element={<ClientDetail />} />
          <Route path="/clients/:clientId/fats" element={<FatList />} />
          <Route path="/clients/:clientId/fats/fat001" element={<FAT001 />} />
          <Route path="/clients/:clientId/fats/fat003" element={<FAT003 />} />
          <Route path="/clients/:clientId/fats/fat004" element={<FAT004 />} />
          <Route path="/clients/:clientId/fats/fat005" element={<FAT005 />} />
          <Route path="/clients/:clientId/fats/fat006" element={<FAT006 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
