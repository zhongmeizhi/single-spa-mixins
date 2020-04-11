const define = {
  dev: {
    BASE_URL: JSON.stringify("/app2/")
  },
  micro: {
    BASE_URL: JSON.stringify("/app2/")
  },
  prod: {
    BASE_URL: JSON.stringify("/app2/")
  },
}

const { NODE_ENV } = process.env;

module.exports = {
  LIBRARY: "app2",
  define: define[NODE_ENV]
};