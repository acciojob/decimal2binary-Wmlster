function decimalToBinary(num) {
  //Write you code here

	let s="";

	while(num!=0)
		{
			s+=num%2;
			num/=2;
		}

	return s;
}

window.decimalToBinary = decimalToBinary;
