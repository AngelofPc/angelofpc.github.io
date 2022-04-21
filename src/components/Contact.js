import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  SimpleGrid,
  WrapItem,
  FormControl,
  FormLabel,
  useColorMode,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  Textarea,
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faDiscord,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faMessage,
  faMapLocationDot,
  faUser,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const { colorMode } = useColorMode();
  const formBgColor = useColorModeValue('white', '#00186E');
  return (
    <Box bg={useColorModeValue('#98BDED', 'secondary.900')}>
      <Container
        maxW="7xl"
        mt={0}
        py={{ sm: 15, md: 5, lg: 16 }}
        //   centerContent
        overflow="hidden"
      >
        <Flex my={8}>
          <Box
            m={{ xs: 4, sm: 14, md: 16, lg: 10 }}
            w={{ sm: '100%', md: '7xl' }}
            bg="#02054B"
            color="white"
            borderRadius="lg"
          >
            <SimpleGrid
              spacing="40px"
              columns={{ sm: 1, md: 2 }}
              justify={'space-between'}
              p={4}
            >
              {/* <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}> */}
              {/* <WrapItem> */}
              <Box p={{ sm: 4, md: 5, lg: 20 }}>
                <Heading>Contact</Heading>
                <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                  Fill up the form below to contact
                </Text>
                <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                  <VStack pl={0} spacing={3} alignItems="flex-start">
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="#DCE2FF"
                      _hover={{ border: '2px solid #1C6FEB' }}
                      leftIcon={
                        <FontAwesomeIcon
                          style={{
                            color: colorMode === 'light' ? 'black' : 'white',
                          }}
                          icon={faPhone}
                        />
                      }
                    >
                      +91-988888888
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="#DCE2FF"
                      _hover={{ border: '2px solid #1C6FEB' }}
                      leftIcon={
                        <FontAwesomeIcon
                          style={{
                            color: colorMode === 'light' ? 'black' : 'white',
                          }}
                          icon={faMessage}
                        />
                      }
                    >
                      hello@abc.com
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="#DCE2FF"
                      _hover={{ border: '2px solid #1C6FEB' }}
                      leftIcon={
                        <FontAwesomeIcon
                          style={{
                            color: colorMode === 'light' ? 'black' : 'white',
                          }}
                          icon={faMapLocationDot}
                        />
                      }
                    >
                      Karnavati, India
                    </Button>
                  </VStack>
                </Box>
                <HStack
                  mt={{ lg: 10, md: 10 }}
                  spacing={5}
                  px={5}
                  alignItems="flex-start"
                >
                  <IconButton
                    aria-label="facebook"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: '#0D74FF' }}
                    icon={
                      <FontAwesomeIcon
                        style={{
                          color: colorMode === 'light' ? 'black' : 'white',
                        }}
                        icon={faTwitter}
                      />
                    }
                  />
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: '#0D74FF' }}
                    icon={
                      <FontAwesomeIcon
                        style={{
                          color: colorMode === 'light' ? 'black' : 'white',
                        }}
                        icon={faGithub}
                      />
                    }
                  />
                  <IconButton
                    aria-label="discord"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: '#0D74FF' }}
                    icon={
                      <FontAwesomeIcon
                        style={{
                          color: colorMode === 'light' ? 'black' : 'white',
                        }}
                        icon={faDiscord}
                      />
                    }
                  />
                </HStack>
              </Box>
              {/* </WrapItem> */}
              {/* <WrapItem> */}
              <Box bg={formBgColor} w={''} borderRadius="lg">
                <Box m={8} color="#0B0E3F">
                  <VStack spacing={5}>
                    <FormControl id="name">
                      <FormLabel>Your Name</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={
                            <FontAwesomeIcon
                              style={{
                                color:
                                  colorMode === 'light' ? 'black' : 'white',
                              }}
                              icon={faUser}
                            />
                          }
                        />
                        <Input type="text" size="md" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel>Mail</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={
                            <FontAwesomeIcon
                              style={{
                                color:
                                  colorMode === 'light' ? 'grey.800' : 'white',
                              }}
                              icon={faMessage}
                            />
                          }
                        />
                        <Input type="text" size="md" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        borderColor="gray.300"
                        _hover={{
                          borderRadius: 'gray.300',
                        }}
                        placeholder="message"
                      />
                    </FormControl>
                    <FormControl id="name" float="right">
                      <Button
                        rounded={10}
                        size={'md'}
                        fontWeight={'normal'}
                        px={8}
                        color={colorMode === 'light' ? 'black' : 'white'}
                        fromcolor="secondary.400"
                        tocolor="primary.400"
                        variant="gradient"
                        rightIcon={
                          <FontAwesomeIcon
                            style={{
                              color: colorMode === 'light' ? 'black' : 'white',
                            }}
                            icon={faPaperPlane}
                            height={14}
                            width={14}
                          />
                        }
                      >
                        Send Message
                      </Button>
                    </FormControl>
                  </VStack>
                </Box>
              </Box>
              {/* </WrapItem> */}
              {/* </Wrap> */}
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
