// 删除排序链表中的重复元素
// 方法:遍历，发现当前元素和下个元素值相同，就删除下个元素值

var deleteDup = function(head){
    let p = head;
    while(p && p.next){
        // 值相同删下个元素
        if(p.val===p.next.val){
            p.next = p.next.next;
        // 不删除则指针后移，删除后则不后移为了防止3个及以上的重复
        }else{
            p = p.next;
        }
    }
    return head;
}