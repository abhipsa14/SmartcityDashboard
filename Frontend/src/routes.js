import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from 'react-icons/md';

import { LuTarget } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import { FaGlobe,FaGlobeAmericas  } from "react-icons/fa";
import { TbMessageChatbot } from "react-icons/tb";

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';
import RTL from 'views/admin/rtl';
import ChatBot from 'views/admin/chatbot';




const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'MAP',
    layout: '/admin',
    path: '/map',
    icon: (
      <Icon
        as={FaGlobeAmericas }
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <NFTMarketplace />,
  },
  {
    name: 'Data Tables',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/data-tables',
    component: <DataTables />,
  },
  {
    name: 'Chatbot',
    layout: '/admin',
    path: '/chatbot',
    icon: <Icon as={TbMessageChatbot} width="20px" height="20px" color="inherit" />,
    component: <ChatBot />,
  },
  {
    name: 'Targets & Policies',
    layout: '/admin',
    path: '/targets-policies',
    icon: <Icon as={LuTarget} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
 
  {
    name: 'Notification',
    layout: '/admin',
    path: '/notification',
    icon: <Icon as={IoIosNotifications } width="20px" height="20px" color="inherit" />,
    component: <RTL />,
  },
];

export default routes;
