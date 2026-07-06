import { GlobalContext } from '@/globalContext';
import useScrollDirection from '@/hooks/useScrollDirection';
import useScrollOffset from '@/hooks/useScrollOffset';
import useDebounceValue from '@/hooks/useDebouncedValue';
import Link from 'next/link';
import React, { useCallback, useContext } from 'react';

interface Props {
  locale: string;
}

function smoothScrollTo(element?: HTMLElement, offset = 0, duration = 500) {
  const start = window.pageYOffset;
  const target = element ? element.getBoundingClientRect().top + start - offset : offset;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

    window.scrollTo(0, start + (target - start) * easeInOutQuad(progress));

    if (elapsed < duration) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

const LOCALES = ['en', 'ua'] as const;

const Header: React.FC<Props> = ({ locale }) => {
  const { dictionary } = useContext(GlobalContext);

  const scrollOffset = useScrollOffset();
  const scrollDirection = useScrollDirection();
  const { value: scrollDirectionDebounce } = useDebounceValue(scrollDirection, 150);

  const shown = scrollDirection === 'up' || scrollOffset <= 0;
  const shadow = (scrollDirection === 'up' || scrollDirectionDebounce === 'up') && scrollOffset > 0;

  const onClick = useCallback((s: string) => {
    if (s === 'view-home') {
      smoothScrollTo(undefined, 0);
    } else {
      const el = document.getElementById(s);
      if (el) {
        if (el.offsetTop <= window.scrollY) {
          smoothScrollTo(el, 130);
        } else {
          smoothScrollTo(el, 40);
        }
      }
    }
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-paper/90 backdrop-blur transition-all duration-300 ${shown ? 'translate-y-0' : '-translate-y-full'} ${shadow ? 'shadow-[0_1px_0_0_#e7e7ee,0_4px_16px_rgba(25,26,32,.06)]' : ''}`}
    >
      <div className='container flex h-16 items-center justify-between'>
        <button
          type='button'
          onClick={() => onClick('view-home')}
          className='text-[15px] font-bold tracking-[-0.01em]'
        >
          Rodion Korsun
        </button>
        <nav className='flex items-center gap-4 text-sm font-medium md:gap-7'>
          <button type='button' onClick={() => onClick('view-home')} className='hidden text-ink sm:block'>
            {dictionary?.header?.home}
          </button>
          <button type='button' onClick={() => onClick('view-chat')} className='text-muted transition-colors hover:text-ink'>
            {dictionary?.header?.chat}
          </button>
          <button type='button' onClick={() => onClick('view-projects')} className='text-muted transition-colors hover:text-ink'>
            {dictionary?.header?.projects}
          </button>
          <a
            href='https://t.me/korsunrodion'
            target='_blank'
            rel='noreferrer'
            className='hidden font-semibold text-accent md:block'
          >
            telegram: @korsunrodion
          </a>
          <div className='flex rounded-[7px] bg-chip p-0.5 text-xs font-semibold'>
            {LOCALES.map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className={`rounded-[5px] px-2.5 py-1 uppercase ${locale === item ? 'bg-white text-ink shadow-[0_1px_2px_rgba(0,0,0,.08)]' : 'text-muted'}`}
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
