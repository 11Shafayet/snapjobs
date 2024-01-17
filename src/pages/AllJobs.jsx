import Header from '../components/common/Header';
import { Box, Container, Flex } from '@chakra-ui/react';
import Jobs from '../components/jobs/Jobs';
import FilterBar from '../components/jobs/FilterBar';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AllJobs = () => {
  const { pathname } = useLocation();

  const [searchedText, setSearchedText] = useState('');
  const [optionChoosed, setOptionChoosed] = useState('default');

  useEffect(() => {
    if (pathname) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
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
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default AllJobs;
