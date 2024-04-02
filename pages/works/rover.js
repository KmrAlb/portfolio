import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="amembo">
    <Container>
      <Title>
        Rover <Badge>2024</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/amembo_icon.png" alt="icon" />
      </Center>
      <P>
        Our rover was fully automated, capable of autonomously picking up
        payloads and delivering them from start to destination entirely on its
        own.
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          Successfully participated in the ISRO URSC 2024 Rover Making
          Competition.
        </ListItem>
        <ListItem>
          Selected among the top 75 teams out of 4000 colleges across all over
          India.
        </ListItem>
        <ListItem>
          Received significant press coverage and recognition from college
          authorities.
        </ListItem>
        <ListItem>
          Developed a fully automated rover capable of independent object
          detection and transportation.
        </ListItem>
        <ListItem>
          Rover powered by Raspberry Pi, Arduino Uno, and ultrasonic sensors,
          showcasing advanced technology integration.
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Organizer</Meta>
          <span>ISRO URSC 2024</span>
        </ListItem>
        <ListItem>
          <Meta>Integration</Meta>
          <span>deep learning, ai & ml, Arduino Uno, Raspberry Pi</span>
        </ListItem>
        <ListItem>
          <Meta>Media coverage</Meta>
          <Link href="https://www.linkedin.com/posts/talisha-space-research-organization-63b746292_talishaspace-isro-abirghosh-activity-7162670549800796160-ylcY?utm_source=share&utm_medium=member_desktop">
            received press coverage and recognition from college authorities
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Visual depiction</Center>
      </Heading>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/rover3.jpg" alt="amembo" />
        <WorkImage src="/images/works/rover0.jpg" alt="amembo" />
      </SimpleGrid>
      <WorkImage src="/images/works/rover2.png" alt="amembo" />
      <WorkImage src="/images/works/rover4.jpg" alt="amembo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
