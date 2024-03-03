import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import ROUTES from "./routes";

export default function AppLayout() {
    return (
        <div>
            <nav>
                <ul>
                <li>
                    <NavLink to={ROUTES.sheetRoute()} >
                    Connect Sheet
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.trackerRoute()} >
                    Tracker
                    </NavLink>
                </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
      

    );
}
