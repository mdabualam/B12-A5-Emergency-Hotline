// To add info and time in call history

// card-1
document.getElementById('call-1').addEventListener('click', function(){
        const titleText = document.getElementById('title-1').innerText;
        const numberText = document.getElementById('number-1').innerText;

        document.getElementById('title-text').innerText = `${titleText}`;
        document.getElementById('number-text').innerText = `${numberText} `;

        const now = new Date();
        const currentTime = now.toLocaleTimeString();
        document.getElementById('current-time').innerText = currentTime;

      })
      
      // card-2
      document.getElementById('call-2').addEventListener('click', function(){
        const titleText = document.getElementById('title-2').innerText;
        const numberText = document.getElementById('number-2').innerText;

        document.getElementById('title-text').innerText = `${titleText}`;
        document.getElementById('number-text').innerText = `${numberText} `;

        const now = new Date();
        const currentTime = now.toLocaleTimeString();
        document.getElementById('current-time').innerText = currentTime;
      })
