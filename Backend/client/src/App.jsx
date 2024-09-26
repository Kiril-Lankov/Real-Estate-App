import HomePage from './routes/homePage/HomePage';
import {createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Layout from './routes/layout/Layout';
import ListPage from './routes/listPage/ListPage';
import SinglePage from './routes/singlePage/SinglePage';
import ProfilePage from './routes/profilePage/ProfilePage';
import Register from './routes/register/Register';
import Login from './routes/login/Login';


function App() {

  const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/list",
          element: <ListPage/>
        },
        {
          path: "/:id",
          element: <SinglePage/>
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/profile",
          element: <ProfilePage/>
        },
        
      ]
    
  }
  ]);

  return (
    
   <RouterProvider router={router}/>
  );
}

export default App
