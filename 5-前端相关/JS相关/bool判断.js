// []和{} 转Boolean都是true

console.log(Boolean([]),Boolean({}));

if ([] == false) {console.log(1);};
if ({} == false ) {console.log(2);};
 
if ([]) {console.log(3);};
if ({}) {console.log(4);};
 
if ([1] == [1]) {console.log(5);};
if ({a:1} == {a:1}) {console.log(6);};