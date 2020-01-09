function submitComment() {
    // gather data
    const name = document.querySelector('#name').value;
    const msg = document.querySelector('#msg').value;

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
    console.log(comment);


}