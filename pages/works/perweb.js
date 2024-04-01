import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Personal Web">
    <Container>
      <Title>
        Personal website <Badge>2023</Badge>
      </Title>
      <P>
        This is a simple website i used to use as a my personal website for
        showcasing my services.
      </P>
      <P>
        <Link
          href="https://youtu.be/0YFrGy_mzjY?si=y-xKe4rKd6zP_2ve"
          target="_blank"
        >
          Greatstack <ExternalLinkIcon mx="2px" />
        </Link>
        , helped inspire to make this site and it was my first project in web
        devlopment.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://kmralb.github.io/experimental/" target="_blank">
              https://kmralb.github.io/experimental/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java script / Html / Css</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/web2.png" alt="Website" />

      <WorkImage src="/images/works/per1.png" alt="Margelo" />
      <WorkImage src="/images/works/per3.png" alt="Margelo" />
      <WorkImage src="/images/works/per2.png" alt="Margelo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
