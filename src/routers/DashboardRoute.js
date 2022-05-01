import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CrudClases } from '../components/CrudClases';
import { CrudProfes } from '../components/CrudProfes';
import Home from '../components/Home';
import NavBars from '../components/NavBars';
import { ShowCards } from '../components/ShowCards';
import { ShowCardsProfes } from '../components/ShowCardsProfes';


const DashboardRoute = () => {
    return (
       
             <>
            <NavBars/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/crudClases" element={<CrudClases/>} />
                    <Route path="/crudProfes" element={<CrudProfes/>} />
                    <Route path="/listClases" element={<ShowCards/>} />
                    <Route path="/listProfes" element={<ShowCardsProfes/>} />
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </>
    
    );
};

export default DashboardRoute;