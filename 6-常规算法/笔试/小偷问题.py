# 198. House Robber：小偷不能偷相邻的房子，求最大收益
class Solution(object):
    def rob(self, nums):
        size = len(nums)
        if size == 0: return 0
        if size <=2: return max(nums)
        Values = [nums[0],max(nums[0],nums[1])]
        for i in range(2,size):
            Values.append(max(Values[i-2]+nums[i],Values[i-1]))
        return max(Values)

# 213. House Robber II：房子首尾相连，不能偷相邻的房子，求最大的收益
# 等价于求 max(rob(nums[:size-1]),rob(nums[1:size]))
class Solution2(object):
    def subrob(self,nums):
        Num_=len(nums)
        if Num_==1:
            return nums[0]
        Value=[nums[0],max(nums[0],nums[1])]
        for i in range(2,Num_):
            Value.append(max(Value[i-2]+nums[i],Value[i-1]))
        return max(Value)

    def rob(self,nums):
        if not len(nums):
            return 0
        if len(nums)==1:
            return nums[0]
        num1=nums[:len(nums)-1]
        num2=nums[1:len(nums)]
        max_=self.subrob(num1)
        return max(max_,self.subrob(num2))

# 337. House Robber III：二叉树，相邻边不能被偷
# 记忆化搜索，state 记录该结点是否被选中 dic,dic1存储结点未选中／选中的最优答案
class Solution3(object):
    def rob(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        dic = {}
        dic_1 = {}
        def dfs(root,state):
            if root == None:
                return 0
            if root.left not in dic_1:
                dic_1[root.left] = dfs(root.left,0)
            if root.right not in dic_1:
                dic_1[root.right] = dfs(root.right,0)
            ans2 = dic_1[root.left]+dic_1[root.right]
            if state == 0: # can select or not:
                if root.left not in dic:
                    dic[root.left] = dfs(root.left,1)
                if root.right not in dic:
                    dic[root.right] = dfs(root.right,1)
                ans1 = root.val + dic[root.left] + dic[root.right] 
                return max(ans1,ans2)
            else: # selected 
                return ans2
        return dfs(root,0)