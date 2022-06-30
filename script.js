for(let x = 0;x<=100;x++){
    if(x%3===0 && x%5===0){
        console.log('FizzBuzz');
    }
    else if (x%3===0){
        console.log('Fizz');
    }
    else if (x%5===0){
        console.log('Buzz');
    }
    else{
        console.log(`${x}`);
    }
}
sum_of_multiples = 0;
for (let y = 1;y<1000;y++){
    if(y%3===0 && y%5===0){
       console.log(  sum_of_multiples+=y);
    }
// console.log(sum_of_multiples);

}
for (let z = 0; z<=20;z++){
    if (z%2===0){
        alert(`${z} is even`);
    }
    else{
       alert(`${z} is odd`);
    }
}


let num = [-2,4,-5,6,0];
largest = 0;
for(let i =0;i<num.length;i++){
    if (num[i]>largest){ 
    largest = num[i];
    // console.log(largest)
}
console.log(largest)

}

let a = 10;
let b = 40;
if (a>b){
    console.log(`${a} is greater than ${b}`);
}
else if (b>a){
    console.log(`${b} is greater than ${a}`);
}


for(i = 2000;i<=2022;i++){
    if (i%4!=0 && i%400!=0){
      
        console.log(`${i} is a not leap year`);
    }
    else{
        console.log(`${i} is a leap year`);

    }

}