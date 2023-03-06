import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Header from "./components/Header.js";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./context/AuthContext.js";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes />} exact>
            <Route path="/" element={<Home />} exact />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
