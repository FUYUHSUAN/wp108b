let posts = []
    
// 顯示 id 指定的 panel (div)
function showPanel(id) {
  document.querySelectorAll('.panel').forEach((node) => node.style.display='none')
  document.getElementById(id).style.display = 'block'
}

// 列出所有貼文
function list() {
  let postsHtml = []
  for (let i=0; i<posts.length; i++) {
    postsHtml.push(`<li><h2>${posts[i].title}</h2><p><a href="#/show/${i}">Read post</a></p></li>`)
  }
  document.getElementById('posts').innerHTML = postsHtml.join('\n')
  document.getElementById('postsLength').innerHTML = posts.length
  showPanel('list')
}

// 儲存貼文
function save() {
  var title = document.getElementById('postTitle').value
  var body  = document.getElementById('postBody').value
  posts.push({title: title, body: body})
  // 最後讓 hash='#/list/' 會觸發 list() 列出所有貼文
  window.location.hash = '#/list/'
}

// 顯示 id=match[1] 所指定的貼文
function show(match) {
  let i = parseInt(match[1])
  document.getElementById('showTitle').innerHTML = posts[i].title
  document.getElementById('showBody').innerHTML = posts[i].body
  showPanel('show')
}

// 顯示『創建新貼文』的畫面。
function create(match) {
  showPanel('create')
  document.getElementById('postTitle').value = ''
  document.getElementById('postBody').value = ''
}

// router 路徑地圖
let routeMap = [
  [/^\/?show\/(\w+)\/?$/, show],
  [/^\/?list\/?$/, list],
  [/^\/?create\/?$/, create],
]

// 當 hash 改變時，觸發路徑地圖對應的函數。
window.onhashchange = function () {
  var hash = window.location.hash.trim().substring(1)
  for (let [regexp, f] of routeMap) {
    var m = hash.match(regexp)
    if (m) {
      f(m, hash)
      break
    }
  }
}

// 網頁載入完成後，呼叫 list() 列出所有貼文！
window.onload = function() {
  window.location.hash = '#/list/'
}


//小視窗，有對其做大幅度的改變
function confirmTest() {
        Swal.fire({
            title: "Do you want to hand out?",
            text: "Y/N",
            showCancelButton: true
        }).then(function(result) {
           if (result.value){
                Swal.fire({
                  title:"Thank you ,we receive you opinion!",
                  text:"",
                  timer:2000,
                  showCancelButton:true ,
             })
              window.location.href="main.html"
                
           }
           else {
               Swal.fire("You choose Cancel!");
           }
        });
    }