var e2c = { 狗: 'dog', 貓: 'cat', 一隻: 'a', 追: 'chase', 吃: 'eat' };

function look (e) {
  return e2c[e]
}

let e = process.argv[2] // 從 process.argv 這個陣列取出第二個元素
let c = look(e)
console.log(e + '=' + c)
