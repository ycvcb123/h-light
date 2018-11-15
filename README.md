## 关键词高亮组件

### 用法:

```html
<mod-h-light titleObj="{{titleObj}}" color="{{color}}" ></mod-h-light>
```

#### 传入参数：

```javascript
titleObj: {
    //需要高亮的关键字，两种写法（单一关键字： keys: 'xxxx', 多个关键字： keys: [{key: 'xxx', color: 'xxx'},{...},{...}]）
    keys: '',
    //文章内容
    content: '',
},
//默认高亮颜色
color: 'xxxx'
```
titleObj

#### 核心代码：

```javascript
//...
var contentArr = [val.content];
if (keys instanceof Array) {
    if (val.content && keys) {
        keys.map(item => {
            //兼容数字0
            if (item.key || item.key == 0) {
                contentArr = contentArr.reduce((array, content) => {
                    array.push(...that.getHilightStrArray(content, item.key));
                    return array;
                }, []);
            };
        });

        this.setData({
            keys: JSON.stringify(val.keys),
            searchArray: contentArr
        });
    }
}
//...
getHilightStrArray: function(str, key) {
    return str.replace(new RegExp(`${key}`, 'g'), `@${key}@`).split('@');
}
```

示例demo:

<image style="width: 300px" src="./keyword.gif"/>