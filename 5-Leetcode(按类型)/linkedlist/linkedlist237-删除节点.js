// 删除给定的非末尾节点
// 方法:把被删除节点转移到下个节点
// 即4->5->1->9->2变为4->5->9->9->2，并删除最后一个9，变为4->5->9->2

var deleteNode = function(node){
    node.val = node.next.val;
    node.next = node.next.next;
}
