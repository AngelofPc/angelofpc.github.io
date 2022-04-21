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
  Stack,
  WrapItem,
  FormControl,
  FormLabel,
  useColorMode,
  Link,
  Image,
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
} from '@fortawesome/free-solid-svg-icons';

import AceLogoDark from '../../src/assets/images/png/AceOluwapelumiNameLogoWhite.png';
import AceLogoWhite from '../../src/assets/images/png/AceOluwapelumiNameLogoBlack.png';

export default function Footer() {
  const { colorMode } = useColorMode();
  const formBgColor = useColorModeValue('white', '#00186E');
  return (
    <Container
      bg={useColorModeValue('#EDF3FC', '#02054B')}
      maxW="full"
      mt={0}
      p={{ sm: 5, md: 5, lg: 6 }}
      //   centerContent
      overflow="hidden"
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Box h="20">
          <Image
            h="100%"
            src={colorMode === 'light' ? AceLogoDark : AceLogoWhite}
          />
        </Box>
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Blog</Link>
          <Link href={'#'}>Contact</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2022 AceOluwapelumi</Text>
          <Stack direction={'row'} spacing={6}>
            <FontAwesomeIcon
              style={{
                color: colorMode === 'light' ? 'black' : 'white',
              }}
              icon={faTwitter}
            />
          </Stack>
        </Container>
      </Box>
    </Container>
  );
}
