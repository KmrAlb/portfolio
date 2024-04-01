import NextLink from 'next/link'
import {
  Container,
  Heading,
  AspectRatio,
  Button,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import { Title} from '../../components/wallpaper'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { WorkImage } from '../../components/work'
import { EmailIcon } from '@chakra-ui/icons'


import WallpaperThumbnailList from '../../components/wallpaper-thumbnail-list'

const Wallpaper = () => (
  <Layout title="Machiya coding wallpaper pack">
    <Container>
      <Title>Software devlopment && electronics</Title>


  <p>
    With expertise spanning both software development and electronics, I bring a versatile skill set to the table. 
    Proficient in HTML, CSS, JavaScript, React, and Next.js, I have a solid foundation in modern web development technologies. Additionally, my experience extends to the realm of electronics, where I have worked extensively with Raspberry Pi and Arduino Uno platforms. 
    This dual proficiency enables me to seamlessly bridge the gap between software and hardware, tackling projects that require integration across disciplines. 
    Whether it's crafting dynamic web applications or designing innovative electronic solutions, I am committed to delivering high-quality results with precision and creativity.
  </p>



      <Box
        align="center"
        my={4}
        p={4}
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        <Box mb={4}>
          <em>
            Skilled in web development and electronics. Ready to innovate and deliver exceptional results. Click below to hire or collaborate.
          </em>
        </Box>
 <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="mailto:kumarbalialok@protonmail.com"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Message me here
          </Button>
        </Box>
  
        </Box>
      <WorkImage src="/images/works/work1.jpg" alt="Margelo" />

      <P>
       My passion for technology and dedication to continuous learning make me a valuable asset to any team seeking to push the boundaries of innovation.
      </P>

    </Container>
  </Layout>
)

export default Wallpaper
export { getServerSideProps } from '../../components/chakra'

