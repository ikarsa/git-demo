$(function(){
    (function(){
        var minSize=5;//雪花的最小尺寸
        var maxSize=100;//雪花的最大尺寸
        var newOn=50;//雪花的出现频率
        var flakeColor="#fff"//雪花的颜色
        var $flake=$("<div></div>").css({
            "position":"absolute",
            "top":"-100px",
        }).html("$");//雪花
        // 获取当前页面的高度
        var documentHeight=$(document).height();
        // 获取当前页面的宽度
        var documentWidth=$(document).width();
        setInterval(function(){
            // 获取雪花随机产生位置
            var startPositionLeft=Math.random()*documentWidth;
            //获取雪花随机的透明度
            var startOpacity=0.7+Math.random();
            //获取雪花随机的大小
            var sizeFlake=minSize+Math.random()*maxSize;
            //获取雪花的下落的top
            var endPositionTop=documentHeight+40;

            //雪花下落的left值
            var endPositionLeft=startPositionLeft+Math.random()*500-200;
            // 结束的雪花大小
            var sizeFlakeEnd=minSize+Math.random()*maxSize;
            // 下落的速度
            var durationFall=Math.random()*5000;
    
            $flake.clone().appendTo("body").css({
                "left":startPositionLeft,
                "opacity":startOpacity,
                "font-size":sizeFlake,
                "color":flakeColor,
            }).animate({
                "top":endPositionTop,
                "left":endPositionLeft,
                "opacity":0.5,
                "font-size":sizeFlakeEnd,
            },durationFall,function(){
                $(this).remove();
            })
        }, newOn);
    })()
})