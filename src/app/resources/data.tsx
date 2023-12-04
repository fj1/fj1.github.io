import { FaReact } from 'react-icons/fa';
import { SiCssmodules } from 'react-icons/si';
import { SiGooglefonts } from 'react-icons/si';
import { SiMdx } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const ICON_SIZE = '3rem';

export const RESOURCES = [
  {
    href: 'https://react.dev/',
    label: 'React',
    icon: <FaReact size={ICON_SIZE} />,
  },
  {
    href: 'https://nextjs.org/',
    label: 'Next.js',
    icon: <TbBrandNextjs size={ICON_SIZE} />,
  },
  {
    href: 'https://www.typescriptlang.org/',
    label: 'TypeScript',
    icon: <SiTypescript size={ICON_SIZE} />,
  },
  {
    href: 'https://react-icons.github.io/react-icons/',
    label: 'react-icons',
    icon: <FaReact size={ICON_SIZE} />,
  },
  {
    href: 'https://github.com/css-modules/css-modules/blob/master/docs/values-variables.md',
    label: 'CSS Modules',
    icon: <SiCssmodules size={ICON_SIZE} />,
  },
  {
    href: 'https://mdxjs.com/',
    label: 'MDX',
    icon: <SiMdx size={ICON_SIZE} />,
  },
  {
    href: 'https://mdxjs.com/',
    label: 'Google Fonts',
    icon: <SiGooglefonts size={ICON_SIZE} />,
  },
];
