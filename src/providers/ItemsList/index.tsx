import {
    faAngular,
    faCss3Alt,
    faDocker,
    faHtml5,
    faJava,
    faJs,
    faReact,
    faSass,
    faShopify
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import barracredImage from '@/assets/img/stores/barracred.gif';
import dreamImage from '@/assets/img/stores/dream.gif';
import emiImage from '@/assets/img/stores/emi.gif';
import flowfaImage from '@/assets/img/stores/flowfa.gif';
import jvImage from '@/assets/img/stores/jv.gif';
import novvoImage from '@/assets/img/stores/novvo.gif';
import occhialeriaImage from '@/assets/img/stores/occhialeria.gif';
import ryziImage from '@/assets/img/stores/ryzi.gif';
import tecfagImage from '@/assets/img/stores/tecfag.gif';
import { ItemsListProps } from './itemsList.interface';

const vtexIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="189.7224690622575 186.14 1181.6090127435018 435.06000000000006">
    <g fill="currentColor">
        <path d="M656.59 186.14h-374c-29 0-47.57 30.83-34 56.46L286 313.44h-67.82A24.94 24.94 0 0 0 196.12 350l120.33 227.75a24.94 24.94 0 0 0 44.08 0l32.68-61.52 41 77.62c14.43 27.3 53.52 27.35 68 .08l187.46-352.76c13.25-24.95-4.83-55.03-33.08-55.03zm-168 150.72L407.76 489a16.6 16.6 0 0 1-29.33 0l-80.05-151.5A16.6 16.6 0 0 1 313 313.13h161.33a16.15 16.15 0 0 1 14.26 23.73zM1054.39 349.79h-40.91V490a4.83 4.83 0 0 1-4.82 4.82h-31.55a4.83 4.83 0 0 1-4.82-4.82V349.79h-41.15a4.63 4.63 0 0 1-4.82-4.58v-24.8a4.63 4.63 0 0 1 4.82-4.58h123.24a4.84 4.84 0 0 1 5.06 4.58v24.81a4.84 4.84 0 0 1-5.05 4.57zM1185.72 493.81c-8.43 1.2-22.61 3.13-48.62 3.13-31.07 0-58.52-7.95-58.52-51.78v-80c0-43.83 27.7-51.54 58.76-51.54 26 0 39.95 1.93 48.38 3.13 3.37.48 4.82 1.69 4.82 4.82V344a4.83 4.83 0 0 1-4.82 4.82h-50.78c-11.32 0-15.41 3.85-15.41 16.38v21.92h64.27a4.83 4.83 0 0 1 4.82 4.82v22.88a4.83 4.83 0 0 1-4.82 4.82h-64.27v25.53c0 12.52 4.09 16.38 15.41 16.38h50.78a4.83 4.83 0 0 1 4.82 4.82v22.4c0 3.11-1.45 4.56-4.82 5.04zM1367.43 494.77h-38.29c-3.13 0-4.58-1-6.26-3.61l-33.2-52.71L1259.6 490c-1.69 2.89-3.37 4.82-6 4.82h-35.64c-2.41 0-3.61-1.45-3.61-3.13a4.47 4.47 0 0 1 .48-1.69l52.17-87-52.71-82.61a3.42 3.42 0 0 1-.48-1.45 3.47 3.47 0 0 1 3.61-3.13h38.77c2.65 0 4.58 2.41 6 4.58l30.81 48.65 29.82-48.65c1.2-2.17 3.37-4.58 6-4.58h35.64a3.47 3.47 0 0 1 3.61 3.13 3.42 3.42 0 0 1-.48 1.45l-52.45 83.12 54.7 86.49a5.38 5.38 0 0 1 .72 2.41c.01 1.4-1.2 2.36-3.13 2.36zM868.6 316.31a3.72 3.72 0 0 0-3.64 3L830 448.7c-.48 2.65-1.2 3.61-3.37 3.61s-2.89-1-3.37-3.61l-35-129.42a3.72 3.72 0 0 0-3.64-3h-34.41a3.72 3.72 0 0 0-3.62 4.56s42.7 148.39 43.17 149.85c5.7 17.68 19.53 26.13 37.13 26.13 16.76 0 31.39-8.85 37.11-26.08.68-2 42.43-149.91 42.43-149.91a3.72 3.72 0 0 0-3.62-4.55z"></path><path d="M656.59 186.14h-374c-29 0-47.57 30.83-34 56.46L286 313.44h-67.82A24.94 24.94 0 0 0 196.12 350l120.33 227.75a24.94 24.94 0 0 0 44.08 0l32.68-61.52 41 77.62c14.43 27.3 53.52 27.35 68 .08l187.46-352.76c13.25-24.95-4.83-55.03-33.08-55.03zm-168 150.72L407.76 489a16.6 16.6 0 0 1-29.33 0l-80.05-151.5A16.6 16.6 0 0 1 313 313.13h161.33a16.15 16.15 0 0 1 14.26 23.73z"></path>
    </g>
</svg>;

export const menuItems: ItemsListProps[] = [
    {
        name: "Sobre",
        link: "#sobre"
    },

    {
        name: "Experiência",
        link: "#experiencia"
    },

    {
        name: "Escolaridade",
        link: "#escolaridade"
    },

    {
        name: "Certificações",
        link: "#certificacoes"
    },

    {
        name: "Habilidades",
        link: "#habilidades"
    },

    {
        name: "Projetos",
        link: "#projetos"
    },

    {
        name: "Contato",
        link: "contato"
    }
];

export const socialItems: (ItemsListProps & { icon: JSX.Element })[] = [
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/guilherme-rocha-leite/",
        icon: <LinkedInIcon />
    },

    {
        name: "GitHub",
        link: "https://github.com/guilhermeDTNA/",
        icon: <GitHubIcon />
    },

    {
        name: "YouTube",
        link: "https://www.youtube.com/channel/UC28bAjWwKIosH8iZDhT1YEw",
        icon: <YouTubeIcon />
    },

    {
        name: "Facebook",
        link: "https://www.facebook.com/guilherme.rocha.dtna/",
        icon: <FacebookIcon />
    },

    {
        name: "Instagram",
        link: "https://www.instagram.com/guilherme.dtna/",
        icon: <InstagramIcon />
    },
];

export const experiences = [
    {
        name: "Analista de Tecnologia da Informação",
        company: "Universidade Federal dos Vales do Jequitinhonha e Mucuri (UFVJM)",
        companyLink: "https://portal.ufvjm.edu.br/",
        description: "Em andamento...",
        period: "Outubro 2025 - presente"
    },
    
    {
        name: "Desenvolvedor Web Front-End Pleno",
        company: "Funcional Health Tech",
        companyLink: "https://www.funcionalhealthtech.com.br/",
        description: "Desenvolvimento com foco maior em front-end, utilizando React, Typescript, Tailwind e Vitest.\nTambém considerável atuação no back-end, com NestJS, GraphQL, SQL, C# e Visual Basic.\nPara análise de eventos de usuários nos sistemas, realizei a integração dos mesmos com o Google Analytics (GA4) e o Google Tag Manager (GTM), auxiliando a empresa na criação e mensuração de eventos personalizados.\nRazoável manipulação de bancos de dados relacionais, com criação de scripts e alteração em procedures já existentes.\nAtuação em times ágeis, nos quais a prática de code review era obrigatória e os seguintes ritos eram seguidos à risca: daily, reabastecimento, refinamento, retrospectiva e planning poker.",
        period: "Agosto 2024 - Outubro 2025"
    },

    {
        name: "Desenvolvedor Web Front-End",
        company: "Simples. Inovação",
        companyLink: "https://simplesinovacao.com/",
        description: "De agosto de 2021 a agosto de 2024, tive contato frequente com tecnologias voltadas para e-commerce, tais como VTEX, Shopify, VTEX IO e Loja Integrada, além de ter adquirido amplo conhecimento em HTML, CSS e JavaScript (Vanilla, JQuery e React), por necessitar usar tais linguagens nas plataformas citadas.\nPor momentos, trabalhei com PHP para configuração de envio de e-mails e NodeJS para configuração de webservice, mesmo ocupando uma vaga mais voltada ao front-end. Por possuir certo conhecimento em back-end, também consigo ser designado a trabalhar com tecnologias para tal.\nOutras habilidades adquiridas e constantemente aprimoradas são relativas ao relacionamento interpessoal com outros membros da equipe ou fora dela; à definição e cumprimento de prazos e à procura constante em não necessitar de re-trabalho, buscando realizar o melhor serviço sempre.",
        period: "Abril 2022 - Agosto 2024"
    },

    {
        name: "Estagiário como Desenvolvedor Web",
        company: "Simples. Inovação",
        companyLink: "https://simplesinovacao.com/",
        description: "Período em que trabalhei rotineiramente com HTML, CSS e JavaScript para implementar soluções requisitadas pelos clientes da empresa. Por trabalharmos com e-commerce, também estou gradualmente desenvolvendo habilidades nas seguintes plataformas: VTEX, Shopify e Loja Integrada.",
        period: "Agosto 2021 - Abril 2022"
    },

    {
        name: "Desenvolvedor Web Júnior",
        company: "Visie Padrões Web",
        companyLink: "https://visie.com.br/",
        description: "Fui desenvolvedor web front-end na Visie durante 1 mês e meio, onde tive profundo contato com as seguintes tecnologias: ReactJS, NextJS, SASS e Git Flow. Durante o período, eu trabalhei em um projeto para uma empresa multinacional, participando de reuniões e seguindo o desenvolvimento do sistema com a metodologia Scrum aliada ao Kanban.\nO curto período de tempo em atividade foi consequência de uma análise de perfil por parte da equipe de desenvolvimento, na qual foi perceptível a falta de tempo dos dois membros para sanar minhas dúvidas e acompanhar meu desempenho, fazendo com que chegassem à conclusão que a vaga em questão deveria ser de nível mais próximo de Pleno e que não fosse preciso haver uma preparação constante do desenvolvedor.\nEmbora curto, o período foi muito proveitoso pois foi possível trabalhar em um projeto real com excelentes programadores, usando metodologias que são amplamente utilizadas no mercado de trabalho e manipulando recursos de alto nível em SASS (como modificadores e efeitos de transição aplicados a conteúdo HTML e a imagens SVG) juntamente com o NextJS, que é uma ótima biblioteca para o React que possibilita a renderização do HTML por parte do servidor.",
        period: "Junho 2021 - Julho 2021"
    },

    {
        name: "Estagiário como Desenvolvedor Web",
        company: "DICOM/UFVJM",
        companyLink: "https://portal.ufvjm.edu.br/dicom/diretoria-de-comunicacao-social/quem-somos/",
        description: "Como estagiário na Diretoria de Comunicação Social (Dicom), fui um dos responsáveis pela criação de toda documentação e sistema do novo portal institucional da Universidade Federal dos Vales Jequitinhonha e Mucuri (UFVJM).\nO projeto foi necessário para atender às regras da nova Identidade Digital do Governo, a IDG 2.0.",
        period: "Fevereiro 2019 - Fevereiro 2021"
    }
];

export const courses = [
    {
        name: "Pós-Graduação em Desenvolvimento Full Stack",
        institution: "Descomplica",
        description: "Curso de pós-graduação em desenvolvimento full ftack",
        period: "Janeiro 2024 - Julho 2024"
    },

    {
        name: "Bacharelado em Sistemas de Informação",
        institution: "Universidade Federal dos Vales do Jequitinhonha e Mucuri (UFVJM)",
        description: "Curso de graduação em Sistemas de Informação",
        period: "Abril 2016 - Janeiro 2022"
    },

    {
        name: "Programação de Dispositivos Móveis",
        institution: "Uaitec",
        description: "Curso profissionalizante em programação de dispositivos móveis",
        period: "Março 2017 - Julho 2017"
    },

    {
        name: "Técnico em Informática",
        institution: "Pronatec",
        description: "Curso técnico em informática",
        period: "Julho 2013 - Dezembro 2014"
    }
];

export const certifications = [
    {
        name: "Bootcamp LocalizaLabs .NET Developer",
        institution: "Digital Innovation One",
        link: "https://certificates.digitalinnovation.one/11BACBDE"
    },

    {
        name: "Implementando Bancos de Dados",
        institution: "Fundação Bradesco",
        link: "https://www.linkedin.com/company/fundacaobradesco/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BZyVO6fmyS7iCyBjILZrasw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-background_details_certification"
    },

    {
        name: "Kanban Foundation (KIKF)",
        institution: "Kanban Foundation",
        link: "https://www.linkedin.com/company/kanban-institute/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BZyVO6fmyS7iCyBjILZrasw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-background_details_certification"
    },

    {
        name: "Power BI (nível introdutório)",
        institution: "EDK Labs Tecnologia",
        link: "https://procertificacao.com.br/validar/2717"
    },

    {
        name: "Programador de Dispositivos Móveis",
        institution: "Uaitec",
        link: "https://www.linkedin.com/company/uaitec-lab/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BZyVO6fmyS7iCyBjILZrasw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-background_details_certification"
    },

    {
        name: "ReactJS do zero ao avançado na prática",
        institution: "Udemy",
        link: "https://www.udemy.com/certificate/UC-cf923ea4-d0a5-476f-99c0-2f3455c2579d/"
    },

    {
        name: "Scrum Foundation Professional Certificate (SFPC)",
        institution: "CertiProf",
        link: "https://www.linkedin.com/company/certiprof/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BZyVO6fmyS7iCyBjILZrasw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-background_details_certification"
    }
];

export const skills = {
    technologies: [
        {
            icon: <FontAwesomeIcon icon={faHtml5} />,
            link: "https://www.w3.org/html/",
            name: "HTML 5"
        },

        {
            icon: <FontAwesomeIcon icon={faCss3Alt}/>,
            link: "https://www.w3.org/Style/CSS/Overview.en.html",
            name: "CSS 3"
        },

        {
            icon: <FontAwesomeIcon icon={faJs}/>,
            link: "https://www.javascript.com/",
            name: "JavaScript"
        },

        {
            icon: <FontAwesomeIcon icon={faReact}/>,
            link: "https://reactjs.org/",
            name: "ReactJS"
        },

        {
            icon: <FontAwesomeIcon icon={faShopify}/>,
            link: "https://www.shopify.com/",
            name: "Shopify"
        },

        {
            icon: vtexIcon,
            link: "https://vtex.com/",
            name: "VTEX CMS e VTEX IO"
        },

        {
            icon: <FontAwesomeIcon icon={faSass}/>,
            link: "https://sass-lang.com/",
            name: "SASS"
        },

        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clipPath="url(#prefix__clip0)"><path fill="#38bdf8" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd"/></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs></svg>,
            link: "https://tailwindcss.com/",
            name: "Tailwind"
        },

        {
            icon: <FontAwesomeIcon icon={faJava}/>,
            link: "https://www.java.com/",
            name: "Java"
        },

        {
            icon: <FontAwesomeIcon icon={faDocker}/>,
            link: "https://www.docker.com/",
            name: "Docker"
        },

        {
            icon: <FontAwesomeIcon icon={faAngular}/>,
            link: "https://angular.dev/",
            name: "Angular"
        }
    ],

    general: [
        {
            title: "Softwares e Sistemas Operacionais",
            items: [
                "Sistemas Operacionais: Windows 7, 8, 8.1 e 10, Linux Educacional, Mint e Ubuntu.",
                "Softwares: Pacote Microsoft Office, Pacote Libre Office, entre outros."
            ]
        }
    ],

    languages: [
        {
            name: "Português",
            level: "Nativo/Fluente"
        },

        {
            name: "Inglês",
            level: "Intermediário"
        }
    ]
}

export const projects = [
    {
        name: "Sites de E-commerce Desenvolvidos em Shopify e VTEX",
        link: "/projetos/sites-ecommerce"
    },

    {
        name: "Novo Portal Institucional da UFVJM Utilizando Plone",
        link: "/projetos/portal-ufvjm"
    },

    {
        name: "Sistema Web para Associação Utilizando Plone, PHP, SQL e JavaScript",
        link: "/projetos/sistema-kuruatuba"
    },

    {
        name: "Criação e Consumo de uma API Utilizando Django e ReactJS",
        link: "/projetos/api-react"
    },

    {
        name: "Criação de um Webservice RESTful Utilizando Java e de um Cliente Utilizando ReactJS",
        link: "/projetos/webservice-java-react"
    },

    {
        name: "Sistema de Gerenciamento de Clientes Utilizando ReactJS e PHP",
        link: "/projetos/crud-php-react"
    },

    {
        name: "Sistema de Gerenciamento de Cursos Utilizando PHP",
        link: "/projetos/sistema-bd"
    }
]

export const ecommerceProjects = [
    {
        platform: "VTEX IO",
        name: "Barracred",
        link: "https://www.lojadocooperado.com.br/",
        imageUrl: barracredImage,
        description: "Projeto de implantação"
    },

    {
        platform: "VTEX IO",
        name: "Dream Store",
        link: "https://www.lojasdream.com/",
        imageUrl: dreamImage,
        description: "Projeto de implantação"
    },

    {
        platform: "VTEX CMS",
        name: "Emibeachwear",
        link: "https://www.emirio.com.br/",
        imageUrl: emiImage,
        description: "Projeto de evolução"
    },

    {
        platform: "Shopify",
        name: "Flowfa",
        link: "https://flowfa.com.br/",
        imageUrl: flowfaImage,
        description: "Projeto de implantação"
    },

    {
        platform: "Shopify",
        name: "Jean Vernier",
        link: "https://jeanvernier.com.br/",
        imageUrl: jvImage,
        description: "Projeto de implantação"
    },

    {
        platform: "Shopify",
        name: "Novvo",
        link: "https://novvo.com.br/",
        imageUrl: novvoImage,
        description: "Projeto de evolução"
    },

    {
        platform: "VTEX CMS",
        name: "Occhialeria",
        link: "https://occhialeria.com.br/",
        imageUrl: occhialeriaImage,
        description: "Projeto de implantação"
    },

    {
        platform: "Shopify",
        name: "Ryzi",
        link: "https://www.ryzi.com.br/",
        imageUrl: ryziImage,
        description: "Projeto de evolução"
    },

    {
        platform: "VTEX CMS",
        name: "Tecfag",
        link: "https://www.tecfag.com.br/",
        imageUrl: tecfagImage,
        description: "Projeto de implantação"
    },

    {
        platform: "Shopify",
        name: "Flowfa",
        link: "http://flowfa.com.br/",
        imageUrl: flowfaImage,
        description: "Projeto de implantação"
    }
]