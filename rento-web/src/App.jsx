import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Listings from './components/Listings';
import Comparison from './components/Comparison';
import Footer from './components/Footer';

import Auth from './pages/Auth';
import CreateListing from './pages/CreateListing';
import Contract from './pages/Contract';

const Home = () => (
    <>
        <Navbar />
        <Hero />
        <Features />
        <Listings />
        <Comparison />
        <Footer />
    </>
);

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/create-listing" element={<CreateListing />} />
            <Route path="/contract/:listingId" element={<Contract />} />
        </Routes>
    );
};

function App() {
    return (
        <Router>
            <AuthProvider>
                <AppRoutes />
            </AuthProvider>
        </Router>
    );
}

export default App;
