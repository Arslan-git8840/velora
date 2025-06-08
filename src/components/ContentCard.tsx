
import { ReactNode } from 'react';

interface ContentCardProps {
  text: string;
  icon: ReactNode;
}

const ContentCard = ({ text, icon }: ContentCardProps) => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 hover:border-gray-300 transition-colors group cursor-pointer">
      <div className="flex justify-between items-start">
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex-1 mr-3">
          "{text}"
        </p>
        <div className="text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;