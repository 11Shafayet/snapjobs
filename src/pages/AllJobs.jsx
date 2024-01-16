import Header from '../components/common/Header';
import { Box, Center, Container, Flex } from '@chakra-ui/react';
import Jobs from '../components/jobs/Jobs';
import FilterBar from '../components/jobs/FilterBar';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

const AllJobs = () => {
  const [searchedText, setSearchedText] = useState('');
  const [optionChoosed, setOptionChoosed] = useState('default');
  return (
    <>
      <Header text="All Jobs" />
      <Box py={12}>
        <Container mx="auto" maxW="1440px" px={{ base: 5, md: 20 }}>
          <Flex direction="column" rowGap={12}>
            <FilterBar
              searchedText={searchedText}
              setSearchedText={setSearchedText}
              optionChoosed={optionChoosed}
              setOptionChoosed={setOptionChoosed}
            />
            <Jobs searchedText={searchedText} optionChoosed={optionChoosed} />
            {/* pagination */}
            <Flex gap={2} align="center">
              <Center
                w={12}
                h={12}
                bg="red.50"
                borderRadius={7}
                cursor="pointer"
                _hover={{
                  boxShadow: '0 0 11px rgba(0,0,0,0.11)',
                  bg: 'brand',
                  color: 'white',
                }}
              >
                <FaArrowLeft />
              </Center>
              <Center
                w={12}
                h={12}
                bg="red.50"
                borderRadius={7}
                cursor="pointer"
                fontWeight={700}
                _hover={{
                  boxShadow: '0 0 11px rgba(0,0,0,0.11)',
                  bg: 'brand',
                  color: 'white',
                }}
              >
                1
              </Center>
              <Center
                w={12}
                h={12}
                bg="red.50"
                borderRadius={7}
                cursor="pointer"
                _hover={{
                  boxShadow: '0 0 11px rgba(0,0,0,0.11)',
                  bg: 'brand',
                  color: 'white',
                }}
              >
                <FaArrowRight />
              </Center>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default AllJobs;
