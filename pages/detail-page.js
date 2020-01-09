function submitComment() {
    // gather data
    const inputField = document.getElementById("name");
    const name = inputField.value;
    const textArea = document.getElementById("msg");
    const msg = textArea.value;

    // create elements necessary
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    
    // adjust elements
    h3.innerHTML = `${name} said`;
    p.innerHTML = msg
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);
    
    // display the elements on the page
    const commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);

    // reset form values
    inputField.value = null;
    textArea.value = null;
}