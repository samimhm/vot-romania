import { Box, Link, Image } from '@chakra-ui/react';

function Navbar() {
  return (
    <Box 
      as="nav" 
      bg="gray.800" 
      py={4} 
      px={8} 
      display="flex" 
      justifyContent="center" 
      alignItems="center"
      borderBottom="1px"
      borderColor="gray.700"
    >
      <Link 
        href="https://applicatino.ro" 
        isExternal
        _hover={{ opacity: 0.8 }}
      >
        <Image 
          src="https://materiale-generale-public.s3.eu-central-1.amazonaws.com/logo.png" 
          alt="Applicatino Logo" 
          height="60px"
          objectFit="contain"
        />
      </Link>
    </Box>
  );
}

export default Navbar;