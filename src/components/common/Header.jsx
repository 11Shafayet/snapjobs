/* eslint-disable react/prop-types */
import { Center, Text } from '@chakra-ui/react';
import headerImage from '/images/subscribe.png';

const Header = ({ text }) => {
  return (
    <Center
      minH="33vh"
      backgroundImage={`url(${headerImage})`}
      backgroundSize="cover"
      bgColor="secondary"
    >
      <Text fontSize={{ base: 36, lg: 48 }} fontWeight={700}>
        {text}
      </Text>
    </Center>
  );
};

export default Header;
