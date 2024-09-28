document.getElementById('trans').addEventListener('click', function() {
  var userInput = document.getElementById('sequence').value;
  var arry = userInput.split("")

  for(var i=0; i<userInput.length;i++){
    if(12352 < userInput.codePointAt(i) && userInput.codePointAt(i) < 12436){
      a = userInput.codePointAt(i) + 96
      arry[i] = String.fromCharCode(a)
    }
  }
  text = arry.join('')

  // 入力内容を表示
  document.getElementById('output').innerText = text;
});