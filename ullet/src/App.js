import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom"

import "./assets/global.css"
import Nav from './components/Nav';
import Flex from './components/utils/Flex';

import Home from './views/Home';
import Login from './views/Login';
import NewUser from './views/NewUser';
import User from './views/User';
import Users from './views/Users';

function App() {

    return (
        <div>
            <Nav>
                <Flex gap="2rem" padding="1rem">
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/users/new">New User</Link>
                </Flex>
            </Nav>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>

                <Route path='/users'>
                    <Route index element={<Users></Users>}></Route>
                    <Route path=':name' element={<User></User>}></Route>
                    <Route path='new' element={<NewUser></NewUser>}></Route>
                </Route>

                <Route path='*' element={<Home></Home>}></Route>
            </Routes>
        </div >
    );
}

export default App;