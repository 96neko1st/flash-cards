(function(){
    "use strict";
    
    var words = [
        {"en": "read", "ja": "読む"},
        {"en": "write", "ja": "書く"},
        {"en": "eat", "ja": "食べる"},
        {"en": "walk", "ja": "歩く"},
    ];
    
    var card = document.getElementById("card");
    var cardFront = document.getElementById("card-front");
    var cardBack = document.getElementById("card-back");
    var btn = document.getElementById("btn");
    
    //カードを押すと裏返る
    card.addEventListener("click", function(){
        flip();
    });
    
    //NEXTボタンを押すと、次の単語カードに遷移
    btn.addEventListener("click", function(){
        next();
    });
    
    //カードを裏返す処理
    function flip(){
        card.className = card.className === "" ? "open" : "";
    }
    
    //次のカードに遷移する。裏返ってたら戻してから遷移する。
    function next(){
        if(card.className === "open"){
            card.addEventListener("transitionend", setCard);
            flip();
        }else{
            setCard();
        }
    }
    
    //単語カードをセットする。
    function setCard(){
        var num = Math.floor(Math.random() * words.length);
        cardFront.innerHTML= words[num].en;
        cardBack.innerHTML = words[num].ja;
        card.removeEventListener("transitionend", setCard);
    }
    
    setCard();
    
})();