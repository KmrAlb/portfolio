import { Container, Heading, SimpleGrid , Box } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'

import thumbCherryBlossoms from '../../public/images/wallpapers/cherry-blossoms/ls-13.jpg'
import thumbMachiya from '../../public/images/wallpapers/machiya/program.jpg'

const service = () => (
  <Layout title="My service">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        My services
      </Heading>

      <Box my={4}>
        I offer a diverse range of services encompassing programming, business
        development, and more, tailored to meet your specific needs and
        objectives.
      </Box>

      <Section>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <WorkGridItem
            category="service"
            id="softronics"
            title="Software & Electronics"
            thumbnail={thumbMachiya}
          >
            Expert in web, software, networking; boost digital innovation.
          </WorkGridItem>
          <WorkGridItem
            category="service"
            id="business"
            title="Business Development"
            thumbnail={thumbCherryBlossoms}
          >
            1-year tech business dev: strategize, analyze, grow efficiently.
          </WorkGridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default service
export { getServerSideProps } from '../../components/chakra'

