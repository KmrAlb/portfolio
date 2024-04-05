import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Experience = () => (
  <Layout title="nsdc">
    <Container>
      <Title>
        Electrical technician <Badge>2022</Badge>
      </Title>
      <P>
      I served as an Electrical Technician at the
       National Skill Development Corporation, specializing in electrical connectivity and electronics troubleshooting within the field
      </P>
      
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://nsdcindia.org/">
          https://nsdcindia.org/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Position</Meta>
          <span>Electrical technicain</span>
        </ListItem>
        <ListItem>
          <Meta>Served</Meta>
          <span>november 2022 - september 2023</span>
        </ListItem>
        <ListItem></ListItem>
      </List>
      <WorkImage src="/images/works/nsdc.webp" alt="Inkdrop" />
      <WorkImage src="/images/works/nsdc4.webp" alt="Inkdrop" />
      <WorkImage src="/images/works/nsdc3.webp" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Experience
export { getServerSideProps } from '../../components/chakra'
