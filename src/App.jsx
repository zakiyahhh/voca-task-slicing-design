import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./components/pages/Login";
import UpdateProfile from "./components/pages/UpdateProfile";
import Task from "./components/pages/Task";

const App = () => (
  <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/edit-profile" element={<UpdateProfile />} />
        <Route path="/todo-task" element={<Task />} />
      </Routes>
    </Router>
  </ChakraProvider>
);

export default App;
