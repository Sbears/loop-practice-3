var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];


// example ---------------------------------------------
for(var i=0; i < students.length; i++) {
	console.log(students[i].name);
}

// #1 ---------------------------------------------

for(var i=0; i<students.length; i++) {
	console.log(students[i].age);
}

// #2 _______-----------------------------------

for(var i=0; i<students.length; i++) {
	console.log(students[i].name + ", " + students[i].city);  
}

//#3 ---------------------------------------------------

for (i=0; i< students.length; i++ ) {

	 if(students[i].city === "Boulder") {
		console.log(students[i].name + " is from Boulder");
	 }
}

for(i=0; i < students.length; i++) {
	if(students[i].age > 25) {
		console.log(students[i].name + " is older than 25");
	}
}