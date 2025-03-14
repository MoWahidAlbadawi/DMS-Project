import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import AddAppointment from "./pages/AddAppointment";
import PatientsList from "./pages/PatientsList";
import HomePage from "./pages/HomePage";
import Err404 from "./pages/Error404";

  const router = createBrowserRouter([
    // layout
    {path : '/' , element : <LayoutPage /> , children : [
      //Home page
      {path : '' , element : <HomePage />},
      //add appointment page
    {path : '/addAppointment', element : <AddAppointment />},
    //patients list 
    {path : '/patients', element : <PatientsList />},
    ]},
    //page 404
    {path : '*' , element : <Err404 />},
  ]);

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;
