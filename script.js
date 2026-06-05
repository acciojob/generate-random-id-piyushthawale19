function makeid(l) {
  // write your code here
	var res = "";
	var char_lsit="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

	for(var i=0;i<l;i++){
		res += char_lsit.charAt(
			Math.floor(
			Math.random()*char_lsit.length
				)
		)
	}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
