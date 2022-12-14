import pkg from 'bcryptjs';
const { hash } = pkg;
import { User } from "../models/User.js";


export class UserController {
    async index(req, res){
        const users = await User.findAll();
        return res.json({ users })
    }

    async store(req, res){
        const { name, email, role, password } = req.body;

        const userExists = await User.findOne({ where: { email }});

        if(userExists){
            return res.json({ error: "User exists" });
        }

        const hash_password = await hash(password, 8)
        const user = await User.create({
                name, 
                email,
                role,
                password: hash_password,
        });

        return res.json({ user })
    }
}