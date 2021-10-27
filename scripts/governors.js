import { getGovernors } from "./database.js"

const governors = getGovernors()

export const Governors = () => {
    let html = "<ul>"

    
    // This is how you have been converting objects to <li> elements
    for (const governor of governors) {
        html += `<li>
            <input type="radio" name="metal" value="${governor.id}" /> ${governor.name}
    `}

    html += "</ul>"
    return html
}