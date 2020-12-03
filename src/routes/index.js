import Home from "../containers/Home";
import Tasks from '../containers/Tasks';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    title: "Home",
  },
  {
    path: '/tasks',
    component: Tasks,
    exact: true,
    title: "Tasks",
  },
];

export default routes;