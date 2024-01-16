import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '/images/logo.png';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { navData } from '../../data';
import {
  Box,
  Container,
  Flex,
  Image,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';

const Navbar = () => {
  const { activeNav, setActiveNav } = useAuth();
  const [hamActive, setHamActive] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      setActiveNav(pathname);
    }
  }, [pathname, setActiveNav]);

  return (
    <Box pos="relative" zIndex={1111}>
      {/* topbar */}
      <Box bg="brand" color="white" py={2}>
        <Container mx="auto" maxW="1440px" px={{ base: 5, md: 20 }}>
          <Flex
            direction={{ base: 'column', sm: 'row' }}
            justify={{ base: 'center', sm: 'end' }}
            align="center"
            gap={4}
          >
            <Flex justify="center" align="center" letterSpacing={1} gap={2}>
              <FaPhoneAlt />
              +8801638-719578
            </Flex>
            <Flex justify="center" align="center" letterSpacing={1} gap={2}>
              <FaEnvelope />
              11shafayet@gmail.com
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* navbar */}
      <Box bg="white" shadow="xl" py={3} zIndex={11111}>
        <Container mx="auto" maxW="1440px" px={{ base: 5, md: 20 }}>
          <Flex justify="between" align="center" gap={4}>
            <Link to="/">
              <Image src={logo} alt="logo" maxW={50} h="auto" />
            </Link>
            <Box
              display={{ base: 'block', md: 'none' }}
              cursor="pointer"
              w={11}
              h={6}
              pos="relative"
              role="group"
              onClick={() => setHamActive((prev) => !prev)}
            >
              <Box
                w={11}
                h={0.5}
                bg="black"
                display="block"
                _groupHover={{ transform: '-translateX(12px)' }}
                transitionDuration={500}
              />
              <Box
                w={11}
                h={0.5}
                bg="black"
                display="block"
                _groupHover={{ transform: '-translateX(12px)' }}
                transitionDuration={500}
              />
              <Box
                w={11}
                h={0.5}
                bg="black"
                display="block"
                _groupHover={{ transform: '-translateX(12px)' }}
                transitionDuration={500}
              />
              <div className="w-11 h-0.5 bg-black block translate-y-1.5 group-hover:translate-x-1 duration-500" />
              <div className="w-11 h-0.5 bg-black block  translate-y-3 group-hover:-translate-x-3 duration-500" />
            </Box>
            <UnorderedList
              listStyleType="none"
              display={{ base: 'hidden', md: 'flex' }}
              justify="center"
              align="center"
              gap={1}
            >
              {navData.map((item, i) => {
                return (
                  <ListItem key={i}>
                    <Link
                      to={item.link}
                      className={`font-semibold uppercase tracking-wider pt-4 pb-3.5 px-5 flex justify-center items-center rounded-md hover:bg-primary hover:text-white duration-500 ${
                        activeNav === item.link && 'bg-primary text-white'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </ListItem>
                );
              })}
            </UnorderedList>
          </Flex>

          <div
            className={`absolute top-36 w-full h-screen bg-white bg-opacity-80 backdrop-blur-md shadow-light p-4 justify-center items-start pt-32 duration-500 z-[11111] ${
              hamActive ? 'right-0 flex' : '-right-[150%] hidden'
            }`}
          >
            <div
              className="absolute top-7 right-7 w-11 h-12 group cursor-pointer z-[100000]"
              onClick={() => setHamActive(false)}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-black block rotate-45 duration-500" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-rotate-[30deg] w-8 h-0.5 bg-black block -rotate-45 duration-500" />
            </div>
            <ul className="flex flex-col justify-center items-center gap-y-4">
              {navData.map((item, i) => {
                return (
                  <li key={i} onClick={() => setHamActive(false)}>
                    <Link
                      to={item.link}
                      className={`font-semibold uppercase tracking-wider py-4 px-5 flex justify-center items-center rounded-md hover:bg-primary hover:text-white duration-500 ${
                        activeNav === item.link && 'bg-primary text-white'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
