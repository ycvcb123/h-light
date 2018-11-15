Page({
    data: {
        titleObj: {
            keys: '',
            content: '齐天大圣爱吃蟠桃，时间静止时间齐天大圣静止,齐天大圣爱吃蟠桃，时间静止时间齐天大圣静止,齐天大圣爱吃蟠桃，时间静止时间齐天大圣静止'
        },
        color: '#0bc183'
    },
    choice: function(e) {
        var type = e.target.dataset.type;
        if (type === 'single') {
            this.setData({
                titleObj: {
                    keys: '齐天大圣',
                    content: this.data.titleObj.content
                }
            });
        } else {
            this.setData({
                titleObj: {
                    keys: [{ key: '齐天大圣', color: '#f00' }, { key: '蟠桃', color: '#f0f' }, { key: '时间' }],
                    content: this.data.titleObj.content
                }
            });
        }
    }
})