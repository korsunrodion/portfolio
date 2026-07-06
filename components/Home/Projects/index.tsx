import { GlobalContext } from '@/globalContext';
import { IProject } from '@/data/projects';
import Image from 'next/image';
import React, { useCallback, useContext, useState } from 'react';

interface Props {
  projects: IProject[];
}

const Projects: React.FC<Props> = ({ projects }) => {
  const { dictionary } = useContext(GlobalContext);

  const [itemsCount, setItemsCount] = useState(4);

  const onMoreClick = useCallback(() => {
    setItemsCount((prev) => prev + 4);
  }, []);

  return (
    <section id='view-projects' className='container pt-14 md:pt-[88px]'>
      <div className='mb-9 flex flex-wrap items-baseline justify-between gap-2'>
        <h2 className='text-[28px] font-bold tracking-[-0.02em] md:text-[32px]'>{dictionary.work}</h2>
        <span className='font-mono text-xs text-muted'>{dictionary.workTagline}</span>
      </div>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        {projects.slice(0, itemsCount).map((item) => (
          <article key={item.title} className='flex flex-col overflow-hidden rounded-xl border border-line bg-white'>
            <div className='relative aspect-video w-full border-b border-line'>
              <Image
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
                src={item.imgFilled?.img.src || ''}
                quality={100}
                alt={item.title}
                placeholder='blur'
                blurDataURL={item.imgFilled?.base64}
                className='object-cover'
              />
            </div>
            <div className='flex flex-col gap-2 p-6'>
              <h3 className='text-lg font-semibold'>{item.title}</h3>
              <p className='font-mono text-[12.5px] text-accent'>{item.stack.replace(/, /g, ' · ')}</p>
              <a
                href={item.link}
                target='_blank'
                rel='noreferrer'
                className='mt-2 text-sm font-semibold text-ink transition-colors hover:text-accent'
              >
                {dictionary.visit}
                {' ↗'}
              </a>
            </div>
          </article>
        ))}
      </div>
      {itemsCount < projects.length && (
        <div className='mt-9 flex justify-center'>
          <button
            type='button'
            onClick={onMoreClick}
            className='rounded-lg border border-line-strong px-7 py-3 text-sm font-semibold text-ink transition-colors hover:border-muted'
          >
            {dictionary.more}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
