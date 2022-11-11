import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import axios from 'axios';



export function Register(){

    const Reg = async(event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{'enctype':'multipart/form-data'}};

        await axios.post('http://localhost:3004/register',datastring,config)
              .then(function(res){
                if(res.data.status === 'Inserted'){
                    alert('Inserted');
                    window.location.href="/";
                }
                else{
                    alert('Error');
                    window.location.reload();
                }
              })
              .catch(function(err){
                alert(err);
                window.location.reload();
              })

    }




    return(
        <div>
            <div className="container col-lg-3 mt-5">
                <div className="row">
                    <form onSubmit={Reg}>
                    <table className="table-bordered col-lg-8 text-center table table-dark">
                        <thead>
                            <th colSpan={2}>Register</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='p-4'>Name</td>
                                <td className='p-4'><input type='text' name='name' id='name'/></td>
                            </tr>
                            <tr>
                               
                                    <td className='p-4'>Email</td>
                                    <td className='p-4'><input type='email' name='email' id='email' /></td>
                               
                            </tr>
                            <tr>
                                <td className='p-4'>Phone</td>
                                <td className='p-4'><input type='number' name="num" id="num" /></td>
                            </tr>
                            <tr>
                                <td className='p-4'>Password</td>
                                <td className='p-4'><input type='password' name="password" id="password" /></td>

                            </tr>
                            <tr>
                                <td className='p-4'><Link to='/'><button className="btn btn-danger" type="button">Login</button></Link></td>
                                <td className='p-4'><button className="btn btn-primary" type="submit">Register</button></td>
                            </tr>
                        </tbody>
                    </table>
                    </form>

                </div>

            </div>
        </div>
    )
}