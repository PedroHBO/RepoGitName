import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"

import { Repositorio } from "./pages/Repositorio";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/repositorio" element={<Repositorio />} />

            </Routes>
        </Router>
    )
}