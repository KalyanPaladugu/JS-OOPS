class A{

      data=23;
      display(){
      	return this.data;
      }
}

class B extends A {
 data1=33;
	show(){
		return this.data1;
	}
}


let age1=new B()
console.log(age1.show(),age1.display())