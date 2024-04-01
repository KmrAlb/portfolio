import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="cube">
    <Container>
      <Title>
        Cube satellite <Badge>2024</Badge>
      </Title>
      <P>
        We deployed a Cube Satellite via high-altitude balloon, advancing space
        exploration with precision and innovation Our achievement garnered
        widespread attention, with numerous
        <Link
          href="https://www.linkedin.com/posts/talisha-space-research-organization-63b746292_talishaspace-isro-abirghosh-activity-7162670549800796160-ylcY?utm_source=share&utm_medium=member_desktop"
          target="_blank"
        >
          newspaper <ExternalLinkIcon mx="2px" />
        </Link>
        covering our groundbreaking story of scientific discovery and
        technological prowess."
      </P>
      <P>
        हमने सटीकता और नवीनता के साथ अंतरिक्ष अन्वेषण को आगे बढ़ाते हुए, उच्च
        ऊंचाई वाले गुब्बारे के माध्यम से एक क्यूब सैटेलाइट तैनात किया। हमारी
        उपलब्धि ने व्यापक ध्यान आकर्षित कई
        <Link
          href="https://www.linkedin.com/posts/talisha-space-research-organization-63b746292_talishaspace-isro-abirghosh-activity-7162670549800796160-ylcY?utm_source=share&utm_medium=member_desktop"
          target="_blank"
        >
          समाचार <ExternalLinkIcon mx="2px" />
        </Link>{' '}
        पत्रों ने वैज्ञानिक खोज और तकनीकी कौशल की हमारी अभूतपूर्व कहानी को कवर
        किया।
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Launch</Meta>
          <span>space balloon</span>
        </ListItem>
        <ListItem>
          <Meta>Payload</Meta>
          <span>cube satellite</span>
        </ListItem>
        <ListItem>
          <Meta>Press release</Meta>
          <Link href="https://www.linkedin.com/posts/talisha-space-research-organization-63b746292_abir-activity-7110983060816297984-vBR1?utm_source=share&utm_medium=member_desktop">
            Our press release details our groundbreaking venture, highlighting
            key features and payloads
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/cube4.jpg" alt="mode.tokyo" />
      <WorkImage src="/images/works/cube4.png" alt="mode.tokyo" />
      <WorkImage src="/images/works/cube2.jpg" alt="mode.tokyo" />
      <WorkImage src="/images/works/cube3.jpg" alt="mode.tokyo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
