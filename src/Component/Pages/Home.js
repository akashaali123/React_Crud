import react, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

    const [users, setUser] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {

        axios.get('http://localhost:3333/users').then(res => {
            setUser(res.data.reverse())
        })
            .catch(error => {
                console.log("error {error}");
            });
    };

    return (
        <div className="container">
            <h1>Home</h1>
            <table className="table border shadow">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index)=>(
                        <tr>
                        <th scope="row">{index+1}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link className="btn btn-primary mr-2">View</Link>
                            <Link className="btn btn-outline-primary mr-2" to="/user/1">Edit</Link>
                            <Link className="btn btn-danger ">Delete</Link>
                        </td>
                      </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home;