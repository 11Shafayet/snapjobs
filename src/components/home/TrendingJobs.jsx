import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaLongArrowAltRight } from 'react-icons/fa';
import { allJobs } from '../../data';
import { Link } from 'react-router-dom';

const TrendingJobs = () => {
  return (
    <Flex color="black" justify="center" align="center" py={20}>
      <Container mx="auto" maxW="1440px" px={{ base: 5, md: 20 }}>
        <Box align="center">
          <Text fontSize={19} opacity={0.5}>
            Trending Jobs
          </Text>
          <Text lineHeight={1.25} fontSize={36} fontWeight={600}>
            All Popular Listed Jobs
          </Text>
        </Box>

        <Box align="center" mt={12}>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={6}>
            {allJobs.slice(0, 8).map((job, i) => {
              const { id, img, title, location, duration, tags } = job;
              return (
                <Link to={`/all-jobs/${id}`} key={i}>
                  <Flex
                    direction="column"
                    w="100%"
                    p={5}
                    borderRadius={6}
                    bg="transparent"
                    border="1px"
                    borderColor="red.100"
                    align="center"
                    rowGap={2}
                    pos="relative"
                  >
                    <Box pos="absolute" top={3} right={3}>
                      <Text
                        px={3}
                        py={1}
                        bg="red.100"
                        fontSize="14"
                        fontWeight={500}
                        borderRadius={5}
                      >
                        {duration}
                      </Text>
                    </Box>
                    <Image src={img} w={20} h={20} />
                    <Text fontSize={20} fontWeight={500}>
                      {title}
                    </Text>
                    <Flex gap={1.5} opacity={0.5} mt={-2} align="center">
                      <FaMapMarkerAlt />
                      <Text fontSize="15">{location}</Text>
                    </Flex>
                    <Flex
                      wrap="wrap"
                      gap={2}
                      opacity={0.5}
                      mt={2}
                      mb={3}
                      align="center"
                      justify="center"
                    >
                      {tags.map((tag, j) => (
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
                  </Flex>
                </Link>
              );
            })}
          </SimpleGrid>
          <Link to={`/all-jobs`}>
            <Button
              p={7}
              mt={12}
              gap={3}
              bg="brand"
              color="white"
              _hover={{ bg: 'red.600' }}
            >
              Explore More Jobs <FaLongArrowAltRight size={22} />
            </Button>
          </Link>
        </Box>
      </Container>
    </Flex>
  );
};

export default TrendingJobs;
