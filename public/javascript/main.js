var confirmPublishing = function(str) {
  if(window.confirm("「" + str + "」をプレイヤーに開示しますか？")){
    return true;
  }
  else{
    return false;
  }
};

var confirmSkipping = function(str) {
  if(window.confirm("「" + str + "」をスキップしますか？")){
    return true;
  }
  else{
    return false;
  }
};
