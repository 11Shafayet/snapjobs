import { Box, Container, Flex, Image, Text } from '@chakra-ui/react';
import l1 from '/images/l-1.png';
import l2 from '/images/l-2.png';
import l3 from '/images/l-3.png';
import l4 from '/images/l-4.png';
import l5 from '/images/l-5.png';
import l6 from '/images/l-6.png';
import l7 from '/images/l-7.png';
import l8 from '/images/l-8.png';
import l9 from '/images/l-9.png';
import l10 from '/images/l-10.png';

const logos = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10];

const Partners = () => {
  return (
    <Flex bg="red.50" color="black" justify="center" align="center" py={20}>
      <Container mx="auto" maxW="1440px" px={{ base: 5, md: 20 }}>
        <Box align="center" maxW={600} mx="auto">
          <Text fontSize={19} opacity={0.5}>
            Our Partners
          </Text>
          <Text lineHeight={1.25} fontSize={36} fontWeight={600}>
            We Have Worked with{' '}
            <Text as="span" color="brand">
              10000+
            </Text>{' '}
            Trusted Companies
          </Text>
        </Box>

        <Flex wrap="wrap" align="center" justify="center" gap={12} mt={12}>
          {logos.map((logo, i) => (
            <Image src={logo} maxW={40} key={i} />
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Partners;
