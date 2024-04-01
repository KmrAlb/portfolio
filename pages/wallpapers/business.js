import NextLink from 'next/link'
import {
  Container,
  Heading,
  AspectRatio,
  Box,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { Title, LegalLinks } from '../../components/wallpaper'
import { BuyButton } from '../../components/payhip'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import WallpaperThumbnailList from '../../components/wallpaper-thumbnail-list'
import { WorkImage } from '../../components/work'
import { EmailIcon } from '@chakra-ui/icons'

const Wallpaper = () => (
  <Layout title="business devlopment">
    <Container>
      <Title>Business devlopment</Title>
      <P>
       As an experienced Business Development Executive, I've had the privilege of collaborating with reputable companies, including Mollos Radix Solution Pvt Ltd. During my tenure there, I spearheaded initiatives that significantly bolstered sales figures, showcasing my adeptness in driving revenue growth. One of my key accomplishments was orchestrating a team of five individuals, harnessing their collective talents to achieve our organizational objectives. My role extended beyond borders as I adeptly navigated through interactions with both international and domestic clients, ensuring seamless communication and fostering robust relationships.
      </P>

      <Box
        align="center"
        my={4}
        p={4}
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        <Box mb={4}>
          <em>
            Experienced Business Development Executive skilled in sales, team leadership, and client relations, driving organizational growth
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

          <WorkImage src="/images/works/business.jpg" alt="Margelo" />

      <P>
       Through strategic planning and a keen understanding of market dynamics, I played an instrumental role in positioning the company for sustained success, leaving a lasting impact on its trajectory of growth and expansion.
      </P>

          
    </Container>
  </Layout>
)

export default Wallpaper
export { getServerSideProps } from '../../components/chakra'