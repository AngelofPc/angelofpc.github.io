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
    name: 'Web',
    text: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men.',
  },
  {
    image: BnxnHead,
    name: 'Mobile',
    text: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men.',
  },
  {
    image: BnxnHead,
    name: 'Blockchain',
    text: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men.',
  },
  {
    image: BnxnHead,
    name: 'Technical Writing',
    text: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men.',
  },
];

function Areas() {
  const { colorMode } = useColorMode();
  const tabBgColor = useColorModeValue('primary.400', 'secondary.400');
  const textColor = useColorModeValue('primary.400', 'secondary.900');

  return (
    <Box bg={useColorModeValue('#EDF3FC', 'secondary.900')}>
      <Container justify="center" py={5} maxW={'7xl'}>
        <Heading mb={5}>Focus</Heading>
        <SimpleGrid
          mx={'auto'}
          maxW={'6xl'}
          spacing="40px"
          columns={{ sm: 1, md: 4 }}
          // templateColumns="repeat(3, 1fr)"
          // gap={6}
        >
          {gridData.map((skill) => {
            return (
              <Box borderWidth={2} p={4} shadow={'inner'} borderRadius={10}>
                <Link fontSize={'5xl'} ml={4}>
                  <FontAwesomeIcon
                    style={{
                      color: colorMode === 'light' ? 'black' : 'white',
                    }}
                    icon={faGithub}
                  />
                </Link>

                <Heading as="h2" my={4} fontSize="lg">
                  {skill.name}
                </Heading>
                <Text my={6} fontSize="sm">
                  {skill.text}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
        {/* <Box borderTopWidth={2} /> */}
      </Container>
    </Box>
  );
}

export default Areas;
