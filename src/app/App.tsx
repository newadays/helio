import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { HomePage } from '@/app/pages/HomePage';
import { AboutPage } from '@/app/pages/AboutPage';
import { DivisionsPage } from '@/app/pages/DivisionsPage';
import { ProjectsPage } from '@/app/pages/ProjectsPage';
import { CompliancePage } from '@/app/pages/CompliancePage';
import { CareersPage } from '@/app/pages/CareersPage';
import { ContactPage } from '@/app/pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/divisions/:division" element={<DivisionsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
