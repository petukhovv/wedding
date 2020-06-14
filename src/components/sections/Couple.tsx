import { Component } from 'react';
import * as React from "react";

interface NewlywedInfo {
    title: string,
    name: string,
    photo: string
}

export class Couple extends Component<{}> {
    ornamentIconPath = "./images/flaticon/svg/005-two.svg"
    weddingRingsIconPath = "./images/flaticon/svg/003-luxury.svg"

    weddingDate = "7 марта 2018"

    descriptionBlockTitle = "Молодожёны"
    descriptionBlockText1 = `
        Наша история началась в 2018 году: на одной из тренировок по волейболу кое-кто
        снял захватывающее видео игры, а другой захотел любой ценой найти его вместе с
        автором 🙂
    `
    descriptionBlockText2 = "И вот мы здесь 💍"

    groomInfo: NewlywedInfo = {
        title: "Жених",
        name: "Петухов Виктор",
        photo: "./images/photos/Victor.jpg"
    }

    brideInfo: NewlywedInfo = {
        title: "Невеста",
        name: "Коршикова Анна",
        photo: "./images/photos/Anna.jpg"
    }

    renderDescriptionBlock() {
        return (
            <div className="col-md-12 text-center section-heading svg-sm colored">
                <img src={ this.ornamentIconPath } className="svg" alt="" />
                <h2>{ this.descriptionBlockTitle }</h2>
                <p>{ this.descriptionBlockText1 }<br/><b>{this.weddingDate}</b></p>
                <p>{ this.descriptionBlockText2 }</p>
            </div>
        )
    }

    renderNewlywedBlock(newlywedInfo: NewlywedInfo) {
        return (
            <div className="col-md-5 col-sm-5 col-xs-5 nopadding">
                <img src={ newlywedInfo.photo } className="img-responsive" alt="" />
                <h3>{ newlywedInfo.name }</h3>
                <span>{ newlywedInfo.title }</span>
            </div>
        )
    }

    render() {
        return (
            <div id="qbootstrap-couple" className="qbootstrap-section-gray">
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 animate-box">
                            { this.renderDescriptionBlock() }
                        </div>
                    </div>
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            { this.renderNewlywedBlock(this.groomInfo) }
                            <div className="col-md-2 col-sm-2 col-xs-2 nopadding">
                                <h2 className="amp-center">
                                    <img src={ this.weddingRingsIconPath } className="svg img-responsive" alt="" />
                                </h2>
                            </div>
                            { this.renderNewlywedBlock(this.brideInfo) }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
