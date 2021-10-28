import { getFacilities } from "./database.js"


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "facility") {
            const facilityOption = changeEvent.target.value
            console.log(facilityOption)  // "1" or "2"
        }
    }
)


export const Facilities = () => { // eporting the desired html to the page
    const facilities = getFacilities() // creating a varible called facilitty. and assigning the value of an array "get fac"
    //creating a varible called html and its assigned html to an empty string
    let html= "" 
    
    html += ` <div> <label> Choose your facility </label> 
    <select id="facility"> 
    <option value="0">Choose your facility </option> 
    ` //  21. adds the lable, 22. the select tag this code allows us the structure for the dropdown (provided by vs code) 23. is a place holder that prints "choose your facilities" before selection
    for (const facility of facilities) { //iterating through each facility object in the facilities array 
        if (facility.active === true) { // this condition will filter out all inactive gov.
            html += `<option value="${facility.id}" > ${facility.name} </option>` //generates html that capures the names through the ids provided in the options
        }
        }
    html+= "</select></div>"  //closing tags for HTML
    
 return html //returning the HTML string
}