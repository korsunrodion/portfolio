import { GlobalContext } from '@/globalContext';
import React, { useContext } from 'react';

const Footer: React.FC = () => {
  const { dictionary } = useContext(GlobalContext);

  return (
    <footer id='view-contact' className='mt-24 bg-ink py-14 text-paper md:py-[72px]'>
      <div className='container'>
        <div className='flex flex-wrap items-end justify-between gap-8 md:gap-12'>
          <div className='flex flex-col gap-3.5'>
            <h2 className='text-[26px] font-bold tracking-[-0.02em] md:text-[34px]'>{dictionary.footerTitle}</h2>
            <p className='text-base text-faint'>{dictionary.footerSub}</p>
          </div>
          <div className='flex flex-col gap-2.5 md:items-end'>
            <a
              href='https://t.me/korsunrodion'
              target='_blank'
              rel='noreferrer'
              className='font-mono text-[15px] text-paper transition-opacity hover:opacity-80'
            >
              @korsunrodion
            </a>
            <a
              href='mailto:korsun.rodion@gmail.com'
              className='font-mono text-[15px] text-faint transition-colors hover:text-paper'
            >
              korsun.rodion@gmail.com
            </a>
          </div>
        </div>
        <div className='mt-14 flex flex-wrap justify-between gap-2 border-t border-white/10 pt-6 text-[13px] text-muted'>
          <span>{dictionary.footerCopyright}</span>
          <span>{dictionary.footerLocation}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
