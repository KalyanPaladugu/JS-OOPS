class Student {

	name="sam"
	display(){
		return this.name;
	}
}

class Student1 extends Student{
	name="Gold"
	display(){
		return this.name;
	}
}

let data=new Student1()
console.log(data.display())