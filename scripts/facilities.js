import { getFacilities } from "./database.js"

const facilities = getFacilities() 

export const Facilities = () => {
    let html = "<ul>"

    
    // This is how you have been converting objects to <li> elements
    for (const facility of facilities) {
        html += `<li>
            <input type="radio" name="metal" value="${facility.id}" /> ${facility.name}
    `}

    html += "</ul>"
    return html
}