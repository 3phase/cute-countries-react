const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const copy = require('rollup-plugin-copy');
const svg = require('rollup-plugin-svg');


module.exports = {
  rollup(config, options) {
    config.plugins.push(
      svg(),
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      }),
      copy({
        targets: [
          { src: 'src/public/**/*', dest: 'dist/public/.' }
        ]
      }),
    );
    return config;
  },
};
