let n = Math.random()
n = n * 100
n = Math.floor(n) + 1
console.log(n)


if ( n > 50) {
    alert(n + '%' + 'He loves you!')
} 
if (n >= 30 && n <= 70) {
    alert(n + '%' + 'its almost like crush!')
}
else {
    alert(n + '%' + 'Try again !')
}