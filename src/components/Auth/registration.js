// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//     const [name, setName] = useState("");
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

    // const handleNameChange = (event) => {
    //     setName(event.target.value);
    // };

    // const handleUsernameChange = (event) => {
    //     setUsername(event.target.value);
    // };

    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value);
    // };

    // const handlePasswordChange = (event) => {
    //     setPassword(event.target.value);
    // };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const data = {
//             name: name,
//             username: username,
//             email: email,
//             password: password
//         };

//         console.log("Data being sent:", data);

//         axios.post('https://tuning-backend.onrender.com/register', data)
//             .then(response => {
//                 console.log("Response from server:", response.data);
//                 console.log("Response is:", response);
//                 if (response.data.code === 11000) {
//                     alert("E-mail already registered! Please Login to proceed.");
//                     navigate('/login');
//                 } else {
//                     alert("Registered successfully! Please Login to proceed.");
//                     navigate('/login');
//                 }

//             })
//             .catch(error => console.log(error));
//     }

//     return (
//         <div>
//             <div className="d-flex justify-content-center align-items-center text-center vh-100" style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))" }}>
//                 <div className="bg-white p-3 rounded" style={{ width: '40%' }}>
//                     <h2 className='mb-3 text-primary'>Register</h2>
//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-3 text-start">
//                             <label htmlFor="exampleInputname" className="form-label">
//                                 <strong>Name</strong>
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter Name"
//                                 className="form-control"
//                                 id="exampleInputname"
//                                 value={name}
//                                 onChange={handleNameChange}
//                                 required
//                             />
//                         </div>
                        // <div className="mb-3 text-start">
                        //     <label htmlFor="exampleInputname" className="form-label">
                        //         <strong>Username</strong>
                        //     </label>
                        //     <input
                        //         type="text"
                        //         placeholder="Enter Name"
                        //         className="form-control"
                        //         id="exampleInputname"
                        //         value={username}
                        //         onChange={handleUsernameChange}
                        //         required
                        //     />
                        // </div>
//                         <div className="mb-3 text-start">
//                             <label htmlFor="exampleInputEmail1" className="form-label">
//                                 <strong>Email Id</strong>
//                             </label>
//                             <input
//                                 type="email"
//                                 placeholder="Enter Email"
//                                 className="form-control"
//                                 id="exampleInputEmail1"
//                                 value={email}
//                                 onChange={handleEmailChange}
//                                 required
//                             />
//                         </div>
//                         <div className="mb-3 text-start">
//                             <label htmlFor="exampleInputPassword1" className="form-label">
//                                 <strong>Password</strong>
//                             </label>
//                             <input
//                                 type="password"
//                                 placeholder="Enter Password"
//                                 className="form-control"
//                                 id="exampleInputPassword1"
//                                 value={password}
//                                 onChange={handlePasswordChange}
//                                 required
//                             />
//                         </div>
//                         <button type="submit" className="btn btn-primary">Register</button>
//                     </form>

//                     <p className='container my-2'>Already have an account ?</p>
//                     <Link to='/login' className="btn btn-secondary">Login</Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Register;

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'https://tuning-backend.onrender.com/register', {name,username, email, password})
        .then(result => {
            console.log(result);
            if(result.data === "Already registered"){
                alert("E-mail already registered! Please Login to proceed.");
                navigate('/login');
            }
            else{
                alert("Registered successfully! Please Login to proceed.")
                navigate('/login');
            }
            
        })
        .catch(err => console.log(err));
    }


    return (
        <div>
            <div className="d-flex justify-content-center align-items-center text-center vh-100" 
            // style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
            style= {{backgroundImage : "linear-gradient(black,red)"}}>
                <div className="bg-white p-3 rounded" style={{width : '40%'}}>
                    <h2 className='mb-3' style={{fontFamily:'Pacifico,Philosopher,Ubuntu',color:'rgb(247, 140, 162)'}}>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong >Name</strong>
                            </label>
                            <input 
                                type="text"
                                placeholder="Enter Name"
                                className="form-control" 
                                id="exampleInputname" 
                                onChange={handleNameChange}
                                required
                            /> 
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputname" className="form-label">
                                <strong>Username</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="form-control"
                                id="exampleInputname"
                                value={username}
                                onChange={handleUsernameChange}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Email Id</strong>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter Email"
                                className="form-control" 
                                id="exampleInputEmail1" 
                                onChange={handleEmailChange}
                                required
                            /> 
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter Password"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn fw-bold" style={{backgroundColor:'rgb(247, 140, 162)'}}>Register</button>
                    </form>

                    <p className='container my-2'>Already have an account ?</p>
                    <Link to='/login' className="btn btn-secondary fw-bold">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register
