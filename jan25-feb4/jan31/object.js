var obj = {
    "first_name": "priya",
    "last_name": "bhalke",
    "email": "priya@gmail.com",
    "website": "http//:index.htmloenwn",
    "k": "This is Key K's value",
    "students": [
	{
	    "name": "Name 1",
	    "marks": 99
	},
	{
	    "name": "Name 2",
	    "marks": 98
	},
	{
	    "name": "Name 3",
	    "marks": 99
	},
	{
	    "name": "Name 4",
	    "marks": 94
	},
	{
	    "name": "Name 5",
	    "marks": 92
	},
        {
	    "name": "Name 6",
	    "marks": 90
	},
    ],
};

pass = prompt("Enter marks");
pass = parseInt(pass)

len = obj.students.length

var passed_stu = [];

for (i=0; i<len; i++){
    new1 = obj.students[i];
    
    if(new1["marks"] >= pass){
        passed_stu.push(new1["name"]);
    }
console.log(passed_stu);