function calendar(){
    var _table= "<p>jol</p> ";
    var rows= 5;
     var cols=6;
    var c= 1;
    var daysMonth =31;
    for(var r=0; r<rows; r++){
      _table+= "<tr>";
          for(var i=0; i<=cols; i++){
          if(c<=daysMonth){
              _table+= "<td>" + c +"</td>";
          }else{
          break;
          }
  
            c++;
        // each col should display number at i
      }
  
  
  _table+= "</tr>";
  
   }
   document.getElementById('calendar').innerHTML = '<table>hola' + _table +'</table>';
  
  };
    calendar();