let arr = [];

    let x1 = document.getElementById("first");
    let x2 = document.getElementById("second");
    let x3 = document.getElementById("third");
    let x4 = document.getElementById("fourth");

    arr = [x1, x2, x3, x4];

    document.getElementById("first").addEventListener('click', function () {
        updateEmoji('angry');
        updateColors(1);
    });

    document.getElementById("second").addEventListener('click', function () {
        updateEmoji('meh');
        updateColors(2);
    });

    document.getElementById("third").addEventListener('click', function () {
        updateEmoji('smile');
        updateColors(3);
    });

    document.getElementById("fourth").addEventListener('click', function () {
        updateEmoji('laugh');
        updateColors(4);
    });

    function updateColors(num) {
        for (let i = 0; i < num; i++) {
            arr[i].style.color = 'gold';
        }
        for (let i = num; i < 4; i++) {
            arr[i].style.color = 'gray';
        }
    }

    function updateEmoji(emojiType) {
        let existingEmoji = document.querySelector('.emoji');
        
        if (existingEmoji) {
            existingEmoji.outerHTML = `<i class="fa-solid fa-face-${emojiType} fa-5x emoji"></i>`;
        } else {
            let y = document.createElement('i');
            document.body.prepend(y);
            y.outerHTML = `<i class="fa-solid fa-face-${emojiType} fa-5x emoji"></i>`;
        }
    }
    

