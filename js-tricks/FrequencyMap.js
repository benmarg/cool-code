//parent component 
function someFunc(){
    const letterMap = new FrequencyMap(['a', 'b', 'c', 'a', 'b', 'c', 'a'])
    console.log(letterMap);
}

function FrequencyMap(param){
    for(const str of param){
        this[str] ??= 0;
        this[str]++
    }
}

someFunc();
