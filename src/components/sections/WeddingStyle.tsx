import { Component } from 'react';
import * as React from "react";

type Photos = {
    column1: string[],
    column2: string[],
    column3: string[],
    column4: string[]
}

export class WeddingStyle extends Component<{}> {
    ornamentIconPath = "./images/flaticon/svg/005-two.svg"

    title = "Стиль свадьбы"

    photos: Photos = {
        column1: [
            "./images/photos/style/1.jpg",
            "./images/photos/style/2.jpg",
        ],
        column2: [
            "./images/photos/style/5.jpg",
            "./images/photos/style/6.jpg",
        ],
        column3: [
            "./images/photos/style/9.jpg",
            "./images/photos/style/10.jpg",
        ],
        column4: [
            "./images/photos/style/13.jpg",
            "./images/photos/style/14.jpg",
        ]
    }

    columnsNumber = Object.keys(this.photos).length

    renderPhoto(photo: string, index: number) {
        return (
            <div className="gallery wedding-style-gallery animate-box" key={ `photo_${index}` }>
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
            <div className="col-md-3 col-sm-6 col-xs-6" key={ `photo_column_${i}` }>{ this.renderPhotosForColumn(i) }</div>
        )
    }

    renderDescriptionBlock() {
        return (
            <div className="col-md-12 text-center section-heading svg-sm colored">
                <img src={ this.ornamentIconPath } className="svg" alt="" />
                <h2>{ this.title }</h2>
                <p>Мы подумали, что было бы круто сделать свадьбу в стиле рустик: это красивый стиль, его элементы близки к природе, а мы близки к ней 🙂</p>
                <p>Если у Вас есть наряд, близкий к этому стилю, будет здорово, если нет – ничего страшного, это совершенно не обязательно.</p>
                <p>Чтобы было понятнее, вот несколько фото, демонстрирующих такой стиль (а <a href="https://pin.it/YlXyWvg" target="_blank">вот по этой ссылке</a> Вы можете посмотреть побольше фото нарядов в стиле рустик).</p>
                <div className="container-fluid">
                    <div className="row">
                        { this.renderPhotos() }
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="qbootstrap-section-gray" data-section="wedding-style">
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 animate-box">
                            { this.renderDescriptionBlock() }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
