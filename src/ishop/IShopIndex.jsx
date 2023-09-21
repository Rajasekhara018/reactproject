import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import React from "react";
import IShopHome from "./IShopHome";
import IShopRegister from "./IShopRegister";
import IShopLogin from "./IShopLogin";
import IShopDashboard from "./IShopDashboard";

const IShopIndex = () => {
  return (
    <div className="container-fluid">
      <header className="bg-danger text-white text-center p-2 mt-2">
        <h1>Ishop-Online Store</h1>
      </header>
      <section className="mt-2 row">
        <BrowserRouter>
          <nav className="col-3">
            <div className="mb-3 mt-2">
              <Link to="home" className="btn btn-danger w-100">
                Home
              </Link>
            </div>
            <div className="mb-3">
              <Link to="register" className="btn btn-danger w-100">
                Register
              </Link>
            </div>
            <div className="mb-3">
              <Link to="login" className="btn btn-danger w-100">
                Login
              </Link>
            </div>
            <div className="mb-3">
              <Link to="dashboard" className="btn btn-danger w-100">
                Dashboard
              </Link>
            </div>
          </nav>
          <main className="col-9">
            <Routes>
              <Route path="/" element={<IShopHome />} />
              <Route path="home" element={<IShopHome />} />
              <Route path="register" element={<IShopRegister />} />
              <Route path="login" element={<IShopLogin />} />
              <Route path="dashboard" element={<IShopDashboard />} />
              <Route
                path="errorpage"
                element={
                  <div>
                    <h2 className="text-danger">Invalid Credentials</h2>
                    <Link to="/login">Try Again</Link>
                  </div>
                }
              />
            </Routes>
          </main>
        </BrowserRouter>
      </section>
    </div>
  );
};

export default IShopIndex;
