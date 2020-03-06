var fruit;
//fruit="Orange";
fruit=prompt("Captura una fruta");
fruitNum = parseInt(fruit.length,16);

if(fruitNum > 5){
    console.log("The fruit name has more than five characters.");
}else{
    console.log("The fruit name has five characters or less..");
}