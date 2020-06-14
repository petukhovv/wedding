import { Component } from 'react';
import * as React from "react";

export class ConfirmationForm extends Component<{}> {
    ornamentIconPath = "./images/cover_bg_1.jpg"

    render() {
        return (
            <div id="qbootstrap-started" className="qbootstrap-bg" data-section="rsvp"
                 data-stellar-background-ratio="0.5" style={{ backgroundImage: `url(${this.ornamentIconPath})` }}>
                <div className="overlay" />
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="col-md-12 text-center section-heading svg-sm colored">
                                <img src="images/flaticon/svg/005-two.svg" className="svg" alt="" />
                                <h2>You Are Invited</h2>
                                <div className="row">
                                    <div className="col-md-10 col-md-offset-1 subtext">
                                        <h3>Far far away, behind the word mountains, far from the countries Vokalia
                                            and Consonantia, there live the blind texts.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row animate-box">
                        <div className="col-md-10 col-md-offset-1">
                            <form className="form-inline">
                                <div className="col-md-4 col-sm-4">
                                    <div className="form-group">
                                        <label htmlFor="name" className="sr-only">Name</label>
                                        <input type="name" className="form-control" id="name" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="form-group">
                                        <label htmlFor="email" className="sr-only">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <button type="submit" className="btn btn-default btn-block">I am Attending</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
