import { investPlatformData } from '@/data/invest-platform-data';
import { marketplaceServiceDevelopment } from '@/data/marketplace-service-development-data';
import { mwa } from '@/data/mobile-web-atm-data';
import { nativeMobileUp } from '@/data/native-mobile-up';
import { upOnline } from '@/data/up-online';

const webDevelopmentService = {
  id: 1,
  name: 'web-development',
  title: 'WEB development',
  description:
    'We offer tailored web development services delivered by experienced specialists to optimize your business, launch startups, and create top-performing products. Our solutions are powered by collaborative expertise and latest technologies.',
  short_description:
    'We develop web services and applications for the specifics of your business.',
  seo_title: 'Web Development Services | Custom Websites & PWA Solutions',
  seo_description:
    'Web development services, including custom websites, turnkey software, and progressive web apps (PWA). Cutting-edge solutions for businesses in Qatar, UAE, and Saudi Arabia.',
  keywords: '',
  key_features: [
    {
      id: 1,
      title: 'Turnkey web app development',
      image: '/services/turnkey.png',
    },
    {
      id: 2,
      title: 'PWA development',
      image: '/services/mobile.png',
    },
    {
      id: 3,
      title: 'Architecture design',
      image: '/services/architect.png',
    },
    {
      id: 4,
      title: 'Prototyping, PoC, MVP development',
      image: '/services/mvp.png',
    },
    {
      id: 5,
      title: 'UI/UX Design',
      image: '/services/ui.png',
    },
    {
      id: 6,
      title: 'Testing and QA',
      image: '/services/test.png',
    },
  ],
  what_we_offer: [
    {
      id: 1,
      title: 'Turnkey web app development',
      description:
        'We manage the entire web development process, from the design concepts and prototyping to coding and continuous support',
    },
    {
      id: 2,
      title: 'PWA development',
      description:
        'Our team of experts harnesses the power of PWAs to create fast, reliable, and engaging applications that work seamlessly across all devices and platforms',
    },
    {
      id: 3,
      title: 'Architecture design',
      description:
        'Architecture modeling enables the creation of high-performance web solutions. Our technology selection is driven by your specific goals and application needs',
    },
    {
      id: 4,
      title: 'Prototyping, PoC, MVP development',
      description:
        'We stay updated on engineering trends, crafting POCs, MVP prototypes, and testing in real-world scenarios. This ensures our clients get a solution that satisfied their audience',
    },
    {
      id: 5,
      title: 'UI/UX Design',
      description:
        'We create web services relying on modern design practices and user-friendly interfaces',
    },
    {
      id: 6,
      title: 'Testing and QA',
      description:
        'Our experts ensure your mobile app runs smoothly, free from glitches, delays, or downtime',
    },
  ],
  technology_stack: [
    {
      id: 1,
      title: 'Front-end',
      description:
        'We have experience in working with wide technology stack for front-end development. This allows us to create competitive solutions for the market.',
      technologies: ['JavaScript', 'React', 'Angular', 'HTML', 'CSS '],
    },
    {
      id: 2,
      title: 'Back-end',
      description:
        'We implement the most popular and powerful back-end development tools with focusing on delivering secure, efficient, and high-performance server-side solutions tailored to your specific needs.',
      technologies: ['.NET', 'C#', 'Java', 'Python', 'Node.js'],
    },
    {
      id: 3,
      title: 'Database ',
      description:
        'We specialize in providing comprehensive database solutions that ensure your data is organized, secure, and easily accessible. Our expert team is dedicated to designing, implementing, and maintaining databases that meet the unique needs of your business.',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB'],
    },
  ],
};

const mobileDevelopmentService = {
  id: 2,
  name: 'mobile-development',
  title: 'Mobile development',
  description:
    "Our expertise enables us to create dynamic mobile applications that optimize business operations of large enterprises, SMEs, and startups. Our solutions are designed to streamline processes and drive user engagement, empowering organizations to stay ahead in today's competitive digital landscape",
  short_description: 'We develop mobile applications for your business needs.',
  seo_title: 'Top Mobile App Development Services | VebTech',
  seo_description:
    'Mobile app development company specializing in native, cross-platform, and custom solutions for iOS and Android. Tailored mobile app design and development in Qatar, UAE & Saudi Arabia.',
  keywords: '',
  key_features: [
    {
      id: 1,
      title: 'Native Mobile App Development',
      image: '/services/mobile.png',
    },
    {
      id: 2,
      title: 'Cross-Platform Mobile App Development',
      image: '/services/multi.png',
    },
    {
      id: 3,
      title: 'Architecture design',
      image: '/services/architect.png',
    },
    {
      id: 4,
      title: 'Prototyping, PoC, MVP development',
      image: '/services/mvp.png',
    },
    {
      id: 5,
      title: 'UI/UX Design',
      image: '/services/ui.png',
    },
    {
      id: 6,
      title: 'Testing and QA',
      image: '/services/test.png',
    },
  ],
  what_we_offer: [
    {
      id: 1,
      title: 'Native Mobile App Development',
      description:
        'Create mobile apps for Android and iOS platforms, delivering smooth user experiences',
    },
    {
      id: 2,
      title: 'Cross-Platform Mobile App Development',
      description:
        'Our team is skilled in cross-platform development, creating apps that work on any device, offering a native-like experience',
    },
    {
      id: 3,
      title: 'Architecture design',
      description:
        'Architecture modeling enables the creation of high-performance mobile applications. Our technology selection is driven by your specific goals and application needs',
    },
    {
      id: 4,
      title: 'Prototyping, PoC, MVP development',
      description:
        'We stay updated on engineering trends, crafting POCs, MVP prototypes, and testing in real-world scenarios. This ensures our clients get a solution that satisfied their audience',
    },
    {
      id: 5,
      title: 'UI/UX Design',
      description:
        'We build mobile apps relying on modern design practices and user-friendly interfaces',
    },
    {
      id: 6,
      title: 'Testing and QA',
      description:
        'Our experts ensure your mobile app runs smoothly, free from glitches, delays, or downtime',
    },
  ],
  technology_stack: [
    {
      id: 1,
      title: 'IOS',
      description:
        "We specialize in creating native iOS applications that use the full potential of Apple's ecosystem. Our team of iOS developers is dedicated to delivering apps that offer seamless performance, elegant design, and user experience tailored to meet your business needs.",
      technologies: ['Swift', 'Objective-C'],
    },
    {
      id: 2,
      title: 'Android',
      description:
        'We stand out in creating innovative and reliable Android applications that meet user expectations and business requirements, support comprehensive feature sets, and has an intuitive design.',
      technologies: ['Kotlin', 'RxJava'],
    },
    {
      id: 3,
      title: 'Cross-platform',
      description:
        'We specialize in cross-platform app development, creating applications that run on multiple platforms from a single codebase, that help to save time and resources while ensuring competitive functionality.',
      technologies: ['React Native', 'Flutter'],
    },
    {
      id: 4,
      title: 'Back-end',
      description:
        'We leverage a range of back-end tools and technologies to support your application with a strong backbone.',
      technologies: ['.NET', 'C#', 'Java', 'Python', 'Node.js'],
    },
  ],
};

const aiSolutionsService = {
  id: 3,
  name: 'ai-solutions',
  title: 'AI solutions',
  description:
    'We provide AI consulting and development services, ensuring that your organization will effectively use smart AI tools, solve complex software issues and deliver clear results. Our expert team enhance performance and integrate technology with your business objectives',
  short_description:
    'We support you through every stage of the AI solutions implementation to your business processes.',
  seo_title:
    'AI Solutions | Artificial Intelligence Development, Consulting & Services',
  seo_description:
    'AI software development, consulting and solutions for businesses in UAE, Saudi Arabia, and Qatar. Offering advanced artificial intelligence, machine learning, and deep learning services.',
  keywords: '',
  key_features: [
    {
      id: 1,
      title: 'Computer vision',
      image: '/services/vision.png',
    },
    {
      id: 2,
      title: 'Natural Language Processing ',
      image: '/services/lang.png',
    },
    {
      id: 3,
      title: 'Speech and voice recognition',
      image: '/services/voice.png',
    },
    {
      id: 4,
      title: 'Data analysis',
      image: '/services/test.png',
    },
  ],
  what_we_offer: [
    {
      id: 1,
      title: 'Computer vision',
      description:
        'We suggest image classification and segmentation, object detection and tracking software to partition visual content into multiple segments and highlight interesting objects via bounding boxes, polylines, or key point annotations, making pictures and videos easier to analyze',
    },
    {
      id: 2,
      title: 'Natural Language Processing ',
      description:
        'Our experts develop software from chatbots that elevate customer service to AI-driven text summarization tools. Our NLP solutions help businesses unlock the full potential of their data by transforming unstructured text into valuable insights',
    },
    {
      id: 3,
      title: 'Speech and voice recognition',
      description:
        'We offer cutting-edge solutions using speech recognition technology. Our advanced algorithms can recognize and process voices in real-time, convert speech to text, enhancing communication with your customers. This leads to better customer service interactions and boosts overall business efficiency',
    },
    {
      id: 4,
      title: 'Data analysis',
      description:
        'Our team develops systems that analyze data to identify patterns and anomalies, providing valuable insights and forecasts to support decision-making. The technology analyzes clients’ business environment and suggests scenarios on how to attain planned objectives',
    },
  ],
  technology_stack: [
    {
      id: 1,
      description:
        'We tailor AI solutions to the specific needs of each domain, including banking, insurance, lending, investment and retail. Our expert team help businesses transform their processes with innovative and dynamic solutions.',
      technologies: [
        'Azure',
        'Python',
        'Pytorch',
        'TensorFlow',
        'Keras',
        'Matplotlib',
        'Spacy',
        'Scikit-learn',
        'Pandas',
      ],
    },
  ],
};

const dataManagementSolutionsService = {
  id: 4,
  name: 'data-management-solutions',
  title: 'Data Management solutions',
  description:
    'We focus on creating an efficient data management framework and transforming your data into a valuable asset. Our goal is to make your data unified, clean, secure, and optimized for business success',
  short_description:
    'We focus on creating an efficient data management frameworks for your business.',
  seo_title:
    'Data Management Solutions | Expert Services in Data, Cloud, BI, and Database Consulting',
  seo_description:
    'Data management services including cloud storage, BI analytics, database migration, and backup recovery. Data management consulting for businesses in Qatar, UAE, and Saudi Arabia.',
  keywords: '',
  key_features: [
    {
      id: 1,
      title: 'Data storage organization',
      image: '/services/storage.png',
    },
    {
      id: 2,
      title: 'Migration to open-source solutions',
      image: '/services/migration.png',
    },
    {
      id: 3,
      title: 'BI-system implementation',
      image: '/services/bi.png',
    },
    {
      id: 4,
      title: 'Database backup & recovery',
      image: '/services/backup.png',
    },
    {
      id: 5,
      title: 'DBA consulting',
      image: '/services/dba.png',
    },
  ],
  what_we_offer: [
    {
      id: 1,
      title: 'Data storage organization',
      description:
        'Design efficient data pipelines and storage systems to ensure accurate and accessible data for making informed decisions',
    },
    {
      id: 2,
      title: 'Migration to open-source solutions',
      description:
        'We can migrate your data from one source to another without file losses and flaws. We prepare a migration roadmap, build a cloud infrastructure, and deploy it to the cloud platform of your choice',
    },
    {
      id: 3,
      title: 'BI-system implementation',
      description:
        'We implement practices and technologies to gather, aggregate, and analyze business information. Our BI solutions help companies make data-driven business decisions, improve operational efficiency, and drive revenue growth',
    },
    {
      id: 4,
      title: 'Database backup & recovery',
      description:
        'Covering all the elements of data backup and disaster recovery solutions, easily restore it, on-prem, in the cloud or a hybridly',
    },
    {
      id: 5,
      title: 'DBA consulting',
      description:
        "Assess your organization's data maturity and develop a data strategy to achieve a successful data-driven transformation",
    },
  ],
  technology_stack: [
    {
      id: 1,
      description:
        'We provide complete data management solutions to help companies store data efficiently. Our expert team makes sure your data is secure, easy to access, and optimized for best results, allowing you to make informed decisions and reach your goals.',
      technologies: [
        'Building Data Warehouses ',
        'IBM Banking Data Warehouse',
        'PostgreSQL',
        'ELT & ETL',
        'IBM InfoSphere DataStage',
        'Pentaho Data Integration',
        'Business Intelligence',
        'IBM Cognos BI',
        'Tableau',
        'Power BI',
      ],
    },
  ],
};

const itServiceMonitoringService = {
  id: 5,
  name: 'service-monitoring',
  title: 'IT service Monitoring',
  description:
    'We deliver proactive infrastructure monitoring, comprehensive diagnostics, early issues detection and support services that allow anticipating and mitigating incidents before they become inevitable, thus protecting your business from potential downtime.',
  short_description:
    'We deliver proactive infrastructure monitoring, early issues detection and support services.',
  seo_title:
    'Service Monitoring Solutions | Reliable IT, Cloud, Network & Application Monitoring',
  seo_description:
    'Professional service monitoring solutions for IT, cloud, networks, and applications. Advanced tools and reliable monitoring for businesses in Qatar, UAE, and Saudi Arabia.',
  keywords: '',
  key_features: [
    {
      id: 1,
      title: 'Network and server monitoring',
      image: '/services/network.png',
    },
    {
      id: 2,
      title: 'Application monitoring',
      image: '/services/app.png',
    },
    {
      id: 3,
      title: 'Cloud monitoring',
      image: '/services/cloud.png',
    },
    {
      id: 4,
      title: 'Process mining',
      image: '/services/migration.png',
    },
  ],
  what_we_offer: [
    {
      id: 1,
      title: 'Network and server monitoring',
      description:
        'We provide complete network and server monitoring services to keep your IT systems running securely and efficiently. Our proactive monitoring gives you real-time updates on the health and performance of your networks and servers, allowing to quickly fix any issues and ensure everything stays up and running.',
    },
    {
      id: 2,
      title: 'Application monitoring',
      description:
        'We deliver reliable application monitoring services to keep your software performing well. Our monitoring solutions give possibilities to track critical metrics, analyze data to identify performance bottlenecks, optimize your applications, store and analyze historical performance data.',
    },
    {
      id: 3,
      title: 'Cloud monitoring',
      description:
        'We focus on cloud monitoring services to keep your cloud systems running efficiently. Our experts offer a solution-independent cloud monitoring approach, allowing you automatically discover your cloud infrastructure and monitor it without having to install any additional software.',
    },
    {
      id: 4,
      title: 'Process mining',
      description:
        'We offer advanced process mining services to help you uncover valuable insights from your business processes. By analyzing event logs from your IT systems, our solution enables you to visualize, monitor, and optimize your workflows, ensuring greater efficiency and improved performance.',
    },
  ],
  technology_stack: [
    {
      id: 1,
      description:
        'We offer complete IT service monitoring to keep your tech systems running efficiently. Our real-time monitoring solutions help us detect and fix any issues before they affect your business.',
      technologies: [
        'Zabbix',
        'Grafana',
        'ELK',
        'OpenSearch',
        'Jaeger',
        'Prometheus',
        'Gitlab',
      ],
    },
  ],
};

const itServiceManagementService = {
  id: 6,
  name: 'service-management',
  title: 'IT service Management',
  description:
    'We offer comprehensive IT service management solutions, including process optimization, efficient service delivery, incident management, and continuous improvement to ensure seamless operations and exceptional service quality.',
  short_description:
    'We offer comprehensive IT service management solutions, including process optimization, incident and problem management, IT infrastructure discovery.',
  seo_title: 'itsm software',
  seo_description:
    'IT service management solutions including incident management, process optimization, it asset management',
  keywords: '',
  key_features: [
    {
      id: 1,
      title: 'Incident and Problem management',
      image: '/services/problem.png',
    },
    {
      id: 2,
      title: 'Service request management',
      image: '/services/request.png',
    },
    {
      id: 3,
      title: 'Configuration management',
      image: '/services/config.png',
    },
    {
      id: 4,
      title: 'IT infrastructure discovery',
      image: '/services/infrastructure.png',
    },
    {
      id: 5,
      title: 'IT assets and reporting management',
      image: '/services/assets.png',
    },
  ],
  what_we_offer: [
    {
      id: 1,
      title: 'Incident and Problem management',
      description:
        'We specialize in comprehensive incident and problem management solutions to ensure the smooth operation of your IT services. Our approach focuses on minimizing disruptions, resolving issues efficiently, and preventing future incidents, thereby enhancing the reliability and performance of your IT infrastructure.',
    },
    {
      id: 2,
      title: 'Service request management',
      description:
        'We suggest solution that streamline the entire process of handling service requests, ensuring quick and effective resolution. Our user-friendly interface makes it easy for employees to submit, track, and manage requests, enhancing overall user experience.',
    },
    {
      id: 3,
      title: 'Configuration management',
      description:
        'We specialize in configuration management to help you maintain a consistent, reliable IT environment. Our solutions ensure that all your IT assets and configurations are systematically tracked, managed, and maintained, leading to improved operational efficiency and reduced risk.',
    },
    {
      id: 4,
      title: 'IT infrastructure discovery',
      description:
        'We offer tools that automatically identify and catalog all components of your IT environment, from servers and network devices to applications and services. This gives you a detailed and current inventory of your entire IT environment, helping you manage, plan, and optimize your resources better.',
    },
    {
      id: 5,
      title: 'IT assets and reporting management',
      description:
        'We offer IT assets and reporting management services to help you keep track of all your technology resources. Our solutions provide a complete view of your IT assets, with our detailed reporting tools, you can make informed decisions, optimize your resources, and maintain compliance.',
    },
  ],
  technology_stack: [
    {
      id: 1,
      description:
        'Our ITSM specialists help standardize processes and automate routine tasks, reducing the time and effort required to manage IT services.',
      technologies: [
        'OpenText',
        'GLPI',
        'iTOP',
        'Zabbix',
        'Jira',
        'Power BI',
        'Apache Superset',
      ],
    },
  ],
};

const businessProcessManagementService = {
  id: 7,
  name: 'business-process-management',
  title: 'Business Process Management ',
  description:
    'We offer business process management consulting and development services to streamline and optimize your business operations. Our expert team assist our clients in planning the digital transformation of their business workflows, choosing and implementing business process automation software tailored to their corporate environment.',
  short_description:
    'We offer business process management consulting and development services to optimize your business operations.',
  seo_title: 'Business Process Management & Pega Consulting Services | VebTech',
  seo_description:
    'Expert BPM solutions, Pega consulting, and software customization for businesses in Qatar, UAE & Saudi Arabia. Optimize processes, integrate Pega, and receive top-tier technical support services.',
  keywords: '',
  key_features: [
    {
      id: 1,
      title: 'BPM consulting',
      image: '/services/dba.png',
    },
    {
      id: 2,
      title: 'BPM integration',
      image: '/services/bi.png',
    },
    {
      id: 3,
      title: 'BPM Customization',
      image: '/services/config.png',
    },
    {
      id: 4,
      title: 'BPM support and administration',
      image: '/services/bmp.png',
    },
  ],
  what_we_offer: [
    {
      id: 1,
      title: 'BPM consulting',
      description:
        'Our experts team assist you in planning the digital transformation of your workflows, selecting the right automation software, and look for optimal ways to refine your corporate environment. We ensure that your processes are efficient and tailored to meet the unique needs of your organization.',
    },
    {
      id: 2,
      title: 'BPM integration',
      description:
        'We integrate business process automation into your existing systems, update your workflows, and ensure all components work together seamlessly. Our aim is to help your organization achieve a higher level of efficiency, reduce operational costs, and improve overall performance.',
    },
    {
      id: 3,
      title: 'BPM Customization',
      description:
        "We focus on BPM customization to make sure your business processes are finely tuned to meet your operational requirements. Our team applies its knowledge in technology and business to integrate solutions with our clients' specific enterprise setups, hardware and software resources, and IT management capabilities.",
    },
    {
      id: 4,
      title: 'BPM support and administration',
      description:
        'We offer BPM support and administration services to keep your business process management systems running at peak performance. Our expert team handles everything from system monitoring and issue resolution to regular updates and ongoing support.',
    },
  ],
  technology_stack: [
    {
      id: 1,
      description:
        'Our BPM team deliver software with the right features for your business, customized to match your current tech setup and budget, whether for short-term needs or long-term goals.',
      technologies: ['PEGA', 'Camunda', 'ELMA365', 'JAVA', 'SQL'],
    },
  ],
};

const itConsultingService = {
  id: 8,
  name: 'consulting',
  title: 'IT consulting',
  description:
    'Our team is dedicated to support businesses at every stage of their software development and implementation projects. With extensive skills and expertise, we transform early concepts into detailed solutions. Our specialists manage the entire process, creating enterprise systems of any complexity and implement them into your business processes and IT infrastructure.',
  short_description:
    'We help automate your operations, by selecting the right technology stacks, improve your projects at different stages of development process.',
  seo_title: 'IT Consulting Services & Technology Solutions | VebTech',
  seo_description:
    'Comprehensive IT consulting services specializing in IT strategy, technology solutions, and business process reengineering to enhance business performance.',
  keywords: '',
  key_features: [
    {
      id: 1,
      title: 'Software implementation strategy',
      image: '/services/strategy.png',
    },
    {
      id: 2,
      title: 'Development of technical requirements for software',
      image: '/services/requirements.png',
    },
    {
      id: 3,
      title: 'Design and development of information systems',
      image: '/services/design.png',
    },
    {
      id: 4,
      title: 'Business process reengineering',
      image: '/services/bpr.png',
    },
    {
      id: 5,
      title: 'Development of process knowledge bases',
      image: '/services/bases.png',
    },
  ],
  what_we_offer: [
    {
      id: 1,
      title: 'Software implementation strategy',
      description:
        'We suggest a thorough analysis of your business processes and objectives. This allows us to create a detailed implementation plan that addresses your specific business objectives, minimizes risks, and sets clear milestones for success.',
    },
    {
      id: 2,
      title: 'Development of technical requirements for software',
      description:
        'Our team develops detailed technical specifications that outline the software architecture, technologies to be used, data models, integration points, and other critical aspects of the project. Our detailed approach ensures that your software solution is built to meet your specific business needs.',
    },
    {
      id: 3,
      title: 'Design and development of information systems',
      description:
        'From initial concept to final deployment, we manage the full development lifecycle of your information system. This includes everything from system architecture design, database management, and software development to user interface design and testing.',
    },
    {
      id: 4,
      title: 'Business process reengineering',
      description:
        'We help businesses improve the way they work by redesigning their processes from the ground up. We start by conducting analysis of your existing business processes, identifying inefficiencies and areas for improvement. Then our team suggest you new systems or tools to be integrated into your processes, to achieve goals and stay competitive in your industry.',
    },
    {
      id: 5,
      title: 'Development of process knowledge bases',
      description:
        'We specialize in creating knowledge bases that empower your team with the detailed information about your business processes, including step-by-step procedures, guidelines, and expert insights. This ensures that all essential knowledge is captured and documented.',
    },
  ],
  technology_stack: [],
};

const mwaCase = {
  id: 1,
  name: 'MWA-(Mobile-Web-ATM)',
  lang: 'en',
  preview_image: '/case2.png',
  main_image: '/MWA (Mobile, Web, ATM) 1.png',
  title: 'MWA (Mobile, Web, ATM)',
  description:
    'A ready-made solution with a full range of functionality of modern remote banking systems. MWA «3 in  1» offers a comprehensive solution for small and medium-sized banks on 3 platforms - mobile app, internet banking, and ATM banking.',
  subtitle: 'Cross-platform digital banking',
  seo_title: '',
  seo_description: '',
  keywords: '',
  client:
    'This product was created in-house, to provide scalable digital banking service to the market.',
  duration: '12 month ',
  html_content: mwa.content,
  extra_description: null,
  backgroundFrom: '#4280ebb3',
  backgroundTo: '#2b68eee6',
  technologies: [
    {
      id: 1,
      name: 'Clean Architecture + MVVM',
      category: 'Android',
    },
    {
      id: 2,
      name: 'Kotlin Coroutines',
      category: 'Android',
    },
    {
      id: 3,
      name: 'Dagger2',
      category: 'Android',
    },
    {
      id: 4,
      name: 'Kotlin',
      category: 'Android',
    },
    {
      id: 5,
      name: 'Swift',
      category: 'iOS',
    },
    {
      id: 6,
      name: 'SwiftUI',
      category: 'iOS',
    },
    {
      id: 7,
      name: 'PostgreSQL',
      category: 'Backend',
    },
    {
      id: 8,
      name: 'PostgreSQL',
      category: 'Backend',
    },
    {
      id: 9,
      name: 'C#',
      category: 'Backend',
    },
    {
      id: 10,
      name: 'Net core',
      category: 'Backend',
    },
    {
      id: 11,
      name: 'Entity Framework 6',
      category: 'Backend',
    },
    {
      id: 12,
      name: 'Html+TS (React, Redux, Redux-Saga)',
      category: 'Frontend',
    },
    {
      id: 13,
      name: 'CSS (Sass, mui/material)',
      category: 'Frontend',
    },
  ],
  categories: [
    {
      id: 1,
      name: 'Mobile app',
    },
    {
      id: 2,
      name: 'Banking',
    },
    {
      id: 3,
      name: 'Financial Services',
    },
    {
      id: 4,
      name: 'Mobile Development',
    },
    {
      id: 5,
      name: 'UX/UI Design',
    },
  ],
};

const pwaCase = {
  id: 1,
  name: 'UP-Online-(PWA)',
  lang: 'en',
  preview_image: '/phone.png',
  main_image: '/UP Online (PWA) 1.png',
  title: 'UP Online (PWA)',
  description:
    'Progressive Web Application - alternative channel for remote banking for individuals. Work across all devices, can be accessed via a web browser without installation, fast loading times, and push notifications.',
  subtitle: 'PWA Application',
  seo_title: '',
  seo_description: '',
  keywords: '',
  client:
    '<span>Bank BelVEB.</span> One of the leaders in the FinTech domain among commercial banks of the country.',
  duration: '12 month',
  html_content: upOnline.content,
  extra_description: null,
  backgroundFrom: '#baa0f7',
  backgroundTo: '#7e4fd5d4',
  technologies: [
    {
      id: 1,
      name: 'React',
      category: 'Frontend',
    },
    {
      id: 2,
      name: 'Redux',
      category: 'Frontend',
    },
    {
      id: 3,
      name: 'Mui',
      category: 'Frontend',
    },
    {
      id: 4,
      name: 'Java',
      category: 'Backend',
    },
    {
      id: 5,
      name: 'PostgreSQL',
      category: 'Database',
    },
    {
      id: 6,
      name: 'Redis',
      category: 'Database',
    },
    {
      id: 7,
      name: 'Prometheus',
      category: 'Metrics',
    },
    {
      id: 8,
      name: 'Grafana',
      category: 'Metrics',
    },
    {
      id: 9,
      name: 'Grafana Loki',
      category: 'Metrics',
    },
    {
      id: 10,
      name: 'Jaeger',
      category: 'Tracing tool',
    },
    {
      id: 11,
      name: 'Kubernetes',
      category: 'Other',
    },
  ],
  categories: [
    {
      id: 1,
      name: 'PWA',
    },
    {
      id: 2,
      name: 'Banking',
    },
    {
      id: 3,
      name: 'Financial Services',
    },
    {
      id: 4,
      name: 'Web Development',
    },
    {
      id: 5,
      name: 'UX/UI Design',
    },
  ],
};

const onlineInvestPlatformCase = {
  id: 1,
  name: 'online-invest-platform',
  lang: 'en',
  preview_image: '/case3.png',
  main_image: '/Online investment platform 1.png',
  title: 'Online investment platform',
  description: '',
  subtitle: 'Finstore',
  seo_title: '',
  seo_description: '',
  keywords: '',
  client:
    '<span>DFS LLC.</span> The first company in the Republic of Belarus that offer corporate sector services for creating and issuing digital tokens.',
  duration: '6 month',
  html_content: investPlatformData.content,
  extra_description: '* numbers steadily growing',
  backgroundFrom: '#1fe0c7',
  backgroundTo: '#3caf9f',
  technologies: [
    {
      id: 1,
      name: '.Net',
    },
    {
      id: 2,
      name: 'Web',
    },
    {
      id: 3,
      name: 'React',
    },
    {
      id: 4,
      name: 'BlockChain',
    },
    {
      id: 5,
      name: 'PostgreSQL',
    },
    {
      id: 6,
      name: 'Kubernetes',
    },
    {
      id: 7,
      name: 'Docker',
    },
    {
      id: 8,
      name: 'Helm',
    },
    {
      id: 9,
      name: 'AVEST',
    },
    {
      id: 10,
      name: 'Zabbix',
    },
    {
      id: 11,
      name: 'Prometheus',
    },
    {
      id: 12,
      name: 'F5',
    },
    {
      id: 13,
      name: 'vector',
    },
    {
      id: 14,
      name: 'Loki',
    },
    {
      id: 15,
      name: 'Elasticsearch',
    },
    {
      id: 16,
      name: 'nexus',
    },
    {
      id: 17,
      name: 'Jenkins',
    },
    {
      id: 18,
      name: 'Redis',
    },
    {
      id: 19,
      name: 'RabbitMQ',
    },
    {
      id: 20,
      name: 'njinx',
    },
    {
      id: 21,
      name: 'Kibana',
    },
    {
      id: 22,
      name: 'API',
    },
    {
      id: 23,
      name: 'Swagger',
    },
  ],
  categories: [
    {
      id: 1,
      name: 'Fintech',
    },
    {
      id: 2,
      name: 'Financial Services',
    },
    {
      id: 3,
      name: 'Crowdfunding',
    },
    {
      id: 4,
      name: 'Web Development',
    },
    {
      id: 5,
      name: 'UX/UI Design',
    },
  ],
  stats: [
    {
      value: '$173+ millions',
      description: 'Total amount of funds raised',
    },
    {
      value: '16.000+',
      description: 'Investors were attracted',
    },
    {
      value: '$17 millions ',
      description: 'Total investors income',
    },
    {
      value: '80+',
      description: 'Placed tokens',
    },
  ],
};

const nativeMobileAppCase = {
  id: 1,
  name: 'native-mobile-app',
  lang: 'en',
  preview_image: '/case4.png',
  main_image: '/Native mobile app 1.png',
  title: 'Native mobile app',
  description:
    'Native mobile application development for the major bank, that meets both user expectations and financial industry standards',
  subtitle: 'Mobile banking',
  seo_title: '',
  seo_description: '',
  keywords: '',
  client:
    '<span>Bank BelVEB.</span> One of the leaders in the FinTech domain among commercial banks of the country.',
  duration: '7 month',
  html_content: nativeMobileUp.content,
  extra_description: null,
  backgroundFrom: '#f5ae51',
  backgroundTo: '#f0bb70',
  technologies: [
    {
      id: 1,
      name: 'Kotlin',
      category: 'Android',
    },
    {
      id: 2,
      name: 'Clean Architecture + MVVM',
      category: 'Android',
    },
    {
      id: 3,
      name: 'RxJava',
      category: 'Android',
    },
    {
      id: 4,
      name: 'Dagger2',
      category: 'Android',
    },
    {
      id: 5,
      name: 'Room',
      category: 'Android',
    },
    {
      id: 6,
      name: 'Retrofit',
      category: 'Android',
    },
    {
      id: 7,
      name: 'Swift',
      category: 'iOS',
    },
    {
      id: 8,
      name: 'Objective-C',
      category: 'iOS',
    },
    {
      id: 9,
      name: 'C# (ASP.NET, Net Framework)',
      category: 'Backend',
    },
  ],
  categories: [
    {
      id: 1,
      name: 'Mobile app',
    },
    {
      id: 2,
      name: 'Banking',
    },
    {
      id: 3,
      name: 'Financial Services',
    },
    {
      id: 4,
      name: 'Mobile Development',
    },
    {
      id: 5,
      name: 'UX/UI Design',
    },
  ],
  stats: [
    {
      value: '7 month',
      description: 'The launch of a native modern banking app.',
    },
    {
      value: 'Marketplace integration',
      description: 'Offers from bank partners available.',
    },
    {
      value: 'From 6K to 20,8K',
      description: 'The number of transactions per day.',
    },
    {
      value: 'X 3.5',
      description: 'Increase in the number of active users',
    },
  ],
};

const marketplaceCase = {
  id: 1,
  name: 'Marketplace-service-development',
  lang: 'en',
  preview_image: '/case5.png',
  main_image: '/Marketplace service development 1.png',
  title: 'Marketplace service development',
  description:
    'An integrated online store offering products and services from partner companies, accessible directly through the banking mobile app.',
  subtitle: 'Mobile banking',
  seo_title: '',
  seo_description: '',
  keywords: '',
  client:
    'A large commercial bank with a strong digital presence, focused on the development of services that use advanced technologies.',
  duration: '8 month',
  html_content: marketplaceServiceDevelopment.content,
  extra_description: null,
  backgroundFrom: '#a7018c80',
  backgroundTo: '#b33288c2',
  technologies: [
    {
      id: 1,
      name: '.NET',
      category: 'Backend',
    },
    {
      id: 2,
      name: 'Rest API',
      category: 'Backend',
    },
    {
      id: 3,
      name: 'OpenAPI/Swagger',
      category: 'Backend',
    },
    {
      id: 4,
      name: 'MS SQL',
      category: 'Backend',
    },
    {
      id: 5,
      name: 'Redis',
      category: 'Backend',
    },
    {
      id: 6,
      name: 'MongoDB',
      category: 'Backend',
    },
    {
      id: 7,
      name: 'Ocelo',
      category: 'Backend',
    },
    {
      id: 8,
      name: 'Angular',
      category: 'Frontend',
    },
    {
      id: 9,
      name: 'rxjs',
      category: 'Frontend',
    },
    {
      id: 10,
      name: 'moment',
      category: 'Frontend',
    },
    {
      id: 11,
      name: 'typescript',
      category: 'Frontend',
    },
    {
      id: 12,
      name: 'sass',
      category: 'Frontend',
    },
  ],
  categories: [
    {
      id: 1,
      name: 'Mobile app',
    },
    {
      id: 2,
      name: 'Banking',
    },
    {
      id: 3,
      name: 'Financial Services',
    },
    {
      id: 4,
      name: 'Mobile Development',
    },
    {
      id: 5,
      name: 'UX/UI Design',
    },
  ],
};

const blogArticle = {
  id: 1,
  name: 'what-are-green-bonds-and-why-is-this-market-growing-so-fast',
  title: 'What are green bonds and why is this market growing so fast?',
  lang: 'en',
  seo_title:
    'What Are Green Bonds and Why Is This Market Growing So Fast - VebTech Blog',
  seo_description:
    'Discover what green bonds are, how they work, and why the market is rapidly growing. Learn about their impact on sustainable investments and eco-friendly business practices.',
  keywords: '',
  preview_image: '/blog.png',
  main_image: '/blog-main.png',
  read_duration: '5 min',
  date: 'August 20, 2024',
  html_content:
    '<p>In the fight against climate change and environmental problems, the financial sector has taken a crucial role by introducing innovative tools to fund sustainable projects. One of the most prominent instruments in this area is the green bond. These bonds have not only gained widespread popularity but have also become a critical component of the global shift toward a more sustainable economy.</p><h3>What Are Green Bonds?</h3><p>Green bond, or eco-token, is a digital asset designed to combine the investment process with support for environmentally oriented projects. Green tokens work similarly to regular bonds. An issuer, such as a government, corporation, or financial institution, raises capital from investors with the promise of paying back the principal amount with interest over a specified period. However, what sets green bonds apart is the commitment that the proceeds will be exclusively used for green projects.</p><h3>The Growth of the Green Bond Market</h3><p>The green bond market has experienced exponential growth in recent years. In 2022, the market was valued at USD 436 billion and is anticipated to grow at a compound annualg rowth rate (CAGR) of 9.7% from 2022 to 2030 The global green bonds market is expected to reach USD 914.4 billion by 2030 \\n\\nGreen bonds are a type of green finance that is becoming increasingly popular, especially for constructing clean and sustainable infrastructure and meeting significant funding requirements. According to the Business and Sustainable Development Commission, sustainable business strategies can unlock a market potential of at least US$12 trillion.</p><h3>Green bonds are becoming a trend in Belarus</h3><p><span>Finstore</span> - online platform developed by the Vebtech team, became one of the first in Eastern Europe to issue eco-tokens with a total volume exceeding USD 1 000 0 The eco-tokens on the Finstore platformw ere issued by OOO "Light Leasing" with the guarantee of Alfa-Bank. The price of one token is 50 BYN, and the total issuance volume is 500 000 BYN. Interest is paid monthly at a 17% annual rate. \\n\\nLeasing company "A-Leasing," a part of the "Alfa Group," also placed tokens on the Finstore platform with an approximate yield of 7.5% per annum and a volume of 1,000,000 USD. Investors who invest more than 50,000 dollars will receive bonuses: personal insurance, a certificate for recharging with electricity, and a certificate for planting trees to offset the carbon footprint left by the investor each month.</p> <h3>The Future of Green Bonds</h3><p>The green bond market is expected to continue its rapid growth, driven by increasing demand for sustainable finance solutions and the ongoing global efforts to combat climate change. Moreover, the market is likely to see more innovation, with the development of new types of green financial products, such as green loans, green sukuks (Islamic bonds), and green insurance. The expansion of green bonds into emerging markets, where the need for sustainable infrastructure is greatest, will also contribute to the market\\\'s growth.</p>',
  categories: [
    {
      id: 1,
      name: 'banking',
    },
  ],
};

export const fakeEndpoints: Record<string, unknown> = {
  'home/info': {
    name: 'home',
    title: 'Effective IT solutions\nfor your business',
    description: '',
    seo_title:
      'IT Consulting, Custom Software Development & Business Solutions - VebTech',
    seo_description:
      'VebTech offers cutting-edge IT consulting, software development, AI solutions, BPM consulting, and digital transformation services for businesses in UAE, Saudi Arabia, and Qatar.',
    keywords: [],
  },
  'home/elements': {
    solutionsBlock: {
      pageInfo: {
        id: 1,
        name: 'solutions',
        title: 'Solutions',
        description:
          'We provide solutions tailored to your needs in areas where we have proven expertise',
        seo_title: '',
        seo_description: '',
        keywords: '',
      },
      items: [
        {
          id: 1,
          title: 'Retail Banking',
          description:
            'We create modern retail banking solutions to meet the changing needs of financial institutions and their clients. Our wide range of services improves efficiency, increases customer engagement, and supports digital growth, helping banks stay competitive in a fast-changing market.',
          advantages: [
            { title: 'Remote banking apps' },
            { title: 'Digital Wallets and Mobile Payments' },
            { title: 'Embedded finance' },
            { title: 'KYC and Onboarding solutions' },
          ],
        },
        {
          id: 2,
          title: 'Corporate banking and SME',
          description:
            'We offer advanced corporate banking and SME solutions to meet the complex needs of businesses and financial institutions. Our services improve efficiency, enhance risk management, and support digital transformation, helping banks provide excellent service and stay competitive.',
          advantages: [
            { title: 'Credit Scoring and Risk Management' },
            { title: 'E-Invoicing and Invoice Financing' },
            { title: 'Embedded finance' },
          ],
        },
        {
          id: 3,
          title: 'Back-Office and Operational Efficiency',
          description:
            'We focus on enhancing back-office operations and boosting overall efficiency to help your business run effectively. We implement solutions that optimize internal processes, reduce operational costs, and increase productivity, ensuring that your organization stay competitive.',
          advantages: [
            { title: 'Core Banking Systems Customization' },
            { title: 'Data Analytics and Business Intelligence' },
            { title: 'Data management' },
            { title: 'Open Banking' },
          ],
        },
        {
          id: 4,
          title: 'Insurance Solutions Development',
          description:
            'We specialize in developing cutting-edge technology solutions for the insurance industry. Our expertise allows us to create and implement innovative features that save time and resources, improve customer experience, and streamline insurance processes.',
          advantages: [
            { title: 'Property and Casualty insurance underwriting' },
            { title: 'Auto insurance automation' },
            { title: 'Claims management automation' },
            { title: 'Fraud Detection Systems' },
            { title: 'Mobile Applications' },
          ],
        },
      ],
    },
    servicesBlock: {
      pageInfo: {
        id: 2,
        name: 'services',
        title: 'Services we provide',
        description:
          "Our team is ready to support your enterprise's digital transformation and product development needs",
        seo_title:
          'Comprehensive IT Services, Software Development & Consulting | VebTech',
        seo_description:
          'Explore a wide range of IT services, including software development, AI solutions, BPM consulting, mobile app development, and more. Serving businesses in UAE, Saudi Arabia, and Qatar.',
        keywords: '',
      },
      items: [
        webDevelopmentService,
        mobileDevelopmentService,
        aiSolutionsService,
        dataManagementSolutionsService,
        itServiceMonitoringService,
        itServiceManagementService,
        businessProcessManagementService,
        itConsultingService,
      ],
    },
    casesBlock: {
      pageInfo: {
        id: 3,
        name: 'case-studies',
        title: 'Case Studies',
        description:
          'We have successfully completed a wide range of IT projects in different industries. Here you can explore a selection of them',
        seo_title:
          'Success Stories & Case Studies - How VebTech Transforms Businesses',
        seo_description:
          "Explore VebTech's successful case studies showcasing innovative IT solutions, AI applications, business process management, and more, driving growth for clients worldwide.",
        keywords: '',
      },
      items: [
        pwaCase,
        mwaCase,
        onlineInvestPlatformCase,
        nativeMobileAppCase,
        marketplaceCase,
      ],
    },
    blogBlock: {
      pageInfo: {
        id: 4,
        name: 'blog',
        title: 'Blog',
        description:
          'Stay up-to-date with the latest industry trends, technology insights, and tips from our experts',
        seo_title:
          'VebTech Blog - Latest Insights on IT Solutions, AI, BPM, and Business Technology',
        seo_description:
          "Explore VebTech's blog for expert insights, tips, and news on IT consulting, AI solutions, BPM, business technology trends, and more for businesses in the UAE, Saudi Arabia, and Qatar.",
        keywords: '',
      },
      items: [blogArticle],
    },
  },
  services: [
    webDevelopmentService,
    mobileDevelopmentService,
    aiSolutionsService,
    dataManagementSolutionsService,
    itServiceMonitoringService,
    itServiceManagementService,
    businessProcessManagementService,
    itConsultingService,
  ],
  'services/info': {
    id: 2,
    name: 'services',
    title: 'Services we provide',
    description:
      "Our team is ready to support your enterprise's digital transformation and product development needs",
    seo_title: 'IT Services ',
    seo_description: 'Managing the entire software development process',
    keywords: '',
  },
  'services/mobile-development': mobileDevelopmentService,
  'services/web-development': webDevelopmentService,
  'services/ai-solutions': aiSolutionsService,
  'services/data-management-solutions': dataManagementSolutionsService,
  'services/service-monitoring': itServiceMonitoringService,
  'services/service-management': itServiceManagementService,
  'services/business-process-management': businessProcessManagementService,
  'services/consulting': itConsultingService,
  cases: [
    pwaCase,
    mwaCase,
    onlineInvestPlatformCase,
    nativeMobileAppCase,
    marketplaceCase,
  ],
  'case-studies/info': {
    id: 10,
    name: 'case-studies',
    title: 'Case Studies',
    description: 'Explore our portfolio of clients success cases',
    seo_title: '',
    seo_description: '',
    keywords: '',
    categories: [
      {
        id: 1,
        name: 'Fintech',
      },
      {
        id: 2,
        name: 'Web Development',
      },
      {
        id: 3,
        name: 'Mobile Development',
      },
      {
        id: 4,
        name: 'Artificial intelligence & Machine learning (AI & ML)',
      },
      {
        id: 5,
        name: 'UX/UI Design',
      },
      {
        id: 6,
        name: 'IT services Monitoring',
      },
      {
        id: 7,
        name: 'IT service Management (ITSM)',
      },
      {
        id: 8,
        name: 'Business process management (BPM)',
      },
      {
        id: 9,
        name: 'Data analytics & Business intelligence (BI)',
      },
      {
        id: 10,
        name: 'Consulting',
      },
    ],
  },
  'case-studies/MWA-(Mobile-Web-ATM)': mwaCase,
  'case-studies/UP-Online-(PWA)': pwaCase,
  'case-studies/online-invest-platform': onlineInvestPlatformCase,
  'case-studies/native-mobile-app': nativeMobileAppCase,
  'case-studies/Marketplace-service-development': marketplaceCase,
  'cases/MWA-(Mobile-Web-ATM)': mwaCase,
  'cases/UP-Online-(PWA)': pwaCase,
  'cases/online-invest-platform': onlineInvestPlatformCase,
  'cases/native-mobile-app': nativeMobileAppCase,
  'cases/Marketplace-service-development': marketplaceCase,
  'blog/info': {
    id: 10,
    name: 'blog',
    title: 'Blog',
    description:
      'Stay up-to-date with the latest industry trends, technology insights, and tips from our experts',
    seo_title: '',
    seo_description: '',
    keywords: '',
    categories: [],
  },
  'blog/what-are-green-bonds-and-why-is-this-market-growing-so-fast':
    blogArticle,
  'articles/what-are-green-bonds-and-why-is-this-market-growing-so-fast':
    blogArticle,
  articles: [blogArticle],
};
