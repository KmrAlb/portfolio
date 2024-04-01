import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Commercial Server">
    <Container>
      <Title>
        Commercial Server <Badge>2022</Badge>
      </Title>
      <P>
        A versatile commercial server offering website hosting, ML AI training, streaming, and various other services for comprehensive digital infrastructure solutions
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Docker, Kubernetes , Jellyfin , TensorFlow , Nvidia cuda , Nextcloud</span>
        </ListItem>
        <ListItem>
         
        </ListItem>
       
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center> Displaying service hosted </Center>
      </Heading>

      
      <WorkImage
        src="/images/works/server4.png"
      />
      <WorkImage src = "/images/works/server3.png" />
      <WorkImage src="/images/works/server1.png"  />
      <WorkImage src="/images/works/server2.png" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
