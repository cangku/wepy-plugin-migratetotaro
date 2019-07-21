const path = require('path');
var prod = process.env.NODE_ENV === 'production';

const target = '../dist/wepy';
module.exports = {
  target,
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: !prod,
  build: {},
  resolve: {
    alias: {
      counter: path.join(__dirname, 'src/components/counter'),
      '@': path.join(__dirname, 'src')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: prod
    },
    /* sass: {
      outputStyle: 'compressed'
    }, */
    babel: {
      sourceMap: true,
      presets: ['env'],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions'
      ]
    }
  },
  plugins: {
    migrate2taro: {
      outputRoot: target,
      needComponents: ['pages/demo', 'components/demo']
    }
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
};

if (prod) {
  // 压缩sass
  // module.exports.compilers['sass'] = {outputStyle: 'compressed'}
  // 压缩js
  // module.exports.plugins = {
  //   uglifyjs: {
  //     filter: /\.js$/,
  //     config: {}
  //   },
  //   imagemin: {
  //     filter: /\.(jpg|png|jpeg)$/,
  //     config: {
  //       jpg: {
  //         quality: 80
  //       },
  //       png: {
  //         quality: 80
  //       }
  //     }
  //   }
  // };
}