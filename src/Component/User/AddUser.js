import Axios from 'axios';
import react, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';


const AddUser = (props) => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
        company: null
    });



    const [company, setCompany] =  useState({
        
            name:null,
            catchPhrase: null,
            bs:null,
        
})
 

    const { id } = useParams();
    const { name, username, email, phone, website } = user;
    const { name:compName, bs, catchPhrase} = company;



    const onInputChange = e => {
        setUser({ ...user, [e.target.name] : e.target.value });  

        setCompany({...company,[e.target.name] : e.target.value});
        setUser({ ...user, ['company'] : company  })
        console.log(user)


    };

    const onSubmit = e => {
        e.preventDefault();
        if (id) {
            Axios.put(`http://localhost:3333/users/${id}`, user).then(res => {
            console.log('Update');    
            history.push("/");
            })
                .catch(error => {
                    console.log("error {error}");
                });
        } else{

            Axios.post('http://localhost:3333/users', user).then(res => {
                console.log('Add');   
            history.push("/");
            })
                .catch(error => {
                    console.log(`error ${error}`);
                });
        }

    };

    useEffect(() => {
       onLoad();

    }, [id]); //initialize empty [] it run only one time initialize with id [id] run when [id change]


    const onLoad = () => {
        if (id) {
            Axios.get(`http://localhost:3333/users/${id}`).then(res => {
            setUser(res.data);
            setCompany(res.data.company)
                
            })
                .catch(error => {
                    console.log("error {error}");
                });
        }else{
            setUser({
                name: "",
                username: "",
                email: "",
                phone: "",
                website: ""
            });
        }
    };
   
   
    return (  
        <div className="container border shadow">
            <h1 >{id ? 'Edit User' : 'Add User'}</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)} 
                        />
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
                        onChange={e => onInputChange(e)} 
                        />
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
                        onChange={e => onInputChange(e)} 
                        />
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
                        onChange={e => onInputChange(e)} 
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="website">Web Site</label>
                    <input type="Text"
                        className="form-control"
                        id="website"
                        placeholder="Website Name"
                        name="website"
                        value={website}
                        onChange={e => onInputChange(e)} 
                        />
                </div> 
                <div className="form-group">
                    <label htmlFor="website">Web Site</label>
                    <input type="Text"
                        className="form-control"
                        id="website"
                        placeholder="Website Name"
                        name="bs"
                        value={bs}
                        onChange={e => onInputChange(e)} 
                        />
                </div> 
                <button type="submit" className="btn btn-primary">{id ? 'Update User' : 'Add User'}</button>
            </form>
        </div>
    )
};

export default AddUser;