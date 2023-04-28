import MainLayout from "../components/layouts/Main";

import React, { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { withLoading } from "../hocs/withLoading.hoc";

const BASE_PATH = "/";

const HomePage = lazy(() => import("../views/Home"));
const BusseErhaltenPage = lazy(() => import("../views/BusseErhalten"));
const UnsereLosungPage = lazy(() => import("../views/UnsereLosung"));
const KontaktPage = lazy(() => import("../views/Kontakt"));
const ImpressumPage = lazy(() => import("../views/Impressum"));
const AgbPage = lazy(() => import("../views/Agb"));
const DatenschutzPage = lazy(() => import("../views/Datenschutz"));
const DetailPage = lazy(() => import("../views/Detail"));

const Home = withLoading(HomePage);
const BusseErhalten = withLoading(BusseErhaltenPage);
const UnsereLosung = withLoading(UnsereLosungPage);
const Kontakt = withLoading(KontaktPage);
const Impressum = withLoading(ImpressumPage);
const Agb = withLoading(AgbPage);
const Datenschutz = withLoading(DatenschutzPage);
const Detail = withLoading(DetailPage);

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={BASE_PATH} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/busse-erhalten" element={<BusseErhalten />} />
          <Route path="/unsere-losung" element={<UnsereLosung />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/agb" element={<Agb />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
