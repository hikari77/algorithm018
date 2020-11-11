/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(start, end, wordList) {
    let que = [start], distance = new Map(), dic = new Set(wordList);
    distance.set(start, 1); // distance 记录开始到当前单词的距离
    
    while (que.length) {
        let word = que.shift();
        if(word === end) return distance.get(word); 
        
        for (let nextWord of getNextWords(word)) {
            if (!dic.has(nextWord) || distance.has(nextWord))
                continue;
            que.push(nextWord);
            distance.set(nextWord, distance.get(word) + 1);
        }
    }
    return 0;
};

const getNextWords = (word) => {
    let words = [];
    for (let i = 0; i < word.length; i++) {
        let left = word.slice(0,i) , right = word.slice(i + 1);
        
        for(let c of 'abcdefghijklmnopqrstuvwxyz') {
            if (word[i] === c) continue;
            words.push(left + c + right);
        }
    }
    return words;
}
