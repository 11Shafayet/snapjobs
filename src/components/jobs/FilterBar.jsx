/* eslint-disable react/prop-types */
import {
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  useTheme,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const FilterBar = () => {
  const theme = useTheme();
  const { searchedText, setSearchedText, choosedOption, setChoosedOption } =
    useAuth();

  return (
    <Flex
      justify="space-between"
      align="center"
      bg="white"
      px={6}
      py={3}
      borderRadius={11}
      boxShadow={`0 0 11px 0 ${theme.colors.secondary}`}
    >
      <InputGroup w="300px" minH="50px">
        <InputLeftElement h="full">
          <FaSearch opacity={0.3} />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search by job title"
          minW="250px"
          minH="50px"
          _focus={{
            boxShadow: `0 0 11px 0 ${theme.colors.secondary}`,
            outline: 0,
            border: 0,
          }}
          value={searchedText}
          onChange={(e) => setSearchedText(e.target.value)}
        />
      </InputGroup>
      <Flex align="center" gap={3}>
        <FormControl>
          <Select
            minH="50px"
            minW={166}
            _focus={{
              boxShadow: `0 0 11px 0 ${theme.colors.secondary}`,
              outline: 0,
              border: 0,
            }}
            value={choosedOption}
            onChange={(e) => setChoosedOption(e.target.value)}
          >
            <option value="Default" defaultValue>
              Default Sorting
            </option>
            <option value="featured">Featured Jobs</option>
            <option value="trending">Trending Jobs</option>
            <option value="full">Full Time Jobs</option>
            <option value="part">Part Time Jobs</option>
            <option value="intern">Internship Jobs</option>
          </Select>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default FilterBar;
