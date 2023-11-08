import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/Error404Page';
import Error401Page from './pages/Error401page';
import Error500Page from './pages/Error500Page';
import LandingPage from './pages/LandingPage';
import PrivateRoute from './pages/PrivateRoute';
import { CRMProvider } from '../src/components/DashBoardPages/CRMContext';

function App() {
  return (
    <div className="App">
      <Router>
      <CRMProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/resetpassword" element={<ResetPasswordPage />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
          <Route path="/error404" element={<ErrorPage />} />
          <Route path="/error401" element={<Error401Page />} />
          <Route path="/error500" element={<Error500Page />} />
          <Route
            path="/dashboard/*"
            element={<PrivateRoute element={<Dashboard />} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        </CRMProvider>
      </Router>
    </div>
  );
}

export default App;
