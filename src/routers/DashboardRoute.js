import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CrudClases } from '../components/CrudClases';
import { CrudProfes } from '../components/CrudProfes';
import Home from '../components/Home';
import NavBars from '../components/NavBars';


const DashboardRoute = () => {
    return (
       
             <>
            <NavBars/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/crudClases" element={<CrudClases/>} />
                    <Route path="/crudProfes" element={<CrudProfes/>} />
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </>
    
    );
};

export default DashboardRoute;