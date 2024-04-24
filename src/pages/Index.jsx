import { useState } from 'react';
import { Box, Flex, Input, Button, Text, VStack, HStack, Avatar } from '@chakra-ui/react';
import { FaUser, FaTwitter } from 'react-icons/fa';

const Index = () => {
  const [tweet, setTweet] = useState('');
  const [tweets, setTweets] = useState([]);
  const handleTweet = () => {
      if (tweet.trim() !== '') {
          setTweets([...tweets, { id: Date.now(), content: tweet }]);
          setTweet('');  // Clear the input after posting
      } else {
          console.log("No content to tweet");
      }
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
          <Button colorScheme="twitter" onClick={handleTweet} isDisabled={tweet.trim() === ''}>Tweet</Button>
        </HStack>
        {tweets.map(tweet => (
            <Box key={tweet.id} width="100%" p={5} boxShadow="base" borderRadius="lg">
                <HStack spacing={3}>
                    <Avatar name="User" src="" />
                    <Text fontWeight="bold">User</Text>
                </HStack>
                <Text mt={2}>
                    {tweet.content}
                </Text>
            </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;