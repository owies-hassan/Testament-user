





// const string=['s','abc','def','ghi','jkl','mno','pgrs','tuv','wxyz']
//
//
// const letterCombinations = (digits)=> {
//
//     let arr=[]
//     let res=[]
//     const split=[...digits].map(Number);
//
//     for (let i=0;i<split.length;i++){
//         arr.push(string[split[i]-1])
//     }
//
//     // for (let i=0;i<arr.length;i++){
//     //     for (let j=0;j<i.length;j++){
//     //        res.push(arr[j])
//     //     }
//     // }
//     //
//     // console.log(res)
//
//
//      arr.map(item=>[...item].map((str,index)=>res.push(arr[index])))
//
//
//     console.log(res)
// };
//
// letterCombinations('23')




// const string=['abc','def']
//
//
// const test=()=>{
//
//     let arr=[]
//     const str= string.map((item,index)=>
//         item.split('')
//     )
//
//      str.map((item,index)=>arr.push(str[index]))
//     return arr
// }
//
// console.log(test())

// function generateCombinations(digits) {
//     if (digits.length === 0) {
//         return [];
//     }
//
//     const partialCombinations = [''];
//
//     for (const str of digits) {
//         const newCombinations = [];
//
//         for (const partial of partialCombinations) {
//             for (const char of str) {
//                 newCombinations.push(partial + char);
//             }
//         }
//
//         partialCombinations.length = 0; // Clear the previous partial combinations
//         partialCombinations.push(...newCombinations);
//     }
//
//     return partialCombinations;
// }
//
// const digits = ['abc', 'def', 'ghi'];
//
// console.log(generateCombinations(digits))











//Solution Duplication Num
//computer
// const nums = [0,0,1,1,1,2,2,3,3,4,0]
// const Duplicate=(nums)=>{
//
//
// const arr=[]
//
//     let pos=0;
//     for(let i=0; i < nums.length; i++){
//         if(nums[i]!== nums[i+1]){
//             nums[++pos] = nums[i+1]
//
//         }
//     }
//     return pos
// }
//
// console.log(Duplicate(nums))
// const removeDuplicates =(nums)=> {
//     const arr=[]
//     nums.map(item=>
//         !arr.includes(item)&&arr.push(item)
//
//     )
//
//     return arr.length;
// };
//
// console.log(removeDuplicates(nums))






