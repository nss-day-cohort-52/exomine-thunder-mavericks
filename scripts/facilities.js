import { getFacilities } from "./database.js"

const facilities = getFacilities() 

export const Facilities = () => {
    let html = "<ul>"

    
    // This is how you have been converting objects to <li> elements
//     for (const facility of facilities) {
//         html += `<li>
//             <<select id="resource">
//             <option value="0">Choose a facility...${facility.id}" /> ${facility.name}</option>
//             <option value="1">${facility.name}</option>
//             <option value="2">Second option</option>
//         </select>
      
//     `}

 
//     return html
// }