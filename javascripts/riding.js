var riding = {
	map:null
};
riding.load = function() {
    //加载百度地图
    //根据用户当前位置找出骑行路线
    //将骑行路线标出来
    riding.loadMap();
};

riding.loadMap = function() {
	riding.map = new AMap.Map('riding-map', {
        resizeEnable: true,
        zoom: 15
    });
    var walking = AMap.Walking(riding.map);
};

riding.loadRidingRoutes = function() {

};

riding.markRoutesOnMap = function(routes) {

};

window.onload = function() {
    riding.load();
};