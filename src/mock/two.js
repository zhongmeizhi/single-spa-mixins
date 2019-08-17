const mock = {
    'get /b/yy': (query) => {
        console.log(query);
        return {
            age: '16'
        }
    },
    'POST /c': (query) => {
        console.log(query);
        return {
            sex: 'man'
        }
    }
}

module.exports = mock;
