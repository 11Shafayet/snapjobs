import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from '@chakra-ui/react';
import Header from '../components/common/Header';
import contactImage from '/images/contact-bg.png';
import {
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { useState } from 'react';

const Contact = () => {
  const toast = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && message) {
      if (email.includes('@')) {
        toast({
          title: 'Form Sent Successfully!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        console.log(name, email, message);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast({
          title: 'Please Provide a valid email!',
          status: 'warning',
          duration: 3000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: 'Please fill up all the fields!',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Header text="Contact Now" />

      <SimpleGrid columns={{ base: '1', md: '2' }} minH="60vh" color="white">
        <Flex
          bg="brand"
          py={12}
          px={12}
          align="center"
          justify="center"
          textAlign="start"
        >
          <Box maxW="700px">
            <Text fontSize={36} fontWeight={600} mb={2}>{`Let's Talk`}</Text>
            <Text fontSize={17} fontWeight={400} opacity={0.8}>
              If you'd like to talk about a potential project or just say hi,
              send me a message or email me at{' '}
              <Text as="span" opacity={1} fontWeight="bold" color="black">
                11shafayet@gmail.com!
              </Text>
            </Text>

            <Box mt={8}>
              <Flex direction="flex" gap={4}>
                <Input
                  placeholder="Your Name"
                  color="white"
                  _placeholder={{ color: 'white' }}
                  _focus={{
                    borderColor: 'white',
                    boxShadow: 'none',
                  }}
                  minH={50}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Input>
                <Input
                  placeholder="Your Email"
                  required
                  color="white"
                  _placeholder={{ color: 'white' }}
                  _focus={{ borderColor: 'white', boxShadow: 'none' }}
                  minH={50}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Flex>
              <Textarea
                mt={4}
                placeholder="Enter Your Message"
                _placeholder={{ color: 'white' }}
                _focus={{ borderColor: 'white', boxShadow: 'none' }}
                rows={5}
                color="white"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Box>
                <Button
                  py={7}
                  px={12}
                  mt={6}
                  gap={1}
                  bg="white"
                  color="brand"
                  _hover={{ bg: 'white' }}
                  onClick={handleSubmit}
                >
                  SEND MESSAGE
                </Button>
              </Box>
            </Box>
          </Box>
        </Flex>

        <Center bgImage={`url(${contactImage})`} minH={80}>
          <SimpleGrid columns={{ base: '2', md: '2' }} gap={{ base: 12 }}>
            <Link to="https://www.linkedin.com/in/shafayetur-rahman/">
              <FaLinkedinIn size={40} color="black" />
            </Link>
            <Link to="https://github.com/11Shafayet/">
              <FaGithub color="black" size={40} _hover={{ color: 'brand' }} />
            </Link>
            <Link
              to="https://www.instagram.com/md.shafayetur_rahman/"
              color="black"
            >
              <FaInstagram
                color="black"
                size={40}
                _hover={{ color: 'brand' }}
              />
            </Link>
            <Link to="https://dribbble.com/11Shafayet">
              <FaDribbble color="black" size={40} _hover={{ color: 'brand' }} />
            </Link>
          </SimpleGrid>
        </Center>
      </SimpleGrid>
    </>
  );
};

export default Contact;
