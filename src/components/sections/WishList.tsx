import { Component } from 'react';
import * as React from "react";
import parse from 'html-react-parser';

export class WishList extends Component<{}> {
    title = "Список желаний"
    ornamentIconPath = "./images/flaticon/svg/005-two.svg"

    text = `
        <p>Многие гости спршивают нас про то, что же нам подарить.</p>
        <p>Чтобы успростить выбор, ниже мы написали о некоторых идеях (чего бы нам хотелось), от которых можно было бы отталкиваться, если Вы захотите.</p>
        <p>Если Вам что-то понравилось и Вы захотели подарить такую или подобную вещь, пожалуйста, отметьтесь в специальной табличке, чтобы другие гости случайно не выбрали то же самое 🙂<br /><a href="https://docs.google.com/spreadsheets/d/1WhszYckK6VaSgE3v2NO25Pw0SorP4xaveSrVf3pP8w0" target="_blank">Вот ссылка на неё</a></p>
        <p>А ещё можно вдохновиться <a href="https://www.pinterest.ru/aniakorshikova/%D0%BF%D0%BE%D0%B4%D0%B0%D1%80%D0%BA%D0%B8/" target="_blank">вот этими фото</a> и добавить что-то в таблицу 🙂</p>
    `

    renderDescriptionBlock() {
        return (
            <div className="col-md-8 col-md-offset-2">
                <div className="col-md-12 text-center section-heading svg-sm colored">
                    <img src={ this.ornamentIconPath } className="svg" alt="" />
                    <h2>{ this.title }</h2>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 subtext">
                            { parse(this.text) }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div id="qbootstrap-groom-bride" data-section="wish-list">
                <div className="container">
                    <div className="row animate-box">
                        { this.renderDescriptionBlock() }
                    </div>
                </div>
            </div>
        )
    }
}
