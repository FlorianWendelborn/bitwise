/**
 *	Converts a string into an array of bits. Ignores all characters except 1 and 0.
 *
 *	@example
 *	toBits('10 10 12$%_.0') => [1,0,1,0,1,0]
 *
 *	@param string {String} the string to convert
 *	@return {Array}
 */

export default (string) => {
	var arr = [];
	var index = 0;
	for (var i = 0; i < string.length; i++) {
		if (string[i] === '1') {
			arr[index] = 1;
			index++;
		} else if (string[i] === '0') {
			arr[index] = 0;
			index++;
		}
	}

	return arr;
}
