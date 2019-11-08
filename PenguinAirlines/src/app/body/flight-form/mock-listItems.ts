import { flight } from './listItem';

export let flights: flight[] = [
    { 
        id: 0, 
        departure_location: "Amsterdam Schiphol",
        departure_date: "12-12-2019",
        departure_time: '12:00',
        destanation: 'New York Airport',
        economy_price: 12.00,
        economy_seats: 120,
        business_price: 30.00,
        business_seats: 40,
    },
    {
        id: 1,
        departure_location: "New York Airport",
        departure_date: "19-12-2019",
        departure_time: '9:30',
        destanation: 'Amsterdam Schiphol',
        economy_price: 12.00,
        economy_seats: 120,
        business_price: 30.00,
        business_seats: 40,
    },
];