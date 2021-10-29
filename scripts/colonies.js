import { getColonies } from "./database.js"

const colonies = getColonies()

// this module displays the colony name related to the govoner and the minerals related to the colony.
// we will need to: get access to the goven. id from transient state and use that to create.
// we can use the .find array method to retreive govoner obj. we need this becaus we need access to the conlonyId
//once we have the colonyId we can get the colony name

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


//