import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ListTripPage from "../pages/ListTripsPage/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/trips/list" element={<ListTripPage />} />
        <Route exact path="/trips/application" element={<ApplicationFormPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/admin/trips/list" element={<AdminHomePage />} />
        <Route exact path="/admin/trips/:id" element={<TripDetailsPage />} />
        <Route exact path="/admin/trips/create" element={<CreateTripPage />} />
        <Route exact path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}
