
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';
import ErrorPage from './pages/Error404Page.js';
import Error401Page from './pages/Error401page';
import Error500Page from './pages/Error500Page';
import CRM from './components/DashBoardPages/CRM.jsx';
import LandingPage from './pages/LandingPage.js';

const routes=[
  
  {
    path:"/login",
    component: LoginPage,
  },
  {
    path:"/dashboard",
    component:Dashboard,
   
  },
  
  {
    path:"/signup",
    component:SignUpPage
  },
  {
    path:"/resetpassword",
    component:ResetPasswordPage
  },
  {
    path:"/forgotpassword",
    component:ForgotPasswordPage
  },
  {
    path:"/error404",
    component:ErrorPage
  },
  {
    path:"/error401",
    component:Error401Page
  },
  {
    path:"/error500",
    component:Error500Page
  },
  {
    path: "/dashboard/crm/:selectedCardHeader",
    component: CRM
  }
]


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
    <Switch >
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
    </Switch >
  </BrowserRouter>
     
    </div>
  );
}

export default App;
