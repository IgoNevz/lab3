function random(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  console.log(random(1, 5));
  console.log(random(1, 2));
  console.log(random(-1, 1));
  console.log(random(1, 1)); //вернёт min при одинаковых значениях
  console.log(random(3, 1)); //вёрнет значения как обычная функция, ибо мин уберёт '-' из разницы max - min
  console.log(random(1, -1)); 