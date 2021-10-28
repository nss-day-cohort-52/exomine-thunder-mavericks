import { getColonies } from "./database.js"

const colonies = getColonies()



export const Colonies = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const colony of colonies) {
        html += `<li>
            <input type="radio" name="metal" value="${colony.id}" /> ${colony.name}
    `}

    html += "</ul>"
    return html
}