import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Header and Footer
import Header from './component/Header';
import Footer from "./component/Footer";

// Lazy-loaded components
const Home = lazy(() => import("./component/Content"));
const ExaminationPage = lazy(() => import("./examination/ExaminationPage"));
const AdmissionPage = lazy(() => import('./admission/AdmissionPage'));
const EventPage = lazy(() => import('./event/EventPage'));
const HostelPage = lazy(() => import('./hostel/HostelPage'));
const LibraryPage = lazy(() => import('./library/LibraryPage'));
const PlacementPage = lazy(() => import('./placement/PlacementPage'));
const ResearchPage = lazy(() => import('./research/ResearchPage'));
const TransportPage = lazy(() => import('./transport/TransportPage'));

// Finance Pages
const FinanceRoutes = lazy(() => import("./finance/FinanceRoutes")); 
const FinanceHome = lazy(() => import('./finance/FinanceHome'));
const Finance = lazy(() => import('./finance/financeComponents/Finance'));
const PaymentHistory = lazy(() => import('./finance/financePages/PaymentHistory'));
const Admin = lazy(() => import ('./finance/financeComponents/Admin'));
const ContactSupport = lazy(() => import('./finance/financePages/contactSupport'));
const Scholarship = lazy(() => import('./finance/financeComponents/Scholarship'));

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* Examination */}
          <Route path="/examinationPage" element={<ExaminationPage />} />

          {/* Admission */}
          <Route path="/admissionPage" element={<AdmissionPage />} />

          {/* Events */}
          <Route path="/eventPage" element={<EventPage />} />

          {/* Hostel */}
          <Route path="/hostelPage" element={<HostelPage />} />

          {/* Library */}
          <Route path="/libraryPage" element={<LibraryPage />} />

          {/* Placement */}
          <Route path="/placementPage" element={<PlacementPage />} />

          {/* Research */}
          <Route path="/researchPage" element={<ResearchPage />} />

          {/* Transport */}
          <Route path="/transportPage" element={<TransportPage />} />

          {/* Finance Routes */}
          {/* <Route path="/finance/*" element={<FinanceRoutes />} /> */}
          <Route path="/finance" element={<Finance />} />
          <Route path="/finance/history" element={<PaymentHistory />} />
          <Route path="/finance/support" element={<ContactSupport />} />

          <Route path= "/financeHome" element = {<FinanceHome />} />
          <Route path = "/admin" element = {<Admin />} />
          

        </Routes>
      </Suspense>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
