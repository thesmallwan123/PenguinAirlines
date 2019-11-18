import { flight } from './listItem';
import { destinations } from './destinations-mock-listItems';

export let flights: flight[] = [
    { 
        id: 0, 
        departure_location: destinations[0].departure_location,
        departure_date: "12-12-2019",
        departure_time: '12:00',
        destanation: destinations[0].destination,
        economy_price: 12.00,
        economy_seats: 120,
        business_price: 30.00,
        business_seats: 40,
    },
    {
        id: 1,
        departure_location: destinations[1].departure_location,
        departure_date: "19-12-2019",
        departure_time: '9:30',
        destanation: destinations[1].destination,
        economy_price: 12.00,
        economy_seats: 120,
        business_price: 30.00,
        business_seats: 40,
    },
];