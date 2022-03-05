var obj = {
    "first_name": "priya",
    "last_name": "bhalke",
    "email": "priya@gmail.com",
    "website": "http//:index.htmloenwn",
    "k": "This is Key K's value",
    "students": [
	{
	    "name": "niya",
	    "marks": 99
	},
	{
	    "name": "siya",
	    "marks": 98
	},
	{
	    "name": "diya",
	    "marks": 99
	},
	{
	    "name": "Eya",
	    "marks": 94
	},
	{
	    "name": "riya",
	    "marks": 92
	},
        {
	    "name": "piya",
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
}
    
    if(new1["marks"] >= pass){
        passed_stu.push(new1["name"]);
    }
console.log(passed_stu);