import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import ROUTES from "./routes";
import styles from './appLayout.module.css';
import commonStyles from '../common.module.css';

export default function AppLayout() {
    return (
        <div>
            <nav>
                <ul>
                <li>
                    <NavLink to={ROUTES.sheetRoute()} className={styles.navlinks} >
                    Connect Sheet
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.trackerRoute()} className={styles.navlinks} >
                    Tracker
                    </NavLink>
                </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
      

    );
}
