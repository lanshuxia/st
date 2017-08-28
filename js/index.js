
$(function(){
    /*search*/
    var winW = $(window).width();
    if(winW<768){
        $(".search-img").click(function(event){
            event.stopImmediatePropagation();//取消事件冒泡；
            $(".search-img").animate({left:'0'},100,function(){
                $(".public-search span").css({"display":"block","width":"200px"})
            });
            $(".index-header").css("height","1.8rem");
            $(".project").css("margin-top","1.8rem");
        })
        $(".close").bind("click",function(){
            $(".public-search span").animate({width:0},100,function(){
                $(".search-img").animate({left:'0'})
            })
            $(".index-header").css("height","1.2rem");
            $(".project").css("margin-top","1.4rem");
        })
    }else{
        $(".search-img").click(function(event){
            event.stopImmediatePropagation();//取消事件冒泡；
            $(".search-img").animate({left:'200px'},100,function(){
                $(".public-search span").css({"display":"block","width":"200px"})
            });
        })
        $(".close").bind("click",function(){
            $(".public-search span").animate({width:0},100,function(){
                $(".search-img").animate({left:'0'})
            })
        })
    }
    /*点击按钮*/
    var winW = $(window).width();
    if(winW<768){
        $(".public-nav").click(function(){
            $(".index-content-left").css({"margin-right":"-100%","display":"block","width":"101%"});
            $(".content-right").css("margin-left","100%");
        })
        $(".index-close").click(function(){
            $(".index-content-left").css({"margin-right":"0","display":"none"});
            $(".content-right").css("margin-left","0");
        })
    }else{
        $(".public-nav").click(function(){
            $(".index-content-left").css({"margin-right":"-33.3%","display":"block"});
            $(".index-content-left").animate({"width":"33.3%"},200);
            $(".content-right").css("margin-left","33.3%");
            $(".anli-con-panelRight").animate({"width":"100%"},200);
            $(".anli-con-panelLeft").animate({"width":"100%"},200);
            $(".anli-con-panelLeft li").css({"margin-left":'0',"margin-bottom":'2%',"width":"100%"})
            $(".panel-con li").animate({"width":"10%"},200);
            $(".panelitem li").animate({"width":"10%"},200);
            $(".project-text").css("width","100%");
        })
        $(".index-close").click(function(){
            $(".index-content-left").animate({"width":"0"},200,function(){
                $(this).css({"margin-right":"0","display":"none"});
            });

            $(".content-right").css("margin-left","0");
            $(".anli-con-panelRight").animate({"width":"66.6%"},200);
            $(".anli-con-panelLeft").animate({"width":"33.3%"},200);
            $(".anli-con-panelLeft li").css({"margin-left":'3.7%',"margin-bottom":'3.8%',"width":"96.3%"})
            $(".panel-con li").animate({"width":"6.66%"},200);
            $(".panelitem li").animate({"width":"6.66%"},200);
            $(".project-text").css("width","66.6%")
        })
    }


    /*anli-px---click*/
    $(".anli-px").bind("click",function(){
        $(".anli-sjx").toggleClass("active");
        $(".anli-header ul").animate({width:"toggle"})
    })


    /*anli-header ul li---click*/
    $(".anli-header ul li").click(function(){
        var index = $(this).index(".anli-header ul li");
        $(".anli-banner-item>div.active").css("display","block");
        $(".anli-banner-con").css("display","none").eq(index).css("display","block")
    })


    /*滚动条*/
    var explorer = window.navigator.userAgent ;
    var center = document.getElementsByClassName("index-content-right")[0];
//ie
    if (explorer.indexOf("MSIE") >= 0) {
        center.style.cssText="width: calc(100% + 20px);";
    }
//firefox
    else if (explorer.indexOf("Firefox") >= 0) {
        center.style.cssText="width: calc(100% + 20px);";
    }
//Chrome
    else if(explorer.indexOf("Chrome") >= 0){
        center.style.cssText="width:100%;";
    }
//Opera
    else if(explorer.indexOf("Opera") >= 0){
        center.style.cssText="width:100%;";
    }
//Safari
    else if(explorer.indexOf("Safari") >= 0){
        center.style.cssText="width:100%;";
    }
})

/*小于768时使用rem*/
new function (){
    var _self = this;
    _self.width = 640;//设置默认最大宽度
    _self.fontSize = 100;//默认字体大小
    _self.widthProportion = function(){
        var p = (document.body&&
            document.body.clientWidth ||
            document.getElementsByTagName("html")[0].offsetWidth)/_self.width;
        return p>1?1:p<0.5?0.5:p;
    };
    _self.changePage = function(){
        document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+_self.widthProportion()*_self.fontSize+"px !important");
    }
    _self.changePage();
    window.addEventListener("resize",function(){_self.changePage();},false);
};
/*小于768时使用rem*/