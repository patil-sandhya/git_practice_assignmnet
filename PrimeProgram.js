let flag=0;
for(let i=0; i<=num; i++){
    if((num%i) == 0){
        flag++
    }
}
if(flag == 1){
    console.log("Yes");
}else {
    console.log("No")
}