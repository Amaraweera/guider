import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ComingSoon from "../pages/comingSoon";
import PageNotFound from "../pages/pageNotFound";

const RouteConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <React.Fragment>
                    <Route path="/" exact element={<ComingSoon/>} />

                    <Route path="*" element={<PageNotFound/>} />
                </React.Fragment>
            </Routes>
        </BrowserRouter>
    );
}

export default RouteConfig;