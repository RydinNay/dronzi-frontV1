import Admin from "../pages/Admin";
import Contacts from "../pages/Contacts";
import Drons from "../pages/Drons/Drons";
import Info from "../pages/Info";
import Main from "../pages/Main";
import Registration from "../pages/Registration";
import Tasks from "../pages/Tasks";
import DronsOnTasks from "../pages/DronsOnTasks/DronsOnTasks";


import { ADMIN_ROUTE, CONTACTS_ROUTE, DRONS_ROUTE, INFO_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, TASKS_ROUTE, DRONS_ON_TASKS_ROUTE } from "../utils/consts";

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: <Main/>
    },
    {
        path: CONTACTS_ROUTE,
        Component: <Contacts/>
    },
    {
        path: INFO_ROUTE,
        Component: <Info/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Registration/>
    }
]

export const clientRoutes = [
    {
        path: TASKS_ROUTE,
        Component: <Tasks/>
    },
    {
        path: DRONS_ON_TASKS_ROUTE,
        Component: <DronsOnTasks/>
    }
]

export const userRoutes = [
    {
        path: DRONS_ROUTE,
        Component: <Drons/>
    },
    {
        path: DRONS_ON_TASKS_ROUTE,
        Component: <DronsOnTasks/>
    }
]

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
        
    }
]