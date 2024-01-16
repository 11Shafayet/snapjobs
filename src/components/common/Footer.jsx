import { Box, Container, Divider, Flex, Text } from '@chakra-ui/react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box py={12} textAlign="center" bg="brand" color="white">
      <Container mx="auto" maxW="100%" px={{ base: 5, md: 20 }}>
        <div className="flex flex-col items-center">
          <Text
            textTransform="uppercase"
            mb={6}
            fontSize={24}
            className="uppercase mb-6 text-2xl"
          >{`Let's get in touch`}</Text>
          <Flex align="center" justify="center" columnGap={4}>
            <Link to="https://www.facebook.com/11Shafayet/">
              <FaFacebookF size={20} />
            </Link>
            <Link to="https://www.linkedin.com/in/shafayetur-rahman/">
              <FaLinkedinIn size={20} />
            </Link>
            <Link to="https://github.com/11Shafayet">
              <FaGithub size={20} />
            </Link>
          </Flex>
          <Divider bg="brand" my={6} />
          <Text opacity={0.75} align="center">
            {`Copyright ©2023 All rights reserved | This template is made with 🤍 by`}{' '}
            <b>Shafayet</b>
          </Text>
        </div>
      </Container>
    </Box>
  );
};

export default Footer;
