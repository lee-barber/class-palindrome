// - Write a function that takes one argument as a 
// string and it checks if this argumement is a 
// Palindrome (kayak);


function palindrome(string){
	var a = string.split("")
	var rev = a.reverse()
	var outcome = rev.join('')
	if(outcome === string){
		console.log(string + ' is a palindrome')
	}else {
		console.log(string + ' is NOT a pali')
	}

}