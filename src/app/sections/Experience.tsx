import TimelineItem from '../components/client/TimelineItem';
import { parseResume } from '../utils/resumeParser';

export default async function Experience() {
  const timelineData = await parseResume();

  return (
    <section id="experience" className="py-20 px-4 sm:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-20 text-gray-900">
          Experience & Education
        </h2>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200" />
          
          {/* Timeline items */}
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}