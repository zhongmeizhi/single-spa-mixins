const fs = require('fs');
const path = require('path');

const getMockBundleOfDir = (mockDirPath) => {
    // 同步读取mock文件夹 
    const fileNameList = fs.readdirSync(mockDirPath);
    // mock对象汇总
    let mockBundle = {};
    // 遍历文件
    fileNameList.forEach(fileName => {
        // // 读取文件
        // fs.readFile(`${mockDirPath}/${fileName}`, (err, data) => {
        //     if (err) {
        //         return console.error(err);
        //     }
        //     // 获取JSON数据
        //     let result;
        //     try {
        //         // 将Buffer转字符串，再解析
        //         result = JSON.parse(data.toString());
        //     } catch (error) {
        //         console.log('解析错误：', error)
        //         result = {}
        //     }
        //     // 将解析的结果推送到数组中
        //     console.log(result, 'result');
        // })

        // 只读取JS文件
        if (fileName.endsWith('.js')) {
            const filePtah = path.resolve(`${mockDirPath}/${fileName}`);
            const content = require(filePtah);
            // 只合并对象
            if (Object.prototype.toString.call(content) === '[object Object]') {
                Object.assign(mockBundle, content);
            }
        }
    })
    return mockBundle;
}

module.exports = getMockBundleOfDir;