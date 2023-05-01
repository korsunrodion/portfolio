import * as S from './styled';
import { GlobalContext } from '@/globalContext';
import useScrollDirection from '@/hooks/useScrollDirection';
import useScrollOffset from '@/hooks/useScrollOffset';
import useDebounceValue from '@/hooks/useDebouncedValue';
import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import { useRouter } from 'next/router';

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

const Header: React.FC<Props> = ({ locale }) => {
  const { dictionary } = useContext(GlobalContext);
  const router = useRouter();

  const scrollOffset = useScrollOffset();
  const scrollDirection = useScrollDirection();
  const { value: scrollDirectionDebounce } = useDebounceValue(scrollDirection, 150);

  const [localesMenuOpen, setLocalesMenuOpen] = useState(false);

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

  const onLocaleMouseEnter = () => {
    setLocalesMenuOpen(true);
  };

  const onLocaleMouseLeave = () => {
    setLocalesMenuOpen(false);
  };

  const onLocaleClick = () => {
    setLocalesMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setLocalesMenuOpen(false);
  }, [router.pathname, router.query]);

  return (
    <S.Container
      shadow={(scrollDirection === 'up' || scrollDirectionDebounce === 'up') && scrollOffset > 0}
      shown={scrollDirection === 'up'}
    >
      <S.Wrapper className='container'>
        <S.Left>
          <S.LeftLink onClick={() => onClick('view-home')}>{dictionary?.header?.home}</S.LeftLink>
          <S.LeftLink onClick={() => onClick('view-chat')}>{dictionary?.header?.chat}</S.LeftLink>
          <S.LeftLink onClick={() => onClick('view-projects')}>{dictionary?.header?.projects}</S.LeftLink>
        </S.Left>
        <S.Right>
          <S.RightLink href='https://t.me/korsunrodion' target='_blank'>telegram: @korsunrodion</S.RightLink>
          <S.RightLocalesWrapper
            onMouseEnter={onLocaleMouseEnter}
            onMouseLeave={onLocaleMouseLeave}
            onClick={onLocaleClick}
          >
            <S.RightLocale>{locale}</S.RightLocale>
            <S.RightLocalesMenuWrapper>
              <S.RightLocalesMenu visible={localesMenuOpen}>
                <S.RightLocalesMenuItem hidden={locale === 'ua'} href='/ua'>UA</S.RightLocalesMenuItem>
                <S.RightLocalesMenuItem hidden={locale === 'en'} href='/en'>EN</S.RightLocalesMenuItem>
              </S.RightLocalesMenu>
            </S.RightLocalesMenuWrapper>
          </S.RightLocalesWrapper>
        </S.Right>
      </S.Wrapper>
    </S.Container>
  );
};

export default Header;
