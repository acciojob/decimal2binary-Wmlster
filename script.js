function decimalToBinary(num) {
  //Write you code here

	
let num=10;

let s="";

	while(num!=0)
		{
			s+=(parseInt(num%2));
			num=parseInt(num/2);
		}
		
	num=s.split("").reverse().join("");
	num1=Number(num);
    num=num1
	
	return num;

}

window.decimalToBinary = decimalToBinary;
