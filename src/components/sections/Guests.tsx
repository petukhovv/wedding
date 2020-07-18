import { Component } from 'react';
import * as React from "react";

type Guest = {
    photo: string,
    name: string
}

export class Guests extends Component<{}> {
    ornamentIconPath = "./images/flaticon/svg/005-two.svg"

    groomGuestsTitle = "Гости со стороны жениха"
    brideGuestsTitle = "Гости со стороны невесты"

    girlDefaultAvatar = "./images/photos/guests/woman.jpg"
    boyDefaultAvatar = "./images/photos/guests/man.jpg"

    groomGuests: Guest[] = [
        { name: "Алексей Петухов", photo: "./images/photos/guests/Petukhov_Alexey.jpg" },
        { name: "Наталья Боровик", photo: "./images/photos/guests/Borovik_Natalia.jpg" },
        { name: "Артем Боровик", photo: "./images/photos/guests/Borovik_Artem.jpg" },
        { name: "Елена Полчанова", photo: "./images/photos/guests/Polchanova_Elena.jpg" },
        { name: "Михаил Карапетян", photo: "./images/photos/guests/Michail_Carapetyan.jpg" },
        { name: "Ольга Бельцева", photo: "./images/photos/guests/Olga_Belceva.jpg" },
        { name: "Сергей Бельцев", photo: this.boyDefaultAvatar },
        { name: "Ольга Кириллова", photo: "./images/photos/guests/Kirillova_Olga.jpg" },
        { name: "Михаил Осотов", photo: "./images/photos/guests/Osotov_Michael.jpg" },
        { name: "Вероника Талаева", photo: "./images/photos/guests/Talaeva_Veronika.png" },
        { name: "Алина Устюгова", photo: "./images/photos/guests/Ustuygova_Alina.jpg" },
        { name: "Павел Молчанов", photo: "./images/photos/guests/Molchanov_Pavel.jpg" },
        { name: "Александр Чехомов", photo: "./images/photos/guests/Chekhomov_Aleksandr.jpg" },
        { name: "Софья Василевская", photo: "./images/photos/guests/Vasilevskaya_Sofa.jpg" },
        { name: "Евгений Емельянов", photo: "./images/photos/guests/Emelyanov_Evgeny.jpg" }
    ]

    brideGuests: Guest[] = [
        { name: "Андрей Коршиков", photo: "./images/photos/guests/Korshikov_Andrey.jpg" },
        { name: "Наталья Коршикова", photo: "./images/photos/guests/Korshikova_Natalia.jpg" },
        { name: "Артем Коршиков", photo: "./images/photos/guests/Korshikov_Artem.jpg" },
        { name: "Ольга Рыжова", photo: "./images/photos/guests/Ryzhova_Olya.jpg" },
        { name: "Александр Коршиков", photo: "./images/photos/guests/Korshikov_Sasha.jpg" },
        { name: "Анастасия Коршикова", photo: "./images/photos/guests/Korshikova_Nastya.jpg" },
        { name: "Екатерина Рогатова", photo: "./images/photos/guests/Rogatova_Katya.jpg" },
        { name: "Анастасия Дорошенко", photo: "./images/photos/guests/Doroshenko_Nastya.jpg" },
        { name: "Денис Шестоперов", photo: "./images/photos/guests/Shestoperov_Denis.jpg" },
        { name: "Ксения Захарова", photo: "./images/photos/guests/Zakharova_Ksyusha.jpg" },
        { name: "Кирилл Ушаков", photo: "./images/photos/guests/Ushakov_Kirill.jpg" },
        { name: "Елизавета Бородулина", photo: "./images/photos/guests/Borodulina_Elizaveta.jpg" },
        { name: "Алексей Форманюк", photo: "./images/photos/guests/Formanyuk_Lesha.jpg" },
        { name: "Максим Козлов", photo: "./images/photos/guests/Kozlov_Maksim.jpg" },
        { name: "Диана Козлова", photo: "./images/photos/guests/Kozlova_Diana.jpg" }
    ]

    renderGuestsBlockDescription(title: string) {
        return (
            <div className="col-md-8 col-md-offset-2">
                <div className="col-md-12 text-center section-heading svg-sm colored">
                    <img src={ this.ornamentIconPath } className="svg"
                         alt=""/>
                    <h2>{ title }</h2>
                </div>
            </div>
        )
    }

    renderGuest(guest: Guest, index: number) {
        return (
            <div key={`guest-${index}`} className="col-md-3 col-sm-3 col-xs-4 text-center animate-box guest-person">
                <div className="groom-men">
                    <img src={ guest.photo } className="img-responsive" alt=""/>
                    <h3>{ guest.name }</h3>
                </div>
            </div>
        )
    }

    renderGuestList(guests: Guest[]) {
        return guests.map(this.renderGuest)
    }

    render() {
        return (
            <div id="qbootstrap-people" data-section="people">
                <div className="container">
                    <div className="row animate-box">
                        { this.renderGuestsBlockDescription(this.groomGuestsTitle) }
                    </div>
                    <div className="row">
                        { this.renderGuestList(this.groomGuests) }
                    </div>
                    <div className="row animate-box">
                        { this.renderGuestsBlockDescription(this.brideGuestsTitle) }
                    </div>
                    <div className="row">
                        { this.renderGuestList(this.brideGuests) }
                    </div>
                </div>
            </div>
        )
    }
}
