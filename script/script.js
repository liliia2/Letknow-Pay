function openMenu() {
    document.getElementById('mobile-menu').classList.remove('inactive'); 
    document.getElementById('mobile-menu').classList.add('active'); 
    document.body.classList.add('locked');
}

function closeMenu() {
    document.getElementById('mobile-menu').classList.remove('active'); 
    document.getElementById('mobile-menu').classList.add('inactive'); 
    document.body.classList.remove('locked');
}

function checkEmail() {
    if (email.value.length !== 0) { email.classList.add('filled');
    } else { email.classList.remove('filled'); }
};

function checkShopUrl() {
    if (shopurl.value.length !== 0) { shopurl.classList.add('filled');
    } else { shopurl.classList.remove('filled'); }
};

function sendForm(event) {
    let data = {
        name: event.target[0].value,
        email: event.target[1].value,
        url: event.target[2].value
    };
    
    let myRequest = JSON.stringify(data);

    fetch('/form.php', {
        method: 'post',
        body: myRequest
    }).then(res => res.json())
    .then(res => console.log(res));

    document.getElementById('gratitude').classList.add('active');
    document.getElementById('sendForm').reset();
    this.checkEmail();
    this.checkShopUrl();
    setTimeout(removeGratitude, 2000);
}

function removeGratitude() {
    document.getElementById('gratitude').classList.remove('active');
}

document.getElementById('sendForm').onsubmit = (function(event) {
    event.preventDefault();
    sendForm(event);
});
