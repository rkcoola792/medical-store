import { Outlet } from 'react-router-dom';
import Header from './header.jsx';
import Footer from './footer.jsx';
export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}