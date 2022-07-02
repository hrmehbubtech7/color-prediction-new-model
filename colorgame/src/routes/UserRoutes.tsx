import { Routes , Route } from "react-router-dom" ;
import { UserHomePage } from "../pages/user";

const UserRoutes = () => {
    return (
        <Routes>
     <Route path='*' element={< UserHomePage/>} />
        </Routes>
    );
}

export default UserRoutes;