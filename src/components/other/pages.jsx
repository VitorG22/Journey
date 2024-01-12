import React from "react"
import { HomePage } from '../HomePage/homePage'
import { Destination } from '../DestinationPage/Destination'
import { Crew } from '../CrewPage/Crew'
import { Technology } from '../TechnologyPage/Technology'

export const Pages = {
    "home" : {"page" : <HomePage/> , "background" : "home/background-home-" },
    "destination":  {"page" : <Destination /> , "background" : "destination/background-destination-" },
    "crew" : {"page" : <Crew/> , "background" : "crew/background-crew-" },
    "technology" : {"page" : <Technology/> , "background" : "technology/background-technology-" },
}