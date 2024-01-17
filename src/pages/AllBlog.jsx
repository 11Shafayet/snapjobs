import bannerImage from '/images/28.jpg';
import { blogs } from '../data';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

const AllBlog = () => {
  return (
    <Box>
      <Flex
        justify="center"
        align="center"
        minH="60vh"
        pos="relative"
        zIndex={10}
        bgPos="center"
        bgRepeat="no-repeat"
        style={{ backgroundImage: `url(${bannerImage})` }}
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
          All Blogs
        </Text>
      </Flex>

      <Box py={{ base: 12, md: 20 }}>
        <Container mx="auto" maxW="1440px" px={{ base: 5, md: 20 }}>
          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 3 }}
            gap={{ base: 4, lg: 12 }}
          >
            {blogs.map((item, i) => (
              <Link to={`/all-blog/${item.id}`} className="group" key={i}>
                <Box pos="relative" mb={3} group>
                  <Image
                    src={item.img}
                    alt="blog"
                    w="full"
                    maxH="230px"
                    objectFit="cover"
                    borderRadius={5}
                  />
                  <Text opacity={0.5} mt={5}>
                    {item.date}
                  </Text>
                </Box>
                <Text
                  noOfLines={2}
                  lineHeight={1.4}
                  fontSize={24}
                  fontWeight={700}
                  _groupHover={{ color: 'brand' }}
                >
                  {item.title}
                </Text>
                <Text noOfLines={2} opacity={0.5} mt={3}>
                  {item.desc}
                </Text>
              </Link>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default AllBlog;
