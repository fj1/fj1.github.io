import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const ICON_SIZE = '2rem';

export const FOOTER_ITEMS = [
  {
    href: 'https://github.com/fj1',
    name: 'GitHub',
    icon: <FaGithub size={ICON_SIZE} />,
  },
  {
    href: 'https://www.linkedin.com/in/francesjurek/',
    name: 'LinkedIn',
    icon: <FaLinkedin size={ICON_SIZE} />,
  },
];
