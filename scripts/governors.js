import { getGovernors } from "./database.js" /// import from datadase 

/// we need a drop down to select active governers from the list

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "governor") {
            const governerOption = changeEvent.target.value
            console.log(governerOption)  // "1" or "2"
        } // we need to store selected govoner in transient state.
    }
)


export const Governors = () => { // eporting the desired html to the page
    const governors = getGovernors() // creating a varible called gov. and assigning the value of an array "get gov"
    //creating a varible called html and its assigned html to an emty string
    let html= "" 
    
    html += ` <div> <label> Choose your governor </label> 
    <select id="governor"> 
    <option value="0">Choose your governor </option> 
    ` //  21. adds the lable, 22. the select tag this code allows us the structure for the dropdown (provided by vs code) 23. is a place holder that prints "choose your govener" before selection
    for (const governor of governors) { //inerating through each governer object in the governers array 
        if (governor.active === true) { // this condition will filter out all inactive gov.
            html += `<option value="${governor.id}" > ${governor.name} </option>` //generates html that capures the names through the ids provided in the options
        }
        }
    html+= "</select></div>"  //closing tags for HTML
    
 return html //returning the HTML string
}

