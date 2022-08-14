import Admin from "../pages/Admin/Admin";
import Contacts from "../pages/Contacts";
import Drons from "../pages/Drons/Drons";
import Info from "../pages/Info";
import Main from "../pages/Main";
import Registration from "../pages/Registration";
import Tasks from "../pages/Tasks/Tasks";
import DronsOnTasks_for_User from "../pages/DronsOnTasks_for_User/DronsOnTasks_for_User";
import DronsOnTasks_for_Client from "../pages/DronsOnTasks_for_Client/DronsOnTasks_for_Client";
import Statistic from "../pages/Statistic/Statistic";
import { ADMIN_ROUTE, CONTACTS_ROUTE, DRONS_ROUTE, INFO_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, TASKS_ROUTE, DRONS_ON_TASKS_ROUTE_User, DRONS_ON_TASKS_ROUTE_Client, STATISTIC_ROUTE } from "../utils/consts";

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
        path: DRONS_ON_TASKS_ROUTE_Client,
        Component: <DronsOnTasks_for_Client/>
    }
]

export const userRoutes = [
    {
        path: DRONS_ROUTE,
        Component: <Drons/>
    },
    {
        path: DRONS_ON_TASKS_ROUTE_User,
        Component: <DronsOnTasks_for_User/>
    },
    {
        path: STATISTIC_ROUTE,
        Component: <Statistic/>
    }
]

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
        
    }
]