// var max=Math.max(1,2,3,4,5,6,7,8,9,10,1);
// console.log(max);

// var myobj = {};

// Object.assign(myobj,{a:1,b:2,c:3},{z:9,y:8,x:7});
// console.log(myobj);

function sumOne(a,b){
    return a+b;
}

var myA = [5,4,1,12];
// console.log(sumOne(...myA));

function sumTwo(a,b,...args){
    console.log(args);
    let multi = a*b;
    let sum=0;
    for(const arg of args)
    {
        sum+=arg;
    }
    return [sum,multi];
}

console.log(sumTwo(5,4,1,12));
console.log(sumTwo(...myA));