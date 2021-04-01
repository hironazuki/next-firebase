import { useColorMode } from '@chakra-ui/react';
import { DarkModeSwitch as ReactDarkModeSwitch } from 'react-toggle-dark-mode';
export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return <ReactDarkModeSwitch checked={isDark} onChange={toggleColorMode} size={20} />;
};
