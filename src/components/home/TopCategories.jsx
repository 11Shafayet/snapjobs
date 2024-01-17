import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { allCategories } from '../../data';
import { Link } from 'react-router-dom';

const TopCategories = () => {
  return (
    <Flex bg="red.50" color="black" justify="center" align="center" py={20}>
      <Container mx="auto" maxW="1440px" px={{ base: 5, md: 20 }}>
        <Box align="center">
          <Text fontSize={19} opacity={0.5}>
            Popular Categories
          </Text>
          <Text lineHeight={1.25} fontSize={36} fontWeight={600}>
            Browse Top Categories
          </Text>
        </Box>

        <Box align="center" mt={12}>
          <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 6 }} gap={4}>
            {allCategories.slice(0, 12).map((item, i) => {
              return (
                <Link to={`/all-jobs`} key={i}>
                  <Flex
                    p={3}
                    w="100%"
                    rowGap={1}
                    border="1px"
                    align="center"
                    justify="center"
                    bg="transparent"
                    borderRadius={6}
                    direction="column"
                    borderColor="red.100"
                    h="full"
                  >
                    <Flex
                      w={16}
                      h={16}
                      bg="red.100"
                      color="brand"
                      align="center"
                      justify="center"
                      borderRadius="full"
                    >
                      {item.icon}
                    </Flex>
                    <Text fontSize={18} fontWeight={500}>
                      {item.category}
                    </Text>
                    <Text fontSize={16} opacity={0.5}>
                      {item.posts}
                    </Text>
                  </Flex>
                </Link>
              );
            })}
          </SimpleGrid>
        </Box>
      </Container>
    </Flex>
  );
};

export default TopCategories;
