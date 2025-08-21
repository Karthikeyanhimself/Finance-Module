import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Finance from "./financePages/Finance";
import TuitionFee from "./financePages/TuitionFee";
import HostelFee from "./financePages/HostelFee";
import BusFee from "./financePages/HostelFee";
import SupplyFee from "./financePages/SupplyFee";
import PaymentHistory from "./financePages/PaymentHistory"
import ContactSupport  from "./financePages/contactSupport";

const FinanceRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/finance" element={<Finance />} />
        <Route path="/finance/tuitionFee" element={<TuitionFee />} />
        <Route path="/finance/hostelFee" element={<HostelFee />} />
        <Route path="/finance/busFee" element={<BusFee />} />
        <Route path="/finance/supplyFee" element={<SupplyFee />} />
        <Route path="/finance/history" element={<PaymentHistory />} />
          <Route path="/finance/support" element={<ContactSupport />} />

      </Routes>
    </Router>
  );
};

export default FinanceRoutes;
