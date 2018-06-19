window.onload = function() {

    var buttons = document.getElementById('buttons');
    var clear = document.getElementById('clear');
    var answer = document.getElementById('answer');
  
    /* clicking on each button */
    buttons.addEventListener('click', function(e) {

     /* get value of button */
      if (e.target.nodeName === 'LI') {
        var v = e.target.innerHTML;
            if(e.target.innerHTML === "="){
                try {
                    answer.innerHTML = eval(answer.innerHTML);
                  } catch(e) {
                    alert (e.message);
                  }
              }

            else {
                answer.innerHTML += v;
            }
        }
    });
  
    /* clear the answer field */
    clear.addEventListener('click', function() {
      answer.innerHTML = '';
    });
  
};
  