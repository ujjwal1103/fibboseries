console.log("Prime No Problem");
var N = parseInt(prompt("Enter a number "));
var n3; 
var n1 = 0;
var n2 = 1;
for(var i = 2; i <= N;i=i+1){
    n3 = n1+n2;  
    n1 = n2; 1
    n2 = parseInt(n3); 
}
alert(N + " number term in fibbo series is " + n3);