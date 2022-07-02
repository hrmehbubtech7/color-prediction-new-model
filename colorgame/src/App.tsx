import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryCustomProvider } from "./hoc/QueryCustomContext";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <QueryCustomProvider>
          <Routes>
            <Route path='/admin' element={<AdminRoutes/>}/>
            <Route path='/' element={<UserRoutes/>}/>
          </Routes>
        </QueryCustomProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
