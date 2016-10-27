$(function(){
//    first timer ob
        var dat = new Date();
        $("#time>span:first-child").html(dat.getHours()+"  "+dat.getMinutes());
//        $("#time>span:last-child").html(timer_month_change(dat.getMonth()+1)+"  "+dat.getDay()+" , "+dat.getFullYear());
    
//    main center timer
    var timer = setInterval(function(){
        var dt = new Date();
        center_timer(dt);
    },50000);
    
    
    
})

