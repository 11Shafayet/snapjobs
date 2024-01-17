import { Container, Text, Flex, Image, Tag } from '@chakra-ui/react';
import heroBanner from '/images/hero-abstract.png';

const Hero = () => {
  return (
    <Flex
      color="black"
      justify="center"
      align="center"
      bg="red.50"
      minH="80vh"
      py={20}
    >
      <Container mx="auto" maxW="1440px" px={{ base: 5, md: 20 }}>
        <Flex
          align="center"
          h="full"
          direction={{ base: 'column', lg: 'row' }}
          gap={12}
        >
          <Flex direction="column" w={{ base: '100%', lg: '45%' }}>
            <Tag
              fontSize={14}
              maxW="fit-content"
              px={4}
              size="lg"
              borderRadius="full"
              bg="red.100"
            >
              Get Trending Jobs
            </Tag>
            <Text
              fontSize={{ base: '36', md: '60' }}
              fontWeight={700}
              lineHeight={1.3}
            >
              Explore More Than{' '}
              <Text as="span" color="brand">
                7840+
              </Text>{' '}
              Jobs
            </Text>
            <Text fontSize="20" lineHeight="1.4" opacity={0.6} mt={4}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque
            </Text>
          </Flex>
          <Image
            w={{ base: '100%', lg: '55%' }}
            src={heroBanner}
            maxW="full"
            h="auto"
            objectFit="cover"
          />
        </Flex>
      </Container>
    </Flex>
  );
};

export default Hero;
