/**
 * Created by amber on 16-8-13.
 */

let request = require('request');
console.log('**********correct url***********');
request('http://jd.com', function (erro, response, body) {
    console.log('1.response.statusCode:' + response.statusCode);
    console.log('2.body (total lenght:"body.lenght +")' +":" +body.substring(0,500)+'...');

});
