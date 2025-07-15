import React, { useState } from 'react'
import Navigationbar from './Navigationbar'

const ViewAllProducts = () => {
    const [movieData, changeMovieData] = useState(
        [
            { "name": "computer", "prize": "900", "image": "https://m.media-amazon.com/images/I/61PdTy7xnWL.jpg" },
            { "name": "computer", "prize": "900", "image": "https://assets.vogue.com/photos/62f6a408b2e176a484ef7c6a/3:4/w_748%2Cc_limit/slide_15.jpg" },
            { "name": "computer", "prize": "900", "image": "https://www.alittlebitetc.com/wp-content/uploads/2021/12/IMG_4886-2-scaled.jpg" },
            { "name": "computer", "prize": "900", "image": "https://www.alittlebitetc.com/wp-content/uploads/2021/12/IMG_4886-2-scaled.jpg" },
            { "name": "computer", "prize": "900", "image": "https://www.alittlebitetc.com/wp-content/uploads/2021/12/IMG_4886-2-scaled.jpg" },
            { "name": "computer", "prize": "900", "image": "https://m.media-amazon.com/images/I/61PdTy7xnWL.jpg" },
            { "name": "computer", "prize": "900", "image": "https://m.media-amazon.com/images/I/61PdTy7xnWL.jpg" },
            { "name": "computer", "prize": "900", "image": "https://m.media-amazon.com/images/I/61PdTy7xnWL.jpg" },
            { "name": "computer", "prize": "900", "image": "https://m.media-amazon.com/images/I/61PdTy7xnWL.jpg" },
            { "name": "computer", "prize": "900", "image": "https://m.media-amazon.com/images/I/61PdTy7xnWL.jpg" },

        ]
    )
    const containerStyle = {
        backgroundImage: 'url("")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    };
    return (
        <div style={containerStyle}>
            <Navigationbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {movieData.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                            <div class="card">
                                                <img src={value.image} class="card-img-top" alt="..." width="200" height="300" />
                                                <div class="card-body">
                                                    <h5 class="card-title"> { value.name}</h5>
                                                    <p class="card-text">{value.prize}</p>
                                                    <a href="#" class="btn btn-primary">Buy now</a>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                }
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewAllProducts