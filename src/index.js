//import file Cat.js
// const cat = require('./Animal/Cat');
// console.log(`This is ${cat.area('ConMeo', 2)} age`);
// console.log(cat.info(30, 50));

// console.log('start');
// debugger;
// var TotalNumber = (numbers) => {
//     var total = 0;
//     debugger;
//     for (let number in numbers) {
//         total = total + parseFloat(number);
//         console.log(`total is : ${total}, number is ${number}`);
//     }
//     console.log(`Result is : ${total / numbers.length} `);
// }

// TotalNumber([9, 2, 3, 10, 6, 8]);


/* Http module */
    let http = require('http');
    const port = 3003;

    //start server
    const server = http.createServer((request, response) => {
        // response.write('This is Awesome !!!');
        response.writeHead(200, {
            'Content-Type' : 'text/html',
            // 'Trailer' : 'Content/MD5'
        });
        // const ipAddress = request.socket.remoteAddress;
        // response.write(`IP address is ${ipAddress} \r\n`);
        response.write(`Request url is ${request.url} \r\n`);
        // response.write(`Detail request's url is : ${require('url').parse(request.url, true)}`);
        // debugger;

        // response.addTrailers({'Content-MD5': 'mã MD5 ở đây'})
        response.end();
    }).listen(port);
    console.log(`Server is running an port: ${port}.`);
