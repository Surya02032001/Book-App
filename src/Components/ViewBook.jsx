import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewBook = () => {
   
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Published Year</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>The bible</td>
                                    <td>abc</td>
                                    <td>2001</td>
                                    <td>99</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Helen Keller</td>
                                    <td>Thornton</td>
                                    <td>2007</td>
                                    <td>60</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Cinderlla</td>
                                    <td>Thornton</td>
                                    <td>2001</td>
                                    <td>90</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>The evil</td>
                                    <td>efc</td>
                                    <td>2003</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Jurrassic park</td>
                                    <td>Thornton</td>
                                    <td>2012</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>godzilla</td>
                                    <td>Thornton</td>
                                    <td>1999</td>
                                    <td>90</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Dark night</td>
                                    <td>Thornton</td>
                                    <td>1987</td>
                                    <td>80</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Light house</td>
                                    <td>Thornton</td>
                                    <td>1978</td>
                                    <td>100</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewBook