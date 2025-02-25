// Chakra imports
import {
  Box,
  Text,
  SimpleGrid,
  useColorModeValue,
  Grid,
  Card,
} from "@chakra-ui/react";
import React from "react";
import Information from "../profile/components/Information";
import { notification } from "constants/globalConstants";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Grid
        mb="20px"
        templateColumns={{
          base: "1fr",
          lg: "repeat(1, 1fr)",
          "2xl": "1.34fr 1.62fr 1fr",
        }}
        templateRows={{
          base: "1fr",
          lg: "repeat(1, 1fr)",
          "2xl": "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}
      >
        <Card
          mb={{ base: "0px", "2xl": "20px" }}
          boxShadow={cardShadow} 
          borderRadius="20px"
          bg={boxBg}
          p="20px"
        >
          <Text
            color={textColorPrimary}
            fontWeight="bold"
            fontSize="2xl"
            mt="10px"
            mb="4px"
          >
            {notification.name}
          </Text>
          <Text color={textColorSecondary} fontSize="md" me="26px" mb="40px">
            {notification.notificationInfo}
          </Text>
          <SimpleGrid columns={2} gap="20px">
            {notification.notifications.map((item,index)=>{
              return <Information boxShadow={cardShadow} title={item.title} value={item.value}/>
            })}
          </SimpleGrid>
        </Card>
      </Grid>
    </Box>
  );
}
