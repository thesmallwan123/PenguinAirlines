import { flightBooked } from './listItem';
import { users } from '../login/mock-listItems';
import { flights } from '../flight-form/mock-listItems';

export let flightsBooked: flightBooked[] = [
    { 
        id: 0, 
        flight: flights[0],
        user: users[0],
        class: 'Economy',
    },
    { 
        id: 1, 
        flight: flights[1],
        user: users[0],
        class: 'Business',
    },
    { 
        id: 2, 
        flight: flights[0],
        user: users[1],
        class: 'Business',
    },
    { 
        id: 3, 
        flight: flights[1],
        user: users[0],
        class: 'Economy',
    },
];