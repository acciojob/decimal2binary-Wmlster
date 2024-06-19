function decimalToBinary(num) {
  //Write you code here

	let s="";

	while(num!=0)
		{
			s+=num%2;
			num/=2;
		}

	num=s.split("").reverse().join("");
	num1=Number(num);

	return num1;
}

window.decimalToBinary = decimalToBinary;
