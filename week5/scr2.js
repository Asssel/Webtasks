function deter(){
    const s1 = document.querySelector("#m00");
	const s2 = document.querySelector("#m01");
	const s3 = document.querySelector("#m02");
	const s4 = document.querySelector("#m10");
	const s5 = document.querySelector("#m11");
	const s6 = document.querySelector("#m12");
	const s7 = document.querySelector("#m20");
	const s8 = document.querySelector("#m21");
	const s9 = document.querySelector("#m22");

	let sum1 = (parseInt(s1.value)*parseInt(s5.value)*parseInt(s9.value ))+ (parseInt(s2.value)*parseInt(s6.value)*parseInt(s7.value))+(parseInt(s3.value)*parseInt(s4.value)*parseInt(s8.value));
	let sum2 =(parseInt(s3.value)*parseInt(s5.value)*parseInt(s7.value ))+ (parseInt(s2.value)*parseInt(s4.value)*parseInt(s9.value))+(parseInt(s1.value)*parseInt(s6.value)*parseInt(s8.value));
	let sum = sum1 - sum2;
	document.getElementById("res").innerHTML = sum;	
}