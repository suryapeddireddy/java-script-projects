let s = "";
for (let z = 33; z <= 126; z++) {
  s = s + String.fromCharCode(z);
}
console.log(s);

let ans = "";

document.querySelector('.btn').addEventListener('click', () => {
  const helloElement = document.querySelector('.hello');

  // Check if 'box' class is present before removing it


  // Update the content after a short delay (adjust the delay as needed)
  update();
    helloElement.style.display = 'block';

    helloElement.classList.add('box');
    helloElement.textContent = `password generated!`;

    ans = "";
    setTimeout(() => {
      helloElement.textContent="";
      helloElement.classList.remove('box');  
    }, 1000);
});

function update() {
  for (let j = 0; j < 8; j++) {
    let i = Math.floor(Math.random() * s.length);
    ans += s.charAt(i);
  }
  document.querySelector('.container').innerHTML = ans;
}
