import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { MdOutlineDevicesOther } from 'react-icons/md';

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
            <Flex
              p={3}
              w="100%"
              rowGap={1}
              border="1px"
              align="center"
              bg="transparent"
              borderRadius={6}
              direction="column"
              borderColor="red.100"
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
                <MdOutlineDevicesOther size={28} />
              </Flex>
              <Text fontSize={18} fontWeight={500}>
                Software Company
              </Text>
              <Text fontSize={14} mt={-2} opacity={0.5}>
                607 Jobs
              </Text>
            </Flex>
          </SimpleGrid>
        </Box>
      </Container>
    </Flex>
  );
};

export default TopCategories;
