export type ResumeSection = {
  title: string;
  organization: string;
  date: string;
  description: string;
  type: 'education' | 'work';
  skills?: string[];
  bulletPoints?: string[];
  links?: { text: string; url: string; }[];
  specializations?: string[];
};

export async function parseResume(): Promise<ResumeSection[]> {
  const experiences: ResumeSection[] = [
    {
      title: "Technical Lead",
      organization: "NOUS Infosystems",
      date: "July 2024 - Present",
      description: "Leading the development of advanced AI/ML solutions for insurance risk assessment and policy processing using LLMs and cloud infrastructure.",
      type: "work",
      skills: ["Python", "FastAPI", "LangChain", "AWS", "ECS", "S3", "Docker", "ANN", "XGBoost", "LightGBM", "RAG"],
      bulletPoints: [
        "Developed a PDF data extraction system using LLMs to calculate risk scores and policy prices, with real-time updates and integration into models for risk and premium calculation",
        "Switched from LightGBM and XGBoost to ANN for better performance",
        "Deployed a FastAPI on Docker ECS with models stored in S3 for real-time UI integration",
        "Built a POC for an insurance firm using a RAG approach to extract key details, amounts, and clauses from policy slips, handling complex logic"
      ]
    },
    {
      title: "Data Engineering Lead",
      organization: "M&C Saatchi Performance",
      date: "March 2024 – July 2024",
      description: "Led data quality initiatives and infrastructure development for AI/ML applications, focusing on data profiling and LLM implementation.",
      type: "work",
      skills: ["MS SQL Server", "Python", "LangChain", "AWS Redshift", "S3", "Data Quality", "Data Profiling"],
      bulletPoints: [
        "Developed and managed data quality check pipelines to analyze variations in datasets, including minimum, maximum, and standard deviation metrics",
        "Conducted data profiling by categorizing and sub-categorizing data",
        "Worked on setting up infrastructure for LLM-based applications to support AI initiatives"
      ]
    },
    {
      title: "Assistant Manager",
      organization: "Genpact",
      date: "May 2022 – March 2024",
      description: "Led development of AI-powered solutions including chatbots, ML models, and automation tools while improving business processes and model performance.",
      type: "work",
      skills: ["Python", "ReactJS", "Node.js", "Azure OpenAI", "LangChain", "GenAI", "AWS", "MS SQL Server", "OpenCV", "LLM"],
      bulletPoints: [
        "Automated Excel reporting using Python to streamline business processes, eliminating manual intervention and improving accuracy",
        "Optimized model performance by reducing runtime from 6 to 20 minutes using PCA, and improving OLS model accuracy from 91% to 92%",
        "Developed an internal tool with ReactJS for training machine learning models and assessing data quality",
        "Built a chatbot using RAG model for dynamic policy document research, updating context with policy changes",
        "Created a chatbot with GenAI and LLMs to interact with dashboards, generate SQL queries, and transform data"
      ]
    },
    {
      title: "Senior Analyst",
      organization: "Lifeworks",
      date: "July 2021 – May 2022",
      description: "Led automation and visualization initiatives using Power BI, developed UI solutions with Power Apps, and implemented NLP-based policy summarization.",
      type: "work",
      skills: ["MS SQL", "Python", "Power BI", "Excel", "Power Apps", "NLP", "Power Automate"],
      bulletPoints: [
        "Automate reporting process using Power BI: Automation data with power bi using python",
        "Visualization for Weekly/Monthly/Quarterly reports",
        "UI development using Power Apps, Power Automate",
        "Policy Summarization model for the client using NLP and deployed in Power Apps"
      ]
    },
    {
      title: "Senior Analyst",
      organization: "American Express",
      date: "July 2019 – Feb 2021",
      description: "Performed data analysis, ETL operations, and delivered actionable insights through dashboards and presentations.",
      type: "work",
      skills: ["SQL", "Python", "Excel", "Access", "Data Analysis", "ETL"],
      bulletPoints: [
        "ETL using SQL, Excel, Python",
        "Root cause analysis and research",
        "Published dashboards based on analysis",
        "Present findings, forecasting, recommendations"
      ]
    },
    {
      title: "Analyst",
      organization: "Accenture",
      date: "April 2015 – June 2019",
      description: "Led analytics and optimization initiatives for multiple Google projects including Google Play, YouTube, Project-Fi, Google Pay and Google Cloud.",
      type: "work",
      skills: ["Google Cloud", "Analytics", "Business Optimization", "Dashboard Development"],
      bulletPoints: [
        "Aligned Under Google Projects (Google Play, YouTube, Project-Fi, Google Pay and Google Cloud)",
        "Developed smart, compelling dashboards and reports to track KPIs and trends using excel, power point",
        "Implement cost saving measures & business optimization post analysis"
      ]
    }
  ];

  const education: ResumeSection[] = [
    {
      title: "Masters in Computer Application",
      organization: "AMITY UNIVERSITY",
      date: "Dec 2025",
      description: "Pursuing Masters with specialization in Machine Learning and Artificial Intelligence",
      type: "education",
      skills: ["Machine Learning", "Artificial Intelligence"],
      specializations: ["Machine Learning", "Artificial Intelligence"]
    },
    {
      title: "AI / Machine Learning",
      organization: "Great Lakes & Texas McCombs, The University of Texas",
      date: "Feb 2021 – Feb 2022",
      description: "Advanced certification in AI and Machine Learning with focus on practical applications and industry-relevant projects.",
      type: "education",
      skills: [
        "Supervised Learning", "Unsupervised Learning", "Ensemble Techniques",
        "Neural Networks", "Computer Vision", "NLP", "Recommendation Systems"
      ],
      bulletPoints: [
        "Machine Learning: Supervised Learning, Unsupervised Learning, Ensemble Techniques, Featurization, Model Selection & Tuning, Recommendation Systems",
        "Deep Learning: Neural Networks, Computer Vision, Natural Language Processing"
      ],
      links: [
        {
          text: "View Course Projects",
          url: "https://eportfolio.greatlearning.in/gunjan-sarkar"
        }
      ]
    },
    {
      title: "Cloud Computing",
      organization: "Great Lakes",
      date: "Jul 2022 - May 2023",
      description: "Specialized certification in Cloud Computing with focus on AWS services and cloud architecture.",
      type: "education",
      skills: [
        "AWS", "Cloud Computing", "Big Data Management", "Analytics",
        "Containers", "Microservices"
      ],
      bulletPoints: [
        "Amazon Web Services (AWS): Cloud Computing on AWS, Managed Services on AWS, Big Data Management & Analytics, Containers, Microservices"
      ],
      links: [
        {
          text: "View Course Projects",
          url: "https://eportfolio.mygreatlearning.com/gunjan-sarkar2"
        }
      ]
    }
  ];

  return [...experiences, ...education];
}