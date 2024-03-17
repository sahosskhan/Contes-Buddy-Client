import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from './../Layout/DashboardLayout';
import Profile from "../Pages/Dashboard/Common/Profile";
import EditProfile from "../Pages/Dashboard/Common/EditProfile";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser";
import AdminRoute from './AdminRoute';
import AddContest from "../Pages/Dashboard/Creator/AddContest";
import MyContest from "../Pages/Dashboard/Creator/MyContest";
import CreatorRoute from './CreatorRoute';
import EditContest from "../Pages/Dashboard/Creator/EditContest";
import ManageContest from "../Pages/Dashboard/Admin/ManageContest";
import ContestSPA from "../Pages/Home/ContestSPA";
import RegistrationSPA from "../Pages/Home/Contest Regsitration/RegistrationSPA";
import Checkout from './../Pages/Home/Contest Regsitration/Checkout';
import MyRegistered from "../Pages/Dashboard/Creator/Registered/MyRegistered";
import Participated from "../Pages/Dashboard/User/Participated";
import Achievement from "../Pages/Dashboard/User/Achievement";
import Community from "../Pages/Community/Community";
import TotalContest from "../Pages/All Contest/TotalContest";
import AboutPage from "../Pages/Footer Page/AboutPage";
import Blog from "../Pages/More Page/Blog";
import Gallery from "../Pages/More Page/Gallery";
import Book from "../Pages/More Page/Book";
import Refund from "../Pages/More Page/refund";
import Privacy from "../Pages/More Page/Privacy";
import Guide from "../Pages/More Page/Guide";
import Leaderboard from "../Pages/Leaderboard/Leaderboard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <Error/>,
      children:[
        {
            path: "/",
            element: <Home/>,
        },
        {
          path: "/all-contest",
          element: <TotalContest/>,
      },
        {
          path: "/community",
          element: <Community/>,
      },
      {
        path: "/about",
        element: <AboutPage/>,
    },
    {
      path: "/blog",
      element: <Blog/>,
  },
  {
    path: "/gallery",
    element: <Gallery/>,
},
{
  path: "/book-for-contact",
  element: <Book/>,
},
{
  path: "/refund-policy",
  element: <Refund/>,
},
{
  path: "/privacy-policy",
  element: <Privacy/>,
},
{
  path: "/community-guideline",
  element: <Guide/>,
},
{
  path: "/leaderboard",
  element: <Leaderboard/>,
},
        {
          path: "/single-contest/:id",
          element: <ContestSPA/>,
          loader: ({params}) =>
          fetch(
            `https://contes-buddy-server.vercel.app/addedContestUser/${params?.id}`
          ),
        },
        {
          path: "/single-contest-registration/:id",
          element: <PrivateRoute><RegistrationSPA/></PrivateRoute> ,
          loader: ({params}) =>
          fetch(
            `https://contes-buddy-server.vercel.app/addedContestUser/${params?.id}`
          ),
      },
      {
        path: "/paymentGateway/:id",
        element: <PrivateRoute> <Checkout/> </PrivateRoute>,
        loader: ({ params }) =>
        fetch(`https://contes-buddy-server.vercel.app/submited-contest/${params.id}`),
    },

      ]
    },  
    {
        path: "/login",
              element: <Login/>,
      },
      {
        path: "/register",
              element: <Register/>,
      },
{
  path: '/dashboard',
    errorElement: <Error />,
    element: (
      <PrivateRoute>
        <DashboardLayout/>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: 'edit-profile',
        element: (
          <PrivateRoute>
           <EditProfile/>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-participated',
        element: (
          <PrivateRoute>
           <Participated/>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-achievement',
        element: (
          <PrivateRoute>
           <Achievement/>
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-user',
        element: (
          <PrivateRoute>
            <AdminRoute>
         <ManageUser/>
         </AdminRoute>
          </PrivateRoute>
        ),

      },
      {
        path: 'add-contest',
        element: (
          <PrivateRoute>
              <CreatorRoute>
         <AddContest/>
         </CreatorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-listing',
        element: (
          <PrivateRoute>
            <CreatorRoute>
         <MyContest/>
         </CreatorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'submissions-registered',
        element: (
          <PrivateRoute>
            <CreatorRoute>
         <MyRegistered/>
         </CreatorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-listing-edit/:id',
        element: (
          <PrivateRoute>
            <CreatorRoute>
        <EditContest/>
         </CreatorRoute>
          </PrivateRoute>
        ),
        loader: ({params}) =>
        fetch(
          `https://contes-buddy-server.vercel.app/contest-update/${params?.id}`
        ),
      },
      {
        path: 'manage-contest',
        element: (
          <PrivateRoute>
            <AdminRoute>
         <ManageContest/>
         </AdminRoute>
          </PrivateRoute>
        ),
      },
    ]
}



])  