function checkSpam(str) {
    if (str.toLowerCase().includes("viagra")) {
        return (true)
    } else if (str.toLowerCase().includes("xxx")) {
        return (true)
    } else {
        return (false)
    }
}

console.log(checkSpam('buy Viagra now'))
console.log(checkSpam('free xxxxxx'))
console.log(checkSpam("innocent rabbit"))