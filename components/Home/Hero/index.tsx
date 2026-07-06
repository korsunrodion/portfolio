import { GlobalContext } from '@/globalContext';
import React, { useCallback, useContext } from 'react';

interface IStackGroup {
  title: string;
  tools: string[];
  desc: string;
}

const Hero: React.FC = () => {
  const { dictionary } = useContext(GlobalContext);

  const groups: IStackGroup[] = dictionary?.stackSection?.groups || [];

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className='container pt-14 md:pt-[88px]'>
      <div className='max-w-[760px]'>
        <h1 className='mb-6 text-4xl font-bold leading-[1.12] tracking-[-0.025em] md:text-[52px]'>
          {dictionary.title}
        </h1>
        <p className='text-lg leading-relaxed text-body'>
          {dictionary.subtitle}
        </p>
        <div className='mt-9 flex flex-wrap gap-3.5'>
          <button
            type='button'
            onClick={() => scrollTo('view-projects')}
            className='rounded-lg bg-accent px-6 py-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-90'
          >
            {dictionary.viewProjects}
          </button>
          <button
            type='button'
            onClick={() => scrollTo('view-contact')}
            className='rounded-lg border border-line-strong px-6 py-3 text-[15px] font-semibold text-ink transition-colors hover:border-muted'
          >
            {dictionary.getInTouch}
          </button>
        </div>
      </div>

      <div className='mt-20'>
        <div className='flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-5'>
          <h2 className='text-[22px] font-bold tracking-[-0.015em]'>{dictionary?.stackSection?.title}</h2>
          <span className='font-mono text-xs text-muted'>{dictionary?.stackSection?.tagline}</span>
        </div>
        <div className='grid grid-cols-1 gap-x-12 sm:grid-cols-2 lg:grid-cols-3'>
          {groups.map((group, index) => (
            <div
              key={group.title}
              className={`flex flex-col gap-2.5 py-7 ${index < groups.length - 2 ? 'border-b border-line' : 'max-lg:border-b max-lg:border-line lg:border-0'}`}
            >
              <h3 className='text-[15px] font-semibold'>{group.title}</h3>
              <div className='font-mono text-[13px] leading-[1.8] text-accent'>
                {group.tools.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p className='text-[13.5px] leading-normal text-muted'>{group.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
