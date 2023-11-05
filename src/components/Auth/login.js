// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [email, setEmail] = useState();
//     const [Name, setName] = useState();
//     const [username, setUsername] = useState();
//     const [password, setPassword] = useState();
//     const [userData, setUserData] = useState();
//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();
        
//         axios.post( 'http://localhost:1010/login', {email, password})
//         .then(result => {
//             console.log(result);
//             if(result.data.message === 'Success'){
//                 console.log("Login Success");
//                 alert('Login successful!')
//                 localStorage.setItem('username', username);
//                 localStorage.setItem('name', Name);
//                 localStorage.setItem('email', email);
//                 localStorage.setItem('password', password);
//                 console.log(localStorage.setItem('email', email))
//                 navigate('/dashboard');

//             }
//             else{
//                 alert('Incorrect password! Please try again.');
//             }
//         })
//         .catch(err => console.log(err));
//     }


//     return (
//         <div>
//             <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
//                 <div className="bg-white p-3 rounded" style={{width : '40%'}}>
//                     <h2 className='mb-3 text-primary'>Login</h2>
//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-3 text-start">
//                             <label htmlFor="exampleInputEmail1" className="form-label">
//                                 <strong>Email Id</strong>
//                             </label>
//                             <input 
//                                 type="email" 
//                                 placeholder="Enter Email"
//                                 className="form-control" 
//                                 id="exampleInputEmail1" 
//                                 onChange={(event) => setEmail(event.target.value)}
//                                 required
//                             /> 
//                         </div>
//                         <div className="mb-3 text-start">
//                             <label htmlFor="exampleInputPassword1" className="form-label">
//                                 <strong>Username</strong>
//                             </label>
//                             <input 
//                                 type="text" 
//                                 placeholder="Enter username"
//                                 className="form-control" 
//                                 id="exampleInputPassword1" 
//                                 onChange={(event) => setUsername(event.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="mb-3 text-start">
//                             <label htmlFor="exampleInputPassword1" className="form-label">
//                                 <strong>Name</strong>
//                             </label>
//                             <input 
//                                 type="text" 
//                                 placeholder="Enter Name"
//                                 className="form-control" 
//                                 id="exampleInputPassword1" 
//                                 onChange={(event) => setName(event.target.value)}
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
//                                 onChange={(event) => setPassword(event.target.value)}
//                                 required
//                             />
//                         </div>
//                         <button type="submit" className="btn btn-primary">Login</button>
//                     </form>
//                     {/* TO add ' appostopee */}
//                     <p className='container my-2'>Don&apos;t have an account?</p>
//                     <Link to='/register' className="btn btn-secondary">Register</Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [Name, setName] = useState();
    const [password, setPassword] = useState();
    const [userData, setUserData] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'http://localhost:1010/login', {email, password})
        .then(result => {
            console.log(result);
            if(result.data.message === 'Success'){
                console.log("Login Success");
                alert('Login successful!')
                localStorage.setItem('username', username);
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
                console.log(localStorage.setItem('email', email))
                navigate('/dashboard');

            }
            else{
                alert('Incorrect password! Please try again.');
            }
        })
        .catch(err => console.log(err));
    }


    return (
        <div>
            <div className="d-flex justify-content-center align-items-center text-center vh-100" 
            // style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
            style= {{backgroundImage : "linear-gradient(black,red)"}}>
            {/* style= {{backgroundImage : 'url("bg1.jpg")'}}> */}
                <div className="bg-white p-3 rounded" style={{width : '40%'}}>
                    <h2 className='mb-3' style={{fontFamily:'Pacifico,Philosopher,Ubuntu', color:'rgb(247, 140, 162)'}}>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Email Id</strong>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter Email"
                                className="form-control" 
                                id="exampleInputEmail1" 
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Username</strong>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Enter username"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setUsername(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                             <label htmlFor="exampleInputPassword1" className="form-label">
                                 <strong>Name</strong>
                             </label>
                             <input 
                                type="text" 
                                placeholder="Enter Name"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setName(event.target.value)}
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
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn fw-bold" style={{backgroundColor:'rgb(247, 140, 162)'}}>Login</button>
                    </form>
                    {/* TO add ' appostopee */}
                    <p className='container my-2'>Don&apos;t have an account?</p>
                    <Link to='/register' className="btn btn-secondary fw-bold">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Login