import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: 'All Field is required!',
        status: 'warning',
        duration: 5000,
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
        console.log(email);
        toast({
          title: 'You subscribed successfully!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setEmail('');
      }
    }
  };

  return (
    <Flex color="black" justify="center" align="center" py={20}>
      <Container mx="auto" maxW="1440px" px={{ base: 5, md: 20 }}>
        <Box align="center">
          <Text fontSize={19} opacity={0.5}>
            Subscribr Now
          </Text>
          <Text lineHeight={1.25} fontSize={36} fontWeight={600}>
            Get All New Job Notification
          </Text>

          <Flex
            border="1px"
            borderColor="brand"
            align="center"
            maxW={600}
            mt={12}
            pos="relative"
            borderRadius={6}
          >
            <FormControl>
              <Input
                border={0}
                outline={0}
                placeholder="Enter Your Email Address"
                py={7}
                w="100%"
                type="email"
                _focus={{ boxShadow: 'none' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <Button
              onClick={handleSubmit}
              pos="relative"
              right={1}
              py={6}
              px={8}
              maxW="100%"
              bg="brand"
              color="white"
              _hover={{ bg: 'red.600' }}
            >
              Subscribe
            </Button>
          </Flex>
        </Box>
      </Container>
    </Flex>
  );
};

export default Subscribe;
