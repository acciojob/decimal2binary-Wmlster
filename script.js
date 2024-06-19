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

	return num1;

}

window.decimalToBinary = decimalToBinary;
