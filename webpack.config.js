const path = require('path');

module.exports = {
    mode: 'development', 
    entry: './build/input.js',
    output: {
        path: path.resolve(__dirname, 'src'), 
        filename: 'index.js'
    }, 
    watch: true
}