import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select, 
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import Usa from "assets/img/dashboards/india.png";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React, { useEffect, useState } from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import MapCard from "./components/MapCard";
import { FaWind } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa6";

export default function UserReports() {

  const [city, setCity] = useState('delhi');
  const [temperature, setTemperature] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [humidity, setHumidity] = useState(0);

  const cities = [
    'Delhi',
    'Mumbai',
    'Kolkata',
    'Bangalore',
    'Chennai',
    'Hyderabad',
    'Ahmedabad',
    'Pune',
    'Jaipur',
    'Surat',
    'Lucknow',
    'Kanpur',
    'Nagpur',
    'Patna',
    'Indore',
    'Bhopal',
    'Ludhiana',
    'Agra',
    'Nashik',
    'Vadodara',
    'Meerut',
    'Rajkot',
    'Varanasi',
    'Amritsar',
    'Allahabad',
    'Visakhapatnam',
    'Guwahati',
    'Gwalior',
    'Jodhpur',
    'Coimbatore',
    'Madurai',
    'Tiruchirappalli',
    'Chandigarh',
    'Jamshedpur',
    'Kochi',
    'Thiruvananthapuram',
    'Mysore',
    'Dehradun',
    'Ranchi',
    'Vijayawada',
    'Dhanbad',
    'Faridabad',
    'Ghaziabad',
    'Noida',
    'Gurgaon',
    'Aurangabad',
    'Jabalpur',
    'Udaipur',
    'Mangalore',
    'Hubli',
    'Belgaum',
    'Salem'
  ];
  
  const fetchData = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ca1661e568c2b368cb4a1aa115e6fc23`
      );
      const data = await response.json();

      console.log(data);

      setTemperature(data.main.temp);
      setWindSpeed(data.wind.speed);
      setPressure(data.main.pressure);
      setHumidity(data.main.humidity);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchData(city); // Fetch data when city changes
  }, [city]);

  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  // Handle dropdown change
  const handleCityChange = (e) => {
    setCity(e.target.value); // Update city state on selection
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Dropdown for city selection */}
      <Select mb="20px" value={city} onChange={handleCityChange} placeholder="Select a city">
        {cities.map((city) => (
          <option key={city} value={city.toLowerCase()}>{city}</option>
        ))}
      </Select>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={FaTemperatureHigh} color={brandColor} />
              }
            />
          }
          name="Temperature"
          value={`${temperature}°C`}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={FaWind} color={brandColor} />
              }
            />
          }
          name="Wind Speed"
          value={`${windSpeed} m/s`}
        />
        <MiniStatistics growth="56" name="Pressure" value={`${pressure} hPa`} />
        <MiniStatistics
          endContent={
            <Flex me='-16px' mt='10px'>
              <FormLabel htmlFor='balance'>
                <Avatar src={Usa} />
              </FormLabel>
            </Flex>
          }
          name="Humidity"
          value={`${humidity}%`}
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
        <WeeklyRevenue />
        <TotalSpent />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <DailyTraffic />
          <PieCard />
        </SimpleGrid>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
        <MapCard />
      </SimpleGrid>
    </Box>
  );
}
