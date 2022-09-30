const path = require('path')

const resolve = pathname => path.resolve(__dirname, pathname)
const CracoLessPlugin = require('craco-less');


module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      // 下面这些是针对ant design增加的一些配置，如果没用到ant design，可以不配置下面的选项
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    "alias": {
      "@": resolve('src'),
      "components": resolve('src/components'),
      "utils": resolve('src/utils'),
      // '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
};
