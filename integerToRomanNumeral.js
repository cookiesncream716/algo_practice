function integerToRomanNumeral(int){
  var romNum = '';
  if(int <= 0 || int > 4000){
    return false;
  }
  if(int >= 1000){
    console.log(int)
    var m = Math.floor(int/1000);
    int = int % 1000;
    for(var a = m; a > 0; a--){
      romNum += 'M';
    }
    console.log(romNum);
  }
  if(int >= 900 && int < 1000){
    romNum += 'CM';
    int -= 900;
    console.log(romNum);
  }
  if(int >= 500){
    romNum += 'D';
    int -= 500;
    console.log(romNum);
  }
  if(int >= 400 && int < 500){
    romNum += 'CD';
    int -= 400;
    console.log(romNum);
  }
  if(int >=100){
    var c = Math.floor(int/100);
    int = int % 100;
    for(var z = c; z > 0; z--){
      romNum += 'C';
    }
    console.log(romNum);
  }
//   if(90 <= int < 100){
  if(int >=90 && int < 100){
    romNum += 'XC';
    int -= 90;
    console.log(romNum);
  }
  if(int >= 50){
    romNum += 'L';
    int -= 50;
    console.log(romNum);
  }
  if(int >= 40 && int < 50){
    console.log(int);
    romNum += 'XL';
    int -= 40;
    console.log(romNum);
  }
  if(int >=10){
    var x = Math.floor(int/10);
    int = int % 10;
    for(var y = x; y > 0; y--){
      romNum += 'X';
    }
    console.log(romNum);
  }
  if(int >= 5 && int !== 9){
    romNum += 'V';
    int -= 5;
    console.log(romNum);
  }
  if(int == 9){
    romNum += 'IX';
    int -= 9;
    console.log(romNum);
  }
  if(int > 0 && int !== 4){
    for(var i = int; i > 0; i--){
      romNum += 'I';
    }
  }
  if(int == 4){
    romNum += 'IV';
  }
  return romNum;
}

console.log(integerToRomanNumeral(2996))