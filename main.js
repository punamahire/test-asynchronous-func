console.log("Test Asynchronous Function Calls");

let startTime = new Date(Date.now());
console.log("startTime", startTime);
//our machines are fast - check it out
for (var i = 0; i < 2000000; i++){
	//running a loop for fun
	var x = i + 1/1 * 6 - 4;
}
console.log('doneTime milliseconds', Date.now() - startTime );
console.log("I just looped ", i, " times.");
console.log('date stuff', startTime.getFullYear(), "or", startTime.toDateString() );


const getBigData = () => {
	return fetch("JEOPARDY_QUESTIONS1.json")
		.then(response => response.json())
		.then(parsedData => {
			console.log("jeopardyQs", parsedData)
		})
}

const getSmallData = () => {
	return fetch("colors.json")
		.then(response => response.json())
		.then(parsedData => {
			console.log("colors", parsedData);
			return parsedData;
		})
}

const jeopardyQs = getBigData()

const colors = getSmallData()
//and if I want to use this data after it has been retrieved
//.then accepts the results of the promise.
	.then(colorsArray => {
		console.log("what is colors Array", colorsArray);
	})

//Which one consoles first?