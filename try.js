// const apple =(par) =>
// {
//     console.log(par);
// }

// // apple("apple");

// (function apple()
// {
//     console.log("apple");
// })();

// let apple2 ="apple";

// console.log(apple2.concat(" mango"));



// function MaxCheck(num1,num2)
// {
//     return (num1>num2) ? `${num1} is Maxmimum Number and ${num2} is the Minimum Number` :
//      `${num2} is Maxmimu Number ${num1} is the Minimum Number`;
// }

// let value = MaxCheck(34,40);
// console.log(value);

// var twoSum = function (nums,target)
// {
//     for(let i=0;i<nums.length+1;i++)
//     {
//         for(let j=nums.length;j>1;j--)
//         {
//             let value = nums[i]+nums[j];
//             if(value === target)
//             {
//                 return [i,j];
//             }
//         }   
//     }
// }

// console.log(twoSum([-1,-2,-3,-4,-5],-8));
// console.log(twoSum([3,2,4],6));
// console.log(twoSum([2,7,11,15],9));
// console.log(twoSum([2,5,5,11],10));
// console.log(twoSum([1,3,4,2],6));

// let collecter = 
// {
//     first : () =>{
//         console.log("hello");
//     },
//     second : () =>
//     {
//         console.log("karan");
//     },
// }

// console.log(collecter.first());

const controller ={
    sum : () =>
    {
        var num1 = document.querySelector("#num1").value;
        var num2 = document.querySelector("#num2").value;
        var result = document.querySelector(".result");
        result.innerHTML = (Number(num1)+Number(num2));
    },
    subtract : () =>
    {
        var num1 = document.querySelector("#num1").value;
        var num2 = document.querySelector("#num2").value;
        var result = document.querySelector(".result");
        result.innerHTML = (Number(num1)-Number(num2));
    }
}

var sumButton = document.querySelector("#sum");
sumButton.addEventListener("click",()=>{
    controller.sum();
})
var subtractButton = document.querySelector("#Subtract");
subtractButton.addEventListener("click",()=>{
    controller.subtract();
})