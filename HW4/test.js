window.onload= function(){
    var oBtn1=document.getElementById("btn1");
    var oBtn2=document.getElementById("btn2");
    var oBox=document.getElementById("box");
    var oImg=document.getElementById("img");
    var oText1=document.getElementById("text1");
    var p1=document.getElementById("p1");
    var oText2=document.getElementById("text2");
    var oPrev=document.getElementById("prev");
    var oNext=document.getElementById("next");
    var arrSrc=["img/pic1.jpg","img/pic2.jpg","img/pic3.jpg","img/pic4.jpg"];
    var arrTxt=["文案1","文案2","文案3","文案4"];
    var num=0;
    var onOff=true; //true 循環  false 走順序
    
    function fn(){      //開始先定義一個公共函數方便下面調用
        oImg.src = arrSrc[num];     //圖片的顯示路徑
        oText1.innerHTML= num+1 +"/" + arrTxt.length;   //圖中二號位置的數字顯示
        oText2.innerHTML=arrTxt[num];   //圖中三號位置的文字顯示
    }
    fn();/*切記，定義之後，這裏一定要調用一下*/

    //循環按鈕
    oBtn1.onclick=function(){
        onOff=true;
            p1.innerHTML="圖片會循環"

    };
    //順序按鈕
    oBtn2.onclick=function(){
        onOff=false;
            p1.innerHTML = "圖片按順序走"

    };
    oPrev.onclick = function(){
        num--;  //點擊左邊的箭頭那麽就是num--
        if(onOff){  //onOff默認是true所以就是走循環了
            if(num==-1){    //在一直減的過程中，數組裏最小的就是0，所以等於-1的時候要循環下去所以讓它顯示最後一張
                num=arrSrc.length-1;
            }

        }else{  //否則onOff是false所以就是走順序了
            if(num==-1){     //在一直減的過程中，數組裏最小的就是0，所以等於-1的時候沒有數據走了，所以讓它顯示第一張不能點擊了
                num=0;  
                alert("已經是第一張了")
            }
        }
        fn();//判斷好之後記得調用函數
    };
    //相反下面就是點擊左邊的箭頭所做出的判斷，道理同上
    oNext.onclick = function(){
        num++;
        if(onOff){
            if(num==arrTxt.length){
                num=0;
            }
        }else{
            if(num==arrTxt.length){
                num=arrSrc.length-1;
                alert("已經是最後一張了")
            }
        }
        fn();
   }
}