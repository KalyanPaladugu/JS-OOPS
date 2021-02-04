
const array=[2112,1221,12,11,22]
let data=array.filter(function(value){
return value%2==0

})
sq=data.map(result=> result**2)
console.log(data)
console.log(sq)