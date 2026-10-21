export const profile = {
  name: 'Yuhan Xie', email: 'xieyuhan635@gmail.com', location: 'Stockholm, Sweden',
  github: 'https://github.com/xieyuhan6', linkedin: 'https://www.linkedin.com/in/yuhan-xie-0326xyh/',
  cv: '/Yuhan-Xie-Resume.pdf',
};
export const navLinks = [{name:'Projects',link:'#work'},{name:'Experience',link:'#experience'},{name:'Skills',link:'#skills'},{name:'Contact',link:'#contact'}];
export const experiences = [
 { role: 'Digital Compliance & Assurance Analyst Intern', organization:'UN Global Service Centre', location:'Valencia, Spain', date:'Feb – Jun 2026', points:[
  'Automated Microsoft Fabric pipelines combining vulnerability and asset data from Tenable Nessus and Microsoft Defender: 3,000+ IT assets and 90,000+ monthly findings.',
  'Used Python and Power Query to clean, deduplicate and analyze vulnerability data by severity, asset type, network zone and remediation status.',
  'Built Power BI dashboards for exposure, patch compliance, remediation progress, SLA status and security tool coverage.',
  'Worked with infrastructure and support teams to improve data quality and document processes referencing ISO/IEC 27001:2022.'
 ]},
 {role:'Turkish Operation Specialist', organization:'Kumai Tech', location:'Guangzhou, China',date:'May 2023 – Jul 2024',points:[
  'Analyzed business and user-behavior data to identify operational trends and growth opportunities.',
  'Planned community campaigns and social media initiatives, and coordinated with technical and design teams to resolve user issues.'
 ]},
 {role:'Turkish Operation Intern',organization:'Hello Group Inc.',location:'Beijing, China',date:'Jan – May 2023',points:[
  'Conducted competitor and product analysis and produced multilingual reports.',
  'Translated operational needs into actionable tasks for cross-functional issue resolution.'
 ]}
];
export const education = [
 {degree:'Master’s in Information Security', school:'Stockholm University',date:'Aug 2024 – Present',detail:'Coursework: Network Security, Software Security and Cyber Forensics.'},
 {degree:'Bachelor’s in Turkish Language',school:'Guangdong University of Foreign Studies',date:'Aug 2019 – Aug 2023',detail:'Language and cross-cultural communication.'}
];
export const skills = [
 {title:'Security',items:['Vulnerability Management','Tenable Nessus','Microsoft Defender','ISO/IEC 27001']},
 {title:'Data & analytics',items:['Microsoft Fabric','Power BI','Power Query','Python','SQL']},
 {title:'Web development',items:['TypeScript','React','Next.js','FastAPI','Express','SQLAlchemy','Git']},
 {title:'Languages',items:['Chinese · Native','English · Advanced','Turkish · Fluent']}
];
export const projects = [
 {id:'interview-helper',name:'Interview Helper',category:'AI · Career preparation',image:'/images/projects/interview.webp',alt:'Interview Helper dashboard with interview practice and resume review',description:'A single workspace for mock interviews and resume improvement, built around a shared account and preparation history.',tags:['Next.js','TypeScript','Firebase','Gemini'],features:['Practice with role-specific questions, editable voice input and scored feedback.','Review complete interview transcripts and resume unfinished sessions.','Import a resume, edit a revised draft and use it to prepare an interview.'],source:'https://github.com/xieyuhan6/ai-interview',related:'https://github.com/xieyuhan6/resumeHelper',note:'Combines the interview and resume-review projects.'},
 {id:'splitbill',name:'SplitBill',category:'Next.js · Browser-first utility',image:'/images/projects/splitbill.webp',alt:'SplitBill expense form and settlement summary',description:'A multi-currency trip calculator that keeps splitting, conversion and settlement calculations in the browser.',tags:['Next.js','TypeScript','Zustand','Playwright'],features:['Describe an expense to prefill editable fields and discover participants.','Allocate rounding remainders precisely and calculate who reimburses whom.','Use manual rates offline after loading, and print a formatted settlement report.'],source:'https://github.com/xieyuhan6/split-the-bill',demo:'https://split-the-bill-sandy.vercel.app',note:'Optional online exchange rates; no application backend required.'},
 {id:'my-adventure',name:'My Adventure',category:'Full-stack · Interactive storytelling',image:'/images/projects/adventure.webp',alt:'My Adventure theme input for generating a branching story',description:'A choose-your-own-adventure app that turns a theme into a branching story with multiple possible endings.',tags:['React','TypeScript','FastAPI','SQLAlchemy','Hugging Face'],features:['Generate stories through background jobs with visible progress and error states.','Follow choices through structured story nodes and branching paths.','Store stories and job statuses through a Python API and database.'],source:'https://github.com/xieyuhan6/myadventure',demo:'https://myadventure.vercel.app',note:'Frontend on Vercel; Python API with background story-generation jobs.'}
];
