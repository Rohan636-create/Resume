import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import backgroundImage from '../assets/motherboard-circuit-background.jpg';

const Layout = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/80 -z-10"></div>
      
      <Navbar />
      <main className="pt-16 min-h-[calc(100vh-64px)] relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 