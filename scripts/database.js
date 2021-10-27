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
            name: "",
            active: Boolean,
        },
         {
            id: 2,
            name: "",
            active: Boolean,
        },
         {
            id:3,
            name: "",
            active: Boolean,
        },
         {
            id: 4,
            name: "",
            active: Boolean,
        },
         {
            id: 5,
            name: "",
            active: Boolean,
        },
         {
            id: 6,
            name: "",
            active: Boolean,
        },
         {
            id: 7,
            name: "",
            active: Boolean,
        },
         {
            id: 8,
            name: "",
            active: Boolean,
        },
         {
            id: 9,
            name: "",
            active: Boolean,
        },
         {
            id: 10,
            name: "",
            active: Boolean,
        },
         {
            id: 11,
            name: "",
            active: Boolean,
        },
    ],
    minerals = [
        {
            id: 1,
            name: "",
         },
        {
            id: 2,
            name: "",
         },
        {
            id: 3,
            name: "",
         },
        {
            id: 4,
            name: "",
         },
        {
            id: 5,
            name: "",
         },
        {
            id: 6,
            name: "",
         },
        {
            id: 7,
            name: "",
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

