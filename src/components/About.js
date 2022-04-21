import React from 'react';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  TabList,
  SimpleGrid,
  Grid,
  GridItem,
  Center,
  useColorMode,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  Link,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPaperPlane, faDownload } from '@fortawesome/free-solid-svg-icons';

import HeadsByBnxnImage from '../assets/images/png/headsbybnxn.png';
import BnxnHead from '../assets/images/png/bnxnhead.jpeg';
import AceImage from '../assets/images/png/ace_about_bitmoji.jpg';

function About() {
  const { colorMode } = useColorMode();
  const tabBgColor = useColorModeValue('primary.400', 'secondary.400');
  const textColor = useColorModeValue('primary.400', 'secondary.900');

  return (
    <Box bg={useColorModeValue('#98BDED', 'secondary.900')}>
      <Container py={10} maxW={'7xl'}>
        <Heading textAlign="center" mb={8}>
          About Me
        </Heading>
        <SimpleGrid
          mx={'auto'}
          spacing="40px"
          maxW={'7xl'}
          columns={{ sm: 2, md: 2 }}
          alignItems={'center'}
          justify={'center'}
          // templateColumns="repeat(3, 1fr)"
          // gap={6}
        >
          <Center>
            <Image borderRadius={70} src={AceImage} />
          </Center>
          <Box>
            <Text>Well, my name is</Text>
            <Heading my={3} fontSize={'lg'}>
              O. Oluwapelumi. A.
            </Heading>
            <Text
              lineHeight={8}
              fontSize="sm"
              textColor={useColorModeValue('gray.600', 'gray.300')}
            >
              Normally, both your asses would be dead as fucking fried chicken,
              but you happen to pull this shit while I'm in a transitional
              period so I don't wanna kill you, I wanna help you. But I can't
              give you this case, it don't belong to me. Besides, I've already
              been through too much shit this morning over this case to hand it
              over to your dumb ass.
            </Text>
            <Stack
              my={8}
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
            >
              <Button
                rounded={10}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                color={'white'}
                colorScheme={'primary'}
                bgGradient="linear(to-r, primary.400, secondary.400)"
                _hover={{ bg: 'primary.500' }}
                variant="outline"
                rightIcon={
                  <FontAwesomeIcon icon={faPaperPlane} color={'gray.300'} />
                }
              >
                Contact
              </Button>
              <Button
                rounded={10}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                fromcolor="secondary.400"
                tocolor="primary.400"
                variant="gradient"
                rightIcon={
                  <FontAwesomeIcon
                    style={{ color: colorMode === 'light' ? 'black' : 'white' }}
                    icon={faDownload}
                  />
                }
              >
                Resume
              </Button>
            </Stack>
          </Box>
        </SimpleGrid>
        {/* <Box borderTopWidth={2} /> */}
      </Container>
    </Box>
  );
}

export default About;
