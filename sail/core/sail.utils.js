;(function () {
    var isPlainObject = (function () {
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);

        function isPlainObject (obj) {
            var proto, Ctor;

            if(!obj || toString.call(obj) !== "[object Object]"){
                return false;
            }

            proto = Object.getPrototypeOf(obj);

            if(!proto){
                return true;
            }

            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        };

        return isPlainObject;
    })();


    function Utils() {}
    Laya.class(Utils, "Sail.Utils");

    /**
     * @public
     * 创建骨骼动画
     * @param {String} path 骨骼动画路径
     * @param {Number} rate 骨骼动画帧率，引擎默认为30，一般传24
     * @param {Number} type 动画类型 0,使用模板缓冲的数据，模板缓冲的数据，不允许修改	（内存开销小，计算开销小，不支持换装） 1,使用动画自己的缓冲区，每个动画都会有自己的缓冲区，相当耗费内存 （内存开销大，计算开销小，支持换装） 2,使用动态方式，去实时去画	（内存开销小，计算开销大，支持换装,不建议使用）
     * 
     * @return 骨骼动画
     */
    Utils.createSkeleton = function (path, rate, type) {
        rate = rate || 30;
        type = type || 0;
        var png = Laya.loader.getRes(path + ".png");
        var sk  = Laya.loader.getRes(path + ".sk");
        if(!png || !sk){return null;}

        var templet = new Laya.Templet();
            templet.parseData(png, sk, rate);

        return templet.buildArmature(type);
    }

    /**
     * @public
     * 获取字符串长度，支持中文
     * @param {String} str 要获取长度的字符串
     * 
     * @return 字符串长度
     */
    Utils.getStringLength = function(str){
        return ("" + str.replace(/[^\x00-\xff]/gi,"ox")).length;
    }
    /**
     * @public
     * 按指定长度截取字符串
     * @param {String} str 要截取长度的字符串
     * @param {Number} length 字符串长度
     * 
     * @return 截取长度后的字符串
     */
    Utils.cutStr = function (text, length) {
        text = text + "";
        var reg = /[^\x00-\xff]/g;
        if(text.replace(reg, "mm").length <= length){return text;}
        var m = Math.floor(length / 2);
        for(var i = m; i < text.length; i++){
            if(text.substr(0, i).replace(reg, "mm").length >= length){
                return text.substr(0, i) + "...";
            }
        }
        return text;
    }
    /**
     * @public
     * 获取URL中指定参数的值
     * @param {String} name 参数名
     * 
     * @return 参数值
     */
    Utils.getUrlParam = function(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        
        if(r != null){
            return unescape(r[2]);
        }
        
        return null;
    }

    /**
     * @public
     * 将两个或更多对象的内容合并到第一个对象。使用方式见Jquery.extend
     * 调用方式
     * Sail.Utils.extend( [deep ], target, object1 [, objectN ] )
     * Sail.Utils.extend( target [, object1 ] [, objectN ] )
     * 
     * @return 合并后的对象
     */
    Utils.extend = function() {
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        if(typeof target === "boolean"){deep = target;target = arguments[i] || {};i++;}
        if(typeof target !== "object" && !typeof target !== "function"){target = {};}
        if(i === length){target = this;i--;}

        for (;i < length; i++){
            if( (options = arguments[i]) != null){
                for (name in options){
                    src = target[name];
                    copy = options[name];
                    if(target === copy){continue;}
                    if(deep && copy && (isPlainObject(copy) ||
                        (copyIsArray = Array.isArray(copy) ) ) ){
                        if(copyIsArray){
                            copyIsArray = false;
                            clone = src && Array.isArray(src) ? src : [];
                        } else {
                            clone = src && isPlainObject(src) ? src : {};
                        }
                        target[name] = Utils.extend(deep, clone, copy);
                    } else if(copy !== undefined){
                        target[name] = copy;
                    }
                }
            }
        }

        return target;
    };
})();