const btnEnter = document.querySelector(".buttonE")
btnEnter.onclick = enter;

const btnRegister = document.querySelector(".buttonR")
btnRegister.onclick = register;

const userE = document.querySelector("#userE")
const passE = document.querySelector("#passE")

const nameR = document.querySelector("#name")
const userR = document.querySelector("#userR")
const passR = document.querySelector("#passR")
const emailR = document.querySelector("#email")
const ageR = document.querySelector("#age")

const registers = []

class Person {
    constructor(name, userName, age, email, password){
    this.name = name
    this.userName = userName
    this.age = age
    this.email = email
    this.password = password
    }
} 

function createLogin(name, userName, age, email, password){
    const person = new Person(name, userName, age, email, password)

    if(test()){
        alert('E-mail ou Username já existente...')
        return
    }
    alert('Completed Register')
    registers.push(person)
    return

    function test(){
        let x = registers.some((element, index) => 
            element.userName === person.userName || element.email === person.email
        )
        return x
    }
}

function login(userName, password){
    if(verification() !== -1){
        alert('Sucess Login')
        return
    }
    alert('Username or password incorrect')
    return

    function verification(){
        const x = registers.findIndex((element => 
            element.userName === userName && element.password === password
        ))
        return x
    }
}
function enter(){
    const valueUser = userE.value
    const valuePass = passE.value
    login(valueUser,valuePass)
    clean(userE,passE)
}
function register(){
    const valueName = nameR.value
    const valueUser = userR.value
    const valuePass = passR.value
    const valueEmail = emailR.value
    const valueAge = ageR.value
    createLogin(valueName,valueUser,valueAge,valueEmail,valuePass)
    clean(nameR,userR,passR,emailR,ageR)
}
function clean(a,b,c,d,e){
    a.value = null
    b.value = null
    c.value = null
    d.value = null
    e.value = null
}
