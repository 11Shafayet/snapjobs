/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { blogs } from '../../data';
import { Box, Flex, Image, Text, useTheme } from '@chakra-ui/react';

const Sidebar = ({ currentItem }) => {
  const theme = useTheme();

  const currentItemFilter = (item) => {
    if (item.id === currentItem) {
      return;
    } else return item;
  };

  return (
    <Box
      borderRadius={11}
      boxShadow={`0 0 11px 0 ${theme.colors.secondary}`}
      p={{ base: 4, md: 8 }}
    >
      <Box>
        <Text fontSize={28} fontWeight={700} mb={6}>
          Popular Posts
        </Text>
        <Flex flexDir="column" gap={12} mt={4}>
          {blogs
            .slice(0, 5)
            .filter(currentItemFilter)
            .map((blog, i) => {
              return (
                <Link to={`/all-blog/${blog.id}`} key={i}>
                  <Flex align="flex-start" gap={3}>
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      w={20}
                      h="auto"
                      objectFit="cover"
                      borderRadius={4}
                    />
                    <Box>
                      <Text fontWeight={700} fontSize={18} noOfLines={2}>
                        {blog.title}
                      </Text>
                      <Text fontSize={14} opacity={0.5}>
                        {blog.date}
                      </Text>
                    </Box>
                  </Flex>
                </Link>
              );
            })}
        </Flex>
      </Box>
    </Box>
  );
};

export default Sidebar;
