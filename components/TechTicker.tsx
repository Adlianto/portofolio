import React from 'react';
import { TechIcons, TechIcon } from '@/data/portfolio';

const TechIconItem = ({ icon }: { icon: TechIcon }) => {
  return (
    <div
      className="transition-all duration-200 transform hover:scale-125 cursor-pointer flex items-center justify-center p-2 rounded-xl relative group text-ink-primary opacity-60 hover:opacity-100"
      title={icon.name}
    >
      {icon.svg}
    </div>
  );
};

export const LargeIconOnlyLoop = ({
  direction = 'left',
}: {
  direction?: 'left' | 'right';
}) => {
  const animClass =
    direction === 'left' ? 'animate-logo-loop-left' : 'animate-logo-loop-right';

  return (
    <div
      className="w-full overflow-hidden py-4 sm:py-5 border-y border-border-hairline my-3 select-none bg-surface-1/30 min-h-[64px] sm:min-h-[80px]"
      style={{ contain: 'paint' }}
    >
      <div className={`flex gap-16 sm:gap-20 items-center ${animClass} w-max will-change-transform`}>
        {[...TechIcons, ...TechIcons].map((icon, idx) => (
          <TechIconItem key={`icon-loop-${direction}-${idx}`} icon={icon} />
        ))}
      </div>
    </div>
  );
};
