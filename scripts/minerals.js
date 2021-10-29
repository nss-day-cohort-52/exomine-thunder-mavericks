import { getMinerals } from "./database.js";

const minerals = getMinerals()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "minerals") {
            const mineralOption = changeEvent.target.value
        }
    }
)
// working on getting the minirals to display inventory of minerals if they are in stock and the facility is active.

export const mineralList = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = minerals.map(mineral => {
        return `<li>
            <input type="radio" name="mineral" value="${mineral.id}" /> the ${mineral.name} quantity is ${mineral.quantity}
        </li>`
    })


    // Join all of the strings in the array into a single string
    html += listItems.join(" ")

    html += "</ul>"
    return html
}
