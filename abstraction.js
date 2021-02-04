function employee (name,age,salary){   //constructor with out creating a class
	this.name=name;
	this.age=age;
    this.salary=salary;
    let monthlyBonus=2000;
    let FinalSalary=function(){      
     // here FinalSalary function is private limits to employee constructor
    	let netbalance=salary+ monthlyBonus;
           console.log("Final salary is :" ,netbalance)
         
    }
	this.getemployee=function(){
		FinalSalary()
	console.log('Name is: '+this.name+ ' and his age is : '+ this.age)
}
}

let emp=new employee("Kalyan",25,4555)
// emp.monthlyBonus=6000;
emp.getemployee()
// emp.FinalSalary()