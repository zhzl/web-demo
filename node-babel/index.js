// 导入模块成员
import m1 from './m1.js'

// 打印输出的结果为：{ a: 10, c: 20, show: [Function: show] } 
console.log(m1)

/*****************************/

// 导入模块成员   
import { s1, s2 as ss2, say } from './m2.js' 
 
console.log(s1)  // 打印输出 aaa   
console.log(ss2) // 打印输出 ccc   
console.log(say) // 打印输出 [Function: say] 

/*****************************/

// 直接导入并执行模块代码   
import './m3.js'