function solution(array) {
    // Implement your solution here
    const cache = {
        'B': 0,
        'A': 0,
        'N': 0
    }
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        console.log(cache.hasOwnProperty(array[i]));
        if (cache.hasOwnProperty(array[i])) {
            cache[array[i]] += 1;
        }
    }
    return cache;
}

console.log(solution('NNAAAAAANNBB')); 
