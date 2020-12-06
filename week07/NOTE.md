学习笔记



+ 字典树
    + Trie 树是一种解决字符串快速匹配问题的一种数据结构，查询速度为O(L) L为字符串的长度
    + 由于字典书擅长用公共前缀来处理问题 所以在搜索引擎搜索关键字的时候用在提示或补全的时候常见
    + 由于字典树是用节点存储向下扩散的指针所以空间消耗比较大（N叉树），通常算法书上用数组来存储子节点的指针，如果是26个小写英文字母的话就要维护长度26的数组，当然根据字符集的不同也可把数组替换成别的数据结构来提高效率

+ 双向BFS 模版
    + 使用前后队列和前后set来分别宽搜及标记
当前宽搜出现对面set访问过的点 说明前后宽搜碰撞，抵达最短距离

```python
forward_queue = all start vertex
forward_set = mark visited forward vertex
backward_queue = all end vertex
backward_set = mark visited backward vertex

distance = 0

while forward_queue and backward_queue:
    distance += 1
    for v in forward_queue:
        forward_set.add(v)
        if v in backward_set:
            return distance
    
    distance += 1       
    for v in backward_queue:
        backward_set.add(v)
        if v in forward_queue:
            return distance

```



+ 平衡BST对比
    + AVL-严格平衡， 平衡因子范围-1，0，1之间，
        + 4种旋转方式 每次插入删除都会触发自平衡操作
        + 稳定的查找O(logN) 适合 read intensive
    + 红黑树-近似平衡 ，用 1 bit 存储颜色
        + 适合 write intensive，语言内置常选 Java tree map
        + 减少了自平衡的操作 综合性能比AVL好一些

