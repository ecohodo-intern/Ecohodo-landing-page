import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import './Home.css'
import Cta from './components/Cta';
import Testimonials from './components/Testimonials';
import Blogs from './components/Blogs';
import Footer from './components/Footer';


export default function Home() {
  return (
    <div class='main-style'>
      <Hero />
      <Services />
      <Features />
      <Cta />
      <Testimonials />
      <Blogs />
      <Footer />

    </div>
  )
}

