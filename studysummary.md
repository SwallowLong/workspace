## 2020年学习总结

### 2020.2.21 周五

#### HTML

* 单选按钮复选框中的name要一致 id不一致

* 新属性header、main、nav、section、article、footer

#### CSS

* border-radius:50%;可以将块变为圆形

* 居中的方法

  * position:absolute;top、bottom、left、right设置为0;margin:auto

  * position:absolute;top:50%;left:50%;margin:-50%的width、heigth

* transform:scale()可以用来扩大或缩小元素的比例

* CSS实现动画效果animation

  * animation-name属性设置动画的名称 @keyframes用来设置动画各阶段的变化 也是animation的名称

  * animation-duration属性用来设置动画花费的时间

  * animation-iteration-count属性用来设置动画循环的次数（其中infinite为无限循环）

* font属性中必须要有的为size和family且顺序就为这个

#### Node.js

* node进入命令交互模式 control+c退出node模式
* sudo代表超级权限

* node运行时可以访问到 关闭时则访问不到本地自创服务器

#### Git和GitHub

1. git和远程库之间的联系

   * 将目录变为Git可以管理的仓库：git init

   * 在GitHub上插件一个new repo

   * 关联并完成第一次推送 关联方法有两种：

     1.1 https的方式:git remote add origin https://github.com/your-name/repository.git

     1.2 ssh key方式:git remote add origin git@github.com:your-name/repository.git

     * li{如何生成ssh：ssh-keygen -t rsa -C "自己邮箱" 3个回车 cat ~/.ssh/id_rsa.pub(可以查看ssh) 然后复制ssh粘贴到GitHub即可}

     * push提示错误fetch 说明远程分支和本地有分歧 可以县合并 or 强制覆盖：git push origin master -f

2. 终端快捷键：

   * 进入文件夹cd 退出cd .. 

   * !:wq为退出vim文件

3. vscode快捷键
   * shift+option+f缩进快捷键
   * Command+➡️到此行结尾 ⬅️开头 ⬆️文档开头
   * command+b侧边栏的缩放
   * command+数字键开页面数

### 2020.2.29 周六

#### JS

* 在同一个页面调用两个js，前一个加载的能被第二个js访问 如下所示

```
<script type="text/javascript" src="../js/1.js"></script>
//在同一个html页面中 由于1.js先加载 so 2.js能访问到1.js中设置的内容
<script type="text/javascript" src="../js/2.js"></script>
```

* 在DOM操作中getElmentById返回的Element对象，而getElemnetsByTagName、Name、ClassName返回的则是Nodelist对象，即ID的可以直接.firstChild访问，而Name的则不行，需要[ i ]的形式访问HTML标签

* Note replace innerHTML split() join() 

  * 1、运用的知识为JS中字符串到HTML标签的转化：  使用.innerHTML，如：  div.innerHTML = str; 

    2、主要思路转换：  切记千万不可转牛角尖，转牛角尖只会坏事，要冷静分析每一步，找出每一步的关键点是什么，这样才能极快速的完成项目，如下例中![img](http://images2015.cnblogs.com/blog/1159882/201706/1159882-20170630230047493-5373957.png)

    此例中主要包含3个思路：

    　　（1）将字符串数组中包含特定字符的字符串挑选出来，可以使用.indexOf( str )，若是存在此特定字符则其会有索引值即>=0　　

    　　（2）选出字符串中的特定字符并加以操作，可以使用循环（for）与条件（if）语句，利用for遍历字符串字符，if挑选出该字符，将其重新赋值即可

    　　（3）如何将字符串转换为Html标签，使用.innerHTML，即div.innerHTML = str;，从而将字符串转化为HTML标签完成对此特定字符的样式设置

    ```
     1 search.addEventListener( "click", function() {
     2             var a = text.value;
     3             for (var j=0; j<myArray.length; j++) {
     4                     var b = myArray[j].split("");
     5                     console.log(b);
     6                     var inner = document.getElementsByClassName( "inner" );
     7                     inner[j].innerHTML = b.map( function( item ) {
     8                         item = item.replace( new RegExp( a, "g" ), "<span>" + a + "</span>" );
     9                         console.log(item);
    10                         return item;
    11                     }).join("");    
    12                 }
    13         }, false )
    ```

    改进： 方法1不仅复杂且不能连续查询，因为是createElement的，所以当连续查询不同内容时，前一个查询的内容中若是不包含此字符则不会发生replaceChild()，所以其上的样式就不会更改

    　　2、注意一个思路，即JS是JS，CSS是CSS，不要将CSS插入到JS中，应该分开

    此方法的思考思路是：

    　　将输入的每一个字符串都检测可以使用for也可以使用map，而每一个字符串都要检测其是否包含特定字符如果是则替换，而检测则可以考虑上文中的方法1中的for，和此处的.replace（）+ RegExp的方法，利用正则匹配，然后利用replace替换，最后将其join为字符串，然后将字符串替换文中的块class = “inner”的HTML内容，达到替换目的　　

* Note Array "."与"[ ]"

  * 1、在访问对象属性时，属性名访问的是标识符表示的，而数组[ ]表示法，访问时使用的是字符串表示，所以使用“.”运算符时，你无法在程序中去操作它们，但使用“[ ]”，则是完全没有问题　

    　![img](http://images2015.cnblogs.com/blog/1159882/201706/1159882-20170630135228258-2061070938.png)

    可以看出在for...in...中是无法使用“.”运算符操作对象属性的，但“[ ]”则完全OK

    注意：  for…in与hasOwnProperty比较， for...in遍历整个原型链，hasOwnProperty()调用的只有对象本身

    2、编程时的思维方式： 将其细分为各个部分，逐步去解决，会比你直接看完大纲，然后直接思考来的简单的多，要活用搜索引擎，有很多问题网上都有详细的介绍

    3、今天使用到的一些内容： Array中的.unshift()在数组头部插入，.shift()在数组头部删除，.push()在数组尾部插入，.pop()在数组尾部删除，.splice( 索引，删除位数，插入内容....可多项 )，DOM的一些Document的一些方法，.removeChild()删除节点，.appendChild()从尾部插入节点，.insertBefore( 插入节点，插入节点后一个节点 ）用来将节点插入到某一节点之前，.createElement()创造节点，.createTextNode()创造文本节点，isNaN()用来判断是否是number类型，是则返回false（" "空字符串返回的也是false需注意和隐式类型转换有关），当使用isNaN()来判断input的输入值时需注意value本身就是string类型，所以在输入“11”时，实际value=““11””所以到达了判断文本框输入类型的作用( input时要注意value==“”时，实际输入的是空格或没输入，而不是你认为的“”空字符串，当输入""时，实际value==“" "”

* 1、change()事件，当发生改变时触发该事件，用来处理单选按钮的事件很合适

  2、select事件的options属性及selectedIndex属性，options属性可以获得options项的集合，是个类数组的对象，selectedIndex属性用来获取选择项的索引

  3、switch...case处理多种代码块情况的语句，类似条件语句

  ```
   1 switch (b) {
   2 //注意case使用的全等模式，即 === 而不是 ==
   3             case 0:
   4                 console.log("hello");
   5                 break;
   6             case 1:
   7                 console.log(" ");
   8                 break;
   9             case 2:        
  10                 console.log("world");
  11                 break;
  12 //为3 || 4时
  13             case 3:
  14             case 4:
  15                 console.log("3 or 4");
  16     //default最好放置在末尾
  17             default:
  18                 console.log("hello world");
  19 //最好能在default中也添加break
  20                 break;    
  21         }
  22     }
  ```

  如果你需要在一个范围内，则可以将switch中的参数改为true

  ```
   1 switch(true) {
   2     //当然此处的foo必须是有意义的 而不是not a defined
   3     //可以为undefined
   4     //注意不要将switch的参数设为false 否则会有很多麻烦
   5     case foo>5 && foo<10:
   6     console.log("5~10");
   7     break;
   8     default:
   9     console.log("其他");
  10     break;
  11 }
  ```

  4、toUpperCase()，没什么可讲的，大家都了解，就是大写，只是提醒下可以用来将获取值全部化为大写这个思路

   

#### CSS

* transform，CSS3的新属性，可以用来将div移动，旋转，可以多个属性连用，只要有空格，注意浏览器的兼容性

  ```
  /*
  translate与rotate中有个空格 以到达连用目的
   translate中x对应的为left y对应的为top
   此处的left与top可以看成与position: absolute;中的left、top相似
   即是说可以理解为向右移动了40px 向下移动了50px
  rotate()正值顺时针 负值逆时针
  */
  div {
   transform: translate(40px,50px) rotate(40deg);
   -ms-transform: translate(40px,50px) rotate(40deg);
   -moz-transform: translate(40px,50px) rotate(40deg);
   -webkit-transform: translate(40px,50px) rotate(40deg);
  }
  ```

   

  Internet Explorer 10、Firefox、Opera 支持 transform 属性。

  Internet Explorer 9 支持替代的 -ms-transform 属性（仅适用于 2D 转换）。

  Safari 和 Chrome 支持替代的 -webkit-transform 属性（3D 和 2D 转换）。

  Opera 只支持 2D 转换

* Inline-block与float的区别

  * 两者都可以用来实现多列布局，但是inline-block却有个不容忽视的问题，那就是空白间距

    如下列HTML代码：

    ```
    <div>
    　　<label for="inschool">
    　　　　<input type="radio" name="student" id="inschool" value="inschool" checked="checked">在校生
    　　</label>
    　　<label for="outschool">
    　　　　<input type="radio" name="student" id="outschool" value="outschool">非在校生
    　　</label>
    </div>
    ```

    1、CSS用inline-block

    ```
    label {
        display: inline-block;
        width: 30%;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        border: 1px solid;      
    }
    ```

    ![img](http://images2015.cnblogs.com/blog/1159882/201707/1159882-20170704151026862-1826751673.png)

    2、使用float

    ```
    label {
        float: left;
        width: 30%;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        border: 1px solid;      
    }
    ```

    ![img](http://images2015.cnblogs.com/blog/1159882/201707/1159882-20170704151427784-91610969.png)

    很明显inline-block比较float多了个空白间距

    使用float的两个div之间的margin：0px;但是使用inline-block时，两个div之间并不是没有间距的，在IE、Firefox、Safari时，其间的空白间距为4px，而在Chrome中则是为8px