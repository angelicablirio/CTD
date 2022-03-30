const inputUserNameRef = document.querySelector('#userName');
const nameRef = document.querySelector('#name');
const imgRef = document.querySelector('#img');
const btnEnviarRef = document.querySelector('button');

btnEnviarRef.addEventListener('click', e => {
  e.preventDefault();

  fetch(`https://api.github.com/users/${inputUserNameRef.value}`)
    .then(
      response => {
        response.json()
        .then(
          user => {
            nameRef.textContent = user.name
            imgRef.src = user.avatar_url
          }
        )
      }
    )
})