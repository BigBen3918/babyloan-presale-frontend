import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./pages/routes";

import Provider from "./context";
import "./assets/css/style.scss";
import "./assets/css/custom.scss";

export default function App() {
    return (
        <Provider>
            <Router>
                <Routes>
                    {routes.map((data, index) => (
                        <Route
                            onUpdate={() => window.scrollTo(0, 0)}
                            exact={true}
                            path={data.path}
                            element={data.component}
                            key={index}
                        />
                    ))}
                </Routes>
            </Router>
        </Provider>
    );
}
