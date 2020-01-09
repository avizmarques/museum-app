function doesntPassValidations(name, msg) {
    if (!name || !msg) {
        alert('You forgot to fill in your name or message!');
        return true;
    }

    if (msg.length > 280) {
        alert('Max length is 280 characters');
        return true;
    }

    if (!name) {
        alert('You forgot to fill in your name!');
        return true;
    }

    if(!msg) {
        alert('you forgot to fill in your message!');
        return true;
    }

    return false;
}

function submitComment() {
    // gather data
    const inputField = document.getElementById("name");
    const name = inputField.value;
    const newName = name.charAt(0).toUpperCase() + name.slice(1);
    const textArea = document.getElementById("msg");
    const msg = textArea.value;

    // create elements necessary
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    
    // adjust elements
    h3.innerHTML = `${newName} said`;
    p.innerHTML = msg
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);
    
    // this needs to be above the posting part otherwise it doesn't work!
    if(doesntPassValidations(name, msg)) {
        return null;
    }
    
    // display the elements on the page
    const commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);

    // reset form values
    inputField.value = null;
    textArea.value = null;
}
