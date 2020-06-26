# 期末作業(點餐系統POS的應用)
>* 作者:傅于軒
>* 作業:點餐系統POS的應用
>* 作品:並非100%原創
>* 圖片來源:都來自CC picture 和 Freepik圖片皆有在其圖上或是footer 的地方標示出處
>* 我會在markdown和我的程式碼中顯示哪些是我寫的和對程式碼的理解程度
>* 特別感謝陳鍾誠老師的教導告訴我哪裡缺少及需要更改。也感謝魏美亞在我需要時給予我適時的幫助，是非常好且強勁的學習夥伴。
## 介紹作業方式:
* 我會將我學到的部分寫到"本次作業主要學習到的部分:"，而在作品參考來源和那些是我改的，哪些是我寫的則會寫在"本次作業主要學習到的部分:"，而程式碼細部的介紹則會直接寫於程式碼旁邊註解
## 前言:
* 我的作業從5/28就一步一步起程了，一開始我確實沒什麼想法，原本想直接做筆記，但後來發現做一份主題式的應用網頁，更能在其中邊做邊學習到許多東西，因此我選擇了"點餐系統POS的應用"。
## 創作想法來源:
* 其實，我在做網頁時並不是一次就能想好整個架構圖的，我都是在忽然間有想法時就記錄下來，並將其應用於我的作業，所以整體來說，我的作業是經過長時間洗禮，慢慢想出來的
## 做到進度:
* 我現在做了主頁面，基本的pos和點餐系統及login register功能，login可進入pos系統，但需要先register，但是還沒做到部分是目前暫時不能將pos和點餐系統連結起來。
## 點餐系統POS的應用使用方式:
* 剛點進去時，能看見本作業的主頁面，有about,menu,Our Chef,Foodpicture，這四個連結都是呼叫底下的四個頁面；接者，旁邊有register和login要先使用register註冊完後才能login用剛剛註冊的帳號密碼進入pos系統。在pos系統中我是參考老師給的範例做大部分的改編但整體功能和老師寫得差不多(至於改了那些，以下會詳細介紹)。接者，我要介紹側攔，裡面仍然有四個選項，分別連下三個page，分別是The opinion you want to reply,Business Hours,Order food,其中Order food 就是如果沒註冊的客人可以進入的介面，裡面的是進入點餐系統的頁面，使用方法為先點您想點的食物，然後點到shopping cart中去checkouut。The opinion you want to reply 是運用blog去完成的回覆意見系統。
## 本次作業主要學習到的部分:
### 1.HTML
>* 我這次作業在html方面我更了解其用法，包括熟練地使用<div>,和<id>,<class>中比次的搭配。而我大多會使用class來做標示，可以重複使用，可共用同一個css，不用一直重寫css，但有時候還是得用id，因為要和js一起搭配時就得用id，但id的缺點就是不能重複命名。還有target="_block"是在新分頁開啟，target="_self"。接著，還有搭配onclick()的使用，這個就是在觸發某件動作時會出現的該function，我廣泛將此應用於所有要連結其他分頁的部分，包含[main.html](main.html)中的側攔，還有[menu.html](menu.html)中的按下Set Menu和A La Carte就呼叫相對應的菜單，接著就是[message.html](message.html)中的Receive的按鈕也是用onclick='confirmTest()'去呼叫confirmTest()，在點餐系統中[cart.html](cart.html)onclick="Checkout()"也使用此。其他在html中我也學到了<footer>,<img src=>,和<section>的用法，<section>就是類似容器，可以將一個區塊包裝起來，適合用來獨立的大鋼之類的地方，而如果要做分段時則更建議使用 <article>，如果要用在一篇文章的分段建議用，如果要做一整個page或是較大區塊的包裝建議用div來做，這多使用於美化包裝時使用。
### 2.CSS
>* 本次作業關於css的方面，我也比期中學習到更多的應用，除了基本id是用"."，class是用"#"，<>是不用加任何符號表示外。我也學到了height,width中px,%,vw的差別...未完待續。
### 3.JS
>* 在js這次中我認為這是我學到最多的，我這次學到了localstorage的應用，這就是前端儲存資料的使用方法，在[login.html](login.html)所有都是我自己打的，其中裡面少部分bug是美亞幫我除錯的[login.js](login.js)中的第7,8,19,20行是美亞替我修改的。在這個中我學到了localStorage.setItem是從後面地的值設定到前面的那個值，"localStorage.setItem('Enteruser', name);"這個就是把name的值放到Enteruser中，而getItem而是得到該物的值，例如"var StoreP=localStorage.getItem('pwd');"就是用變數StoreP存pwd中的值，"localstorage.clear()"就是清除全部資料的部分。而在[register.html](register.html)和[login.html](login.html)中onClick="reg()"和onClick="login()"就是分別去呼叫裡面函式。接者我要介紹[order.js](order.js)這部分是學習且詢問美亞的一部分，我學到document.getElementById('productTitle').innerHTML是取得productTitle這個id東西中的值或是字串，document.getElementById('productimg').src則是放入圖片。js中的alert則是出現警示小視窗的部分。
## 作品參考來源:
### 接者，就來介紹一下，作品中所參考的資料，及我對其理解及改篇的程度。
>* <h3>頁面開始main.html</h3>

* 我的版面配置[main.html](main.html)是參考W3 School中的[W3 Templete1](https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_gourmet_catering&stacked=h)
 [W3 Templete2](https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_food_blog&stacked=h)
* 其中我對其中的html,css是全部理解。js是有一小部分不太理解，我認為我有大幅度的修改裡面內容
* 裡面可動圖片的我是參考[CSS Gallery](https://codepen.io/heyDante/pen/bxEYOw)

  
>* <h3> 接者介紹顧客反應介面(message.html和message.js)</h3>

* 這裡面的基本配置來自老師教得[blog](https://ccccourse.github.io/wp/code/08-app2/blog/vanillaBlog.html?fbclid=IwAR3B366-aytjcL6UqLVouj7tysDSKywOJQ97w7fg1uwG4ZvYf6o1E19cYoI#/list/)
* 運用漂亮[小視窗](http://mishengqiang.com/sweetalert2/)SweetAlert2，有小部分的修改期中內容，幾乎完全了解裡面程式
>*  <h3>時刻表(bussiness)
 * [time.html](time.html)參考[這個格式去寫](https://tpu.thinkpower.com.tw/tpu/articleDetails/1220)其中html部分都是自己理解並打的,css的部分只做了小幅度size和color的改變，還有container也是我自己加上去的。其他css我皆是大部分了解其作用。
  
>* <h3>POS系統</h3>
* 格式及內容參考於老師的[POS](https://github.com/ccccourse/wp/tree/master/code/08-app2/pos/06-report?fbclid=IwAR3OGvU4br40LjEhdYWScWcm2nEbxluvgHqN24fyIFPtAVYTpL7dOiEk4VU)
* 期中裡面的版面配置是參考[表格1](https://codepen.io/alassetter/pen/cyrfB)[表格2](https://codepen.io/iambeccagould/pen/tbwjh)其中[Report.css](Report.css)則是全部參考[表格2](https://codepen.io/iambeccagould/pen/tbwjh)的css來做，則[Setting.css](Setting.css)中表格的美觀部分也是參閱[表格1](https://codepen.io/alassetter/pen/cyrfB)

>* <h3>客戶端的點餐系統部分(Order)</h3>
* [order](https://github.com/FUYUHSUAN/wp108b/tree/master/Finalhomework/Order)大部分的程式是自己打的，不懂的部分是詢問且參考[美亞的期中作業](https://github.com/NubletZ/wp108b/tree/master/homework/PersonalStore%20(Midterm))。
  
<p>目前世間允許的範圍內，只能介紹到這樣，如果在截止日期前還有時間，將持續更新</p>
 
 
