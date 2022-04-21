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
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import HeadsByBnxnImage from '../assets/images/png/headsbybnxn.png';
import BnxnHead from '../assets/images/png/bnxnhead.jpeg';

const gridData = [
  {
    image: BnxnHead,
    name: 'HeadsByBnxn',
    link: 'HeadsByBnxn',
    stack: 'December 2021 - Present',
    description: 'Part time',
    repo: 'Lagos, Nigeria',
  },
  {
    image: BnxnHead,
    name: 'HeadsByBnxn',
    link: 'HeadsByBnxn',
    stack: 'December 2021 - Present',
    description: 'Part time',
    repo: 'Lagos, Nigeria',
  },
  {
    image: BnxnHead,
    name: 'HeadsByBnxn',
    link: 'HeadsByBnxn',
    stack: 'December 2021 - Present',
    description: 'Part time',
    repo: 'Lagos, Nigeria',
  },
  {
    image: BnxnHead,
    name: 'HeadsByBnxn',
    link: 'HeadsByBnxn',
    stack: 'December 2021 - Present',
    description: 'Part time',
    repo: 'Lagos, Nigeria',
  },
  {
    image: BnxnHead,
    name: 'HeadsByBnxn',
    link: 'HeadsByBnxn',
    stack: 'December 2021 - Present',
    description: 'Part time',
    repo: 'Lagos, Nigeria',
  },
  {
    image: BnxnHead,
    name: 'HeadsByBnxn',
    link: 'HeadsByBnxn',
    stack: 'December 2021 - Present',
    description: 'Part time',
    repo: 'Lagos, Nigeria',
  },
];

function Projects() {
  const { colorMode } = useColorMode();
  const tabBgColor = useColorModeValue('primary.400', 'secondary.400');
  const textColor = useColorModeValue('primary.400', 'secondary.900');
  const boxBgColor = useColorModeValue('white', 'black');

  return (
    <Box bg={useColorModeValue('#98BDED', 'secondary.900')}>
      <Container py={10} maxW={'7xl'}>
        <Heading textAlign="center" mb={8}>
          Featured Projects
        </Heading>
        <SimpleGrid
          spacing="40px"
          columns={{ sm: 2, md: 3 }}
          // templateColumns="repeat(3, 1fr)"
          // gap={6}
        >
          {gridData.map((project) => {
            return (
              <Box shadow="lg" borderRadius={5} bg={boxBgColor}>
                <Image src={BnxnHead} h={400} borderRadius={5} />
                <Box p={4}>
                  <Text my={3} fontSize="2xl">
                    {project.name}
                  </Text>
                  <Text my={3} fontSize="lg">
                    The HeadsByBnxn Minting Dapp
                  </Text>
                  <Text color={textColor} my={3}>
                    React - Ethersjs - Walletconnet - Web3Modal
                  </Text>
                  <Flex align="center">
                    <Button
                      rounded={10}
                      size={'lg'}
                      fontWeight={'normal'}
                      px={6}
                      mt={3}
                      fromcolor="secondary.400"
                      tocolor="primary.400"
                      variant="gradient"
                      leftIcon={
                        <FontAwesomeIcon
                          style={{
                            color: colorMode === 'light' ? 'black' : 'white',
                          }}
                          icon={faLink}
                        />
                      }
                    >
                      Github
                    </Button>
                    <Link fontSize={'2xl'} ml={4} mt={6}>
                      <FontAwesomeIcon
                        style={{
                          color: colorMode === 'light' ? 'black' : 'white',
                        }}
                        icon={faGithub}
                      />
                    </Link>
                  </Flex>
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
        {/* <Box borderTopWidth={2} /> */}
      </Container>
    </Box>
  );
}

export default Projects;
