import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'go-chart',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
