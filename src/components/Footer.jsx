import { Box, Link, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box 
      as="footer" 
      bg="gray.800" 
      py={4} 
      textAlign="center"
      borderTop="1px"
      borderColor="gray.700"
    >
      <Text>
        Construit de{' '}
        <Link 
          href="https://applicatino.ro" 
          color="purple.400" 
          _hover={{ color: 'purple.300' }}
          isExternal
        >
          Applicatino.ro
        </Link>
      </Text>
    </Box>
  );
}

export default Footer;