//main center timer function
function center_timer(a){
    $("#time>span:first-child").html(a.getHours()+"  "+a.getMinutes());
    $("#time>span:last-child").html(timer_month_change(a.getMonth()+1)+"  "+a.getDay()+" , "+a.getFullYear());
}

//timer month function
function timer_month_change(a){
    switch(a){
        case 1:
                return "JANUARY";
            break;
        case 2:
                return "FEBRUARY";
            break;
        case 3:
                return "MARCH";
            break;
        case 4:
                return "APRIL";
            break;
        case 5:
                return "MAY";
            break;
        case 6:
                return "JUNE";
            break;
        case 7:
                return "JULY";
            break;
        case 8:
                return "AUGUST";
            break;
        case 9:
                return "SEMTEMBER";
            break;
        case 10:
                return "OCTOBER";
            break;    
        case 11:
                return "NOVEMBER";
            break;
        case 12:
                return "DECEMBER";
            break;    
    }
}