export type Project = {
  title: string;
  description: string;
  category: 'AI/ML' | 'Web Development' | 'Cloud' | 'Full Stack';
  features: string[];
  technologies: string[];
  links: {
    github: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    title: 'Cloud Copilot',
    description: 'An intelligent AWS assistant that uses a multi-agent architecture to help manage and interact with AWS resources. Combines OpenAI\'s GPT-4 and AWS Bedrock models for intelligent AWS operations.',
    category: 'Cloud',
    features: [
      'Interactive chat interface for AWS operations',
      'Secure handling of AWS credentials',
      'Support for common AWS operations (S3, EC2, IAM)',
      'Intelligent policy suggestions and validation',
      'Real-time AWS resource information'
    ],
    technologies: ['Python', 'TypeScript', 'FastAPI', 'React', 'AWS Bedrock', 'OpenAI GPT-4'],
    links: {
      github: 'https://github.com/GunjanGrunge/CloudCopilot',
      demo: 'https://cloud-copilot-demo.vercel.app'
    }
  },
  {
    title: 'Chord Picker Pro',
    description: 'A comprehensive music theory and chord progression tool built with React and Electron. Features an interactive circle of fifths, scale explorer, and chord compatibility suggestions.',
    category: 'Web Development',
    features: [
      'Interactive Circle of Fifths with visual key relationships',
      'Scale Explorer with degree information and chord suggestions',
      'Virtual piano keyboard with multiple octave support',
      'Professional Metronome (40-208 BPM)',
      'Available as both web and desktop application'
    ],
    technologies: ['React', 'Electron', 'TypeScript', 'Tone.js', 'Tonal.js', 'Vite'],
    links: {
      github: 'https://github.com/GunjanGrunge/chordpickerpro',
      demo: 'https://chord-picker-pro.vercel.app'
    }
  },
  {
    title: 'AWS Backup UI',
    description: 'A modern, feature-rich React application for managing AWS S3 buckets with an intuitive user interface. Provides comprehensive file and folder management capabilities.',
    category: 'Cloud',
    features: [
      'Browse S3 bucket contents with folder hierarchy',
      'Upload/Download files with progress tracking',
      'Real-time transfer management',
      'Sort by name, size, and last modified date',
      'Toast notifications for operations'
    ],
    technologies: ['React', 'AWS SDK', 'Bootstrap', 'JavaScript', 'CSS'],
    links: {
      github: 'https://github.com/GunjanGrunge/awsbackupUIReact'
    }
  },
  {
    title: 'AI Twitter Bot',
    description: 'An automated Twitter bot that generates and posts diverse content using OpenAI GPT-4, featuring dual daily sessions and smart duplicate prevention.',
    category: 'AI/ML',
    features: [
      'Dual daily posting sessions with 4 tweets each',
      'Smart duplicate prevention with 90-day history',
      'Multiple content categories (Poetry, Motivation, Jokes)',
      'Automated scheduling via GitHub Actions',
      '70% similarity threshold for uniqueness'
    ],
    technologies: ['Node.js', 'OpenAI GPT-4', 'Twitter API v2', 'GitHub Actions', 'JavaScript'],
    links: {
      github: 'https://github.com/GunjanGrunge/animated-twitter-chainsaw'
    }
  }
];