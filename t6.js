function findVowels(str) {
    str = str.split('');
    let i = 0;
    const verbs ='aeiou';
    str.forEach(element => {
      if (verbs.includes(element)){
        i++;
      } 
    });
    return(i)
}

console.log(findVowels('hgdttrwq'))
console.log(findVowels('aueio'))
console.log(findVowels('hareyt'))