import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: './src/index.js',
  output: {
    file: 'index.js',
    format: 'umd',
    name: 'ReactMediaSession',
    globals: {
      react: 'React',
      'prop-types': 'PropTypes',
    },
  },
  external: ['react', 'prop-types'],
  plugins: [babel({ exclude: 'node_modules/**' }), uglify()],
};
