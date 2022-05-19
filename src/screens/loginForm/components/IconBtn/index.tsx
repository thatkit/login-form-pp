import React from 'react';
import { IconBtnCnt, Span } from './styles';

interface Props {
  children: React.ReactNode;
  icon: string;
}

export const IconBtn = (props: Props): JSX.Element => {
  return (
    <IconBtnCnt>
      <img src={props.icon} alt="icon" />
      <Span>{props.children}</Span>
    </IconBtnCnt>
  );
};
