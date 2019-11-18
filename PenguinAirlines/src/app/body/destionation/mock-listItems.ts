import { destination } from './listItem';

export let destinations: destination[] = [
    { 
        id: 0, 
        departure_location:'Amsterdam Schiphol',
        destination:'New York',
        distance: 5865,
        flightTime: [{
            hour: "0",
            minutes: "0",
            seconds: "0",
        }],
    },
    { 
        id: 1, 
        departure_location:'New York',
        destination:'Amsterdam Schiphol',
        distance: 5865,
        flightTime: [{
            hour: "0",
            minutes: "0",
            seconds: "0",
        }],
    },
    
    { 
        id: 2, 
        departure_location:'Dubai',
        destination:'Amsterdam Schiphol',
        distance: 5171,
        flightTime: [{
            hour: "0",
            minutes: "0",
            seconds: "0",
        }],
    },
    
    { 
        id: 3, 
        departure_location:'Amsterdam Schiphol',
        destination:'Dubai',
        distance: 5171,
        flightTime: [{
            hour: "0",
            minutes: "0",
            seconds: "0",
        }],
    },
];