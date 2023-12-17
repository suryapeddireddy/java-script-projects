let s = "";
for (let z = 33; z <= 126; z++) {
  s = s + String.fromCharCode(z);
}
console.log(s);

let ans = "";

document.querySelector('.btn').addEventListener('click', () => {
  const helloElement = document.querySelector('.hello');

  // Check if 'box' class is present before removing it
  if (helloElement.classList.contains('box')) {
    helloElement.classList.remove('box');
  }

  // Update the content after a short delay (adjust the delay as needed)
  update();

  // Add the 'box' class back after a short delay
  setTimeout(() => {
    // Show the element after adding the 'box' class
    helloElement.style.display = 'block';

    helloElement.classList.add('box');
    helloElement.textContent = `text copied!`;
  }, 100); // 100 milliseconds delay (adjust as needed)

  ans = "";
});

function update() {
  for (let j = 0; j < 8; j++) {
    let i = Math.floor(Math.random() * s.length);
    ans += s.charAt(i);
  }
  document.querySelector('.container').innerHTML = ans;
}
