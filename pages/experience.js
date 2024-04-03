import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import mollosradix from '../public/images/works/mollod.webp'
import talisha from '../public/images/works/talisha.webp'
import nsdc from '../public/images/works/nsdc.webp'

const Experience = () => (
  <Layout title="Experience">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Experience
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

export default Experience
export { getServerSideProps } from '../components/chakra'