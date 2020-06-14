import { Component } from 'react';
import * as React from "react";

interface NewlywedInfo {
    name: string,
    photo: string,
    about: string,
    socialNetworks: SocialNetworks
}

interface SocialNetworks {
    vk: string,
    instagram: string
}

enum NewlywedType { GROOM, BRIDE }

export class GroomAndBride extends Component<{}> {
    title = "Жених и невеста"
    newlywedIcon = "./images/flaticon/svg/002-wedding-couple.svg"

    groomInfo: NewlywedInfo = {
        name: "Петухов Виктор",
        photo: "./images/photos/Victor.jpg",
        about: `
            Родился и закончил школу в городе Ижевск, затем перебрался в Питер и поступил
            в ИТМО, где проучился уже почти четверть жизни: 4 года в бакалавриете, 2 – в
            магистратуре, и скоро начнется 2-й год в аспирантуре 🎓. Ещё почти со
            второго курса увлекаюсь волейболом, который подарил мне ❤️. Сейчас принимаю участие
            в разработке языка программирования Kotlin в компании JetBrains 👨🏼‍💻.
        `,
        socialNetworks: {
            vk: "https://vk.com/victor_petukhov",
            instagram: "https://www.instagram.com/victor_petukhov"
        }
    }

    brideInfo: NewlywedInfo = {
        name: "Анна Коршикова",
        photo: "./images/photos/Anna.jpg",
        about: `
            Родилась и выросла в тёплом Краснодарском крае, который подарил мне семью и
            прекрасных друзей. Закончила школу и переехала в город Санкт-Петербург.
            Здесь нашла свою любовь, обрела себя и множество замечательных людей. Сейчас
            учусь в университете ИТМО, работаю в компании Dr.Web и просто наслаждаюсь
            жизнью. Рада познакомиться 👋
        `,
        socialNetworks: {
            vk: "https://vk.com/ann_kooo",
            instagram: "https://www.instagram.com/ann_kooo_"
        }
    }

    renderNewlywedInfo(newlywedInfo: NewlywedInfo, newlywedType: NewlywedType) {
        let className: string;

        switch (newlywedType) {
            case NewlywedType.BRIDE:
                className = "bride"
                break
            case NewlywedType.GROOM:
                className = "groom"
                break
        }

        return (
            <div className={`couple ${className} text-center animate-box`}>
                <img src={ newlywedInfo.photo } className="img-responsive" alt="" />
                <div className="desc">
                    <h2>{ newlywedInfo.name }</h2>
                    <p>{ newlywedInfo.about }</p>
                    <ul className="social social-circle">
                        <li><a href={ newlywedInfo.socialNetworks.vk } target="_blank"><i className="icon-vk" /></a></li>
                        <li><a href={ newlywedInfo.socialNetworks.instagram } target="_blank"><i className="icon-instagram" /></a></li>
                    </ul>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div id="qbootstrap-groom-bride" data-section="groom-bride">
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="col-md-12 text-center section-heading svg-sm-2 colored">
                                <img src={ this.newlywedIcon } className="svg" alt="" />
                                <h2>{ this.title }</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            { this.renderNewlywedInfo(this.groomInfo, NewlywedType.GROOM) }
                        </div>
                        <div className="couple-separator" />
                        <div className="col-md-6">
                            { this.renderNewlywedInfo(this.brideInfo, NewlywedType.BRIDE) }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
