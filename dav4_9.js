function dav4_9(){
    const date = '2014-01-01'
    let currentDate = Date.parse(new Date());
    let days = (currentDate - Date.parse(date))/86400000;       //86400000 - ms в дне
    console.log(Math.round(days))
    ///document.write(Math.round(days))
   document.getElementById('date').innerHTML=Math.round(days)+': days'
    
}

function dav4_10(){
    const date = '2014-01-01'
    let currentDate = Date.parse(new Date());
    let weeks = (currentDate - Date.parse(date))/604800000;       //604800000 в неделе
    console.log(Math.round(weeks))
    ///document.write(Math.round(days))
   document.getElementById('week').innerHTML=Math.round(weeks)+' :weeks'
    
}

function dav4_7(){
    const date = '2016-01-01'
    let currentDate = Date.parse(new Date());
    let days = (currentDate - Date.parse(date))/86400000;  //604800000 в неделе
    let hours = (24*days)
    let minutes = (60*hours)
    let second = (60*minutes) 
    console.log(Math.round(days))
    console.log(Math.round(minutes))
    console.log(Math.round(second))
    ///document.write(Math.round(days))
   document.write(Math.round(days))
   document.write('<br>')
   document.write(Math.round(minutes))
   document.write('<br>')
   document.write(Math.round(second)+' :second')
    
}