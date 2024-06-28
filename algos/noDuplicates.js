function noDuplicates(nums){
    const result = [];
    const set = new Set(nums);
    return Array.from(set);
}

const test = [1,2,3,4,5,6,1,2,3]

console.log(noDuplicates(test)); 
