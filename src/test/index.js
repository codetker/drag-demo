// 1. 实现一个简单 Promise A+ 规范的 Promise 库， 只需支持 then(resolve, reject); 

// promise 构造函数，返回 promise，异步流
// promise 注册一个异步函数，then 方法执行并返回两种可能的结果
// resolve 和 reject 都是 function 用于确定状态和传递数据

function aPromise(foo = (resolve, reject) => {}) {
  this.PromiseStatus = 'pending'  // 一个变量用于标记成功还是失败还是执行中
  this.PromiseValue = undefined

  this.resolve = (sucValue) => {
    this.PromiseStatus = 'resolved'
    this.PromiseValue = sucValue
  }
  this.reject = (failValue) => {
    this.PromiseStatus = 'rejected'
    this.PromiseValue = failValue
  }
  
  // 有成功和失败两种状态并且会传给 then
  foo(this.resolve, this.reject)  

  return this
}
aPromise.prototype.then = function (resolveCallBack, rejectCallBack) {
  // 应该会有取值的过程
  if (this.PromiseStatus === 'resolved') {
    resolveCallBack(this.PromiseValue)
  } else if (this.PromiseStatus === 'rejected') {
    rejectCallBack(this.PromiseValue)
  }
  return new aPromise()
}

// demo
const a  = new aPromise((resolve, reject) => {
  console.log('1')
  if (true) {
    resolve(1)
  } else {
    reject(2)
  }
})
console.log(a)

const c = a.then((resolve) => {
  console.log('resolve==>', resolve)
}, (reject) => {
  console.log('reject==>', reject)
})

console.log(c)

c.then((resolve) => {
  console.log('resolve2==>', resolve)
}, (reject) => {
  console.log('reject2==>', reject)
})


