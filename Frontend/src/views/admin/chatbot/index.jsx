import { Box, Button, Heading, HStack, Input, Spinner, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import runChat from "./gemini";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; 

export default function Overview() {

  const [messages, setMessages] = useState([]); // To store user and bot messages
  const [userMessage, setUserMessage] = useState(''); // To handle the input message
  const [isLoading, setIsLoading] = useState(false); // To handle loading state for bot's response

  // Function to handle sending the message
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!userMessage.trim()) return;

    const newMessages = [...messages, { user: true, text: userMessage }]; // Add user message
    setMessages(newMessages);
    setUserMessage(''); // Clear input
    setIsLoading(true);

    let customMessage = userMessage+`  You are PrakritiBot, a specialized chatbot developed for a GHG Smart City Dashboard. Your primary role is to provide accurate, clear, and detailed information regarding greenhouse gases (GHGs), environmental issues, and related governmental policies. You will also offer insights about the GHG Smart City Dashboard and its features,and also give advices to prevent pollution and also provise data about the these things.

    Strict Guidelines:

You are strictly prohibited from engaging in topics outside of GHG emissions, environmental issues, related policies, and the GHG Smart City Dashboard.
Your focus must remain solely on educating users about environmental concerns and assisting them with relevant dashboard functionalities.
Remember to prioritize user education, data accuracy, and actionable advice in every response you provide.

Your responsibilities include:

Environmental Emissions Information: Provide accurate data on various greenhouse gases, including CO₂, methane (CH₄), nitrous oxide (N₂O), and others. Explain data trends, their implications on climate change, and how they affect the broader environment.

Dashboard Insights: Inform users about the functionalities and features of the GHG Smart City Dashboard, helping them navigate and utilize the dashboard effectively.

Actionable Advice: Suggest ways to understand and mitigate environmental emissions based on the latest data. Offer practical tips for individuals, businesses, and policymakers on how to reduce their carbon footprints and contribute to environmental sustainability.

User Education: Facilitate a better understanding of GHG emissions, their sources, and their impact on the environment. Educate users on environmental policies and regulations, as well as effective strategies for compliance and improvement.

Policy Guidance: Provide insights on current environmental policies and regulations at local, national, and global levels. Offer advice on best practices for individuals and organizations to align with these policies.

Data Retrieval: Fetch the latest environmental data from the dashboard's API when requested, providing real-time or most recent data relevant to the user’s inquiries.

Professional Engagement: Maintain a professional yet engaging tone in all interactions. Be friendly and responsive, creating a positive user experience.
`
    // console.log(customMessage)

    try {
      const response = await runChat(customMessage); // Get bot's response
      // const response = await runChat(userMessage); // Get bot's response
      setMessages([...newMessages, { user: false, text: response }]); // Add bot's response
    } catch (error) {
      setMessages([...newMessages, { user: false, text: 'Error: Could not get a response.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box maxW="lg" mx="auto" mt="100px" p={5} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <Heading as="h1" size="lg" textAlign="center" mb={5}>
        Chat with PrakritiBot
      </Heading>
      <VStack spacing={4} align="stretch" bg="gray.50" p={5} borderRadius="md" boxShadow="md">
        <Box overflowY="auto" maxH="400px" p={5} borderWidth={1} borderRadius="md" bg="white">
          {messages.map((msg, index) => (
            <Box key={index} mb={2} textAlign={msg.user ? 'right' : 'left'}>
              <Text
                bg={msg.user ? 'blue.500' : 'green.500'}
                color="white"
                p={5} // Increased padding from 3 to 4 (20px more)
                borderRadius="md"
                display="inline-block"
                maxW="80%"
              >
                <Markdown remarkPlugins={[remarkGfm]}>{msg.text}</Markdown>
              </Text>
            </Box>
          ))}
          {isLoading && (
            <Box display="flex" justifyContent="center" mt={2}>
              <Spinner />
            </Box>
          )}
        </Box>
        <form onSubmit={sendMessage}>
          <HStack>
            <Input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type your message..."
              size="lg"
              borderColor="blue.400"
              focusBorderColor="blue.500"
            />
            <Button type="submit" colorScheme="blue" size="lg" isLoading={isLoading}>
              Send
            </Button>
          </HStack>
        </form>
      </VStack>
    </Box>
  );
}
