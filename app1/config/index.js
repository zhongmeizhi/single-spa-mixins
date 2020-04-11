const define = {
  dev: {
    BASE_URL: JSON.stringify("/app1/")
  },
  micro: {
    BASE_URL: JSON.stringify("/app1/")
  },
  prod: {
    BASE_URL: JSON.stringify("/app1/")
  },
}

const { NODE_ENV } = process.env;

module.exports = {
  LIBRARY: "app1",
  define: define[NODE_ENV]
};