import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import React from 'react';

type Props = FontAwesomeIconProps;

const Icon = (props: Props) => {
  return <FontAwesomeIcon {...props}></FontAwesomeIcon>;
};

export default Icon;
