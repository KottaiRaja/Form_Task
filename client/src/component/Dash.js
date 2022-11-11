import 'bootstrap/dist/css/bootstrap.css';
import './dash.css'

export function Dash(){
    return(
        <div>
            <div className='container'>
                <div className='col-lg-12 card bg-danger'>
                    <div className='col-lg-10 bg-info inner_card'>
                        <h1 className='text-white'>Welcome to dashboard</h1>
                    </div>

                </div>

            </div>
        </div>
    )
}