import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    'frequently-asked-questions',
    'tier-list',
    'feedback',
    'weapon-forge',
    {
      type: 'category',
      label: 'Gameplay Guides',
      items: [{type: 'autogenerated', dirName: 'gameplay-guides'}],
    },
    {
      type: 'category',
      label: 'Event Guides',
      items: [{type: 'autogenerated', dirName: 'event-guides'}],
    },
    {
      type: 'category',
      label: 'Resource Costs',
      items: [{type: 'autogenerated', dirName: 'resource-costs'}],
    },
  ],
  
};

export default sidebars;
