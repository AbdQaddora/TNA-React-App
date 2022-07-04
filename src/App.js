
// react router dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// common components
import Nav from "./Common/Nav";
import Footer from './Common/Footer';
import Modal, { ModalContextProvider } from './Common/Modal';
// Pages
import Home from "./pages/Home";
import SeviceDetail from './pages/Home/SeviceDetail';

import About from "./pages/About";
import Gallery from "./pages/Gallery";

import Careers from "./pages/Careers";
import JobDetail from './pages/Careers/JobDetail';

import Contact from "./pages/Contact";
import GetQuote from "./pages/GetQuote";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicies from "./pages/PrivacyPolicies";
import PageNotFound from "./pages/PageNotFound";
import WhatsappBtn from './Common/WhatsappBtn';

function App() {
  return (
    <ModalContextProvider>
      <div>
        <Modal />
        <Router >
          <Nav />
          <WhatsappBtn />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sevice-detail/:seviceId" element={<SeviceDetail />} />
            <Route path="/careers/:jobId" element={<JobDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-quote" element={<GetQuote />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policies" element={<PrivacyPolicies />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ModalContextProvider>
  );
}

export default App;
