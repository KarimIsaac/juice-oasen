import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'

const users = [
{
    name: 'Admin User',
    email: 'admin@gmail.com',
    password:bcrypt.hashSync('123456, 10'),
    isAdmin: true,
},
{
    name: 'user1 User',
    email: 'user1@gmail.com',
    password:bcrypt.hashSync('123456, 10'),
    isAdmin: false,
},
{
    name: 'user2 User',
    email: 'user2@gmail.com',
    password:bcrypt.hashSync('123456, 10'),
    isAdmin: false,
},
{
    name: 'user2 User',
    email: 'kareemrody12@gmail.com',
    password:"dany1500",
    isAdmin: false,
},
]
export default users;