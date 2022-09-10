import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import GeneratePassword from "./Components/Password/index";

function AppRoutes(){
    return(
        <div>
            <BrowserRouter>
                <Routes>           
                    <Route path='/' exact element={<GeneratePassword/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default AppRoutes;