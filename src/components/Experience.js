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
  useColorMode,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react';

function Experience() {
  const tabBgColor = useColorModeValue('primary.400', 'secondary.400');
  function DataTabs({ data }) {
    return (
      <Box bg={useColorModeValue('#649BE3', 'secondary.900')}>
        <Container pt={10} pb={10} maxW={'7xl'}>
          <Heading textAlign="center" mb={8}>
            Experience
          </Heading>
          <Tabs
            size="lg"
            orientation="vertical"
            variant={'unstyled'}
            isLazy
            isFitted
            colorScheme="red"
          >
            <TabList>
              {data.map((tab, index) => (
                <Tab
                  borderLeftWidth={3}
                  _selected={{
                    color: 'white',
                    bg: tabBgColor,
                  }}
                  _hover={{ color: 'white', bg: 'red.500' }}
                  key={index}
                >
                  {tab.company}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {data.map((tab, index) => (
                <TabPanel key={index}>
                  <Box mt={-5} ml={6}>
                    <Flex
                      display={{ md: 'flex' }}
                      justify={'space-between'}
                      alignItems="center"
                    >
                      <Heading fontSize={'lg'}>
                        {tab.title} ({tab.type})
                      </Heading>
                      <Text>{tab.duration}</Text>
                    </Flex>
                    <Text my={5}>
                      {tab.company} - {tab.location}.
                    </Text>
                    {tab.responsibility.map((text) => {
                      return (
                        <Text ml={2} my={3}>
                          - {text}
                        </Text>
                      );
                    })}
                  </Box>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
          <Box borderTopWidth={3} />
        </Container>
      </Box>
    );
  }

  const tabData = [
    {
      title: 'Web3 Developer',
      company: 'HeadsByBnxn',
      duration: 'December 2021 - Present',
      type: 'Part time',
      location: 'Lagos, Nigeria',
      responsibility: [
        'Smart Contract Creation',
        'Integration of Contract to Minting Dapp',
      ],
      content: 'Perhaps the greatest dish ever invented.',
    },
    {
      title: 'Web3 Developer',
      company: 'LFG Pass NFT',
      duration: 'March 2022 - April 2022',
      type: 'Contract',
      location: 'USA',
      responsibility: ['Smart Contract Creation'],
      content: 'Perhaps the greatest dish ever invented.',
    },
    {
      title: 'Web3 Developer',
      company: 'JackedApeClub',
      duration: 'December 2021 - February 2022',
      type: 'Contract',
      location: 'USA',
      responsibility: ['Smart Contract Creation'],
      content: 'Perhaps the greatest dish ever invented.',
    },
    {
      title: 'Frontend Developer',
      company: 'Replevy21',
      duration: 'October 2021',
      type: 'Contract',
      location: 'Lagos,Nigeria',
      responsibility: ['Smart Contract Creation'],
      content: 'Perhaps the greatest dish ever invented.',
    },
    {
      title: 'Frontend Developer',
      company: 'LinkhubOnline',
      duration: 'July 2021 - Present',
      type: 'Part time',
      location: 'Lagos,Nigeria',
      responsibility: ['Smart Contract Creation'],
      content: 'Perhaps the greatest dish ever invented.',
    },

    {
      title: 'Mobile & Frontend Developer',
      company: 'Slate',
      duration: 'January 2021 - Present',
      type: 'Remote',
      location: 'Lagos,Nigeria',
      responsibility: ['Smart Contract Creation'],
      content: 'Perhaps the greatest dish ever invented.',
    },

    {
      title: 'Fullstack Developer',
      company: 'Rumi Africa',
      duration: 'July 2020 - January 2022',
      type: 'Fulltime',
      location: 'Lagos,Nigeria',
      responsibility: ['Smart Contract Creation'],
      content: 'Perhaps the greatest dish ever invented.',
    },
    {
      title: 'Mobile & Frontend Developer',
      company: 'Cogart Studio',
      duration: 'November 2020 - July 2021',
      type: 'Fulltime',
      location: 'Lagos,Nigeria',
      responsibility: ['Smart Contract Creation'],
      content: 'Perhaps the greatest dish ever invented.',
    },
  ];

  // 3. Pass the props and chill!
  return <DataTabs data={tabData} />;
}

export default Experience;
