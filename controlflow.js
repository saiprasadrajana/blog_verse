/*let marks=85;
if(marks>=90)
{
    console.log("A+ grade")
}
else if(marks>=80){

    console.log("A grade")
}else{
    console.log("fail")
}

let num=3;
switch(num)
{
    case 1:console.log("one");
    break;
    case 2:console.log("two");
    break;
    case 3:console.log("three");
    break;
    default:
    case 4:console.log("invalid");
    break;
}

let count=5;
while(count>=0)
{console.log(count)
    count--;
}
let colours=["red","blue","green"]
for(let i=0;i<colours.length;i++)
{
    console.log(colours[i])
}

let person = {
    age:18,
    college:"JNTUGV"
}

for(let key in person)
{
    console.log(`${key}:${person[key]}`)
}*/
for(let i=5;i>=0;i--)
{
    if(i==3)
    {
        continue;
    }
    else if(i==2)
    {
        break;
    }
    console.log(i)
}