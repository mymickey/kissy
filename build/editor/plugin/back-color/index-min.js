/*
Copyright 2012, KISSY UI Library v1.40dev
MIT Licensed
build time: Dec 11 12:55
*/
KISSY.add("editor/plugin/back-color/index",function(c,f,d,e){function b(a){this.config=a||{}}c.augment(b,{pluginRenderUI:function(a){e.init(a);d.init(a,{defaultColor:"rgb(255, 217, 102)",cmdType:"backColor",tooltip:"背景颜色"})}});return b},{requires:["editor","../color/btn","./cmd"]});
