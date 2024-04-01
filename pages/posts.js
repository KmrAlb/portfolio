import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import mollosradix from '../public/images/works/mollod.jpg'
import talisha from '../public/images/works/talisha.jpg'
import nsdc from '../public/images/works/nsdc.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Exoerience
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="talisha"
            title="Computer engineer"
            thumbnail={talisha}
          >
            Computer Engineer & HR, Talisha Space Research Organization, Jan
            2024-Present{' '}
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="nsdc"
            title="Electrical technician"
            thumbnail={nsdc}
          >
            Electrical Technician, National Skill Development Corporation, Nov
            2022-Sep 2023{' '}
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="mollos"
            title="Business developer "
            thumbnail={mollosradix}
          >
            Business Development Executive, Mollos Radix Solution Pvt Ltd,
            Jan-Jun 2023.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
