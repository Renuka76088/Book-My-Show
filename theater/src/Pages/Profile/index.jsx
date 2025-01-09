import React from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser } from '@fortawesome/free-solid-svg-icons'

function Profile() {
    return (

        <div className="container bootstrap snippets bootdey">
            <div className="row">
                <div className="profile-nav col-md-3">
                    <div className="panel">
                        <div className="user-heading round">
                            <a href="#">
                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                            </a>
                            <h1>Camila Smith</h1>
                            <p>deydey@theEmail.com</p>
                        </div>

                        <ul className="nav nav-pills nav-stacked">
                            <li className="active kopu1"><a href="#"> <FontAwesomeIcon icon={faUser} /> Profile</a></li>
                            <Link to='/EditProfile'>
                            
                            <li className='kopu2 text-secondary'> <i className="fa fa-edit"></i> Edit profile</li>
                            </Link>
                            <li className='kopu'><a href="#"> <i className="fa fa-calendar"></i> Bookings</a></li>
                        </ul>
                    </div>
                </div>
                <div className="profile-info col-md-9">
                    <div className="panel">
                        {/* <form>
                            <textarea placeholder="Whats in your mind today?" rows="2" className="form-control input-lg p-text-area"></textarea>
                        </form> */}
                        {/* <footer className="panel-footer">
                            <button className="btn btn-warning pull-right">Post</button>
                            <ul className="nav nav-pills">
                                <li>
                                    <a href="#"><i className="fa fa-map-marker"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-camera"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className=" fa fa-film"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-microphone"></i></a>
                                </li>
                            </ul>
                        </footer> */}
                    </div>
                    <div className="panel">
                        {/* <div className="bio-graph-heading">
                            Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna metus.
                        </div> */}
                        <div className="panel-body bio-graph-info">
                            <h1>Bio Graph</h1>
                            <div className="row">
                                <div className="bio-row">
                                    <p><span>First Name </span>: Camila</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Last Name </span>: Smith</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Country </span>: Australia</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Birthday</span>: 13 July 1983</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Occupation </span>: UI Designer</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Email </span>: jsmith@flatlab.com</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Mobile </span>: (12) 03 4567890</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Phone </span>: 88 (02) 123456</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile