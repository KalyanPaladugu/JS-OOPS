class Animal{
	constructor(name){
		this.name=name;
	}

	eats(){
		console.log(this.name+' is likes to drinks milk')
	}
}

class Animal1 extends Animal{

	eats() {
		super.eats()
		console.log(this.name+' is drinks milk')
	}
}


// let d=new Animal("Cat")
// console.log(d.eats())
 
let d=new Animal1("Dog")
console.log(d.eats())