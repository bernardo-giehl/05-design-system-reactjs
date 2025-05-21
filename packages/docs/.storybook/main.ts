import type { StorybookConfig } from '@storybook/react-vite';
 
const config: StorybookConfig = {
  stories: [
    "../src/pages/**/*.mdx",
    "../src/stories/**/*.stories.tsx"
  ],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test'
  ],
  framework: "@storybook/react-vite",
  core: {
    "builder": "@storybook/builder-vite"
  },
  docs: {
    "defaultName": "Documentation",
  },
  typescript: {
    reactDocgen: 'react-docgen',
    check: false,
  },
  async viteFinal (config, { configType }) {
    if (configType === 'PRODUCTION') {
      config.base = '/05-design-system-reactjs/'
    }
    return config;
  }
};
 
export default config;
