import React, { Component } from 'react';
import axios from 'axios';
import Highlight from 'react-highlight';
// import { For m } from 'react-bootstrap';

class Home extends Component {
    state = {
        search: "",
        result: [],
    }

    // componentDidMount()  {
    //     axios.get(`http://localhost:5000/presidents/${this.state.search}`)
    //     .then(res => {
    //         this.setState({
    //           result: res.data
    //         })
    //     }) 
    // }
    getPresident() {
        axios.get(`http://localhost:5000/presidents/${this.state.search}`)
            .then(res => {
                this.setState({
                    result: res.data
                })
            })
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="jumbotron">
                        <h1>Presidential API</h1>
                        <p className="lead">Data on the Presidents of the USA</p>
                    </div>
                </div>
                <div id="description" className="col-lg-6 center">
                    <i>
                    <p>Search Presidents with different API calls</p>
                    <p><b>Search by name, number in the presidency, etc.</b></p>
                    <p>lorem ipsum <b>:)</b>dolor sit amet</p>
                      documentaion-component
                    </i>
                    <img id="presidential-portrait" src={this.state.result.portrait} className="rounded-circle mx-auto d-block" alt="" />
                </div>
                <div className="api-container">
                    <div className="api-content">
                        <h1 id="api-header">Make an API call!</h1>

                        <div className="api-search">
                            <div className="input-group">
                                <span className="input-group-addon">http://localhost:5000/presidents/</span>
                                <input id="search" onChange={(e) => this.setState({ search: e.target.value })}
                                    type="text" className="form-control" placeholder="number/1/" />
                                <span className="input-group-btn">
                                    <button onClick={(e) => this.getPresident(e)}
                                        className="btn btn-primary">search presidents</button>
                                </span>
                            </div>
                        </div>

                        <div className="row">
                            <small>Try these calls: <a href="#">number/1</a>, <a href="#">name/George%20Washington</a>, <a href="#">420/blazeit</a></small>
                        </div>
                        <div className="row">
                            <p className="lead pad_top">Result:</p>
                            <div className="well">
                                <pre className="pre-scrollable" id="scrollBox">
                                    <p><b><i>President {this.state.result.number} of the United States of America</i></b></p>
                                    <p><b>{this.state.result.name}</b><i> ({this.state.result.born} - {this.state.result.died})</i></p>
                                    <p><b>In Office:</b> <i>{this.state.result.start} - {this.state.result.end}</i></p>
                                    <p><b>Number of terms served:</b> <i>{this.state.result.terms}</i></p>
                                    <p><b>Party:</b><i> {this.state.result.party}</i></p>
                                    <p><b>Vice President:</b> <i>{this.state.result.vice}</i></p>
                                    <p><b>Prior profession:</b><i> {this.state.result.prior}</i></p>
                                    <p><b>From:</b> <i>{this.state.result.home}, {this.state.result.state}</i></p>
                                    <p><b>Married to:</b><i> {this.state.result.spouse}</i></p>
                                </pre>
                            </div>
                        </div>

                    <img id="presidential-portrait" src={this.state.result.portrait} className="rounded-circle mx-auto d-block" alt="" />
                </div>
                <div className="api-search-container">
                    <h1>Make an API Call!</h1>
                    <div className="input-form">
                        <span>http://localhost:5000/presidents/</span>
                        <input type="text" placeholder="number/1/"
                            onChange={(e) => this.setState({ search: e.target.value })} />
                        <button>Search</button>
                    </div>
                    <div className="sample">
                        <small>Try these calls: <a href="#">number/1</a>, <a href="#">name/George/Washington</a>, <a href="#">420/blazeit</a></small>
                    </div>

                    <div className="code-result">
                        <p><b><i>President {this.state.result.number} of the United States of America</i></b></p>
                        <p><b>{this.state.result.name}</b><i> ({this.state.result.born} - {this.state.result.died})</i></p>
                        <p><b>In Office:</b> <i>{this.state.result.start} - {this.state.result.end}</i></p>
                        <p><b>Number of terms served:</b> <i>{this.state.result.terms}</i></p>
                        <p><b>Party:</b><i> {this.state.result.party}</i></p>
                        <p><b>Vice President:</b> <i>{this.state.result.vice}</i></p>
                        <p><b>Prior profession:</b><i> {this.state.result.prior}</i></p>
                        <p><b>From:</b> <i>{this.state.result.home}, {this.state.result.state}</i></p>
                        <p><b>Married to:</b><i> {this.state.result.spouse}</i></p>

                    </div>
                </div>
                <div className="row pad_bot">
                    <div className="col-sm-1 col-lg-1 col-md-1"></div>
                    <div className="col-sm-3 col-lg-3 col-md-3">
                        <h4 className="center">what is this</h4>
                        <p>hello world</p>
                        <p>goodbye world</p>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-md-3">
                        <h4 className="center">what is this</h4>
                        <p>hello world</p>
                        <p>goodbye world</p>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-md-3">
                        <h4 className="center">what is this</h4>
                        <p>hello world alllah akbar</p>
                        <p>goodbye world</p>
                    </div>
                    <div className="col-sm-1 col-lg-1 col-md-1"></div>
                </div>
            </div>
        )
    }
}

export default Home;