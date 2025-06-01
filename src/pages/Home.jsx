// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Tips from '../components/Tips';
import Testimonials from '../components/Testimonials';
import Videos from '../components/Videos';
import Products from '../components/Products';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import '../styles/Home.css';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Tips />
      <Testimonials />
      <Videos />
      <Products />
      <ContactForm />
      <Footer />
    </>
  );
}
