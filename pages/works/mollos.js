import { Container, Badge, Link, List, ListItem , UnorderedList } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Mollos = () => (
  <Layout title="mollos">
    <Container>
      <Title>
        Business devlopment executive <Badge>2023</Badge>
      </Title>
      <P>
      As a Business Development Executive at Mollos Radix Solutions Pvt Ltd, 
      I successfully led a team of five members and significantly increased revenue through strategic initiatives and effective leadership
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>
        Led a team of five professionals to drive business development initiatives at Mollos Radix Solutions Pvt Ltd.
        </ListItem>
        <ListItem>
        Achieved significant revenue growth through strategic planning and execution.
        </ListItem>
        <ListItem>
        Garnered recognition from the CEO for performance and contributions to company success.
        </ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.mollosradix.com/">
          https://www.mollosradix.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Position</Meta>
          <span>Business devlopment executive</span>
        </ListItem>
        <ListItem>
          <Meta>Served</Meta>
          <span>January 2023 - July 2023</span>
        </ListItem>
        <ListItem></ListItem>
      </List>
      <WorkImage src="/images/works/mollos4.webp" alt="Inkdrop" />
      <WorkImage src="/images/works/mollos2.webp" alt="Inkdrop" />
      <WorkImage src="/images/works/mollos3.webp" alt="Inkdrop" />
    </Container>
  </Layout>
);

export default Mollos;
export { getServerSideProps } from '../../components/chakra';