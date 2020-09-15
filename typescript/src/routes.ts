import { Request, Response } from 'express';
import createUser from './Services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'medusorico@gmail.com', 
        password: '123456',
        techs: ['Node.js', 
        'React', 
        'React Native',
        { title: 'Javascript', experience: 100},
    ],
    });
    
    return response.json({ message: 'Hello World'});
}