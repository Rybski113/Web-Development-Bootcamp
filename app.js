const output = []
let count = 1

function fizzBuzz() {
    if(count < 100) {
        output.push(count)
    count++
    console.log(output)
    }
    if ( count % 3 === 0) {
        console.log('Fizz!')
    } 
    if (count % 5 === 0) {
        console.log('Buzz!')
    }
    if (count % 3 === 0 || count % 5 === 0) {
        console.log('FizzBuzz!')
    }
}
setInterval(fizzBuzz, 500)