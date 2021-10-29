import { getFacilities, exportTransientState } from "./database.js"

const transientState = exportTransientState()
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "facility") {
            const facilityOption = changeEvent.target.value
            console.log(facilityOption)  // "1" or "2"
        }
    }
)


export const Facilities = () => { // Exporting the desired html to the page
    const facilities = getFacilities() // creating a varible called facility. and assigning the value of an array "get fac"
    // Creating a varible called html and its assigned html to an empty string
    let html= "" 
    
    html += ` <div> <label> Choose your facility </label>` 
        if(transientState.governorId < 1) {
          html += `<div> <select disabled id="facility">`
        } else {
        html += `<div> <select id="facility">`

    }
    html += `<option value="0">Choose your facility </option>` 
    //  21. adds the lable, 22. the select tag this code allows us the structure for the dropdown (provided by vs code) 23. is a place holder that prints "choose your facilities" before selection
    for (const facility of facilities) { //iterating through each facility object in the facilities array 
        if (facility.active === true) { // this condition will filter out all inactive gov.
            html += `<option value="${facility.id}" > ${facility.name} </option>` //generates html that capures the names through the ids provided in the options
        }
        }
    html+= "</select></div>"  //closing tags for HTML
// This conditional should disable the the dropdown if nothing is in temporary state. The only potential flaw is that anything could be inserted into transient state in order to enable the dropdown.
    
 return html //returning the HTML string


 /////something