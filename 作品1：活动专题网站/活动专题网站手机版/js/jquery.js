/*! slidereveal - v1.0.1 - 2015-01-04
* https://github.com/nnattawat/slidereveal
* Copyright (c) 2015 Nattawat Nonsung; Licensed MIT */
!function(a){var b,c=[];a.fn.slideReveal=function(d,e){var f=this,g=this.css("padding-left");g=+g.substring(0,g.length-2);var h=this.css("padding-left");h=+h.substring(0,h.length-2);var i,j;if(void 0!==d&&"string"==typeof d){var k=this.data("setting-index");if(i=c[k],j=i.width+g+h+"px","show"===d)return(void 0===e||e)&&i.show(this,b),this.css(i.position,"0px"),i.push&&("left"===i.position?a("body").css("left",j):a("body").css("left","-"+j)),this.data("slide-reveal",!0),(void 0===e||e)&&setTimeout(function(){i.shown(f,b)},i.speed),f;if("hide"===d)return(void 0===e||e)&&i.hide(this,b),i.push&&a("body").css("left","0px"),this.css(i.position,"-"+j),this.data("slide-reveal",!1),(void 0===e||e)&&setTimeout(function(){i.hidden(f,b)},i.speed),f}else{i={width:230,push:!0,position:"left",speed:300,trigger:void 0,autoEscape:!0,show:function(){},shown:function(){},hidden:function(){},hide:function(){},top:0},i=a.extend(i,d),c.push(i),this.data("setting-index",c.length-1),j=i.width+g+h+"px";var l="all ease "+i.speed+"ms";this.css({position:"fixed",width:i.width,transition:l,height:"100%",top:i.top}).css(i.position,"-"+j),this.data("slide-reveal",!1),i.push&&a("body").css({position:"relative","overflow-x":"hidden",transition:l,left:"0px"}),i.trigger&&i.trigger.length>0&&i.trigger.click(function(){b=a(this),f.slideReveal(f.data("slide-reveal")?"hide":"show")}),i.autoEscape&&a(document).keydown(function(b){0===a("input:focus, textarea:focus").length&&27===b.keyCode&&f.data("slide-reveal")&&f.slideReveal("hide")})}return this}}(jQuery);