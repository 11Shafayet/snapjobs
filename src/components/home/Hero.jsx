import {
  Container,
  Text,
  Flex,
  Image,
  FormControl,
  Input,
  Select,
  Divider,
  Button,
  Tag,
} from '@chakra-ui/react';
import heroBanner from '/images/hero-abstract.png';

const Hero = () => {
  return (
    <Flex
      color="black"
      justify="center"
      align="center"
      bg="red.50"
      minH="80vh"
      py={20}
    >
      <Container mx="auto" maxW="1440px" px={{ base: 5, md: 20 }}>
        <Flex
          align="center"
          h="full"
          direction={{ base: 'column', lg: 'row' }}
          gap={12}
        >
          <Flex direction="column" w={{ base: '100%', lg: '45%' }}>
            <Tag
              fontSize={14}
              maxW="fit-content"
              px={4}
              size="lg"
              borderRadius="full"
              bg="red.100"
            >
              Get Trending Jobs
            </Tag>
            <Text
              fontSize={{ base: '36', md: '60' }}
              fontWeight={700}
              lineHeight={1.3}
            >
              Explore More Than{' '}
              <Text as="span" color="brand">
                7840+
              </Text>{' '}
              Jobs
            </Text>
            <Text fontSize="20" lineHeight="1.4" opacity={0.6} mt={4}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque
            </Text>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              align="center"
              justify="center"
              bg="gray.100"
              shadow="xl"
              borderRadius="md"
              mt={4}
            >
              <FormControl isRequired>
                <Input
                  variant="unstyled"
                  type="text"
                  placeholder="First name"
                  py={5}
                  px={5}
                  _focus={{ boxShadow: 'none' }}
                />
              </FormControl>
              <Divider
                orientation="vertical"
                borderWidth={0.5}
                h="50px"
                hideBelow="md"
                borderColor="gray.300"
                my="auto"
              />
              <Divider
                orientation="horizontal"
                borderWidth={0.5}
                hideFrom="md"
                borderColor="gray.300"
                my="auto"
              />
              <FormControl isRequired>
                <Select
                  variant="unstyled"
                  placeholder="Select option"
                  py={5}
                  px={5}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </FormControl>
              <Divider
                orientation="horizontal"
                borderWidth={0.5}
                hideFrom="md"
                borderColor="gray.300"
                my="auto"
              />
              <Button
                py="6"
                w="full"
                display="flex"
                justify="center"
                align="center"
                bg="brand"
                maxW={{ md: 32 }}
                color="white"
                my="auto"
                mt={{ base: 4, md: 'auto' }}
                _hover={{ bg: 'red.600' }}
              >
                Find Job
              </Button>
            </Flex>
          </Flex>
          <Image
            w={{ base: '100%', lg: '55%' }}
            src={heroBanner}
            maxW="full"
            h="auto"
            objectFit="cover"
          />
        </Flex>
      </Container>
    </Flex>
  );
};

export default Hero;
