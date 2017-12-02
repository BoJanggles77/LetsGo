function hello(){
  document.getElementById("demo").innerHTML = input.value;
}

document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('submit');
  // onClick's logic below:
  link.addEventListener('click', function(){
    hello();
  });
});
