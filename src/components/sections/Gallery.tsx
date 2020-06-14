import { Component } from 'react';
import * as React from "react";

type Photos = {
    column1: string[],
    column2: string[],
    column3: string[],
    column4: string[]
}

export class Gallery extends Component<{}> {
    title = "Прекрасные моменты"
    description = `
        Невозможно повернуть время вспять и прожить заново счастливые моменты,
        но можно насладиться чудесными воспоминаниями, что дарят нам эти
        фото.
    `
    ornamentIconPath = "./images/flaticon/svg/005-two.svg"

    photos: Photos = {
        column1: [
            "./images/photos/moments/IMG_3672.JPG",
            "./images/photos/moments/IMG_1498.jpeg",
            "./images/photos/moments/IMG_5585.jpg",
            "./images/photos/moments/2020-06-01-23.14.00.jpg",
            "./images/photos/moments/IMG_2934.jpeg",
            "./images/photos/moments/02XPXB7h1fI.jpg",
            "./images/photos/moments/pasha.jpg",
            "./images/photos/moments/tQhg4hPgtD4.jpg"
        ],
        column2: [
            "./images/photos/moments/ZwyHn1fpiJQ.jpg",
            "./images/photos/moments/IMG_4182.jpg",
            "./images/photos/moments/uCYhfJZ22gg.jpg",
            "./images/photos/moments/4MKXbHmavTI.jpg",
            "./images/photos/moments/ID7kyKZLGmo.jpg",
            "./images/photos/moments/IMG_3062.jpg",
            "./images/photos/moments/IMG_1897.JPG",
            "./images/photos/moments/9efU0kNgxxE.jpg",
            "./images/photos/moments/F02FE328-6244-4BF9-A521-523F18678062_1_105_c.jpeg"
        ],
        column3: [
            "./images/photos/moments/IMG_0088.JPG",
            "./images/photos/moments/vcAVfS8zPfE.jpg",
            "./images/photos/moments/2020-06-01-23.14.12.jpg",
            "./images/photos/moments/korporativ.jpeg",
            "./images/photos/moments/IMG_1228.JPG",
            "./images/photos/moments/2020-06-01_15.22.07.jpg",
            "./images/photos/moments/IMG_4203.JPG",
            "./images/photos/moments/CLi2Ge_Eh2U.jpg",
        ],
        column4: [
            "./images/photos/moments/IMG_3807.jpg",
            "./images/photos/moments/2020-06-02-00.02.33.jpg",
            "./images/photos/moments/2020-06-01_23.13.45ssss.jpg",
            "./images/photos/moments/7zjkoWfNIXI.jpg",
            "./images/photos/moments/IMG_5153.JPG",
            "./images/photos/moments/WSKl31P8Uek.jpg",
            "./images/photos/moments/anya_and_katya.jpg"
        ]
    }

    columnsNumber = Object.keys(this.photos).length

    renderDescriptionBlock() {
        return (
            <div className="row animate-box">
                <div className="col-md-8 col-md-offset-2">
                    <div className="col-md-12 text-center section-heading svg-sm colored">
                        <img src={ this.ornamentIconPath } className="svg" alt=""/>
                        <h2>{ this.title }</h2>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1 subtext">
                                <h3>{ this.description }</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderPhoto(photo: string, index: number) {
        return (
            <div className="gallery animate-box" key={`gallery-photo-${index}`}>
                <a className="gallery-img image-popup" href={ photo }>
                    <img src={ photo } className="img-responsive" alt="" />
                </a>
            </div>
        )
    }

    renderPhotosForColumn(columnIndex: number) {
        return this.photos[`column${columnIndex + 1}`].map(this.renderPhoto)
    }

    renderPhotos() {
        return [...Array(this.columnsNumber)].map((_, i) =>
            <div className="col-md-3 col-sm-6 col-xs-6 photos-row" key={`gallery-column-${i}`}>{ this.renderPhotosForColumn(i) }</div>
        )
    }

    render() {
        return (
            <div id="qbootstrap-gallery" data-section="gallery">
                <div className="container">
                    { this.renderDescriptionBlock() }
                </div>
                <div className="container-fluid">
                    <div className="row">
                        { this.renderPhotos() }
                    </div>
                </div>
            </div>
        )
    }
}
