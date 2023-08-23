const fs = require('fs');
const readline = require('readlin');
const parse = require('csv-parse');
const countStudents = (path) => {
	if (!fs.existsSync(`${path}/database.csv`) {
		throw new Error('Cannot load the database');
	}
	// create a readable stream from the csv file
	fs.createReadStream(path);
	
		// create a parser object with some options
		const parser = parse({
			delimiter: ',', // specify delimeter
			columns: true,  //use first row as column names
			skip_empty_lines: true // ignore empty lines
		});

		//read the first record and get the number of columns
		parser.on('readable', () => {
			const record = parser.read();
			if (record) {
				const columns = Object.keys(record).length;
			console.log('Number of students: ', columns);
			parser.destroy();
			}
		})
		.on('error', (err) => {
			console.log(err);
		});


