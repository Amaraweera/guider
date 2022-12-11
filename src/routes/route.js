import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import ComingSoon from "../pages/ComingSoon/index";
import TeacherMenu from "../pages/Teacher/pages/Menu/TeacherMenu";
import PageNotFound from "../pages/pageNotFound";

const RouteConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <React.Fragment>
                    <Route path="/" exact element={<TeacherMenu/>} />
                    <Route path="/login" exact element={<ComingSoon/>} />
                    <Route path="*" element={<PageNotFound/>} />
                </React.Fragment>
            </Routes>
        </BrowserRouter>
    );
}

export default RouteConfig;