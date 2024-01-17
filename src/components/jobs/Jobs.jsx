/* eslint-disable react/prop-types */
import { Box, Divider, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { CiStopwatch, CiWallet } from 'react-icons/ci';
import { allJobs } from '../../data';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Jobs = () => {
  const { searchedText, choosedOption } = useAuth();
  const searchFilter = (item) => {
    if (item.title.toLowerCase().includes(searchedText.toLowerCase())) {
      return item;
    } else return;
  };

  const optionFilter = (item) => {
    switch (choosedOption.toLowerCase()) {
      case 'default':
        return item;
      case 'featured':
        return item.featured;
      case 'trending':
        return item.trending;
      case 'full':
        return item.duration === 'Full Time';
      case 'part':
        return item.duration === 'Part Time';
      case 'intern':
        return item.duration === 'Intern';
      default:
        return item;
    }
  };

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={6}>
        {allJobs
          .filter(searchFilter)
          .filter(optionFilter)
          .map((job, i) => {
            const {
              id,
              img,
              title,
              location,
              tags,
              salary,
              timestamp,
              duration,
            } = job;
            return (
              <Link to={`/all-jobs/${id}`} key={i}>
                <Flex
                  direction="column"
                  w="100%"
                  p={5}
                  borderRadius={6}
                  bg="transparent"
                  border="1px"
                  borderColor="secondary"
                  align="center"
                  rowGap={2}
                  pos="relative"
                >
                  <Box pos="absolute" top={3} right={3}>
                    <Text
                      px={3}
                      py={1}
                      bg="secondary"
                      fontSize="14"
                      fontWeight={500}
                      borderRadius={5}
                      opacity={0.75}
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
                    opacity={0.75}
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
                  <Divider />
                  <Flex w="full" justify="space-between" align="center" mt={2}>
                    <Flex
                      align="center"
                      justify="center"
                      gap={1.5}
                      fontSize={15}
                      opacity={0.75}
                    >
                      <CiWallet size={16} />
                      {salary}
                    </Flex>
                    <Flex
                      align="center"
                      justify="center"
                      gap={1.5}
                      fontSize={15}
                      opacity={0.75}
                    >
                      <CiStopwatch size={16} />
                      {timestamp} {timestamp < 2 ? 'Day Ago' : 'Days Ago'}
                    </Flex>
                  </Flex>
                </Flex>
              </Link>
            );
          })}
      </SimpleGrid>
    </>
  );
};

export default Jobs;
