const mock = {
    'GET /a/xx': (query) => {
        // console.log(query);
        return {
            name: 'zmz'
        }
    },
    'GET /a/yy': {
        isObect: true
    },
    'GET /a/zz': 'test'
}

module.exports = mock;
