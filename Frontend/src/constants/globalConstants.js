const call = "https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=ca1661e568c2b368cb4a1aa115e6fc23"


// const values = {
//     first: {
//         name: "Todays GHG Emission",
//         value: "35.78 mmt"
//     },
//     second: {
//         name: "This month",
//         value: "1045.8 mmt"
//     },
//     third: {
//         name: "Predicted Emission",
//         value: "35.78 mmt",
//         growth: "+45%"
//     },
//     fourth: {
//         name: "India's GHG Emission",
//         value: "24.5 mmt"
//     }
// }
const barChatHeading = "Gases Data"
const barChartValues = [
    {
        name: "Co2",
        data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    },
    {
        name: "So2",
        data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    },
    {
        name: "No2",
        data: [300, 370, 330, 390, 320, 350, 360, 320, 380],
    },
    {
        name: "Co",
        data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    },

];

const trackGraph = {
    monthLabel: "This month",
    value: "6789.67",
    label: "This year",
    percent: "+56%",
    status: "On track"
}

const lineChartData = [
    {
        name: "Co2",
        data: [28, 44, 57, 88, 79, 68],
    },
    {
        name: "So2",
        data: [35, 40, 24, 46, 50, 46],
    },
    {
        name: "No2",
        data: [80, 40, 54, 76, 30, 54],
    },
    {
        name: "Co",
        data: [40, 30, 54, 76, 70, 67],
    },
];

const pieChartDataC = {
    labels: ["Co2", "So2", "No2", "Co"],
    colors: ["#4318FF", "#6AD2FF", "#EFF4FB", "#4318FF"],
    values: [63, 25, 12, 67]
};

const barChatData = {
    text: "One day",
    value: "6788",
    unit: "Some",
    increment: "+6.69%",
    values: [{
        name: "Daily Emission ",
        data: [69, 30, 40, 100, 45, 50, 30],
    }],
    categories: ["00", "04", "12", "14", "16", "18", "10"]
}

const gasesData = {
    tableName: "Gases Data",
    headers: {
        first: "NAME",
        second: "STATUS",
        third: "QUANTITY",
        fourth: "TEST"
    }
}

const targetsPolicies  = {
    target: "Pollution and GHG Control",
    targetsInfo: "India aims for significant reductions in pollution and GHG emissions by 2050.",
    targets: [
        {
            title: "Net Zero Emissions",
            value: "2070"
        },
        {
            title: "Renewable Energy Capacity",
            value: "500 GW by 2030"
        },
        {
            title: "Emissions Intensity Reduction",
            value: "33-35% by 2030 from 2005 levels"
        },
        {
            title: "Increase Forest Cover",
            value: "To enhance carbon sinks"
        }
    ],
    policy: "Current Policies",
    policyInfo: "India's policies focus on sustainable development, air quality, and emissions reduction.",
    policies: [
        {
            title: "National Action Plan on Climate Change (NAPCC)",
            value: "Comprehensive climate action framework"
        },
        {
            title: "National Clean Air Programme (NCAP)",
            value: "Improves air quality management"
        },
        {
            title: "Swachh Bharat Mission",
            value: "Focus on waste management and sanitation"
        },
        {
            title: "Energy Conservation Building Code (ECBC)",
            value: "Promotes energy efficiency in buildings"
        },
        {
            title: "FAME India Scheme",
            value: "Promotes electric vehicles"
        }
    ],
}

const notification = {
    name: "Notifications",
    notificationInfo: "Stay updated on GHG emissions policies, events, and alerts.",
    notifications: [
        {
            title: "New Policy Announcement",
            value: "The government has introduced a new framework for GHG emission reductions aimed at reaching net-zero by 2070."
        },
        {
            title: "Upcoming Webinar",
            value: "Join us for a webinar on sustainable practices to reduce carbon footprints, scheduled for next Wednesday."
        },
        {
            title: "Monthly Emission Report",
            value: "The latest monthly report on GHG emissions is now available for download. Check our resources page."
        },
        {
            title: "Community Cleanup Drive",
            value: "Participate in our community cleanup drive this Saturday to help reduce local pollution levels."
        },
        {
            title: "Electric Vehicle Incentives",
            value: "Learn about the new incentives for electric vehicle purchases aimed at reducing transportation emissions."
        }
    ],
}


export { barChartValues, trackGraph, lineChartData, pieChartDataC, barChatHeading,barChatData, gasesData, targetsPolicies,notification }