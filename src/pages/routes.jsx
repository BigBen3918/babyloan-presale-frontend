import Main from "./Main";
import NotFound from "./NotFound";

const routes = [
    { path: "/", component: <Main /> },
    { path: "*", component: <NotFound /> },
];

export default routes;
