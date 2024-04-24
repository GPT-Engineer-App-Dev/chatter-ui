import { useState } from 'react';
import { Box, Flex, Input, Button, Text, VStack, HStack, Avatar } from '@chakra-ui/react';
import { FaUser, FaTwitter } from 'react-icons/fa';

const Index = () => {
  const [tweet, setTweet] = useState('');
  const handleTweet = () => {
      console.log("Tweet posted:", tweet);
      setTweet('');  // Clear the input after posting
  };

  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={5}>
        <HStack spacing={3}>
          <FaTwitter size="2em" color="#1DA1F2" />
          <Text fontSize="2xl" fontWeight="bold">MiniTwitter</Text>
        </HStack>
        <Button leftIcon={<FaUser />} colorScheme="twitter">Profile</Button>
      </Flex>
      <VStack spacing={4}>
        <HStack width="100%">
          <Avatar name="User" src="" />
          <Input placeholder="What's happening?" value={tweet} onChange={(e) => setTweet(e.target.value)} />
          <Button colorScheme="twitter" onClick={handleTweet}>Tweet</Button>
        </HStack>
        <Box width="100%" p={5} boxShadow="base" borderRadius="lg">
          <HStack spacing={3}>
            <Avatar name="John Doe" src="" />
            <Text fontWeight="bold">John Doe</Text>
          </HStack>
          <Text mt={2}>
            Just setting up my MiniTwitter! #firstTweet
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;