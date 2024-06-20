import { Container, Text, VStack, Heading, Box, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Box boxSize="150px">
          <Image src="/images/profile-pic.jpg" alt="Profile Picture" borderRadius="full" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Hi, I'm [Your Name], a passionate blogger who loves to write about technology, programming, and personal development.
        </Text>
        <VStack spacing={4}>
          <Link href="https://twitter.com/yourprofile" isExternal>
            <FaTwitter size="30px" />
          </Link>
          <Link href="https://github.com/yourprofile" isExternal>
            <FaGithub size="30px" />
          </Link>
          <Link href="https://linkedin.com/in/yourprofile" isExternal>
            <FaLinkedin size="30px" />
          </Link>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;