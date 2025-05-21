import React from 'react';
import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
 
const preview: Preview = {
  parameters: {
    /*controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },*/
    docs: {
      theme: themes.dark,
      toc: true,
    }
  },
  tags: ['autodocs'],
};
 
export default preview;
