//Referências
const inputNameRef = document.querySelector('#name');
const inputPassRef = document.querySelector('#pass');
const inputTelRef = document.querySelector('#tel');
const inputHobbiesRef = document.querySelectorAll("input[name=hobbies]");
const inputNacionalRef = document.getElementsByName('nacionalidade');
const spanNacionalidadeRef = document.querySelector('#msgNacionalidade');
const inputNameErrorMsgRef = document.querySelector('#nameErrorMsg');
const inputPassErrorMsgRef = document.querySelector('#passErrorMsg');
const inputTelErrorMsgRef = document.querySelector('#telErrorMsg');
const inputHobbiesErrorMsgRef = document.querySelector('#hobbiesErrorMsg');
const btnSubscriptionRef = document.querySelector('button');

//Validação input Nome
const validateName = () => {
    if (!inputNameRef.checkValidity()) {
        inputNameRef.classList.add('error');
        inputNameErrorMsgRef.classList.add('show');
		return false;
    } 
        inputNameRef.classList.remove('error');
        inputNameErrorMsgRef.classList.remove('show');
        return true;
    
}

//Validação input Senha
const validatePassword = () => {
    if (!inputPassRef.checkValidity()) {
        inputPassRef.classList.add('error');
        inputPassErrorMsgRef.classList.add('show');
        return false;
    } 
        inputPassRef.classList.remove('error');
        inputPassErrorMsgRef.classList.remove('show');
        return true;

}

//Validação input Telefone
const validateTelphone = () => {
  if (!inputTelRef.checkValidity()) {
      inputTelRef.classList.add('error');
      inputTelErrorMsgRef.classList.add('show');
      return false;
  } 
      inputTelRef.classList.remove('error');
      inputTelErrorMsgRef.classList.remove('show');
      return true;
}

//Validação nacionalidade
const validateNationality = (e) => {
  if (e.target.value ==='Brasil') {
      spanNacionalidadeRef.classList.add('show');
      return false;
  } else {
      spanNacionalidadeRef.classList.remove('show');
      return true;
  }  
}
  
//Validação Hobbies
const validateHobbies = (e) => {
	const checkedHobbies = document.querySelectorAll("input[name=hobbies]:checked");

  //Verifica a qtd de checkboxs marcados
  if (checkedHobbies.length > 4){
      inputHobbiesErrorMsgRef.classList.add('show');
      e.target.checked = false;
      return false;
  } 
  	inputHobbiesErrorMsgRef.classList.remove('show');
  
  
  //Verifica a combinação dos hobbies
  const hobbies = Array.from(checkedHobbies).map(hobbie => hobbie.parentElement.textContent.trim());

    let combinacao1 = ['Video Game', 'Cozinha'].every(hobbie => hobbies.includes(hobbie));
    let combinacao2 = ['Guitarra', 'Leitura'].every(hobbie => hobbies.includes(hobbie));
    let combinacao3 = ['Netflix', 'Costura'].every(hobbie => hobbies.includes(hobbie));

    if (combinacao1) {
        alert('Vídeo Game e Cozinha não é uma combinação válida, por favor, marque outra opção!');
        e.target.checked = false;
        return false;
    } else if (combinacao2) {
        alert('Guitarra e Leitura não é uma combinação válida, por favor, marque outra opção!');
        e.target.checked = false;
        return false;
    } else if (combinacao3) {
        alert('Netflix e Costura não é uma combinação válida, por favor, marque outra opção!');
        e.target.checked = false;
        return false;
    }
    return true;
}

const validateForm = (e) =>{
    return validateName() &&
    validatePassword() &&
    validateTelphone() &&
    validateHobbies(e) &&
    validateNationality(e);
}

const enableBtnSubscription = (e) => {
    btnSubscriptionRef.disabled = !validateForm(e);
}

btnSubscriptionRef.addEventListener('click', (e) => {
  e.preventDefault();
})

inputNameRef.addEventListener('keyup', enableBtnSubscription);
inputPassRef.addEventListener('keyup', enableBtnSubscription);
inputTelRef.addEventListener('keyup', enableBtnSubscription);
inputHobbiesRef.forEach((hobbie) => hobbie.addEventListener('change', enableBtnSubscription));
inputNacionalRef.forEach((nacionality) => nacionality.addEventListener('change', enableBtnSubscription));



