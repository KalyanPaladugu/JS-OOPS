class Employee {

	constructor(){
		let name,age;
	}
	getName(){
		return this.name;
	}
	setName(name){
		this.name=name;
	}

	getAge(){
		return this.age;
	}
	setAge(age){
		this.age=age;
	}
}

let emp=new Employee;
emp.setName("Kalyan")
emp.setAge(23)

console.log(emp.getName(),emp.getAge());