
$(function(){
    var dat = new Date();
    var y = dat.getFullYear(); // 현재 연도
    var m = dat.getMonth(); // 현재 월
    var d = dat.getDate(); // 현재 일
    var month = new Array("January","February","March","April","May","June","July","August", "September","October","November","December");
    var da = new Array("SUN","MON","TUE","WED","THU","FRI","SAT");
    $("#calender>div").eq(0).html("<span>"+month[dat.getMonth()]+"&nbsp&nbsp&nbsp"+dat.getFullYear()+"</span><span></span>");
    var date ="";
    
    var last = [31,28,31,30,31,30,31,31,30,31,30,31];
        // 4년마다 있는 윤년을 계산합니다.(100년||400년 주기는 제외)
    if (y%4 && y%100!=0 || y%400===0) {
        lastDate = last[1] = 29;
    }
        // 현재 월의 마지막 일이 며칠인지 구합니다.
    var lastDate = last[m];
    
   
    var a = new Date(y,m,d);
    var day = d+1;
    //이번주
    for(var b = a.getDay() ; b >=0 ; b-- ){
        day--;
    }
    
    var nwDay = 1;//next month day start 
    for(var i = 0 ; i <7 ; i++){
       
        
        if(day >= lastDate){
            date += "<div><div><span>"+da[i]+"</span><br><span>"+nwDay+"</span></div><div class='calender_work_list'></div></div>";
            nwDay++;
        }else if(day == d){
            date += "<div><div id='now'><span>"+da[i]+"</span><br><span>"+day+"</span></div><div class='calender_work_list'></div></div>";
            day++;
        }else{
           date += "<div><div><span>"+da[i]+"</span><br><span>"+day+"</span></div><div class='calender_work_list'></div></div>";
           day++; 
        }
        
        
        
       
        
           
//            $("#calender>div").eq(1).animate({top:"-"+100+"%"});
        }
        
    $("#calender>div").eq(1).html(date);  
});


var click_num = 0;
function calender(){
    if(click_num > 0){
        $("#calender>div").eq(1).animate({right:0},300);
        click_num = 0;
    }else{
        $("#calender>div").eq(1).animate({right:400},300);
        click_num++;
    }
}