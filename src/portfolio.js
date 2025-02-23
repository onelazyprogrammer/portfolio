/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Portfolio de Alejandro Caballero",
  description:
    "Ingeniero Informático y desarrollador con experiencia en Flutter, Android (Kotlin/Java) y backend, apasionado por la inteligencia artificial y la optimización de sistemas.",
  og: {
    title: "Portfolio de Alejandro Caballero",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Alejandro J. Caballero",
  logo_name: "onelazyprogrammer",
  nickname: "onelazyprogrammer",
  subTitle:
    "Ingeniero Informático y desarrollador con experiencia en Flutter, Android (Kotlin/Java) y backend, apasionado por la inteligencia artificial y la optimización de sistemas.",
  resumeLink:
    "https://drive.google.com/file/d/1i8WnI4AlppI-iN-8lxea1eUe4L9CPW7f/view?usp=sharing",
  portfolio_repository: "",
  githubProfile: "",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "LinkedIn",
    link: "www.linkedin.com/in/alejandrojcaballeroc",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:alejandrojcaballeroc@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/alejcaballeroc/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Desarrollo Mobile (Flutter & Android)",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Desarrollo de aplicaciones multiplataforma con integración de backend y bases de datos locales",
        "⚡ Comunicación con dispositivos externos mediante teconologías inalámbricas (Wi-Fi & Bluetooth Low Energy)",
        "⚡ Desarrollo offline-first con sincronización de datos",
        "⚡ Desarrollo con arquitectura MVVM y Clean Architecture",
        "⚡ Manejo de estado con ChangeNotifier y Riverpod",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "flat-color-icons:android-os",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "logos:dart",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "catppuccin:kotlin",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "devicon:sqlite",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "BLE",
          fontAwesomeClassname: "logos:bluetooth",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Desarollo Backend",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creación de APIs RESTful eficientes y asíncronas con FastAPI y Java Spring",
        "⚡ Contenerización y despliegue de aplicaciones backend",
        "⚡ Diseño y gestión de bases de datos SQL (PostgreSQL, SQLite) y NoSQL (MongoDB)",
        "⚡ Uso de Ollama LLM y LangChain para procesamiento de lenguaje natural",
      ],
      softwareSkills: [
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "devicon:fastapi",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "devicon:spring-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Ollama",
          fontAwesomeClassname: "simple-icons:ollama",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Computer Vision",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Reconstrucción 2D a 3D, reconstrucción de trayectorias 3D a 2D",
        "⚡ Mapas de homografías y rectifiación de cámaras",
        "⚡ Detección de gestos y detección facial en tiempo real",
        "⚡ Mapeo de colores de modelo 2D a modelo 3D",
        "⚡ Programación con cámaras BlackFly USB3 en C++",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Cpp",
          fontAwesomeClassname: "devicon:cplusplus",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "logos:opencv",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "logos:jupyter",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "Mediapipe",
          fontAwesomeClassname: "simple-icons:mediapipe",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "National Taiwan University of Science and Technology (NTUST)",
      subtitle: "B.E. in Information Engineering",
      logo_path: "ntust-modified.png",
      alt_name: "Taiwan Tech",
      duration: "2023 - 2024",
      descriptions: [
        "⚡ Estudios de intercambio en el Department of Computer Science and Information Engineering (CSIE).",
        "⚡ Trabajé como asistente de laboratorio en el CI3D Lab liderado por el Prof. Tzung-Han Lin.",
        '⚡ Presentación mútiples Journal Papers premiados por "Mejor Presentación" y "Más Votado".',
      ],
      website_link: "https://www.ntust.edu.tw/",
    },
    {
      title: "Universidad Politécnica Taiwán Paraguay (UPTP)",
      subtitle: "Ingeniería Informática",
      logo_path: "uptp-logo.png",
      alt_name: "UPTP",
      duration: "2021 - 2023",
      descriptions: [
        '⚡ Mi Trabajo Final de Grado fue seleccionado para el "UPTP Capstone Forum", donde múltilpes proyectos son presentados en un foro abierto a todo público.',
        "⚡ Tomé una gran variedad de clases relacionadas a la IA, Machine Learning, Computer Vision etc.",
        "⚡ Egresé con promedio sobresaliente (4.44 de 5.0)",
      ],
      website_link: "https://www.uptp.edu.py/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experiencia",
  subtitle: "Trabajo, Pasantía y Voluntariado",
  description:
    "Trabajé con empresas relacionadas a la trazabilidad en el rubro ganadero y con empresas insertadas en la tecnología financiera. Me apasionan los desafíos que diferentes empresas traen consigo y considero a mi adaptabilidad una de mis más grandes virtudes.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Trabajo",
      work: true,
      experiences: [
        {
          title: "Desarrollador Mobile",
          company: "BrosCo S.A.",
          company_url: "https://brosco.com.py/",
          logo_path: "brosco-logo.png",
          duration: "Oct 2024 - Actualidad",
          location: "Av. Gral. José Gervasio Artigas 2025, Asunción, Paraguay",
          description:
            "Mantenimiento y mejora de paquetes desarrollados por la empresa. Implementé modelos de lenguaje (LLM) optimizados para análisis de datos en tiempo real. Implementación de nuevos servicios y procesos digitales. Habilité y optimicé servicios backend para el sistema de Back Office. Desarrollé servicios en contenedores para procesamiento de textos y extracción de información clave.",
          color: "#000000",
        },
        {
          title: "Desarrollador de Aplicaciones",
          company: "KorapyTech",
          company_url: "https://korapytech.company.site/",
          logo_path: "korapytech-logo.png",
          duration: "Jul 2022 - Oct 2024",
          location: "San Lorenzo, Central, Paraguay",
          description:
            "Desarrollé programas en C# para antenas UHF con recuperación de datos RFID de ganado. Desarrolé MymbaKuatiapp (Android) en Kotlin/Java para procesar datos de RFID y sensores. Rediseñé esta app en Flutter, con soporte multiplataforma, BLE y gestión de bases de datos.",
          color: "#0879bf",
        },
        {
          title: "Asistente de Laboratorio",
          company: "Color Imaging 3D Lab",
          company_url: "https://ci3d.ntust.edu.tw/wordpress/?lang=en",
          logo_path: "ntust-modified.png",
          duration: "Oct 2023 - Jul 2024",
          location: "Taipei, Taiwán",
          description:
            "Desarrollé un programa en C++ para captura y procesamiento de imágenes con cámaras BlackFly USB3. Implementé un modelo de detección de objetos en Python para rastreo de trayectorias de pelotas de tenis.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Pasantías",
      experiences: [
        {
          title: "Asistente de Electrónica / Informática",
          company: "KorapyTech",
          company_url: "https://korapytech.company.site/",
          logo_path: "korapytech-logo.png",
          duration: "May 2022 - Jul 2022",
          location: "San Lorenzo, Central, Paraguay",
          description:
            "Asistencia en desarrollo de PCBs para hardware de la empresa. Programación de micocontroladores ESP32 en MicroPython y C++. Debugging de sistemas embebidos.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Voluntariados",
      experiences: [
        {
          title: "Miembro",
          company: "Rotaract Club Trinidad Asunción",
          company_url: "https://www.facebook.com/RtcTrinidadAsuncion/",
          logo_path: "rtc.png",
          duration: "Jun 2022 - Presente",
          location: "Barrio Trinidad, Asunción, Paraguay",
          description:
            "Rotaract es una organización internacional de jóvenes profesionales y estudiantes entre 18 y 30 años, que forma parte de Rotary International. Su objetivo principal es desarrollar el liderazgo, promover el servicio comunitario y fomentar la amistad entre los miembros. ",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Proyectos",
  description:
    "Tengo proyectos en diversas tecnologías con diversas aplicaciones, las cuales las he desarrollado a lo largo de mi carrera académica y profesional.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publicaciones",
  description: "Algunos artículos publicados.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "gesture-controlled-display",
      name:
        "Gesture-Controlled Digital Frame for Art Showcasing with Dynamic Lighting",
      createdAt: "2023-12-05T00:00:00Z",
      description: "Paper publicado en el Automation 2023",
      url:
        "https://drive.google.com/file/d/1L1wYNN_aRqptB3lXAh_shcKKbMH6nwyS/view",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
