# ecsite2022

<!-- 初期データは削除します。 -->

2022 年度 Web デザイン学科 WS1「JavaScript 演習」課題 SSG で EC サイト初期データ

## サイト名
De NIRALE

## 完成品

<!-- 完成後、ここにURLを貼ってください。-->
https://ni-labo.net/_site

## Features

<!-- セールスポイントや差別化などを説明する。-->
商品自体がすごくカラフルなので、それを生かすためにサイトそのものは白色をベースに作り、まっさらな部屋に綺麗なインテリアが映えるというイメージで作りました。

SOLDOUTの判別、MOREボタンの仕組みも取り入れ、MOREボタンは展開するだけではなく、一度押したらCLOSEボタンに切り替わり、二回押すと元に戻るようにしました。

singleページには、「その他の商品」のコンテンツも作りました。

特に工夫したのが、カラーバリエーションです。商品によって、色のバリエーションの数はバラバラになってくると思います。
ページ量産で、バリエーションをバラバラにするのは普通は難しいので、forin文のなかにforin文を入れて、それを表現しました。
これをするために、forin文を理解しなくてはいけなかったので、そこが大変でした。

layout.njkに、headerとfooterを作りました。
topとsingleのどちらにもパスが通るようにするのも少し苦労しました。


## Requirement

- 11ty@eleventy 1.0.1
- Nunjucks
- jQuery 3.6.0

# Author

- 作成者：堀井宏太
- 所属：トライデントコンピュータ専門学校 Web デザイン学科 2 年
- 志望職種：Webデザイナー

# License

ecsite2022 is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).
