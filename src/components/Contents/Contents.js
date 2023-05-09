import React from 'react';
import { pages } from '../../utils/formList';
import { ContentsItem } from './ContentsItem';
import { getCurrentFormIndex } from '../../utils/getCurrentFormIndex';

export const Contents = () => {
  return (
    <ul className="contents-list">
      {pages.map((page, index) =>
        <ContentsItem page={page} key={index} index={index + 1} isActive={index === getCurrentFormIndex()} />
      )}
    </ul>
  )
}