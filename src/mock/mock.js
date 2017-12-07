//  为什么不能使用import ???? 
//import logo from './logo.json'
// console.log(logo)
// export default {
//     logo
// }
// const logo = require('./logo.json');

const logo = require('./logo.json');
const classes = require('./class.json');

module.exports = function() {
    return {
        "logo" : logo,
        "class" : classes
    }
}