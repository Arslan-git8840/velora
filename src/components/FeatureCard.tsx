import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  icon: ReactNode;
  bgColor: string;
  textColor?: string;
}

const FeatureCard = ({
  title,
  icon,
  bgColor,
  textColor = 'text-black',
}: FeatureCardProps) => {
  return (
    <div
      className={`
        ${bgColor} ${textColor}
        rounded-xl px-4 py-5 sm:px-5 sm:py-6
        flex flex-col items-center justify-center
        w-full min-h-[120px] sm:min-h-[140px]
        shadow-sm hover:shadow-md transition-shadow
        hover:scale-[1.03] active:scale-100
        duration-200 ease-in-out
        group relative overflow-hidden
      `}
    >
      {/* Icon */}
      <div className="mb-2 text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-200">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-semibold text-base sm:text-lg text-center leading-snug">
        {title}
      </h3>

      {/* Decorative Bling */}
      <div className="absolute -top-3 -right-3 h-5 w-5 bg-white/20 rounded-full blur-md group-hover:scale-150 transition-transform duration-300" />
    </div>
  );
};

export default FeatureCard;
