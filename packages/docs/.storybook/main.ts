import type { StorybookConfig } from '@storybook/react-vite';
 
const config: StorybookConfig = {
  stories: [
    '../src/pages/**/*.mdx',
    '../src/stories/**/*.stories.tsx'
  ],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/experimental-addon-test',
    '@chromatic-com/storybook'
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
    }
  },
  core: {
    builder: '@storybook/builder-vite'
  },
  docs: {
    autodocs: true,
    defaultName: 'Documentation',
  },
  typescript: {
    reactDocgen: 'react-docgen',
    check: false,
  },
  async viteFinal (config, { configType }) {
    const { mergeConfig } = await import('vite');
    
    if (configType === 'PRODUCTION') {
      config.base = '/05-design-system-reactjs/'
    }

    return mergeConfig(config, {});
  }
};
 
export default config;
