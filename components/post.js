import NextLink from 'next/link'
import { Heading, Box, Link } from '@chakra-ui/react'

const PostsPage = () => (
  <Box>
    <NextLink href="/posts">
      <Link>Posts</Link>
    </NextLink>
    <Heading as="h3" fontSize={20} mb={4}>
      Posts Page
    </Heading>
  </Box>
)

export default PostsPage
