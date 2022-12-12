import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Teacher
import InstituteList from '../pages/Teacher/pages/InstituteSelection';
import GradeList from '../pages/Teacher/pages/GradeSelection';
import FunctionList from '../pages/Teacher/pages/FunctionSelection';
// Common
import ComingSoon from '../pages/ComingSoon/index';
import PageNotFound from '../pages/pageNotFound';

const RouteConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <React.Fragment>
                    {/* Teacher's routes */}
                    <Route path="/" exact element={<InstituteList/>} />
                    <Route path="/teacher/grade" exact element={<GradeList/>} />
                    <Route path="/teacher/functions" exact element={<FunctionList/>} />
                    {/* Common routes */}
                    <Route path="/login" exact element={<ComingSoon/>} />
                    <Route path="*" element={<PageNotFound/>} />
                </React.Fragment>
            </Routes>
        </BrowserRouter>
    );
}

export default RouteConfig;