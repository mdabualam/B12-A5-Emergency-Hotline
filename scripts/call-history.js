// emergency service

function getElement (id){
  const element = document.getElementById(id);
  return element;
}
document.getElementById('call-1').addEventListener('click', function(){
  const title = getElement('title-1').innerText;
  const number = getElement('number-1').innerText;
  // const history container
  const historyContainer = getElement('history-container');
  // create a div container
  const newContainer = document.createElement('div');
  // time container
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  newContainer.innerHTML = `
             <div class=" py-3 flex justify-between items-center">
                      <div>
                        <h2 class="font-bold text-lg">${title}</h2>
                        <h1 class="font-bold text-xl">${number}</h1>
                      </div>
                      <div class="font-bold">${currentTime}</div>
             </div>            
  `;  
// add to history container
historyContainer.append(newContainer);
// clear history
document.getElementById('clear-history').addEventListener('click', function(){
  newContainer.innerHTML = "";
})
})

// police service

document.getElementById('call-2').addEventListener('click', function(){
  const title = getElement('title-2').innerText;
  const number = getElement('number-2').innerText;
  // const history container
  const historyContainer = getElement('history-container');
  // create a div container
  const newContainer = document.createElement('div');
  // time container
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  newContainer.innerHTML = `
             <div class=" py-3 flex justify-between items-center">
                      <div>
                        <h2 class="font-bold text-lg">${title}</h2>
                        <h1 class="font-bold text-xl">${number}</h1>
                      </div>
                      <div class="font-bold">${currentTime}</div>
             </div>            
  `;  
// add to history container
historyContainer.append(newContainer);
// clear history
document.getElementById('clear-history').addEventListener('click', function(){
  newContainer.innerHTML = "";
})
})

// police service
document.getElementById('call-3').addEventListener('click', function(){
  const title = getElement('title-3').innerText;
  const number = getElement('number-3').innerText;
  // const history container
  const historyContainer = getElement('history-container');
  // create a div container
  const newContainer = document.createElement('div');
  // time container
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  newContainer.innerHTML = `
             <div class=" py-3 flex justify-between items-center">
                      <div>
                        <h2 class="font-bold text-lg">${title}</h2>
                        <h1 class="font-bold text-xl">${number}</h1>
                      </div>
                      <div class="font-bold">${currentTime}</div>
             </div>            
  `;  
// add to history container
historyContainer.append(newContainer);
// clear history
document.getElementById('clear-history').addEventListener('click', function(){
  newContainer.innerHTML = "";
})
})

// ambulance service
document.getElementById('call-4').addEventListener('click', function(){
  const title = getElement('title-4').innerText;
  const number = getElement('number-4').innerText;
  // const history container
  const historyContainer = getElement('history-container');
  // create a div container
  const newContainer = document.createElement('div');
  // time container
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  newContainer.innerHTML = `
             <div class=" py-3 flex justify-between items-center">
                      <div>
                        <h2 class="font-bold text-lg">${title}</h2>
                        <h1 class="font-bold text-xl">${number}</h1>
                      </div>
                      <div class="font-bold">${currentTime}</div>
             </div>            
  `;  
// add to history container
historyContainer.append(newContainer);
// clear history
document.getElementById('clear-history').addEventListener('click', function(){
  newContainer.innerHTML = "";
})
})

// women & child service 
document.getElementById('call-5').addEventListener('click', function(){
  const title = getElement('title-5').innerText;
  const number = getElement('number-5').innerText;
  // const history container
  const historyContainer = getElement('history-container');
  // create a div container
  const newContainer = document.createElement('div');
  // time container
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  newContainer.innerHTML = `
             <div class=" py-3 flex justify-between items-center">
                      <div>
                        <h2 class="font-bold text-lg">${title}</h2>
                        <h1 class="font-bold text-xl">${number}</h1>
                      </div>
                      <div class="font-bold">${currentTime}</div>
             </div>            
  `;  
// add to history container
historyContainer.append(newContainer);
// clear history
document.getElementById('clear-history').addEventListener('click', function(){
  newContainer.innerHTML = "";
})
})

// anti-corruption
document.getElementById('call-6').addEventListener('click', function(){
  const title = getElement('title-6').innerText;
  const number = getElement('number-6').innerText;
  // const history container
  const historyContainer = getElement('history-container');
  // create a div container
  const newContainer = document.createElement('div');
  // time container
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  newContainer.innerHTML = `
             <div class=" py-3 flex justify-between items-center">
                      <div>
                        <h2 class="font-bold text-lg">${title}</h2>
                        <h1 class="font-bold text-xl">${number}</h1>
                      </div>
                      <div class="font-bold">${currentTime}</div>
             </div>            
  `;  
// add to history container
historyContainer.append(newContainer);
// clear history
document.getElementById('clear-history').addEventListener('click', function(){
  newContainer.innerHTML = "";
})
})

// electricity service
document.getElementById('call-7').addEventListener('click', function(){
  const title = getElement('title-7').innerText;
  const number = getElement('number-7').innerText;
  // const history container
  const historyContainer = getElement('history-container');
  // create a div container
  const newContainer = document.createElement('div');
  // time container
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  newContainer.innerHTML = `
             <div class=" py-3 flex justify-between items-center">
                      <div>
                        <h2 class="font-bold text-lg">${title}</h2>
                        <h1 class="font-bold text-xl">${number}</h1>
                      </div>
                      <div class="font-bold">${currentTime}</div>
             </div>            
  `;  
// add to history container
historyContainer.append(newContainer);
// clear history
document.getElementById('clear-history').addEventListener('click', function(){
  newContainer.innerHTML = "";
})
})

// brac service
document.getElementById('call-8').addEventListener('click', function(){
  const title = getElement('title-8').innerText;
  const number = getElement('number-8').innerText;
  // const history container
  const historyContainer = getElement('history-container');
  // create a div container
  const newContainer = document.createElement('div');
  // time container
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  newContainer.innerHTML = `
             <div class=" py-3 flex justify-between items-center">
                      <div>
                        <h2 class="font-bold text-lg">${title}</h2>
                        <h1 class="font-bold text-xl">${number}</h1>
                      </div>
                      <div class="font-bold">${currentTime}</div>
             </div>            
  `;  
// add to history container
historyContainer.append(newContainer);
// clear history
document.getElementById('clear-history').addEventListener('click', function(){
  newContainer.innerHTML = "";
})
})

//railway service
document.getElementById('call-9').addEventListener('click', function(){
  const title = getElement('title-9').innerText;
  const number = getElement('number-9').innerText;
  // const history container
  const historyContainer = getElement('history-container');
  // create a div container
  const newContainer = document.createElement('div');
  // time container
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  newContainer.innerHTML = `
             <div class=" py-3 flex justify-between items-center">
                      <div>
                        <h2 class="font-bold text-lg">${title}</h2>
                        <h1 class="font-bold text-xl">${number}</h1>
                      </div>
                      <div class="font-bold">${currentTime}</div>
             </div>            
  `;  
// add to history container
historyContainer.append(newContainer);
// clear history
document.getElementById('clear-history').addEventListener('click', function(){
  newContainer.innerHTML = "";
})
})