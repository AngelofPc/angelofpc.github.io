import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  useColorMode,
  Text,
  Button,
  Image,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faHashnode,
} from '@fortawesome/free-brands-svg-icons';
import AceHeader from '../assets/images/png/ace_bitmoji.png';

export default function Header() {
  const { colorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue('#EDF3FC', 'secondary.900')}>
      <Container maxW={'7xl'} pb={10}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'primary.400',
                  zIndex: -1,
                }}
              >
                Howdy!
              </Text>
              <br />
              <Text as={'span'} color={'primary.400'}>
                I'm AceOluwapelumi
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              She gonna tell me too. Hey, look at me when I'm talking to you,
              motherfucker. You listen: we go in there, and that nigga Winston
              or anybody else is in there, you the first motherfucker to get
              shot. You understand?
            </Text>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Blob
              // w={{ base: '100%', md: '150%' }}
              // h={{ base: '100%', md: '150%' }}
              position={'absolute'}
              // top={{ base: '-5%', md: '-20%' }}
              left={0}
              zIndex={-1}
              color={useColorModeValue('red.50', 'primary.400')}
            />
            <Box
            // position={'relative'}
            // height={'300px'}
            // rounded={'2xl'}
            // boxShadow={'2xl'}
            // width={'full'}
            // overflow={'hidden'}/
            >
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={AceHeader}
              />
            </Box>
          </Flex>
        </Stack>
        <Stack
          // my={80}
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
            leftIcon={
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
            leftIcon={
              <FontAwesomeIcon
                style={{ color: colorMode === 'light' ? 'black' : 'white' }}
                icon={faGithub}
              />
            }
          >
            Github
          </Button>
          <Button
            rounded={10}
            size={'lg'}
            fontWeight={'normal'}
            px={6}
            fromcolor="secondary.400"
            tocolor="primary.400"
            variant="gradient"
            leftIcon={
              <FontAwesomeIcon
                style={{ color: colorMode === 'light' ? 'black' : 'white' }}
                icon={faTwitter}
              />
            }
          >
            Twitter
          </Button>
          <Button
            rounded={10}
            size={'lg'}
            fontWeight={'normal'}
            px={6}
            fromcolor="secondary.400"
            tocolor="primary.400"
            variant="gradient"
            leftIcon={
              <FontAwesomeIcon
                style={{ color: colorMode === 'light' ? 'black' : 'white' }}
                icon={faLinkedin}
              />
            }
          >
            LinkedIn
          </Button>
          <Button
            rounded={10}
            size={'lg'}
            fontWeight={'normal'}
            px={6}
            fromcolor="secondary.400"
            tocolor="primary.400"
            variant="gradient"
            leftIcon={
              <FontAwesomeIcon
                style={{ color: colorMode === 'light' ? 'black' : 'white' }}
                icon={faHashnode}
              />
            }
          >
            HashNode
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export const Blob = (props) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
