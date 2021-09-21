const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	num3 = Number(tokens[3]);

	if (mathSymbol === "+"){
		console.log(num1 + num2 + num3);
  }	

	if (mathSymbol === "-"){
		console.log(num1 - num2);
  }	

	if (mathSymbol === "*"){
		console.log(num1 * num2 * num3);
  }	

	if (mathSymbol === "/"){
		console.log(num1 / num2);
	}	

	if (mathSymbol === "sqrt"){
		console.log(Math.sqrt(num1), Math.sqrt(num2));
	}

	if (mathSymbol === "sq"){
		console.log(Math.pow(num1, 2), Math.pow(num2, 2));
	}

	if (mathSymbol === "cb"){
		console.log(Math.pow(num1, 3), Math.pow(num2, 3));
	}

	if (mathSymbol === "fourth"){
		console.log(Math.pow(num1, 4), Math.pow(num2, 4));
	}

	if (mathSymbol === "%"){
		console.log(num1 % num2);
	}

	console.log('mathSymbol', mathSymbol);
            console.log('num1', num1);
            console.log('num2', num2);

	// This line closes the connection to the command line interface.
	reader.close()

});
