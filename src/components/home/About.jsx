import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  List,
  Stat,
  StatGroup,
  StatHelpText,
  StatNumber,
  Tag,
  Text,
} from '@chakra-ui/react';
import abstract6 from '/images/abstract6.png';
import abstract7 from '/images/abstract7.png';
import { FaCheck, FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Flex color="black" justify="center" align="center" minH="80vh" py={20}>
      <Container mx="auto" maxW="1440px" px={{ base: 5, md: 20 }}>
        <Flex
          align="center"
          h="full"
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 12, md: 20 }}
        >
          <Flex direction="column" w={{ base: '100%', lg: '50%' }}>
            <Tag
              fontSize={14}
              maxW="fit-content"
              px={4}
              size="lg"
              borderRadius="full"
              bg="red.100"
            >
              About Us
            </Tag>
            <Text
              lineHeight={1.25}
              fontSize={36}
              fontWeight={600}
              maxW={{ lg: '400' }}
            >
              Create and Build Your Attractive Profile
            </Text>
            <Text fontSize="15" lineHeight="1.9" opacity={0.75} mt={4}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. <br /> <br /> At vero eos et accusamus et
              iusto odio dignissimos ducimus qui blanditiis deleniti atque
              corrupti quos dolores et quas molestias excepturi sint occaecati
              cupiditate non provident, similique sunt in culpa qui officia
              deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
              quidem rerum facilis est et expedita distinctio.
            </Text>

            <StatGroup mt={12}>
              <Stat>
                <StatNumber color="brand" fontWeight={700} fontSize={26}>
                  10k+
                </StatNumber>
                <StatHelpText>Active Jobs</StatHelpText>
              </Stat>

              <Stat>
                <StatNumber color="brand" fontWeight={700} fontSize={26}>
                  12k+
                </StatNumber>
                <StatHelpText>Web Designers</StatHelpText>
              </Stat>
              <Stat>
                <StatNumber color="brand" fontWeight={700} fontSize={26}>
                  07k+
                </StatNumber>
                <StatHelpText>Employers</StatHelpText>
              </Stat>
            </StatGroup>
            <Box>
              <Link to={`/about-us`}>
                <Button
                  p={6}
                  mt={12}
                  gap={1}
                  bg="brand"
                  color="white"
                  _hover={{ bg: 'red.600' }}
                >
                  See Details <FaLongArrowAltRight size={22} />
                </Button>
              </Link>
            </Box>
          </Flex>

          <Image
            w={{ base: '100%', lg: '50%' }}
            src={abstract6}
            maxW="full"
            h="auto"
            objectFit="cover"
          />
        </Flex>

        <Flex
          align="center"
          h="full"
          direction={{ base: 'column-reverse', lg: 'row' }}
          gap={{ base: 12, md: 20 }}
          mt={{ base: 12, md: 32 }}
        >
          <Image
            w={{ base: '100%', lg: '50%' }}
            src={abstract7}
            maxW="full"
            h="auto"
            objectFit="cover"
          />
          <Flex direction="column" w={{ base: '100%', lg: '50%' }}>
            <Text
              lineHeight={1.25}
              fontSize={36}
              fontWeight={600}
              maxW={{ lg: '400' }}
            >
              {`Get All The Jobs Details You're Looking For`}
            </Text>
            <Text fontSize="15" lineHeight="1.9" opacity={0.75} mt={4}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Text>

            <List spacing={3} mt={6}>
              <Flex align="center" display="flex" gap={3}>
                <Flex
                  bg="red.100"
                  display="flex"
                  justify="center"
                  align="center"
                  w={6}
                  h={6}
                  borderRadius="100%"
                  color="brand"
                >
                  <FaCheck size={12} />
                </Flex>
                Full lifetime access
              </Flex>
              <Flex align="center" display="flex" gap={3}>
                <Flex
                  bg="red.100"
                  display="flex"
                  justify="center"
                  align="center"
                  w={6}
                  h={6}
                  borderRadius="100%"
                  color="brand"
                >
                  <FaCheck size={12} />
                </Flex>
                20+ Free downloadable resources
              </Flex>
              <Flex align="center" display="flex" gap={3}>
                <Flex
                  bg="red.100"
                  display="flex"
                  justify="center"
                  align="center"
                  w={6}
                  h={6}
                  borderRadius="100%"
                  color="brand"
                >
                  <FaCheck size={12} />
                </Flex>
                Certificate of completion
              </Flex>
              <Flex align="center" display="flex" gap={3}>
                <Flex
                  bg="red.100"
                  display="flex"
                  justify="center"
                  align="center"
                  w={6}
                  h={6}
                  borderRadius="100%"
                  color="brand"
                >
                  <FaCheck size={12} />
                </Flex>
                7 Days free trial
              </Flex>
            </List>

            <Box>
              <Link to={`/all-jobs`}>
                <Button
                  p={6}
                  mt={8}
                  gap={1}
                  bg="brand"
                  color="white"
                  _hover={{ bg: 'red.600' }}
                >
                  Get Started <FaLongArrowAltRight size={22} />
                </Button>
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default About;
