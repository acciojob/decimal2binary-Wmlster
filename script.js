function decimalToBinary(num) {
  //Write you code here

let s="";

	while(num!=0)
		{
			s+=(parseInt(num%2));
			num=parseInt(num/2);
		}
		
	num=s.split("").reverse().join("");
	
	return num;

}

window.decimalToBinary = decimalToBinary;
