'use client';

import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Header
    professional: 'Professional',
    personal: 'Personal',
    contact: 'Contact',
    
    // Hero - Animated titles
    problemSolver: 'Problem Solver',
    softwareEngineer: 'Software Engineer',
    youngDreamer: 'Young Dreamer',
    
    helloIm: "Hello I'm",
    heroDescription: 'IT Specialist & Full-Stack Developer | Pragmatic, delivery-oriented professional based in Rabat, Morocco',
    downloadCV: 'DOWNLOAD CV',
    
    // Experience
    myExperience: 'My',
    experience: 'Experiences',
    
    // ExperienceNew
    softwareEngineerIntern: 'Software Engineer Intern',
    oracle: 'Oracle',
    casablanca: 'Casablanca',
    julOct2025: 'Jul 2025 – Oct 2025',
    oracleDesc1: 'Participated in bug identification and resolution to improve system stability.',
    oracleDesc2: 'Designed and implemented a tracing and monitoring feature for an agentic framework as part of the Oracle Labs team.',
    
    fullStackDev: 'Full Stack Developer',
    paycab: 'Paycab',
    belgium: 'Belgium',
    sepMay2025: 'Sep 2024 – May 2025',
    paycabDesc1: 'Contributed to the development of a taxi booking web platform that connects clients with drivers.',
    paycabDesc2: 'Implemented backend services with Spring Boot, enabling secure booking, real-time tracking, and RBAC.',
    
    healthMinistry: 'Moroccan Health Ministry',
    rabat: 'Rabat',
    junAug2024: 'Jun 2024 – Aug 2024',
    healthDesc1: 'Designed and implemented an intuitive medical consultation interface, improving user experience by 60%.',
    healthDesc2: 'Developed an interactive medical record for patients and doctors using Next.js and Tailwind CSS.',
    
    
    // Seomaniak
    fullStackDevIntern: 'Full-Stack Developer Intern',
    seomaniak: 'Seomaniak',
    seomaniakCity: 'Oujda',
    aprJun2023: 'Apr 2023 – Jun 2023',
    seomaniakDesc1: 'Engineered an integrated ERP billing module, automating invoice workflows and reducing manual processing time.',
    seomaniakDesc2: 'Developed a full-featured restaurant management system, handling requirements gathering, architecture design, and deployment.',
    seomaniakDesc3: 'Implemented scalable solutions using Laravel MVC architecture with seamless legacy system integration.',
    
    // Projects
    featured: 'Featured',
    projects: 'Projects',
    selectionOfProjects: 'A selection of projects I\'ve worked on',
    
    studentGradesApp: 'Student Grades Management App',
    creator: 'Creator',
    gradesDesc1: 'Designed and developed a 3-tier application utilizing React and CSS for the front-end UI, Spring Boot for backend APIs and business logic, and PostgreSQL for efficient data storage.',
    gradesDesc2: 'Containerized the application using Docker and orchestrated deployment, scaling, and management with Kubernetes to ensure high availability and scalability.',
    
    ineAlumni: 'INE-Alumni Platform',
    contributor: 'Contributor',
    alumniDesc1: 'Contributed to the development of a web platform designed to connect alumni and students of INE.',
    alumniDesc2: 'Reviewed code contributions and performed bug fixes to improve platform stability and maintainability.',
    
    viewProject: 'View Project',
    
    // Skills
    technical: 'Technical',
    subtitle: 'Hover over to see the skill',
    skills: 'Skills',
    languages: 'Languages',
    frameworks: 'Frameworks',
    technologies: 'Technologies',
    certifications: 'Certifications',
    
    oracleJavaCert: 'Oracle Certified Professional: Java SE 17 Developer',
    oracleCloudCert: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    
    // Education
    education: 'Education',
    
    inpt: 'National Institute of Posts and Telecommunications',
    inptShort: 'INPT',
    inptPeriod: 'Sep 2023 – Present',
    inptDegree: 'Engineering Degree, Advanced Software Engineering for Digital Services',
    inptLocation: 'Rabat, Morocco',
    
    est: 'Higher School of Technology',
    estShort: 'EST',
    estPeriod: 'Oct 2021 – Jul 2023',
    estDegree: 'University Technical Diploma, Computer Application Development',
    estLocation: 'Oujda, Morocco',
    
    fst: 'Faculty of Science and Technology',
    fstShort: 'FST',
    fstPeriod: 'Oct 2020 – Jul 2021',
    fstDegree: 'First-Year DEUST in Mathematics, Computer Science, and Physics',
    fstLocation: 'Al-Hoceima, Morocco',
  },
  fr: {
    // Header
    professional: 'Professionnel',
    personal: 'Personnel',
    contact: 'Contact',
    
    // Hero - Animated titles
    problemSolver: 'Résolveur de Problèmes',
    softwareEngineer: 'Ingénieur Logiciel',
    youngDreamer: 'Jeune Rêveur',
    
    helloIm: 'Bonjour je suis',
    heroDescription: 'Spécialiste IT & Développeur Full-Stack | Professionnel pragmatique et orienté résultats basé à Rabat, Maroc',
    downloadCV: 'TÉLÉCHARGER CV',
    
    // Experience
    myExperience: 'Mes',
    experience: 'Expériences',
    
    // ExperienceNew
    softwareEngineerIntern: 'Stagiaire Ingénieur Logiciel',
    oracle: 'Oracle',
    casablanca: 'Casablanca',
    julOct2025: 'Juil 2025 – Oct 2025',
    oracleDesc1: 'Participé à l\'identification et à la résolution de bugs pour améliorer la stabilité du système.',
    oracleDesc2: 'Conçu et mis en œuvre une fonction de traçage et de surveillance pour un framework agentique dans le cadre de l\'équipe Oracle Labs.',
    
    // Seomaniak
    fullStackDevIntern: 'Stagiaire Développeur Full-Stack',
    seomaniak: 'Seomaniak',
    seomaniakCity: '[Ville]',
    aprJun2023: 'Avr 2023 – Juin 2023',
    seomaniakDesc1: 'Conçu un module de facturation ERP intégré, automatisant les flux de factures et réduisant le temps de traitement manuel.',
    seomaniakDesc2: 'Développé un système de gestion de restaurant complet, couvrant la collecte des exigences, la conception d’architecture et le déploiement.',
    seomaniakDesc3: 'Implémenté des solutions évolutives en utilisant l’architecture MVC de Laravel avec une intégration transparente des systèmes hérités.',
    
    fullStackDev: 'Développeur Full Stack',
    paycab: 'Paycab',
    belgium: 'Belgique',
    sepMay2025: 'Sep 2024 – Mai 2025',
    paycabDesc1: 'Contribué au développement d\'une plateforme web de réservation de taxis qui connecte les clients aux chauffeurs.',
    paycabDesc2: 'Implémenté des services backend avec Spring Boot, permettant la réservation sécurisée, le suivi en temps réel et le RBAC.',
    
    healthMinistry: 'Ministère de la Santé Marocain',
    rabat: 'Rabat',
    junAug2024: 'Juin 2024 – Août 2024',
    healthDesc1: 'Conçu et implémenté une interface de consultation médicale intuitive, améliorant l\'expérience utilisateur de 60%.',
    healthDesc2: 'Développé un dossier médical interactif pour les patients et les médecins utilisant Next.js et Tailwind CSS.',
    
    // Projects
    featured: 'Projets',
    projects: 'Vedettes',
    selectionOfProjects: 'Une sélection de projets sur lesquels j\'ai travaillé',
    
    studentGradesApp: 'Application de Gestion des Notes Étudiantes',
    creator: 'Créateur',
    gradesDesc1: 'Conçu et développé une application à 3 niveaux utilisant React et CSS pour l\'interface utilisateur, Spring Boot pour les API backend et la logique métier, et PostgreSQL pour le stockage efficace des données.',
    gradesDesc2: 'Conteneurisé l\'application avec Docker et orchestré le déploiement, la mise à l\'échelle et la gestion avec Kubernetes pour garantir une haute disponibilité et évolutivité.',
    
    ineAlumni: 'Plateforme INE-Alumni',
    contributor: 'Contributeur',
    alumniDesc1: 'Contribué au développement d\'une plateforme web conçue pour connecter les anciens élèves et les étudiants de l\'INE.',
    alumniDesc2: 'Examiné les contributions de code et effectué des corrections de bugs pour améliorer la stabilité et la maintenabilité de la plateforme.',
    
    viewProject: 'Voir le Projet',
    
    // Skills
    technical: 'Compétences',
    subtitle: 'passer la souris au-dessus de l\'icon',
    skills: 'Techniques',
    languages: 'Langages',
    frameworks: 'Frameworks',
    technologies: 'Technologies',
    certifications: 'Certifications',
    
    oracleJavaCert: 'Oracle Certified Professional : Développeur Java SE 17',
    oracleCloudCert: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    
    // Education
    education: 'Éducation',
    
    inpt: 'Institut National des Postes et Télécommunications',
    inptShort: 'INPT',
    inptPeriod: 'Sep 2023 – Présent',
    inptDegree: 'Diplôme d\'ingénieur, Ingénierie Logicielle Avancée pour Services Numériques',
    inptLocation: 'Rabat, Maroc',
    
    est: 'École Supérieure de Technologie',
    estShort: 'EST',
    estPeriod: 'Oct 2021 – Juil 2023',
    estDegree: 'Diplôme Universitaire Technique, Développement d\'Applications Informatiques',
    estLocation: 'Oujda, Maroc',
    
    fst: 'Faculté des Sciences et Techniques',
    fstShort: 'FST',
    fstPeriod: 'Oct 2020 – Juil 2021',
    fstDegree: '1ère Année DEUST en Mathématiques, Informatique et Physique',
    fstLocation: 'Al-Hoceima, Maroc',
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
