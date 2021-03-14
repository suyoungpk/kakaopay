/*
    date : 2021.03.12
    writer: Suyoung Park
    browser support: ie10+, firefox, opera, chrome
    syntax : ES5 / vanilla 
*/
var eventjs = (function () {
    var count = 0,
    yOffset = 0,
    _yOffset = 0,
    sign,sign2;
    
    window.addEventListener('beforeunload', function () {
        window.scrollTo(0, 0); //새로고침 시 상단부터 시작
    });
    window.addEventListener('load', function () {
        window.scrollTo(0, 0); //새로고침 시 상단부터 시작
        document.body.classList.add('init');
    });
    window.addEventListener('scroll', scrollEvent);
 
    function scrollEvent(e) {
        yOffset = pageYOffset;
        var _direction = (yOffset - _yOffset) >= 0 ? 'down' : 'up';
        _yOffset = yOffset;
        if(_direction == 'down'){
            count++;
            if(count > 50) count = 50;
            sign = "-"+(count*0.6);
            sign2 = "-"+(count*1);
            document.querySelector('.snsBox').classList.add('on');
        }else{
            count--;
            if(count < 0) count = 0;
            sign = "+"+(count*0.6);
            sign2 = "+"+(count*1);
        }
        var arr = document.body.querySelectorAll('.coin-delay');
        var arr2 = document.body.querySelectorAll('.coin-delay2');
        for(var i=0;i<arr.length;i++){
            arr[i].style.transform="translate(0,"+sign+"px)";
        }
        for(var i=0;i<arr2.length;i++){
            arr2[i].style.animationFillMode = "none"; 
            arr2[i].style.transform="translate(0,"+sign2+"px)";
        }
    }
    
})();

function openPopup(){
    document.body.classList.add('open');
    setTimeout(function(){
        document.querySelector('.popup').classList.add('play');
    },300);
}
function closePopup(){
    document.querySelector('.popup').classList.remove('play');
    setTimeout(function(){
        document.body.classList.remove('open');
    },300);
}