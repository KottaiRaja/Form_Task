import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import axios from "axios";





export function Login(){
    const Log = async(event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{'enctype':'multipart/form-data'}};

        await axios.post('http://localhost:3004/Login',datastring,config)
              .then(function(res){
                    if(res.data.status === 'Error'){
                      alert('Invalid data');
                      window.location.reload();  
                    }
                    else if(res.data.status === 'Invalid_Login'){
                        alert('Invalid Login');
                        window.location.reload();
                    }
                    else if(res.data.status === 'Success'){
                            alert('Logined');
                            window.location.href="/dashboard";
                       
                    } else{
                            alert('Invalid Login');
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
            <div className="container text-center col-lg-3 mt-5">
                <div className="row">
                    <form onSubmit={Log}>
                    <table className="table-bordered col-lg-4 log_table table table-dark">
                        <thead>
                            <th colSpan={2}>Login</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="p-4">Username</td>
                                <td className="p-4"><input type='text' name="username" id="username" /></td>
                            </tr>
                            <tr>
                                <td className="p-4">Password</td>
                                <td className="p-4"><input type="password" name="password" id="password" /></td>

                            </tr>
                            <tr>
                                <td className="p-4"><Link to='/Register'><button className="btn btn-danger" type="button">Register</button></Link></td>
                                <td className="p-4"><button className="btn btn-primary" type="submit">Login</button></td>
                            </tr>

                        </tbody>
                    </table>    
                    </form>                
                </div>

            </div>
        </div>
    )
}
