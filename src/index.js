import {users} from "./data"
import "./style.css"

const createBodyHtml=document.querySelector(".userBlock");

const createCardHtml=({id, name, age, email, country, company, birthday}) =>`
    <div class="user-block"> 
        <p class="id">id: ${id}</p>
        <p class="name">name: ${name}</p>
        <p class="age">age: ${age}</p>
        <p class="email">email: ${email}</p>
        <p class="country">country: ${country}</p>
        <p class="company">company: ${company}</p>
        <p class="birthday">birthday: ${birthday}</p>
    <div>`
    
const render= () => {
    const usersCard= users.map((user) => {
        const card = document.createElement("div")
        card.className = "userCard main"
        card.innerHTML = createCardHtml(user)

        return card;
    });

    createBodyHtml.innerHTML = ""
    createBodyHtml.append(...usersCard)
}
render()