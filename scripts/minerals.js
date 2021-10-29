import { getMinerals } from "./database.js";

const minerals = getMinerals()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "minerals") {
            const mineralOption = changeEvent.target.value
            console.log(mineralOption)  // "1" or "2"
        }
    }
)


export const Mineral = () => { // eporting the desired html to the page
    const mineral = getMineral() // creating a varible called gov. and assigning the value of an array "get gov"
    //creating a varible called html and its assigned html to an emty string
    let mineralHtml= "" 
    
    mineralHtml += ` <div> <label> Choose your mineral </label> 
    <select id="mineral"> 
    <option value="0">Choose your mineral </option> 
    ` //  21. adds the lable, 22. the select tag this code allows us the structure for the dropdown (provided by vs code) 23. is a place holder that prints "choose your govener" before selection
    for (const mineral of mineral) { //inerating through each governer object in the governers array 
        if (mineral.active === true) { // this condition will filter out all inactive gov.
            mineral += `<option value="${mineral.id}" > ${mineral.name} </option>` //generates mineral that capures the names through the ids provided in the options
        }
        }
    mineralHtml+= "</select></div>"  //closing tags for HTML
    
 return mineral //returning the HTML string
}


// working on getting the minirals to display inventory of minerals if they are in stock and the facility is active.