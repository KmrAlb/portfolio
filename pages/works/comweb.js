import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="commercialweb">
    <Container>
      <Title>
        Commercial website <Badge>2024</Badge>
      </Title>
      <P>
        A Markdown note-taking app with 100+ plugins, cross-platform and
        encrypted data sync support. The life-time revenue is more than $300k.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://kmralb.github.io/kumar/">
            https://kmralb.github.io/kumar/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Animate Css, Html</span>
        </ListItem>
        <ListItem></ListItem>
      </List>
      <WorkImage src="/images/works/web1.png" alt="Inkdrop" />
      <WorkImage src="/images/works/web3.png" alt="Inkdrop" />
      <WorkImage src="/images/works/web4.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
