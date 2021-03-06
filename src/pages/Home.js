import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Home = () => {
    return(
        <>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
                <h1 className="display-4 font-weight-normal">Pokemon Social</h1>
                <p className="lead font-weight-normal">A Pokemon game for fun.</p>
                <NavLink className="btn btn-outline" to='/'>Coming soon</NavLink>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                <div className="my-3 py-3">
                <h2 className="display-5">Another headline</h2>
                <p className="lead">And an even wittier subheading.</p>
                </div>
                <div className="bg-light shadow-sm mx-auto" style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0',}}></div>
            </div>
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 p-3">
                <h2 className="display-5">Another headline</h2>
                <p className="lead">And an even wittier subheading.</p>
                </div>
                <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0',}}></div>
            </div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 p-3">
                <h2 className="display-5">Another headline</h2>
                <p className="lead">And an even wittier subheading.</p>
                </div>
                <div className="bg-dark shadow-sm mx-auto" style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0',}}></div>
            </div>
            <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                <div className="my-3 py-3">
                <h2 className="display-5">Another headline</h2>
                <p className="lead">And an even wittier subheading.</p>
                </div>
                <div className="bg-light shadow-sm mx-auto" style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0',}}></div>
            </div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 p-3">
                <h2 className="display-5">Another headline</h2>
                <p className="lead">And an even wittier subheading.</p>
                </div>
                <div className="bg-white shadow-sm mx-auto" style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0',}}></div>
            </div>
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 py-3">
                <h2 className="display-5">Another headline</h2>
                <p className="lead">And an even wittier subheading.</p>
                </div>
                <div className="bg-white shadow-sm mx-auto" style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0',}}></div>
            </div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 p-3">
                <h2 className="display-5">Another headline</h2>
                <p className="lead">And an even wittier subheading.</p>
                </div>
                <div className="bg-white shadow-sm mx-auto" style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0',}}></div>
            </div>
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 py-3">
                <h2 className="display-5">Another headline</h2>
                <p className="lead">And an even wittier subheading.</p>
                </div>
                <div className="bg-white shadow-sm mx-auto" style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0',}}></div>
            </div>
            </div>
        </>
    );
}

export default Home;