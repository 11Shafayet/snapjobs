import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { Center } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';
import Subscribe from '../components/common/Subscribe';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Subscribe />
      <Footer />
      <ScrollToTop
        smooth
        component={
          <Center _hover={{ color: 'brand' }}>
            <FaArrowUp />
          </Center>
        }
      />
    </>
  );
};

export default MainLayout;
