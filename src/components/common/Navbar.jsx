import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '/images/logo.png';
import { FaEnvelope, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { navData } from '../../data';
import {
  Box,
  Container,
  Flex,
  Image,
  ListItem,
  UnorderedList,
  useTheme,
} from '@chakra-ui/react';

const Navbar = () => {
  const { activeNav, setActiveNav } = useAuth();
  const [hamActive, setHamActive] = useState(false);
  const { pathname } = useLocation();
  const theme = useTheme();

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
      <Box
        bg="white"
        boxShadow={`0 0 11px 0 ${theme.colors.secondary}`}
        py={3}
        zIndex={11111}
      >
        <Container mx="auto" maxW="1440px" px={{ base: 12, md: 20 }}>
          <Flex justify="space-between" align="center" gap={4}>
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
              <GiHamburgerMenu size={30} />
            </Box>
            <UnorderedList
              listStyleType="none"
              display={{ base: 'none', md: 'flex' }}
              justify="center"
              align="center"
              gap={1}
            >
              {navData.map((item, i) => {
                return (
                  <Link key={i} to={item.link}>
                    <ListItem
                      fontWeight={600}
                      textTransform="uppercase"
                      letterSpacing={1}
                      pt={4}
                      pb={3.5}
                      px={5}
                      display="flex"
                      justify="center"
                      align="center"
                      borderRadius={12}
                      _hover={{ bg: 'brand', color: 'white' }}
                      transition={500}
                      bg={activeNav === item.link && 'brand'}
                      color={activeNav === item.link && 'white'}
                    >
                      {item.title}
                    </ListItem>
                  </Link>
                );
              })}
            </UnorderedList>
          </Flex>

          <Box
            pos="absolute"
            top={28}
            w="full"
            h="100vh"
            bg="white"
            backdropBlur={12}
            shadow={12}
            p={4}
            justify="center"
            align="start"
            pt={32}
            zIndex={11111}
            right={hamActive ? '0' : '-150%'}
            display={hamActive ? 'flex' : 'hidden'}
          >
            <Box
              pos="absolute"
              top={7}
              right={7}
              zIndex={111111111111}
              onClick={() => setHamActive(false)}
            >
              <FaTimes size={30} />
            </Box>
            <UnorderedList
              listStyleType="none"
              display="flex"
              flexDirection="column"
              justify="center"
              align="center"
              gap={4}
              w="full"
              textAlign="center"
            >
              {navData.map((item, i) => {
                return (
                  <Link
                    to={item.link}
                    key={i}
                    onClick={() => setHamActive(false)}
                  >
                    <ListItem
                      fontWeight={600}
                      textTransform="uppercase"
                      letterSpacing={1}
                      pt={4}
                      pb={3.5}
                      px={5}
                      display="flex"
                      justify="center"
                      align="center"
                      borderRadius={12}
                      _hover={{ bg: 'brand', color: 'white' }}
                      transition={500}
                      bg={activeNav === item.link && 'brand'}
                      color={activeNav === item.link && 'white'}
                    >
                      {item.title}
                    </ListItem>
                  </Link>
                );
              })}
            </UnorderedList>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
