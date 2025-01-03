function clock()
{
    var months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    var days =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var today =new Date();
    document.getElementById('Date').innerHTML= (days[today.getDay()]+" "+today.getDate()+" "+ months[today.getMonth()]+" "+ today.getFullYear());
    var h= today.getHours();
    var m= today.getMinutes();
    var s= today.getSeconds();
    var day = h<11 ? "AM": "PM";
    h= h<10 ? '0'+ h : h;
    m= m<10 ? '0'+ m : m;
    s= s<10 ? '0'+ s : s;

    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
    document.getElementById('seconds').innerHTML = s;


}
var interval = setInterval(clock,400);