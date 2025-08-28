// Electricity Helpline

// heart counts
document.getElementById("heart-7")
.addEventListener('click', function(){
    const heartCount = parseInt(document.getElementById('heart-count').innerText);
    const newCount = parseInt(heartCount + 1);
    document.getElementById('heart-count').innerText = newCount;
})

// call counts
document.getElementById("call-7")
.addEventListener('click', function(){
    alert('📞 Electricity Helpline Number: 16216...');
    
    const coinCount = parseInt(document.getElementById('coin-count').innerText);
    const newCoinCount = parseInt(coinCount - 20);
    if(coinCount < 20){ 
        alert("⚠️ Insufficient coins, minimum 20 coins are required to call.");
        return;
    };
    document.getElementById('coin-count').innerText = newCoinCount;

})

// copy counts
document.getElementById('copy-7')
.addEventListener('click', function(){
    alert("Number copied: 16216");
    const copyCount = parseInt(document.getElementById('copy-count').innerText);
    const updatedCopyCount = parseInt(copyCount  +1);
    document.getElementById('copy-count').innerText = updatedCopyCount;
    
})
