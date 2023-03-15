let password = "";

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const arr3 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var c = 0;
var d = 0;
var e = 0;

function checker()
{
  
 var checking = document.getElementById("options");
 var selectedValue = checking.options[checking.selectedIndex].value;
    if (selectedValue == "upperCase")
   {
    c = 1;
    d = 0;
    e = 0;
   }
   if (selectedValue == "lowerCase")
   {
    c = 0;
    d = 1;
    e = 0;
   }
   if (selectedValue == "mixed")
   {
    c = 0;
    d = 0;
    e = 1;
   }
}



function randomizer(){
  var input = document.getElementById('input').value;
  checker();
  password = ""; // reset password variable
  for(let i = 0; i < Math.floor(input/2); i++){
    var first = Math.floor(Math.random() * 10);
    var second = Math.floor(Math.random() * arr2.length);
    var third = Math.floor(Math.random() * arr3.length);
    var num = Math.random();
    if(c==1){
      let a = arr1[first];
      let b = arr2[second];
      password += a;
      password += b;
    }
    if(d==1){
      let a = arr1[first];
      let f = arr3[third];
      password += a;
      password += f;
    }

    if(e==1){
        if(num > 0.5){
          var b = arr2[second];
        }
        else{
          var b = arr3[Math.floor(Math.random() * arr3.length)]
        }
        
        let a = arr1[first];
        password += a;
        password += b;  
      }
    }

  if(input%2 != 0){
    if(c==1){
    var char = arr2[Math.floor(Math.random() * 26)];
    password += char;}
    if(d==1){
      var char = arr3[Math.floor(Math.random() * 26)];
    password += char;
    }
    if(e==1){
      var g = Math.random();
      if(g > 0.5){
        var char = arr2[Math.floor(Math.random() * 26)];
    password += char;
      }
      else{
        var char = arr3[Math.floor(Math.random() * 26)];
    password += char;
      }
    }
  }

  var block = document.getElementById('text');
  block.innerText = password;
  
}

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

function checkers(){
  var val = document.getElementById("input").value;
  var txt = document.getElementById("val");
  txt.innerText = val;
  
}
checkers();

function checkVal(){
  var checkV = document.querySelector("#type").checked;
  
}










