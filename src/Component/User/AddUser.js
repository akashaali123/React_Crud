import Axios from 'axios';
import react , {useState} from 'react';
import {useHistory} from 'react-router-dom';


const AddUser = () => {
let history = useHistory();
const[user,setUser] = useState({
name:"",
username:"",
email:"",
phone:"",
website:""
});

const {name,username,email,phone,website} = user;

const onInputChange = e => {
    setUser({...user,[e.target.name] : e.target.value});
};

const onSubmit = e =>{
     e.preventDefault();
     Axios.post('http://localhost:3333/users',user).then(res => {
        history.push("/");
    })
        .catch(error => {
            console.log("error {error}");
        });
};
    return (
        <div className="container border shadow">
            <h1 >Add User</h1>
            <form onSubmit={e=> onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                     type="text" 
                     className="form-control" 
                     id="name" 
                     placeholder="Name" 
                     name="name"
                     value={name}
                     onChange={e=> onInputChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="userName">User Name</label>
                    <input 
                     type="text" 
                     className="form-control" 
                     id="userName" 
                     placeholder="User Name"
                     name="username"
                     value={username} 
                     onChange={e=> onInputChange(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" 
                     className="form-control" 
                     id="email" 
                     aria-describedby="emailHelp" 
                     placeholder="Enter email"
                     name="email"
                     value={email} 
                     onChange={e=> onInputChange(e)}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" 
                    className="form-control" 
                    id="phone" 
                    placeholder="Phone Number"
                    name="phone"
                    value={phone} 
                    onChange={e=> onInputChange(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="website">Web Site</label>
                    <input type="Text" 
                    className="form-control" 
                    id="website" 
                    placeholder="Website Name"
                    name="website"
                    value={website} 
                    onChange={e=> onInputChange(e)}/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default AddUser;