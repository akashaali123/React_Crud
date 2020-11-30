import Axios from 'axios';
import react, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';


const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        },
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""

            }
        }
    });




    const { id } = useParams();
    const { name, username, email, phone, website,
        company: { name: compName, catchPhrase, bs },
        address: { street, suite, city, zipcode,
            geo: { lat, lng } } } = user;




    const onInputChange = e => {

        let attributeName = e.target.name;

        if (attributeName === "name" || attributeName === "username" || attributeName === "email" || attributeName === "phone" || attributeName === "website") {

            setUser({ ...user, [e.target.name]: e.target.value });

        } else if (attributeName === "compName" || attributeName === "catchPhrase" || attributeName === "bs") {

            setUser({ ...user, company: { ...user.company, [e.target.name]: e.target.value } });

        } else if (attributeName === "street" || attributeName == "suite" || attributeName === "city" || attributeName === "zipcode") {

            setUser({ ...user, address: { ...user.address, [e.target.name]: e.target.value } });

        } else if (attributeName === "lat" || attributeName === "lng") {

            //Maintain old User, state maintain address old state, maintain old geo state and set new value to geo
            setUser({ ...user, address: { ...user.address, geo: { ...user.address.geo, [e.target.name]: e.target.value } } });

        }
        
    };
   


    const onSubmit = async  e => {
        e.preventDefault();
        if (id) {
             Axios.put(`http://localhost:3333/users/${id}`, user).then(res => {
                console.log('Update');
                history.push("/");
            })
                .catch(error => {
                    console.log("error {error}");
                });
        } else {

            // setUser({
            //     name: "akasha",
            //     username: "akasha ali",
            //     email: "akashaali2012@gmail.com",
            //     phone: "03322659846",
            //     website: "1234456",
            //     company: {
            //         name: "Arpatech",
            //         catchPhrase: "CEG",
            //         bs: "Dot Net dev"
            //     },
            //     address: {
            //         street: "1-468 liaquatabad",
            //         suite: "1",
            //         city: "karachi",
            //         zipcode: "79600",
            //         geo: {
            //             lat: "12.70",
            //             lng: "18.90"
            //         }
            //     }
            // });
        
            // console.log(user);
            
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
        onLoad(id);
        
    }, [id]); //initialize empty [] it run only one time initialize with id [id] run when [id change]


    const onLoad = (id) => {
        if (id) {
            Axios.get(`http://localhost:3333/users/${id}`).then(res => {
                setUser(res.data);


            })
                .catch(error => {
                    console.log("error {error}");
                });
        } else {
            setUser({
                name: "",
                username: "",
                email: "",
                phone: "",
                website: "",
                company: {
                    name: "",
                    catchPhrase: "",
                    bs: ""
                },
                address: {
                    street: "",
                    suite: "",
                    city: "",
                    zipcode: "",
                    geo: {
                        lat: "",
                        lng: ""
                    }
                }
            });

        }
    };


   
    return (
        <div className="container border shadow">
            <h1 >{id ? 'Edit User' : 'Add User'}</h1>
            <form onSubmit={e =>  onSubmit(e)}>
                <h1>User Info:</h1>
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
                <h1>Company Info:</h1>

                <div className="form-group">
                    <label htmlFor="compName">company Name</label>
                    <input type="Text"
                        className="form-control"
                        id="compName"
                        placeholder="Company Name"
                        name="compName"
                        value={compName}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bs">Bs</label>
                    <input type="Text"
                        className="form-control"
                        id="bs"
                        placeholder="bs"
                        name="bs"
                        value={bs}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="catchphrase">Catch Phrase</label>
                    <input type="Text"
                        className="form-control"
                        id="catchphrase"
                        placeholder="Catch Phrase"
                        name="catchPhrase"
                        value={catchPhrase}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <h1>Address Info:</h1>
                <div className="form-group">
                    <label htmlFor="street">Street</label>
                    <input type="Text"
                        className="form-control"
                        id="street"
                        placeholder="Street"
                        name="street"
                        value={street}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="suite">suite</label>
                    <input type="Text"
                        className="form-control"
                        id="suite"
                        placeholder="suite"
                        name="suite"
                        value={suite}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="Text"
                        className="form-control"
                        id="city"
                        placeholder="City"
                        name="city"
                        value={city}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="zipcode">Zip Code</label>
                    <input type="Text"
                        className="form-control"
                        id="zipcode"
                        placeholder="Zip Code"
                        name="zipcode"
                        value={zipcode}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <h1>Geo Info:</h1>
                <div className="form-group">
                    <label htmlFor="lat">Latitude</label>
                    <input type="Text"
                        className="form-control"
                        id="lat"
                        placeholder="Latitude"
                        name="lat"
                        value={lat}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lng">Longitude</label>
                    <input type="Text"
                        className="form-control"
                        id="lng"
                        placeholder="Langitude"
                        name="lng"
                        value={lng}
                        onChange={e => onInputChange(e)}
                    />
                </div>


                <button type="submit" className="btn btn-primary" >{id ? 'Update User' : 'Add User'}</button>
            </form>
        </div>
    )
};

export default AddUser;