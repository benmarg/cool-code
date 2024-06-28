//given 
const phoneNumber="3662277"
const words=["foo","cap","bar","baz", "foobar", "emo", "car", "cat"]

//output = [bar, cap, car, emo, foo, foobar]

const letterToNumber = {
    a:"2",
    b:"2",
    c:"2",
    d:"3",
    e:"3",
    f:"3",
    g:"4",
    h:"4",
    i:"4",
    j:"5",
    k:"5",
    l:"5",
    m:"6",
    n:"6",
    o:"6",
    p:"7",
    q:"7",
    r:"7",
    s:"7",
    t:"8",
    u:"8",
    v:"8",
    w:"9",
    x:"9",
    y:"9",
    z:"9"
}

function isInNumber(phoneNumber, words){
    let allWordsAsNums = []
    let validWords = []
    for(const word of words){
        let wordAsNum = ""
        for(const letter of word){
            wordAsNum += letterToNumber[letter]
        }
        allWordsAsNums.push(wordAsNum)
    }
    for(const i in allWordsAsNums){
        if(phoneNumber.includes(allWordsAsNums[i])) validWords.push(words[i])
    }
    return validWords
}

console.log(isInNumber(phoneNumber, words));