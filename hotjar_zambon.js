function() {
  var hotjarUserId = hj.globals.get("userId").split("-");
  
  if(hotjarUserId[0] != undefined)
  {
    return hotjarUserId[0];
  }
  else
  {
    return 0;  
  }
}
