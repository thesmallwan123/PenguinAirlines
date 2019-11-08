import { user } from './listItem';

export let users: user[] = [
    { 
        id: 0, admin: true, 
        username: 'admin', 
        password: 'admin', 
        email: 'ivar@waaromleefje.nl', 
        loggedIn: false,
        firstName: 'Ivar',
        lastName: 'Post',
        DOB: '19-03-01',
    },
    { 
        id: 1, 
        admin: false, 
        username: 'noadmin', 
        password: 'noadmin', 
        email: 'ivar2@waaromleefje.nl', 
        loggedIn: false,
        firstName: 'noAdmin',
        lastName: 'noAdmin',
        DOB: '00-00-00',
    },
];