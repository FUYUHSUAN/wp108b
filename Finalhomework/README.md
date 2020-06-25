# 期末作業(點餐系統POS的應用)
>* 作者:傅于軒
>* 作業:點餐系統POS的應用
>* 作品:並非100%原創
>* 圖片來源:都來自CC picture 和 Freepik圖片皆有在其圖上或是footer 的地方標示出處
>* 我會在markdown和我的程式碼中顯示哪些是我寫的和對程式碼的理解程度
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
>* 我這次作業在html方面我更了解其用法，包括熟練地使用div,和id,class中比次的搭配。而我大多會使用class來做標示，可以重複使用，可共用同一個css，不用一直重寫css，但有時候還是得用id，因為要和js一起搭配時就得用id，但id的缺點就是不能重複命名。接著，還有搭配onclick()的使用，這個就是在觸發某件動作時會出現的該function，我廣泛將此應用於所有要連結其他分頁的部分，包含[main.html](main.html)中的側攔，還有[menu.html](menu.html)中的按下Set Menu和A La Carte就呼叫相對應的菜單，接著就是[message.html](message.html)中的Receive的按鈕也是用onclick='confirmTest()'去呼叫confirmTest()
## 作品參考來源:
### 接者，就來介紹一下，作品中所參考的資料，及我對其理解及改篇的程度。
> * <h3>頁面開始(main.html)</h3>
<ol>
<li>我的版面配置[main.html](https://github.com/FUYUHSUAN/wp108b/blob/master/Finalhomework/main.html)是參考W3 School中的W3 Templete
<p> [W3 Templete1]    (https://www.w3schools.com/w3css/tryit.asp?        filename=tryw3css_templates_gourmet_catering&stacked=h)</p>
<p> [W3 Templete2](https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_food_blog&stacked=h)</p></li>
<li>其中我對其中的html,css是全部理解。js是有一小部分不太理解，我認為我有大幅度的修改裡面內容</li>
<li>裡面圖片的格式我是參考[CSS Gallery](https://codepen.io/heyDante/pen/bxEYOw)</li>
</ol>
<ol>
  
> * <h3> 接者介紹顧客反應介面(message.html和message.js)</h3>
 <ol>
<li>這裡面的基本配置來自老師教得[blog](https://ccccourse.github.io/wp/code/08-app2/blog/vanillaBlog.html?fbclid=IwAR3B366-aytjcL6UqLVouj7tysDSKywOJQ97w7fg1uwG4ZvYf6o1E19cYoI#/list/)</li>
<li>運用漂亮[小視窗](http://mishengqiang.com/sweetalert2/)SweetAlert2，有小部分的修改期中內容，幾乎完全了解裡面程式</li>
</ol>
  
> * <h3></h3>
  
<p>還沒全部做完，持續增加中</p>
 
 
