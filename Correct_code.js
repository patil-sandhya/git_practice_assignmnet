// prime number question code fix

let flag=0;
let num=13;
for(let i=0;i<=num;i++){
    if(num%i==0){
        flag++
    }
}
flag==2?console.log("Yes"):console.log("No");


// palindrome code fix

let str="naman";
let bag="";
for(let i=str.length-1;i>=0;i--){
    bag+=str[i]
}
if(bag==str){
    console.log("Yes")
}else{
    console.log("No")
}