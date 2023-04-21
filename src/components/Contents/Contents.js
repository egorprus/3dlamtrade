import React from 'react';
import { Link } from 'react-router-dom';
import { pages } from '../../utils/formList';
import { ContentsItem } from './ContentsItem';

export const Contents = ({changePage}) => {

  return (
    <ul className="contents-list">
      {pages.map((page, index) =>
        <ContentsItem changePage={changePage} page={page} key={index} index={index + 1} />
      )}
    </ul>
  )
}