import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/web1.png'
import thumbWalknote from '../public/images/works/web2.png'
import thumbFourPainters from '../public/images/works/debian.jpg'
import thumbMargelo from '../public/images/works/rover.png'
import thumbModeTokyo from '../public/images/works/cube.jpg'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="comweb" title="Commercial website" thumbnail={thumbInkdrop}>
            A dynamic commercial website template using html , animate css and javascript
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem 
            id="perweb"
            title="Personal website"
            thumbnail={thumbWalknote}
          >
            A simple personal website using html css and javascript
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="comser"
            title="Commercial server"
            thumbnail={thumbFourPainters}
          >
           A commercial server , services including (website hosting, ml training, streaming) 
          </WorkGridItem>
        </Section> 
      </SimpleGrid>
     
      <Section delay={6 * 0.1}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Research
        </Heading>
      </Section>


      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="rover" thumbnail={thumbMargelo} title="Rover">
           Automated rover: Raspberry Pi, Arduino Uno, ultrasonic sensors
          </WorkGridItem>
        </Section>
       
       <Section delay={0.3}>
          <WorkGridItem
            id="cube"
            thumbnail={thumbModeTokyo}
            title="Cube satellite"
          >
            Cube Satellite deployed via balloon; innovation in space exploration.
          </WorkGridItem>
              </Section> 
      </SimpleGrid>

   
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
