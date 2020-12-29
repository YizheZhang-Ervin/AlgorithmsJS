// 输入["bat","tab","cat"]，输出[[0,1],[1,0]](即battab和tabbat)
// 暴力法:O(n^2*k)
// Trie:O(n*k^2)

class TrieNode{
    constructor(){
        this.index = -1;
        this.children = new Map();
        // 记录该节点向下的字符串，能构成会问的所有输入字符串的下标
        this.palindromes = new Array();
    }
}

let palindromePairs = function(words){
    let res = [],
    root = new TrieNode();
    for(let i=0;i<words.length;i++){
        addWord(root,words[i],i);
    }
    for(let i=0;i<words.length;i++){
        search(words,i,root,res);
    }
    return res;

}

let addWord = function(root,word,index){
    for(let i=word.length-1;i>=0;i--){
        let ch = word[i];
        if(!root.children.has(ch)){
            root.children.set(ch,new TrieNode());
        }
        // 如果该字符串从头到当前位置可以成为回文，则把该字符串的下标添到这个trie节点的回文列表中
        if(isPalindrome(word,0,i)){
            root.palindromes.push(index);
        }
        root = root.children.get(ch);
    }
    // 当对字符串创完trie后，将字符串下标添加到回文列表中，并赋给index，表明字符串结束
    root.palindromes.push(index);
    root.index = index;
}

let search = function(words,i,root,res){
    // 从头遍历
    for(let j=0;j<words[i].length;j++){
        // k1>k2，且s1剩下的字符能构成回文，就把这对组合添加到结果中
        if(root.index>=0 && root.index!=i && isPalindrome(words[i],j,words[i].length-1)){
            res.push([i,root.index]);
        }
        root = root.children.get(words[i][j]);
        if(root==null){
            return;
        }
    }
    // k1=k2或k1<k2时，只需把回文列表值的字符串都与s1结合在一起即可
    for(let j of root.palindromes){
        if(i==j){
            continue;
        }
        res.push([i,j]);
    }
}

let isPalindrome = function(word,i,j){
    while(i<j){
        if(word[i++]!=word[j--]){
            return false;
        }
    }
    return true;
}

console.log(palindromePairs(["bat","tab","cat"]))