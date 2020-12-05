/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 * 
 * 双向BFS 使用2个队列 2个set
 *  整体时间复杂度为单向BFS的根号级别， 不是 1/2 
 */
var ladderLength = function(start, end, wordList) {
    let wordSet = new Set(wordList);
    if (wordList.length === 0 || !wordSet.has(end)) return 0;
    
    wordSet.add(start);
    let graph = buildGraph(wordSet);
    let forQ = [start], backQ = [end];
    let forSet = new Set().add(start), backSet = new Set().add(end);
    let distance = 1;

    while (forQ.length && backQ.length) {
        distance++;
        if (extendQue(graph, forQ, forSet, backSet))
            return distance;
        
        distance++;
        if (extendQue(graph, backQ, backSet, forSet))
            return distance;
    }
    return 0;
};

// 重点， 判断是否前后有重叠，有的话整体可返回distance ，若没有重叠则继续交换前后的扩散
const extendQue = (graph, queue, visited, oppositeVisited) => {
    let size = queue.length;
    for (let i = 0; i < size; ++i) {
        let word = queue.shift();

        for (let nextWord of graph.get(word)) {
            if (visited.has(nextWord)) continue;
            if (oppositeVisited.has(nextWord)) return true;
            queue.push(nextWord);
            visited.add(nextWord);
        }
    }
    return false;
}

// 题意指出 只能在给出的word list里变换单词， 故用word list 来构图， 在此图中解决最短路径
const buildGraph = (wordSet) => {
    let graph = new Map();
    // 时间复杂度  O(25 * L*L * N)   N为word list 的长度
    for(let word of wordSet) {
        graph.set(word, getNextWords(word, wordSet));
    }
    return graph;
}

//  根据当前单词找出 合法的邻居，此处时间复杂度 O(25 * L * L)  L为单词的长度
const getNextWords = (word, wordSet) => {
    let nextWordsSet = new Set();
    for (let i = 0; i < word.length; ++i) {
        let pre = word.slice(0, i), post = word.slice(i + 1);
        
        for (let c of 'abcdefghijklmnopqrstuvwxyz') {
            if (c === word[i]) continue;
            
            let nextWord = pre + c + post;
            if (wordSet.has(nextWord)) // 查询字符串为 O(L)
                nextWordsSet.add(nextWord);
        }
    }
    return nextWordsSet;
}
