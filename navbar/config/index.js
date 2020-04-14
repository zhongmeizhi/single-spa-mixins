const NAME = 'navbar';

const define = {
  dev: {
    NAME: JSON.stringify(NAME)
  },
  micro: {
    NAME: JSON.stringify(NAME)
  },
  prod: {
    NAME: JSON.stringify(NAME)
  },
}

const { NODE_ENV } = process.env;

module.exports = {
  LIBRARY: NAME,
  define: define[NODE_ENV]
};