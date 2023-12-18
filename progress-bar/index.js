let ct = 0;
let rightBtn = document.querySelector('.right');
let leftBtn = document.querySelector('.left');
let circles = document.querySelectorAll('.fa-check'); // Use the correct class
let lines = document.querySelectorAll('.line');

for (let j = 0; j < 3; j++) {
  lines[j].style.backgroundColor = "gray";
}

for (let j = 0; j < 4; j++) {
  circles[j].style.color = "gray";
  circles[j].style.border = "2px solid gray";
}

rightBtn.addEventListener('click', () => {
    if(ct<4)
    ct++;
    updateCircle();
    updateLine();
});

leftBtn.addEventListener('click', () => {
   if(ct>0)
    ct--;
    updateCircle();
    updateLine();
});

function updateCircle() {
  for (let j = 0; j < 4; j++) {
    if (j < ct) {
      circles[j].style.color = "green";
      circles[j].style.border = "2px solid green";
    } else {
      circles[j].style.color = "gray";
      circles[j].style.border = "2px solid gray";
    }
  }
}

function updateLine() {
  for (let j = 0; j < 3; j++) {
    if (j < ct - 1) {
      lines[j].style.backgroundColor = "green";
    } else {
      lines[j].style.backgroundColor = "gray";
    }
  }
}
