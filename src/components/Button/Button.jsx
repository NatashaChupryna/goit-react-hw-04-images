import React from 'react';
import { LoadButton } from './Button.styled';


  
export const Button = ({onClick}) =>(
  <LoadButton type='button' onClick={onClick}>Load more</LoadButton>
)