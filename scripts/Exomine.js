// renders your HTML
import { facilities } from "./facilities.js"
import { governors } from "./governors.js"
import { minerals } from "./minerals.js"
import { colonies } from "./colonies.js"



export const Exomine = () => {
    return `<h1>Exomine</h1>

    <article class="choices">
        <section class="choices__governors options">
            <p>Choose a governor</p>
            ${governors()}
        </section>
        <section class="choices__facilities options">
            <p>Choose a facility </p>
            ${facilities()}
        </section>
        
    <article>
        <button id="orderButton">Purchase Mineral</button>
    </article>`
}