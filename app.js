const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

//console.log(btns)
let count = 0;
let color = "";
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--
    } else if (styles.contains('increase')) {
      count++
    } else {
      count = 0;
    }

    switch (true) {
      case (count < 0): color = 'red'
        break;
      case (count > 0): color = 'green'
        break;
      default:color = 'black'
        break;
    }
    value.textContent = count;
    value.style.color = color;
  })
})



//---------SOLUTION TO ASSIGNMENT USING THE 'IF STATEMENT'------------

/* if (count > 0) {
            value.style.color = 'green'
        } else if (count < 0) {
            value.style.color = 'red'
        } else {
            value.style.color = 'black';
        }
        */
//----------------------------------------------------------------------