import * as S from './styled';
import { GlobalContext } from '@/globalContext';
import Data from '@/data/projects';
import CircArrowSvg from '@/assets/images/circ-arrow.svg';
import React, { useCallback, useContext, useState } from 'react';

const Projects: React.FC = () => {
  const { dictionary } = useContext(GlobalContext);

  const [itemsCount, setItemsCount] = useState(4);
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const onMoreClick = useCallback(() => {
    setItemsCount((prev) => prev + 4);
  }, []);

  const onClickItem = useCallback((id: number) => {
    if (activeItem === id) {
      setActiveItem(null);
    } else {
      setActiveItem(id);
    }
  }, [activeItem]);

  return (
    <S.Container className='container' id='view-projects'>
      <S.Title>{dictionary.work}</S.Title>
      <S.ProjectsContainer>
        {Data.slice(0, itemsCount).map((item) => (
          <S.ProjectItem key={item.title}>
            <S.ProjectImageContainer onClick={() => onClickItem(item.id)}>
              <S.ProjectImage fill src={item.img} quality={100} alt='' />
            </S.ProjectImageContainer>
            <S.ProjectSide active={activeItem === item.id} onClick={() => setActiveItem(null)}>
              <S.ProjectTitle>{item.title}</S.ProjectTitle>
              <S.ProjectDescription>
                {dictionary.stack}
                {' '}
                {item.stack}
              </S.ProjectDescription>
              <S.ProjectLink href={item.link} target='_blank'>{dictionary.visit}</S.ProjectLink>
            </S.ProjectSide>
          </S.ProjectItem>
        ))}
      </S.ProjectsContainer>
      {itemsCount < Data.length && (
        <S.MoreBtn type='button' onClick={onMoreClick}>
          {dictionary.more}
          <CircArrowSvg width={16} height={16} />
        </S.MoreBtn>
      )}
    </S.Container>
  );
};
export default Projects;
