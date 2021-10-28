// renders your HTML
import { Facilities } from "./facilities.js"
import { Governors } from "./governors.js"
//import { Minerals } from "./minerals.js"
//import { Colonies } from "./colonies.js"



export const Exomine = () => {
    return `
    <h1>Exomine</h1>

    <article class="choices">
        <section class="choices__governors options">
            <p>Choose a governor</p>
            ${Governors()}
        </section>
        <section class="choices__facilities options">
            <p>Choose a facility </p>
            ${Facilities()}
        </section>
        
    <article>
        <button id="orderButton">Purchase Mineral</button>
    </article>
    `
}