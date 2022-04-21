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
  Stack,
  Textarea,
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Newsletter() {
  const { colorMode } = useColorMode();
  const formBgColor = useColorModeValue('white', '#00186E');
  return (
    <Box bg={useColorModeValue('#649BE3', 'secondary.900')}>
      <Container
        maxW="7xl"
        mt={0}
        py={{ sm: 15, md: 5, lg: 16 }}
        //   centerContent
        overflow="hidden"
      >
        <Box bg={useColorModeValue('gray.50', 'gray.800')}>
          <Flex
            mx={'auto'}
            maxW="5xl"
            // boxShadow={'inner'}
            align={'center'}
            display="flex"
            justifyContent={'space-between'}
            p={12}
            // bg={useColorModeValue('gray.50', 'gray.800')}
          >
            <Stack w="50%" spacing={2}>
              <Heading
                textTransform={'uppercase'}
                fontSize={'lg'}
                color={useColorModeValue('gray.800', 'gray.200')}
              >
                Subscribe
              </Heading>
              <Text fontSize={'sm'} color={'gray.500'}>
                I send a newsletter once in two weeks, showcasing lessons learnt
                as a developer, tips and general thoughts about being a
                developer.
              </Text>
            </Stack>
            <Stack
              // boxShadow={'2xl'}
              // bg={useColorModeValue('white', 'gray.700')}
              rounded={'xl'}
              p={10}
              w="50%"
              spacing={8}
              align={'center'}
            >
              <Stack
                spacing={4}
                direction={{ base: 'column', md: 'row' }}
                w={'full'}
              >
                <Input
                  type={'text'}
                  placeholder={'john@doe.net'}
                  color={useColorModeValue('gray.800', 'gray.200')}
                  bg={useColorModeValue('gray.100', 'gray.600')}
                  rounded={'lg'}
                  border={0}
                  _focus={{
                    bg: useColorModeValue('gray.200', 'gray.800'),
                    outline: 'none',
                  }}
                />
                <Button
                  rounded={10}
                  size={'md'}
                  fontWeight={'normal'}
                  px={8}
                  fromcolor="secondary.400"
                  tocolor="primary.400"
                  variant="gradient"
                  rightIcon={
                    <FontAwesomeIcon
                      style={{
                        color: colorMode === 'light' ? 'black' : 'white',
                      }}
                      icon={faEnvelope}
                      height={14}
                      width={14}
                    />
                  }
                >
                  Subscribe
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
