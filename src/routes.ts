import { Request, Response} from 'express';
import createUser from './services/CreateUser';

export default function helloWorld(req: Request, res: Response) {
  const user = createUser({
    email: 'alvarp@alvaro.com',
    password: '12345',
    techs: [
      'React', 
      ' ReactJS',
      'React Native',
      {title: 'JavaScript', experience: 100},
    ]
  });

  return res.json({ user: user});
}