//! 01 - Generate Random Hexcode
//* 16777215 is ffffff (white color) in decimal. So convert white to number then multiple with a random func to get a new num. toString(16) tell the system we want the convert that number in to hexadecimal (16) to get back the hex color

function genHex() {
	return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

//! 02 - Invert the given Hexcode (not invert but provide the complement color base on the input Hexcode)
//* Number(0x1${hex}) First it takes the given hex (string) value and converts it to HEX ^ 0xFFFFFF it then does a bit-wise execution on that value with 0xFFFFFF which I can only explain now like this, if you wanted to invert a number as quickly as possible eg. 3 > 7, 8 > 2, 1 > 9 etc. simply subtract with number with 10 and absolute it. That is what that part does except for HEX values. The rest is basically formatting and dropping the first value which is an overflow of the equation. Bitwise ^ Sets each bit to 1 if only one of two bits is 1; toString(16) The number will show as an hexadecimal value; substr(1) Returns the result string, but skips the first item; toUpperCase()

function invertHex(hex) {
	return (Number(`0x1${hex}`) ^ 0xffffff).toString(16).substr(1).toUpperCase();
}

//invertHex("00FF00"); => Returns FF00FF

// ! 03 - For input to number and add thousands separator to number
// force number input only for input
function onlyNumber(element) {
	element.value = element.value.replace(/(?![0-9])./gim, "");
}

// convert numbers to have separator
function AddComma(element) {
	element.value = element.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// *add those 2 function on input event to the element
