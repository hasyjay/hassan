                            // SCRIPT BEHIND THE FORM VALIDATION

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
    const checkTitle = document.querySelector('#title').value
    const checkMessage = document.querySelector('#messaging').value
    const checkEmail = document.querySelector('#email').value
    const check = document.querySelector('#username').value
    const charsValidator = /^[A-Za-z]+$/;
    if(check.length >= 4  && check.match(charsValidator) && checkMessage.length >= 20  && checkEmail.includes('@') && checkTitle.length <= 30)
                            //SUCCESS  MESSAGE TO DISPLAY IF REQUIREMENTS MEET
    {
        const success = document.querySelector('#successmessage')
        success.style.display = 'flex';
        success.style.fontFamily = 'verdana';
        document.querySelector('form').reset()
        setTimeout(()=> success.remove(), 3000)

    }

                        //  MESSAGE TO DISPLAY IF INPUT REQUIREMENT FAILED
    else {
        const createNew = document.createElement('p')
        createNew.textContent = 'ERROR!! minimum of four characters required in the name field, least of twenty characters required in the message filed and alphabets in all fields';
        document.querySelector('.error').appendChild(createNew);
        createNew.style.backgroundColor = 'red';
        createNew.style.textAlign = 'center';
        setTimeout(()=> createNew.remove(), 7000)
        document.querySelector('form').reset()
       
        
    }
    



})

