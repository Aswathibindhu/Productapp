import React from 'react'
import Navigationbar from './Navigationbar'

const Deleteproduct = () => {
    const containerStyle = {
        backgroundImage: 'url("https://imageio.forbes.com/specials-images/imageserve/650dbf1ff4b9303a43ef747a/Online-Shopping/960x0.png?format=png&width=960")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    };
  return (
    <div style={containerStyle}>
    <Navigationbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-1 col-xxl-12">

                           <label htmlFor="" className="form-label">Product name</label>
                           <input type="text" className="form-control" />
                            
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-1 col-xxl-12">

                            <button className="btn btn-success">Delete</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Deleteproduct