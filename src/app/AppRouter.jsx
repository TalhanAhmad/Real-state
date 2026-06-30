import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { ContactPage } from "../pages/ContactPage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PropertiesPage } from "../pages/PropertiesPage";
import { PropertyPage } from "../pages/PropertyPage";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="properties" element={<PropertiesPage />} />
        <Route path="properties/:propertyId" element={<PropertyPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
