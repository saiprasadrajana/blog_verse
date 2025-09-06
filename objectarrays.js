let person={
    name:"sai prasad",
    age:18
}

console.log(person.name)
console.log(person["age"])

const {name,age}=person;
console.log(name)
console.log(age)

let fruits=["apple","mango","banana"]
 console.log(fruits[0])

 const numbers=[1,2,3,4,5]

 let squares=numbers.map((num)=>num*num);
 console.log(squares)

 let evens=numbers.filter((num)=>num%2==0)
 console.log(evens)

 let sum=numbers.reduce((present,num)=>present+num,0)
  console.log(sum)

  let persons =[{
    name:"sai",
    marks:40
  },{
    name:"prasad",
    marks:60
  },{
    name:"ram",
    marks:50
  }]

  let maxmarks=0;
  let topper="";
for(let person of persons){
    if(person.marks>maxmarks){
        maxmarks=person.marks;
        topper=person
    }
}