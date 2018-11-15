Component({
    /**
     * 组件的属性列表
     */
    properties: {
        titleObj: {
            type: Object,
            value: {},
            observer: "searchKeyChange"
        },
        color: {
            type: String,
            value: ''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        searchArray: [],
        keys: null,
        color: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {

        searchKeyChange: function(val) {
            var that = this;
            var keys = val.keys;
            //多个关键词
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
            //只有一个关键词
            else if (typeof keys === 'string') {
                this.setData({
                    keys: JSON.stringify(val.keys),
                    //兼容数字0
                    searchArray: (val.keys || val.keys == 0) ? that.getHilightStrArray(val.content, val.keys) : [val.content]
                })
            }
        },

        getHilightStrArray: function(str, key) {
            return str.replace(new RegExp(`${key}`, 'g'), `@${key}@`).split('@');
        }
    },
})