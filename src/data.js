export const profile = {
  name: 'Roystan Passanha',
  role: 'Data Analyst',
  location: 'Dubai, UAE',
  email: 'roystanpassanha96@gmail.com',
  github: 'https://github.com/Roystan-passanha',
  headline: 'I build the tools that make reporting fast and data you can trust.',
  intro:
    'Data analyst with 3+ years in operations and marketing operations. I work in SQL, Python, Power BI and Excel, and I like turning a slow manual process into a script that runs in minutes.'
};

export const stats = [
  { value: 3, suffix: '+', label: 'years in data and operations' },
  { value: 67, suffix: '%', label: 'less time per DET after I automated it (60 to 20 min)' },
  { value: 25, suffix: '', label: 'campaign emails a week delivered in marketing ops' },
  { value: 600, suffix: '', label: 'pallet deliveries a month tracked across 4 regions' }
];

export const projects = [
  {
    title: 'DET Automation Tool',
    repo: 'DET-Automation-Tool',
    tag: 'Python · openpyxl · PySide6',
    summary:
      'Builds Salesforce Marketing Cloud import files from two Excel sheets. Validates every row against configurable rules before writing anything.',
    result: 'Cut DET creation from about 60 to 20 minutes per campaign.'
  },
  {
    title: 'HR Data Quality Tool',
    repo: 'hr-data-quality-tool',
    tag: 'Python · pandas · Streamlit',
    summary:
      'Cleans a messy HR master file, flags passport and visa problems with the original Excel row number, and answers HR requests in one click.',
    result: 'Finds 227 issues across 167 employees in a 608-row sample in under a second.'
  },
  {
    title: 'Logistics Delivery SQL Analysis',
    repo: 'logistics-sql-analysis',
    tag: 'SQL · SQLite · window functions',
    summary:
      'A year of pallet deliveries from four regional warehouses, analysed in SQL: on-time rate by region, causes of delay and peak-season impact.',
    result: 'Shows East at 72.9% on time and fleet availability as the main cause.'
  },
  {
    title: 'Email Campaign ETL Pipeline',
    repo: 'email-campaign-etl',
    tag: 'Python · pandas · SQLite',
    summary:
      'Turns messy email platform exports into a clean database and KPI report. Removes duplicate events and security-scanner clicks.',
    result: 'Corrects a click rate inflated from 4.5% to 7.3% by scanner clicks.'
  }
];

export const experience = [
  {
    when: 'Apr 2025 – Aug 2026',
    title: 'Senior Associate',
    org: 'Genpact (ReachLocal, after acquisition)',
    what: 'Built data extensions and modified SFMC email templates for Gannett marketing campaigns, about two days per campaign.'
  },
  {
    when: 'Sep 2024 – Apr 2025',
    title: 'Operations Support Analyst',
    org: 'ReachLocal',
    what: 'Built DETs and about 25 SFMC emails a week. Wrote a tool that cut DET creation from 60 to 20 minutes.'
  },
  {
    when: 'Feb 2023 – Sep 2024',
    title: 'Executive, Warehouse',
    org: 'LEAP India',
    what: 'Moved from customer service into data work: tracked 500 to 600 pallet deliveries a month and coordinated with four regional warehouse managers.'
  },
  {
    when: 'Apr 2022 – Jan 2023',
    title: 'Senior Associate, Claims',
    org: 'Radius Global Solutions',
    what: 'Handled inbound and outbound claims work on the LossExpress account.'
  }
];

export const skills = [
  { group: 'Analysis', items: ['SQL', 'Python', 'pandas', 'Excel (advanced)', 'Power BI', 'DAX'] },
  { group: 'Automation', items: ['ETL pipelines', 'openpyxl', 'Streamlit', 'PySide6', 'GitHub Actions'] },
  { group: 'Marketing ops', items: ['Salesforce Marketing Cloud', 'Data extensions', 'HTML email', 'Campaign QA'] },
  { group: 'Reporting', items: ['MIS reporting', 'KPI dashboards', 'Data validation', 'Process documentation'] }
];

export const education = [
  'Advanced Data Science Certification, IIT Madras and University of Toronto (2024)',
  'Bachelor of Banking & Insurance, Lords Universal College, Mumbai'
];
