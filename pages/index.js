import NextLink from 'next/link';
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react';
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import thumbYouTube from '../public/images/links/web1.png';
import thumbInkdrop from '../public/images/links/web2.png';
import Image from 'next/image';

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
Hello, I&#39;m an indie developer based in পশ্চিমবঙ্গ, India!      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Alok Kumar
          </Heading>
          <p>Digital Craftsman ( Artist / Developer / Engineer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/alok.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Alok Kumar is a freelance and a software developer based in West
          Bengal with a passion for building digital services/stuff he wants. He
          has a knack for all things launching products, from planning and
          designing all the way to solving real-life problems with code. When
          not online, he loves to read novels &amp; poetry, play guitar and
          sometimes sketching.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2005</BioYear>
          Born in West Bengal (পশ্চিমবঙ্গ) , India.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Worked at Mollos Radix Solutions Pvt,Ltd! India{' '}
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Working at Talisha Space Research Organisation
        </BioSection>
        <BioSection>
          <BioYear>2027</BioYear>
          Pursuing the B.tech&apos;s Program in the Computer Science and
          Engineering at Bengal College of Engineering and Technology
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://500px.com/p/xkeystrokes" target="_blank">
            Sketching
          </Link>
          , Playing Guitar,{' '}
          <Link href="https://500px.com/p/xkeystrokes" target="_blank">
            Photography
          </Link>
          , Shitposting, Reading
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/KmrAlb" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @KmrAlb
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/kumar_alok46110" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @kumar_alok
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/abkmr/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @alok b kumar
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://kmralb.github.io/kumar/"
            title="hobby web"
            thumbnail={thumbYouTube}
          >
            was bored, so made this instead (Nest js,html, animate css, js)
          </GridItem>
          <GridItem
            href="https://kmralb.github.io/experimental/"
            title="2nd ex personal web"
            thumbnail={thumbInkdrop}
          >
            A simple static personal website (html,css,js)
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Wanna collab?
        </Heading>
        <p>
        Pursuing the B.tech&#39;s Program in the Computer Science and
Engineering at Bengal College of Engineering and Technology
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="mailto:kumarbalialok@protonmail.com"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Message me here
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from '../components/chakra';
