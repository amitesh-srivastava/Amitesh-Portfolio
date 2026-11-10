/** Facts transcribed from Amitesh Srivastava's resume. Qualifiers stay attached to the claims. */

export const profile = {
  name: "Amitesh Srivastava",
  role: "Product Owner",
  phone: "+1 (585) 415-3909",
  phoneHref: "tel:+15854153909",
  email: "amitesh.srivastava11@gmail.com",
  emailHref: "mailto:amitesh.srivastava11@gmail.com",
  linkedin: "https://www.linkedin.com/in/amitesh-srivastava-02573619b",
  linkedinLabel: "linkedin.com/in/amitesh-srivastava-02573619b",
};

export const heroMetrics = [
  { value: "100K+", label: "Trucks", detail: "VelSol Vision" },
  { value: "30K+", label: "Daily safety events", detail: "VelSol Vision" },
  { value: "20%", label: "Auto-detection", detail: "Share of events" },
  { value: "92–96%", label: "Detection accuracy", detail: "Quality held" },
  { value: "$1.6M+", label: "Annual savings", detail: "Target" },
];

export const education = [
  {
    school: "Simon Business School",
    place: "Rochester, NY",
    date: "May 2026",
    degree: "Master of Business Administration",
    detail:
      "STEM-designated program. Major: Product Management. Minor: Tech & Ops, Strategy & Pricing.",
    result: "CGPA 3.77 / 4.0",
    note: "Beta Gamma Sigma prize recipient for top 20% CGPA",
  },
  {
    school: "Vellore Institute of Technology",
    place: "India",
    date: "Jun 2021",
    degree: "Bachelor of Technology, Computer Science & Engineering",
    detail: "CGPA 9.4 / 10. Ranked among the top 1% of Computer Science students.",
    note: "Program Representative, Computer Science Branch",
  },
];

export const recognition = [
  {
    title: "Awards",
    text: "1 Business Line Special Award, 2 Responsibility Awards, and 2 Spot Awards for product innovation, operational excellence, and cross-functional collaboration.",
  },
  {
    title: "Teach for Vellore",
    text: "Founded the social initiative and mentored 10+ team members, improving onboarding effectiveness, business unit efficiency, and collaborative team productivity.",
  },
];

export const roles = [
  {
    title: "Product Owner",
    org: "Velocitor Solutions",
    place: "North Carolina, US",
    dates: "Jul 2026 — Present",
    callout: [
      { value: "29", label: "Stories shipped" },
      { value: "2", label: "Major features" },
      { value: "Month 1", label: "New squad" },
      { value: "0", label: "Post-release defects" },
    ],
    bullets: [
      "Own product delivery for VelSol Vision, a computer-vision fleet safety platform processing 30K+ daily safety events across 100K+ trucks, targeting $1.6M+ in annual operational savings by reducing manual video review.",
      "Drove computer-vision event automation to 20% auto-detection at 92–96% accuracy across hard braking, speeding, seatbelt violations, and rolling stops — less manual reviewer work, with detection quality held.",
      "Launched AI Coaching to production, automating generation and AI validation of driver coaching scripts from safety events and reducing the manual effort required to deliver manager-facing coaching.",
      "Co-own roadmaps across VelSol Vision, Vision AI, and V-Hub, partnering cross-functionally to prioritize features and turn customer feedback into product decisions.",
      "Defined Vision AI, an LLM/RAG fleet assistant integrating telematics, safety events, driver scores, and maintenance data, targeting about 50% lower analysis and support effort.",
      "Own V-Hub, a centralized product knowledge, analytics, release, and training platform designed to replace legacy tooling and support about $40K in annual software cost savings.",
      "Established Jira workflows, backlog structure, release planning, and Agile processes from scratch for a newly formed cross-functional squad.",
    ],
  },
  {
    title: "Product Analyst",
    org: "CData Software",
    place: "Remote, US",
    dates: "May 2025 — May 2026",
    bullets: [
      "Engineered an agentic n8n workflow using 5 AI agents, MCPs, and Connect AI, automating dashboard generation and cutting leadership reporting turnaround from 72 hours to 45 minutes.",
      "Directed a multi-agent AI proof of concept on Google Vertex AI, AWS Bedrock, and automation pipelines, validating 10+ enterprise workflows and pulling Connect AI roadmap prioritization forward by one fiscal quarter.",
      "Optimized MCP system instructions, prompt orchestration, and decision-routing logic for Connect AI, improving response consistency on high-volume enterprise queries and raising answer stability 35% during testing.",
      "Developed three enterprise pricing frameworks using two-part tariff modeling, financial forecasting, and monetization analysis, so leadership could shortlist strategies with projected ARR growth above $2M.",
      "Built 15+ executive dashboards in Tableau, Power BI, Looker Studio, Excel, and SQL on $200M+ financial datasets, giving 500+ stakeholders access to insight 30% faster.",
    ],
  },
  {
    title: "Product Engineer",
    org: "Societe Generale",
    place: "India",
    unit: "Collateral Risk Department",
    dates: "Jan 2021 — Jun 2024",
    bullets: [
      "Led development of the Collateral Data Hub with 12 engineers through roadmap planning, stakeholder alignment, MVP delivery, and KPI definition, supporting enterprise collateral risk operations across global teams.",
      "Delivered a cloud-native Automated Audit Reporting platform using Spring Boot, PostgreSQL, Java, and Azure, eliminating manual compliance reporting and generating annual operational savings above $110,000.",
      "Designed customer-centric REST APIs and backend integrations with Spring Boot and JPA, reducing client processing wait time from four days to four hours.",
      "Streamlined DFA regulatory workflows through automation, process redesign, and stakeholder collaboration, contributing nearly $880,000 in annualized savings across global compliance and reporting.",
      "Automated enterprise Performance Reports, removing repetitive manual work equal to 5 full-time employees a year and saving about $100K in operational cost.",
    ],
  },
];

export const stories = [
  {
    index: "01",
    name: "VelSol Vision",
    org: "Velocitor Solutions",
    role: "Product Owner",
    domain: "Computer vision",
    wide: true,
    summary:
      "Fleet safety platform he owns. Computer vision processes the daily event load across the truck fleet, and automation takes a share of review off manual queues without giving up detection quality.",
    stats: [
      { value: "100K+", label: "Trucks" },
      { value: "30K+", label: "Daily safety events" },
      { value: "20%", label: "Auto-detection" },
      { value: "92–96%", label: "Detection accuracy" },
      { value: "$1.6M+", label: "Annual operational savings", note: "Target" },
    ],
    foot: "Behaviors in the automation set: hard braking, speeding, seatbelt violations, and rolling stops. Savings target comes from reducing manual video review.",
  },
  {
    index: "02",
    name: "AI Coaching",
    org: "Velocitor Solutions",
    role: "Product Owner",
    domain: "Fleet safety",
    flag: "In production",
    summary:
      "Launched to production. The product generates driver coaching scripts from safety events and validates them with AI, cutting the manual effort required to deliver coaching to managers.",
  },
  {
    index: "03",
    name: "Vision AI",
    org: "Velocitor Solutions",
    role: "Product Owner",
    domain: "LLM / RAG",
    summary:
      "Defined an LLM/RAG fleet assistant integrating telematics, safety events, driver scores, and maintenance data.",
    stats: [{ value: "~50%", label: "Lower analysis and support effort", note: "Target" }],
  },
  {
    index: "04",
    name: "V-Hub",
    org: "Velocitor Solutions",
    role: "Product Owner",
    domain: "Product platform",
    summary:
      "Centralized product knowledge, analytics, release, and training. Designed to replace legacy tooling.",
    stats: [{ value: "~$40K", label: "Annual software cost savings", note: "Designed" }],
  },
  {
    index: "05",
    name: "Connect AI",
    org: "CData Software",
    role: "Product Analyst",
    domain: "Agents",
    wide: true,
    summary:
      "Agentic reporting for leadership, plus a multi-agent proof of concept that validated enterprise workflows and moved Connect AI roadmap prioritization up by a fiscal quarter.",
    stats: [
      { value: "72h → 45m", label: "Dashboard turnaround" },
      { value: "5", label: "AI agents in the n8n workflow" },
      { value: "10+", label: "Enterprise workflows validated" },
      { value: "+1 qtr", label: "Roadmap prioritization" },
      { value: "+35%", label: "Answer stability", note: "In testing" },
    ],
    foot: "Stack on the proof of concept: Google Vertex AI, AWS Bedrock, and automation pipelines. Stability work covered MCP system instructions, prompt orchestration, and decision routing on high-volume enterprise queries.",
  },
  {
    index: "06",
    name: "Pricing & dashboards",
    org: "CData Software",
    role: "Product Analyst",
    domain: "Commercial",
    summary:
      "Three enterprise pricing frameworks — two-part tariff modeling, financial forecasting, and monetization analysis — and the executive dashboards leadership used to read the business.",
    stats: [
      { value: ">$2M", label: "Projected ARR growth", note: "Projected" },
      { value: "3", label: "Pricing frameworks" },
      { value: "15+", label: "Executive dashboards" },
      { value: "30%", label: "Faster access to insight" },
      { value: "$200M+", label: "Financial data analyzed" },
      { value: "500+", label: "Stakeholders reached" },
    ],
    foot: "Dashboards built in Tableau, Power BI, Looker Studio, Excel, and SQL.",
  },
  {
    index: "07",
    name: "Collateral risk systems",
    org: "Societe Generale",
    role: "Product Engineer",
    domain: "Collateral risk",
    wide: true,
    summary:
      "Led the Collateral Data Hub — 12 engineers, from roadmap and stakeholder alignment through MVP and KPIs — and the automation around audit, client processing, DFA, and performance reporting.",
    stats: [
      { value: "12", label: "Engineers led" },
      { value: ">$110K", label: "Annual audit-reporting savings" },
      { value: "4d → 4h", label: "Client processing wait" },
      { value: "~$880K", label: "DFA annualized savings" },
      { value: "~$100K", label: "Performance-report savings" },
      { value: "5 FTE", label: "Productivity reclaimed / year" },
    ],
    foot: "Audit reporting shipped on Spring Boot, PostgreSQL, Java, and Azure. Client APIs used Spring Boot and JPA. DFA savings were contributed across global compliance and reporting.",
  },
];

export const skillGroups = [
  {
    name: "Product & business",
    items: [
      "Product Management",
      "Product Strategy",
      "GTM Strategy",
      "Roadmapping",
      "OKRs",
      "KPI Tracking",
      "User Research",
      "Pricing Strategy",
      "PLM",
      "SDLC",
      "Agile/Scrum",
      "Stakeholder Management",
      "Jira",
      "Confluence",
    ],
  },
  {
    name: "AI & automation",
    items: [
      "n8n",
      "AI Agents",
      "Multi-Agent Systems",
      "MCPs",
      "Prompt Engineering",
      "AI Workflow Automation",
      "LLM Integrations",
      "Connector Frameworks",
      "Enterprise AI Solutions",
      "AWS",
      "Azure",
      "Google Vertex AI",
      "AWS Bedrock",
    ],
  },
  {
    name: "Data & analytics",
    items: [
      "SQL",
      "Tableau",
      "Power BI",
      "Looker Studio",
      "Excel",
      "Data Visualization",
      "Dashboard Development",
      "Financial Analysis",
      "P&L Analysis",
      "Business Intelligence",
      "Reporting Automation",
    ],
  },
  {
    name: "Programming & backend",
    items: [
      "Java",
      "Python",
      "Spring Boot",
      "JPA",
      "REST APIs",
      "Microservices",
      "Backend Development",
      "Workflow Automation",
      "System Design",
      "Jenkins",
      "CI/CD Pipelines",
      "Cloud-Native Applications",
      "Enterprise Integrations",
    ],
  },
  {
    name: "Databases & messaging",
    items: [
      "PostgreSQL",
      "SQL Databases",
      "Data Pipelines",
      "RabbitMQ",
      "Storage Integrations",
      "AWS S3",
      "Dropbox",
      "Google Drive",
      "OneDrive",
    ],
  },
];

export const certifications = [
  {
    name: "Product Management Essentials Certification",
    issuer: "University of Maryland",
  },
  {
    name: "Foundations of Project Management Certification",
    issuer: "Google",
  },
  {
    name: "AZ-900: Microsoft Azure Fundamentals (2022)",
    issuer: "Microsoft",
  },
];
