import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./Users";
import FetchTask from "./FetchTask";


const AppRoutes = () => {


  return (
    <Routes>
      <Route path="/" element={<Users />}></Route>
      <Route path="/task" element={<FetchTask />}></Route>
 
   
    </Routes>
  );
};

export default AppRoutes;
