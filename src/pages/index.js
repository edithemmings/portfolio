import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Header from '../components/sections/Header';
import About from '../components/sections/About';
// import Projects from '../components/sections/Projects';
import Tech from '../components/sections/Tech';
import Background from '../components/sections/Background';
import Footer from '../components/sections/Footer';
import Contact from '../components/sections/Contact';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Tech />
    <Background />
    {/* <Projects /> */}
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
