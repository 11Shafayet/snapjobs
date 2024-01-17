import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { blogs } from '../data';
import Sidebar from '../components/blogs/Sidebar';
import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

const SingleBlogPage = () => {
  const { pathname } = useLocation();
  const [data, setData] = useState({});
  const path = pathname.split('/all-blog/').pop();

  useEffect(() => {
    if (path) {
      const pathId = parseInt(path);
      const blogItem = blogs.find((item) => item.id === pathId);
      setData(blogItem);
    }
  }, [path, data]);

  useEffect(() => {
    if (path) {
      window.scrollTo(0, 0);
    }
  }, [path, data]);

  return (
    <>
      {data?.id && (
        <Box>
          <Flex
            justify="center"
            align="center"
            minH="60vh"
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
              style={{
                background: `linear-gradient(120deg, #F6E05E, #00B5D8)`,
              }}
              className="absolute inset-0 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 opacity-70 -z-10"
            />
            <Text
              textTransform="capitalize"
              fontSize={{ base: 28, md: 48 }}
              fontWeight={700}
              maxW="800px"
              textAlign="center"
              color="white"
              lineHeight={1.2}
            >
              {data.title}
            </Text>
          </Flex>

          <Box py={{ base: 12, md: 20 }}>
            <Container mx="auto" maxW="1440px" px={{ base: 5, lg: 20 }}>
              <Flex
                flexDir={{ base: 'column', lg: 'row' }}
                gap={{ base: 4, md: 10, lg: 12 }}
              >
                <Box w={{ base: 'full', lg: '66%' }}>
                  <Box pos="relative" mb={3}>
                    <Image
                      src={data.img}
                      alt="blog"
                      w="full"
                      maxH="500px"
                      objectFit="cover"
                      borderRadius={11}
                    />
                    <Text opacity={0.5} mt={5}>
                      {data.date}
                    </Text>
                  </Box>
                  <Text
                    noOfLines={2}
                    lineHeight={1.4}
                    fontSize={24}
                    fontWeight={700}
                    _groupHover={{ color: 'brand' }}
                  >
                    {data.title}
                  </Text>
                  <Text opacity={0.5} mt={3}>
                    {data.desc}
                  </Text>
                  <Box mt={6}>
                    <Text
                      fontSize={20}
                      fontWeight={700}
                      lineHeight={1.3}
                      mb={3}
                    >
                      Content
                    </Text>
                    <UnorderedList opacity={0.6} ps={3} gap={2}>
                      {data.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </UnorderedList>
                  </Box>
                </Box>

                <Box w={{ base: 'full', lg: '34%' }}>
                  <Sidebar currentItem={data.id} />
                </Box>
              </Flex>
            </Container>
          </Box>
        </Box>
      )}
    </>
  );
};

export default SingleBlogPage;
