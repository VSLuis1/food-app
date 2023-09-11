import React from 'react'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category'
import DownloadApp from './components/DownloadApp'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {
 
  return (
    <div>
        <Navbar />
        <Hero/>
        <HeadlineCards />
        <Category />
        <Food />
        <DownloadApp />
        <Testimonial />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
