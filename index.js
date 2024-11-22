
const express = require('express');
const path = require("path")
const app = express();

app.use(express.urlencoded({extended: false }));//req.bodyを使う際のおまじない
app.use(express.static(path.join(__dirname, "public")))//staticは静的位置

// app.get("/", function (req,res){//
//     // res.send("トップページ");
//     res.send("<h1>トップページ!!<h1>");//jsonやhtmlも動く
// });

// app.get("/about", function (req,res){//
//     res.send("Aboutページ");
// });

app.post("/api/v1/quiz",function(req, res){//ブラウザからの入力を受け取るときにはpost
    answer = req.body.answer;//text形式で取得
    if(answer === "2"){
        // res.send("正解！")
        res.redirect("/correct.html");//publicのcorrect.htmlファイルを読み込む
    }else{
        // res.send("不正解")
        res.redirect("/wrong.html");//publicのwrong.htmlファイルを読み込む
    }
    // res.send(answer);
});

app.get("/api/v1/users",function(req, res){
    res.send({
        name:"Mike",
        age:30,
    });
});

app.listen(3000,function(){//3000はポート番号
    console.log("I am running!");//実行時にメッセージを出す。コールバック（時間がかかるものはコールバック。遅れて実行される）
});

//webブラウザで「localhost:3000」で表示
//nodemon index.jsで保存の都度サーバを再起動しなくてOKになる。