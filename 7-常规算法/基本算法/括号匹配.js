function validBraces(braces){
    let leftBraReg = /[\(\{\[]/, 
      // 栈
        stack = [],
        bracket, rightBracket
    braces = braces.split('')
    for(bracket of braces) {
      if(leftBraReg.test(bracket)) {
        stack.push(bracket)
      }
      else {
        switch (bracket) {
            case ')':
            rightBracket = stack.pop()
            if(rightBracket !=='(') {
                return false
            }
            break
          case ']':
            rightBracket = stack.pop()
            if(rightBracket !=='[') {
                return false
            }
            break
          case '}':
            rightBracket = stack.pop()
            if(rightBracket !=='{') {
                return false
            }
            break
        }
      }
    }
    return stack.length === 0 ? true : false
  }