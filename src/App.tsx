import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Auth from './components/Auth';

function App() {
  return (
    <Auth0Provider
      domain="YOUR_AUTH0_DOMAIN"
      clientId="YOUR_AUTH0_CLIENT_ID"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <div className="min-h-screen bg-white">
        <Auth />
        <Navbar />
        <main>
          <Hero />
          <Services />
          <TechStack />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </Auth0Provider>
  );
}

export default App;