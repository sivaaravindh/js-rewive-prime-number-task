
let num=parseInt (prompt("Enter the number"));
let num2=num;
let sum;
let sum2=0;

while (num2!=0) {
    sum =num2 % 10; 
    num2=(num2-sum)/10;
    sum2++;  
}
console.log("sum of number is " +sum2)

var a=parseInt(prompt("count number"));
			var c=0;
			
			for(i=0;a!=0;i++){
				b=a%10;
				a=(a-b)/10;
				c=c*10+b;
			}
				document.write(c)

let num1 =parseInt (prompt("Enter the number"));
// let num2;
// let num3=num1;
for (i=2; num1%i !==0; i++){
    // num2=num1%i;
}

if(i==num1){
    document.write( "the number is prime")
}
else{
    document.write( "the number is  not prime")
}







































