const mock = {
    'get /a/xx': (query) => {
        console.log(query);
        return {
            name: 'zmz'
        }
    }
}

module.exports = mock;
