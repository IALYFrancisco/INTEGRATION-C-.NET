// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const formulaire = document.querySelector('form.connexion');

const NavLink = document.querySelector('nav a.connexion');

NavLink.addEventListener('click', (event) => {
    event.preventDefault();
    formulaire.classList.add('active');
})

class User{
    constructor( _email, _pwd){
        this._email = _email;
        this._pwd = _pwd;
    }

    getEmail(){
        return this._email;
    }

    getPwd(){
        return this._pwd;
    }

    setEmail(value){
        this._email = value;
    }

    setPwd(value){
        this._pwd = value;
    }
}

formulaire.addEventListener('submit', (event) => {
    event.preventDefault();

    const utilisateur = new User('ialyfrancisco7@gmail.com', 'azerty');

    var emailDeInput = document.querySelector("form.connexion input[type='email']").value,
    pwdDeInput = document.querySelector("form.connexion input[type='password']").value;

    if(emailDeInput==utilisateur.getEmail() && pwdDeInput==utilisateur.getPwd()){
        window.alert('Votre compte existe belle et bien👌💖✅!');
    }else{
        window.alert('E-mail ou mot de passe incorrect!❌❌');
    }

});
