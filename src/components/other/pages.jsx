import React from "react"
import { HomePage } from '../HomePage/homePage'
import { Destination } from '../DestinationPage/Destination'
import { Crew } from '../CrewPage/Crew'
import { Technology } from "../TechnologyPage/technology"


export const Pages = {
    "home": {
        "page": <HomePage />,
        "background":{
            "mobile" : "home/background-home-mobile",
            "tablet" : "home/background-home-tablet",
            "desktop" : "home/background-home-desktop",
        }
    },
    "destination": {
        "page": <Destination />,
        "background":{
            "mobile" : "destination/background-destination-mobile",
            "tablet" : "destination/background-destination-tablet",
            "desktop" : "destination/background-destination-desktop",
        }
    },
    "crew": {
        "page": <Crew />,
        "background":{
            "mobile" : "crew/background-crew-mobile",
            "tablet" : "crew/background-crew-tablet",
            "desktop" : "crew/background-crew-desktop",
        }
    },
    "technology": {
        "page": <Technology />,
        "background":{
            "mobile" : "technology/background-technology-mobile",
            "tablet" : "technology/background-technology-tablet",
            "desktop" : "technology/background-technology-desktop",
        }
    },
}