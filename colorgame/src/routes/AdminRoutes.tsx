import { Routes , Route } from "react-router-dom" ;
import { AdminHomePage } from "../pages/admin";

const AdminRoutes = () => {
    return (
        <Routes>
     <Route path='*' element={< AdminHomePage/>} />
        </Routes>
    );
}

export default AdminRoutes;