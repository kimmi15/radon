// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Roadon, W3D1, the topic for today is Nodejs module system’


function printDate(){
console.log(new Date().toDateString());
}

function printMonth(){
    console.log(new Date().getMonth() + 1);
}

function getBatchInfo(){
    console.log('Roadon, W3D1, the topic for today is Nodejs module system');
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo