import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { allJobs, requirements, skills } from '../data';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Input,
  InputGroup,
  List,
  ListIcon,
  ListItem,
  Text,
  useTheme,
  useToast,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

const SingleJobPage = () => {
  const { pathname } = useLocation();
  const [data, setData] = useState({});
  const theme = useTheme();
  const path = pathname.split('/all-jobs/').pop();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resume, setResume] = useState('');
  const toast = useToast();

  useEffect(() => {
    if (path) {
      const pathId = parseInt(path);
      const blogItem = allJobs.find((item) => item.id === pathId);
      setData(blogItem);
    }
  }, [path, data]);

  useEffect(() => {
    if (path) {
      window.scrollTo(0, 0);
    }
  }, [path, data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      toast({
        title: 'Please fill all the required field!',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
    } else {
      if (!email.includes('@')) {
        toast({
          title: 'Must be an email!',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Your application sent successfully successfully!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setName('');
        setEmail('');
        setPhone('');
        setResume('');
      }
    }
  };

  return (
    <Box>
      <Flex
        justify="center"
        align="center"
        minH="40vh"
        pos="relative"
        zIndex={10}
        bgPos="center"
        bgRepeat="no-repeat"
        style={{ backgroundImage: `url(${data.img})` }}
      >
        <Box
          pos="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          opacity={0.7}
          zIndex={-10}
          style={{ background: `linear-gradient(120deg, #F6E05E, #00B5D8)` }}
          className="absolute inset-0 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 opacity-70 -z-10"
        />
        <Text
          textTransform="capitalize"
          fontSize={{ base: 28, md: 48, xl: 64 }}
          fontWeight={700}
          maxW="800px"
          textAlign="center"
          color="white"
          lineHeight={1.2}
        >
          {data?.title}
        </Text>
      </Flex>

      <Box py={{ base: 12, md: 20 }}>
        <Container mx="auto" maxW="1440px" px={{ base: 5, md: 20 }}>
          <Flex
            flexDir={{ base: 'column', md: 'row' }}
            gap={{ base: 4, lg: 12 }}
          >
            <Box
              p={{ base: 4, md: 8 }}
              w={{ base: '100%', md: '66%' }}
              borderRadius={11}
              boxShadow={`0 0 11px 0 ${theme.colors.secondary}`}
            >
              <Text fontSize={20} fontWeight={500}>
                Job Description
              </Text>
              <Text fontWeight={300} opacity={0.75} mt={3} lineHeight={1.9}>
                {`We are looking for a ${data.title} responsible for managing
                back-end services and the interchange of data between the server
                and the users. Your primary focus will be the development of all
                server-side logic, definition and maintenance of the central
                database.
                

                Across our network, we strive to provide rapid,
                performance-based, industry-focused and technology-enabled
                services, which reflect a shared knowledge of global and local
                industries and our experience of the Indian business
                environment.`}
              </Text>
              <Text fontSize={20} fontWeight={500} mt={6} mb={2}>
                Requirements
              </Text>
              <List spacing={3}>
                {requirements.map((item, i) => (
                  <ListItem
                    opacity={0.75}
                    fontSize={15}
                    display="flex"
                    align="center"
                    justify="center"
                    key={i}
                  >
                    <ListIcon as={MdCheckCircle} color="green.500" mt={1} />
                    {item.text}
                  </ListItem>
                ))}
              </List>
              <Text fontSize={20} fontWeight={500} mt={10} mb={2}>
                Skills
              </Text>
              <Box maxW={400}>
                {skills.map((item, i) => (
                  <Flex mt={3} justify="space-between" fontSize={14} key={i}>
                    <Text>{item.text}</Text>
                    <Text fontWeight={500}>{item.position}</Text>
                  </Flex>
                ))}
              </Box>
              <Text fontSize={20} fontWeight={500} mt={10} mb={2}>
                Key Skills
              </Text>
              <Flex
                wrap="wrap"
                gap={2}
                opacity={0.75}
                mb={3}
                align="center"
                justify="start"
              >
                {data?.tags?.map((tag, j) => (
                  <Text
                    key={j}
                    bg="secondary"
                    fontSize="14"
                    px={3}
                    py={1}
                    borderRadius={5}
                    fontWeight={500}
                  >
                    {tag}
                  </Text>
                ))}
              </Flex>
            </Box>
            {/* sidebar */}
            <Box w={{ base: '100%', md: '34%' }}>
              <Box
                p={{ base: 4, md: 8 }}
                borderRadius={11}
                boxShadow={`0 0 11px 0 ${theme.colors.secondary}`}
              >
                <Text fontSize={20} fontWeight={700} mb={6}>
                  Interested In This Job?
                </Text>
                <form onSubmit={handleSubmit}>
                  <InputGroup
                    display="flex"
                    flexDir="column"
                    w="full"
                    minH="50px"
                    mt={4}
                  >
                    <Text mb={2}>Your Name*</Text>
                    <Input
                      type="text"
                      placeholder="Shafayetur Rahman"
                      w="full"
                      minH="50px"
                      _focus={{
                        boxShadow: `0 0 11px 0 ${theme.colors.secondary}`,
                        outline: 0,
                        border: 0,
                      }}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup
                    display="flex"
                    flexDir="column"
                    w="full"
                    minH="50px"
                    mt={4}
                  >
                    <Text mb={2}>Your Email*</Text>
                    <Input
                      type="email"
                      placeholder="11shafayet@gmail.com"
                      w="full"
                      minH="50px"
                      _focus={{
                        boxShadow: `0 0 11px 0 ${theme.colors.secondary}`,
                        outline: 0,
                        border: 0,
                      }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup
                    display="flex"
                    flexDir="column"
                    w="full"
                    minH="50px"
                    mt={4}
                  >
                    <Text mb={2}>Your Phone*</Text>
                    <Input
                      type="number"
                      placeholder="+880-1638-719578"
                      w="full"
                      minH="50px"
                      _focus={{
                        boxShadow: `0 0 11px 0 ${theme.colors.secondary}`,
                        outline: 0,
                        border: 0,
                      }}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup
                    display="flex"
                    flexDir="column"
                    w="full"
                    minH="50px"
                    mt={4}
                  >
                    <Text mb={2}>Resume/CV</Text>
                    <Input
                      border={0}
                      type="file"
                      accept="application/pdf"
                      w="full"
                      minH="50px"
                      px={1}
                      _focus={{
                        boxShadow: `0 0 11px 0 ${theme.colors.secondary}`,
                        outline: 0,
                        border: 0,
                      }}
                      value={resume}
                      onChange={(e) => setResume(e.target.value)}
                    />
                  </InputGroup>
                  <Checkbox required colorScheme="red">
                    I agree to the privacy policy
                  </Checkbox>

                  <Box w="full" mt={6}>
                    <Button
                      type="submit"
                      pos="relative"
                      right={1}
                      py={6}
                      px={8}
                      w="full"
                      maxW="100%"
                      bg="brand"
                      color="white"
                      _hover={{ bg: 'red.600' }}
                    >
                      Apply Now
                    </Button>
                  </Box>
                </form>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default SingleJobPage;
