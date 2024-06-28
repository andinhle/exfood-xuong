import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./page/admin/adminLayout.tsx";
import AddCategorys from "./page/admin/categorys/addCategorys.tsx";
import ListCategorys from "./page/admin/categorys/listCategorys.tsx";
import UpdateCategory from "./page/admin/categorys/updateCategory.tsx";
import Register from "./page/register";
import Login from "./page/login.tsx";
import MainClient from "./components/Client/MainClient.tsx";
import AddFood from "./page/admin/foods/addFood.tsx";
import FoodProvider from "./context/FoodProvider.tsx";
import ListFood from "./page/admin/foods/listFood.tsx";
import UpdateFood from "./page/admin/foods/updateFood.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <FoodProvider>
        <Routes>
          <Route path="" element={<App />}>
            <Route index element={<MainClient />} />
            <Route path="admin" element={<AdminLayout />}>
              {/*Danh mục menu*/}
              <Route path="categorys" element={<ListCategorys />} />
              <Route path="categorys/add" element={<AddCategorys />} />
              <Route path="categorys/:id/edit" element={<UpdateCategory />} />
              {/*Foods*/}
              <Route path="foods" index element={<ListFood />} />
              <Route path="foods/add" element={<AddFood />} />
              <Route path="foods/:id/edit" element={<UpdateFood />} />
              {/*Orders*/}
              <Route path="orders" element={<UpdateCategory />} />
            </Route>
            {/*Users*/}
            <Route path="auth">
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Route>
        </Routes>
      </FoodProvider>
    </React.StrictMode>
  </BrowserRouter>
);
