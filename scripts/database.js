const database = {
    colonies = [
        {
            id: 1, 
             active: true,
             name: "Earth"

    },
        {
            id: 2, 
            active: true,
            name: "Moon"

    },
        {
            id: 3, 
            active: true,
            name: "Saturn"

    },
        {
            id: 4, 
            active: true,
            name: "Capicorn"

    },
        {
            id: 5, 
            active: true,
            name: "Pluto"

    },
        {
            id: 6, 
            active: false,
            name: "Taurus"

    },
        {
            id: 7, 
            active: false,
            name: "Jupiter"

        },

    ],
    governors = [
        {
            id: 1, 
            name: "Chelsea Harris",
            planet: "Taurus",
            active: true,
            colonyId: 1,
        },
        {
            id: 2, 
            name: "Avia Mondesir",
            planet: "Capicorn",
            active: true,
            colonyId: 1,
        },
        {
            id: 3, 
            name: "Jason Ross",
            planet: "Earth",
            active: true,
            colonyId: 1,
        },
        {
            id: 4, 
            name: "Milton Brown",
            planet: "Moon",
            active: true,
            colonyId: 1,
        },
        {
            id: 4, 
            name: "Patty LaBelle",
            planet: "Pluto",
            active: true,
            colonyId: 1,
        },
        {
            id: 4, 
            name: "Sally Moni",
            planet: "Saturn",
            active: false,
            colonyId: 1,
        },
    ],
     facilities = [ 
         {
            id: 1,
            name: "Matrix Mania",
            active: true,
        },
         {
            id: 2,
            name: "Pilot's Range",
            active: true,
        },
         {
            id: 3,
            name: "Trivia Lane",
            active: false,
        },
         {
            id: 4,
            name: "Bird's Landing",
            active: false,
        },
         {
            id: 5,
            name: "Rover Road",
            active: true,
        },
         {
            id: 6,
            name: "Confused Parkway",
            active: true,
        },
         {
            id: 7,
            name: "Lighted Drive",
            active: true,
        },
         {
            id: 8,
            name: "Fun Maze",
            active: true,
        },
         {
            id: 9,
            name: "Aviva's Mansion",
            active: true,
        },
         {
            id: 10,
            name: "Jason's Castle",
            active: true,
        },
         {
            id: 11,
            name: "Chelsea's Palace",
            active: false,
        },
    ],
    minerals = [
        {
            id: 1,
            name: "Quartz",
         },
        {
            id: 2,
            name: "Diamond",
         },
        {
            id: 3,
            name: "Calcite",
         },
        {
            id: 4,
            name: "Fluorite",
         },
        {
            id: 5,
            name: "Feldspar",
         },
        {
            id: 6,
            name: "Gypsum",
         },
        {
            id: 7,
            name: "Topaz",
         },
    ],
    facilityMinerals = [
        {
            id: 1,
            mineralId: 1,
            facilityId: 1,
            quantity: 1,
        }
    ], 
    colonyMinerals = [
        {
            id: 1,
            colonyId: 1,
            mineralId: 1,
            quantity : 1,
        }
    ],
    transientState: {},
}


export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }

