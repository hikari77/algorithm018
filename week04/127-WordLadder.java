class Solution {
    public int ladderLength(String start, String end, List<String> wordList) {
        Set<String> dic = new HashSet<>();
        for (String word : wordList) {
            dic.add(word);
        }
        
        int length = 1;
        Queue<String> queue = new LinkedList<>();
        Set<String> hash = new HashSet<>();
        queue.offer(start);
        hash.add(start);
        
        while (!queue.isEmpty()) {
            length++;
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                String word = queue.poll();
                
                for (String nextWord : getNextWords(word, dic)) {
                    if (hash.contains(nextWord)) continue;
                    if (nextWord.equals(end)) return length;
                    
                    queue.offer(nextWord);
                    hash.add(nextWord);
                }
            }
        }
        return 0;
    }
    
    private String replace(String s, int index, char c) {
        char[] chars = s.toCharArray();
        chars[index] = c;
        return new String(chars);
    }
    
    private ArrayList<String> getNextWords(String word, Set<String> dic) {
        ArrayList<String> nextWords = new ArrayList<>();
        for (char c = 'a'; c <= 'z'; c++) {
            for (int i = 0; i < word.length(); i++) {
                if (word.charAt(i) == c) continue;
                String nextWord = replace(word, i, c);
                
                if (dic.contains(nextWord)) nextWords.add(nextWord);
            }
        }
        return nextWords;
    }
}