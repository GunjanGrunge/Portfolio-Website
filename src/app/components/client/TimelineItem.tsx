'use client';

import { motion } from 'framer-motion';
import { ResumeSection } from '../../utils/resumeParser';

type TimelineItemProps = {
  item: ResumeSection;
  index: number;
};

const aiMlSkills = [
  'AI', 'ML', 'OpenAI', 'LLM', 'GenAI', 'LangChain', 'RAG', 'NLP', 'PCA',
  'Machine Learning', 'Artificial Intelligence', 'Neural Networks', 'ANN',
  'XGBoost', 'LightGBM', 'Computer Vision', 'Deep Learning', 'Supervised Learning',
  'Unsupervised Learning'
];

const cloudSkills = [
  'AWS', 'S3', 'ECS', 'Docker', 'Redshift', 'Azure', 'Cloud', 'Microservices',
  'Containers', 'Cloud Computing'
];

function getSkillType(skill: string): 'ai' | 'cloud' | 'default' {
  if (aiMlSkills.some(aiSkill => skill.toLowerCase().includes(aiSkill.toLowerCase()))) {
    return 'ai';
  }
  if (cloudSkills.some(cloudSkill => skill.toLowerCase().includes(cloudSkill.toLowerCase()))) {
    return 'cloud';
  }
  return 'default';
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
    >
      {/* Content Container - Always on the left */}
      <div className={`md:pr-12 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow
            border-2 border-gray-100 relative overflow-hidden"
        >
          {/* Decorative accent */}
          <div className={`absolute top-0 left-0 w-2 h-full ${
            item.type === 'education' 
              ? 'bg-gradient-to-b from-green-400 to-emerald-600' 
              : 'bg-gradient-to-b from-blue-400 to-blue-600'
          }`} />

          <div className="ml-4">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 
              ${item.type === 'education' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
            </span>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-blue-600 font-semibold mb-1">
              {item.organization}
            </p>
            <p className="text-gray-600 text-sm font-medium mb-4">{item.date}</p>
            <p className="text-gray-800 font-medium mb-4">{item.description}</p>

            {item.specializations && (
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Specialization:</p>
                <div className="flex flex-wrap gap-2">
                  {item.specializations.map((spec, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {item.bulletPoints && (
              <ul className="space-y-3 text-gray-700 list-none">
                {item.bulletPoints.map((point, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-start gap-3 font-medium"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </motion.li>
                ))}
              </ul>
            )}

            {item.links && (
              <div className="mt-4 space-y-2">
                {item.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    {link.text}
                    <svg
                      className="w-5 h-5 ml-1 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            )}

            {item.skills && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6 flex flex-wrap gap-2"
              >
                {item.skills.map((skill, i) => {
                  const skillType = getSkillType(skill);
                  return (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-300
                        ${skillType === 'ai' 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' 
                          : skillType === 'cloud'
                            ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                    >
                      {skill}
                    </motion.span>
                  );
                })}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Empty space for timeline */}
      <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}`} />
      
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className={`w-5 h-5 rounded-full ${
            item.type === 'education' 
              ? 'bg-gradient-to-r from-green-400 to-emerald-600' 
              : 'bg-gradient-to-r from-blue-400 to-blue-600'
          } border-4 border-white shadow-md z-10`} 
        />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className={`absolute w-10 h-10 rounded-full ${
            item.type === 'education' ? 'bg-green-500' : 'bg-blue-500'
          } opacity-25 animate-ping`}
        />
      </div>
    </motion.div>
  );
}