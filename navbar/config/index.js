const define = {
  dev: {
    BASE_URL: JSON.stringify("/navbar/")
  },
  micro: {
    BASE_URL: JSON.stringify("/navbar/")
  },
  prod: {
    BASE_URL: JSON.stringify("/navbar/")
  },
}

const { NODE_ENV } = process.env;

module.exports = {
  LIBRARY: "navbar",
  define: define[NODE_ENV]
};