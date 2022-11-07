function palindrome(str) {
    str = str.toLowerCase();
    return (str === str.split('').reverse().join(''))
}

console.log(palindrome('anna'))
console.log(palindrome('table'))
console.log(palindrome("racecar"))