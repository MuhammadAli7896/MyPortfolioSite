import {
    AI_Fest,
    KodarzClub,
    // KodarzKombat,
    NCL,
    c,
    github,
    cpp,
    nextjs,
    python,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    darkMode,
    MealGen,
    HighOrder,
    RegistrationForm,
    typingGame,
    expenseTracker,
} from "../assets";

import github2 from "../assets/tech/github.png"

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Next.js",
        icon: web,
    },
    {
        title: "React.js",
        icon: mobile,
    },
    {
        title: "Tailwind CSS",
        icon: backend,
    },
    {
        title: "C and C++",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "github",
        icon: github2,
    },
    {
        name: "python",
        icon: python,
    },
    {
        name: "C",
        icon: c,
    },
];

const experiences = [
    {
        title: "Full Stack Internship",
        company_name: "NCL - NED",
        icon: NCL,
        iconBg: "#ccd5e6",
        date: "September 2023 - October 2023",
        points: [
            "Designed and implemented a Sensor Management System during internship.",
            "Featured real-time sensor data visualization and tracking using canvas.js.",
            "Utilized React.js for the dynamic frontend.",
            "Employed Node.js and Express.js for a secure backend.",
            "Utilized MySQL database for efficient data storage.",
            "Ensured a user-friendly interface using Bootstrap."
        ],
    }
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const testimonials = [
    {
        testimonial:
            "Acheived 2nd Position in Speed Debugging competition in AI Fest 4.0 along with two classmates",
        name: "AI Fest 4.0",
        designation: "June",
        company: "2023",
        image: AI_Fest,
    },
    {
        testimonial:
            "Runner-ups in Kodarz Kombat Speed Programming Competition",
        name: "Kodarz Club",
        designation: "June",
        company: "2023",
        image: KodarzClub,
    },
    // {
    //     testimonial:
    //         "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //     name: "Lisa Wang",
    //     designation: "CTO",
    //     company: "456 Enterprises",
    //     image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
];

const projects = [
    {
        name: "Expense Tracker",
        description:
            "Track and manage your expenses seamlessly with my latest project created using HTML, CSS, and JavaScript. Experience a user-friendly expense tracking interface offering diverse options and operations, empowering you to take control of your financial journey.",
        tags: [
            {
                name: "HTML",
                color: "pink-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
        ],
        image: expenseTracker,
        source_code_link: "https://github.com/MuhammadAli7896/HTML-CSS-JS-Projects/tree/main/Project_9%20(Expense%20Tracker)",
    },
    {
        name: "Higher Order Array Methods",
        description:
            "A dynamic web application built using HTML, CSS, and JavaScript. Explore randomly generated user profiles, their wealth, and utilize higher order array methods for sorting, filtering, mapping, and aggregation, gaining insights into wealth disparities and programming techniques.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: HighOrder,
        source_code_link: "https://github.com/MuhammadAli7896/HTML-CSS-JS-Projects/tree/main/Project_5%20(High%20Order%20Array%20Methods) ",
    },
    {
        name: "Typing Game",
        description:
            "Immerse yourself in the ultimate typing challenge through my HTML, CSS, and JS project featuring an engaging typing game. Put your speed to the test as you type the displayed word within a limited timeframe, with local storage utilized for high-score tracking and seamless DOM manipulation enhancing the immersive gaming experience.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: typingGame,
        source_code_link: "https://github.com/MuhammadAli7896/HTML-CSS-JS-Projects/tree/main/Project_12%20(Typing%20Games)",
    },
    {
        name: "Meal Generator",
        description:
            "Check out this HTML, CSS, and JS project, offering a dynamic meal search experience. Harnessing the power of the Fetch API and promises, users can seamlessly search for their desired meal, triggering API calls to display mouthwatering images that cater to their gastronomic curiosity",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: MealGen,
        source_code_link: "https://github.com/MuhammadAli7896/HTML-CSS-JS-Projects/tree/main/Project_8%20(Meal%20Generator)",
    },
    {
        name: "Registration Form",
        description:
            "Check this React.js project featuring a meticulously crafted form. Users enjoy a seamless process as the form ensures data integrity by validating required fields, notifying users of password length requirements, verifying email validity, and providing a fresh slate by clearing fields upon successful submission.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            // {
            //     name: "JavaScript",
            //     color: "green-text-gradient",
            // },
            // {
            //     name: "CSS",
            //     color: "pink-text-gradient",
            // },
        ],
        image: RegistrationForm,
        source_code_link: "https://github.com/MuhammadAli7896/ReactJS-Projects/tree/main/RegistrationForm",
    },
    {
        name: "Dark Mode and Custom Hook",
        description:
            "Unveil enhanced time navigation with my React project, powered by a custom hook that effortlessly unveils the previous and next days of the week. Elevating the user experience, the integration of an instant-rendering dark mode switcher, facilitated by the useTheme hook, brings seamless visual transformation to this dynamic application.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            // {
            //     name: "JavaScript",
            //     color: "green-text-gradient",
            // },
            // {
            //     name: "CSS",
            //     color: "pink-text-gradient",
            // },
        ],
        image: darkMode,
        source_code_link: "https://github.com/MuhammadAli7896/ReactJS-Projects/tree/main/CustomHooks",
    },
];

export { services, technologies, experiences, testimonials, projects };