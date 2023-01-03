import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Teacher
import InstituteList from '../pages/Teacher/pages/InstituteSelection';
import GradeList from '../pages/Teacher/pages/GradeSelection';
import FunctionList from '../pages/Teacher/pages/FunctionSelection';
import StudentList from '../pages/Teacher/pages/Students/StudentList';
// Common
import Login from '../pages/Auth/Login';
import ComingSoon from '../pages/ComingSoon/index';
import PageNotFound from '../pages/pageNotFound';

const RouteConfig = () => {
    return (
        <Routes>
            <React.Fragment>
                {/* Teacher's routes */}
                <Route path="/" exact element={<InstituteList/>} />
                <Route path="/teacher/grade" exact element={<GradeList/>} />
                <Route path="/teacher/functions" exact element={<FunctionList/>} />
                <Route path="/teacher/students" exact element={<StudentList/>} />
                {/* Common routes */}
                <Route path="/login" exact element={<Login/>} />
                <Route path="*" element={<PageNotFound/>} />
            </React.Fragment>
        </Routes>
    );
}

export default RouteConfig;