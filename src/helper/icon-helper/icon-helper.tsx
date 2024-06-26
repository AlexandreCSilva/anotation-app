import { ReactNode } from 'react';
import { FaGear } from 'react-icons/fa6';
import { GoGraph } from 'react-icons/go';
import { IoIosCloseCircle } from 'react-icons/io';

const IconSmallStyle = {
  color: '#474787',
};

export const IconHelper = (
  icon: string,
  iconStyle?: 'small' | 'medium' | 'large'
): ReactNode => {
  const IconStyle = !iconStyle || iconStyle === 'small' ? IconSmallStyle : {};
  const IconSize = !iconStyle || iconStyle === 'small' ? 30 : 60;

  switch (icon) {
    case 'graph':
      return <GoGraph style={IconStyle} size={IconSize} />;
    case 'config':
      return <FaGear style={IconStyle} size={IconSize} />;
    default:
      return <IoIosCloseCircle style={IconStyle} size={IconSize} />;
  }
};
