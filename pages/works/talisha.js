import { Container, Badge, Link, List, ListItem , UnorderedList ,Heading ,  Center , SimpleGrid} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Experience = () => (
  <Layout title="mollos radix">
    <Container>
      <Title>
        Computer Engineer <Badge>2023</Badge>
      </Title>
      <P>
        Working for Talisha Apace Organization as a computer engineer and HR specialist. I contributed to a 
        cube satellite project and developed a fully automated rover that autonomously picked up and delivered payloads from start to destination
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          Participated in the rover mission, achieving selection among the top 75 teams nationwide
        </ListItem>
        <ListItem>
          Contributed to the &quot;Mission Orbit&quot; cube satellite project
        </ListItem>
        <ListItem>
          Developed and maintained the company website
        </ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://kmralb.github.io/kumar/">
            https://kmralb.github.io/kumar/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Position</Meta>
          <span>Computer engineer &amp; hr</span>
        </ListItem>
        <ListItem>
          <Meta>Served</Meta>
          <span>January 2024 - present</span>
        </ListItem>
        <ListItem></ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Visual depiction</Center>
      </Heading>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/talisha.webp" alt="amembo" />
        <WorkImage src="/images/works/cube4.webp" alt="amembo" />
      </SimpleGrid>
      <WorkImage src="/images/works/cube.webp" alt="amembo" />
      <WorkImage src="/images/works/cube3.webp" alt="amembo" />
    </Container>
  </Layout>
)

export default Experience
export { getServerSideProps } from '../../components/chakra'
