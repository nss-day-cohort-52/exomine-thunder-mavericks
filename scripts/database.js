const database = {
    colonies = [
        {
            id: 1, 
             active: Boolean,

    },
        {
            id: 2, 
            active: Boolean,

    },
        {
            id: 3, 
            active: Boolean,

    },
        {
            id: 4, 
            active: Boolean,

    },
        {
            id: 5, 
            active: Boolean,

    },
        {
            id: 6, 
            active: Boolean,

    },
        {
            id: 7, 
            active: Boolean,

        },

    ],
    governors = [
        {
            id: 1, 
            name: "",
            planet: "",
            active: Boolean,
            colonyId: 1,
        },
        {
            id: 2, 
            name: "",
            planet: "",
            active: Boolean,
            colonyId: 1,
        },
        {
            id: 3, 
            name: "",
            planet: "",
            active: Boolean,
            colonyId: 1,
        },
        {
            id: 4, 
            name: "",
            planet: "",
            active: Boolean,
            colonyId: 1,
        },
        {
            id: 4, 
            name: "",
            planet: "",
            active: Boolean,
            colonyId: 1,
        },
        {
            id: 4, 
            name: "",
            planet: "",
            active: Boolean,
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

