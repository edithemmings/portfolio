import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Projects from '@sections/Projects';
import Tech from '@sections/Tech';
import Background from '@sections/Background';
// import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Tech />
    <Projects />
    <Background />
    {/* <Faq /> */}
    <Footer />
  </Layout>
);

export default IndexPage;
