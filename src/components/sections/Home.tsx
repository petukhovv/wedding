import { Component } from 'react';
import * as React from "react";

export class Home extends Component<{}> {
    ornamentIconPath = "./images/flaticon/svg/004-nature.svg"
    backgroundImagePath = "./images/photos/IMG_0177.jpg"

    generalInfoBlockTitle = "Свадьба"
    groomAndBride = "Анна и Виктор"
    weddingDate = "15.08.2020"

    renderGeneralInfoBlock() {
        return (
            <div className="animate-box svg-sm colored">
                <img src={ this.ornamentIconPath } className="svg" alt="" />
                <h1 className="holder"><span>{ this.generalInfoBlockTitle }</span></h1>
                <h2>{ this.groomAndBride }</h2>
                <p>{ this.weddingDate }</p>
            </div>
        )
    }

    render() {
        return (
            <div className="qbootstrap-hero" data-section="home">
            <div className="qbootstrap-overlay" />
                <div className="qbootstrap-cover text-center" data-stellar-background-ratio="0.5" style={{ backgroundImage: `url(${this.backgroundImagePath})` }}>
                    <div className="display-t">
                        <div className="display-tc">
                            <div className="container">
                                <div className="col-md-10 col-md-offset-1">
                                    { this.renderGeneralInfoBlock() }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
