import { Component } from 'react';
import * as React from "react";
import parse from "html-react-parser";

type ActivityInfo = {
    backgroundImage: string,
    title: string,
    weekDay: string,
    date: string,
    startTime: string,
    finishTime: string,
    description: string,
    detailsTitle: string,
    details: string,
    detailsButtonTitle: string
}

type Activities = {
    [key in ActivityType]: ActivityInfo
}

enum ActivityType { FIRST_DAY, SECOND_DAY }

export class Ceremony extends Component<{}> {
    title = "Торжество"
    description = ""
    descriptionImage = "./images/flaticon/svg/005-two.svg"

    activities: Activities = {
        [ActivityType.FIRST_DAY]: {
            backgroundImage: "./images/photos/sv.jpg",
            title: "Церемония",
            weekDay: "Суббота",
            date: "15 августа 2020",
            startTime: "16:30",
            finishTime: "23:00",
            description: `
                В этот день примерно в 14:30 комфортабельный автобус начнет свой маршрут на юге города и,
                направляясь к северу, соберет наших долгожданных гостей. С маршрутом автобуса и
                временем остановок вы можете ознакомиться, кликнув на кнопку "Маршрут автобуса" ниже.
                В 16:30 вас будет ждать приятный welcome-фуршет, во время которого вы сможете познакомиться
                с другими гостями, пообщаться, перекусить и подготовиться к мероприятию. Далее
                по плану – регистрация, после которой начнется банкет. Он продлится
                приблизительно до 23:00, а после этого все желающие смогут продолжить празднование
                в нескольких коттеджах, где также смогут остаться на ночь (мест хватит на всех 🙂).
                Для тех, кто к этому моменту уже устанет и захочет тишины, у нас будет выделен
                один из коттежей, где будет тихо и спокойно. А если кто-то захочет домой, то мы
                без проблем вызовем Вам такси, которое доставит Вас до дома.
            `,
            detailsTitle: "Автобус",
            detailsButtonTitle: "Маршрут автобуса",
            details: `
                <p>Маршрут движения автобуса представлен на карте. Приблизительное время в пути от пл. Победы до места проведения – 2 часа.</p>
                <p>До даты свадьбы возможны корректировки в маршруте автобуса.</p>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad7fd7798c4fb9a1bea68ffcf0393659abc38c044d5ec4cd8ab08ca951ae9291a&amp;source=constructor" width="100%" height="580" frameborder="0" />
            `
        },
        [ActivityType.SECOND_DAY]: {
            backgroundImage: "./images/photos/2020-06-02-15.42.34.jpg",
            title: "Пикник",
            weekDay: "Воскресенье",
            date: "16 августа 2020",
            startTime: "10:00",
            finishTime: "16:00",
            description: `
                Этот день предполагается как более ламповый и уютный, без ведущего, диджея и прочих
                формальностей. Гостям будет предоставлена возможность хорошенько выспаться после
                эмоционально и физически загруженного дня. По мере пробуждения гостей мы с радостью
                угостим всех супчиком и шашлыком (обещаем, шашлык будет отменным, папа невесты
                знает в этом толк 😉). Возьмем с собой мяч и настолки, захватим Play Station с игрушкой
                JustDance, каждый найдет занятие по вкусу.
            `,
            detailsTitle: "Подробности о втором дне",
            detailsButtonTitle: null,
            details: ""
        }
    }

    renderActivity(activityType: ActivityType) {
        const activity = this.activities[activityType]
        let activityId: string

        switch (activityType) {
            case ActivityType.FIRST_DAY:
                activityId = "first_day";
                break;
            case ActivityType.SECOND_DAY:
                activityId = "second_day";
                break;
        }

        let detailsButton;

        if (activity.detailsButtonTitle != null) {
            detailsButton = (
                <p><a href={ `#activity-${activityType}` } className="btn btn-primary btn-sm popup-modal">{ activity.detailsButtonTitle }</a></p>
            )
        }

        return (
            <div className="wedding-events">
                <div className="ceremony-bg" style={{ backgroundImage: `url(${activity.backgroundImage})` }} />
                <div className="desc">
                    <h3>{ activity.title }</h3>
                    <div className="row">
                        <div className="col-md-2 col-md-push-5">
                            <div className="icon-tip">
                                <span className="icon"><i className="icon-heart-o" /></span>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-6 col-xs-6 col-md-pull-1">
                            <div className="date">
                                <i className="icon-calendar" />
                                <span>{ activity.weekDay }</span>
                                <span>{ activity.date }</span>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-6 col-xs-6 col-md-pull-1">
                            <div className="date">
                                <i className="icon-clock2" />
                                <span>{ activity.startTime }</span>
                                <span>{ activity.finishTime }</span>
                            </div>
                        </div>
                    </div>
                    <p>{ activity.description }</p>
                    { detailsButton }
                    <div id={ `activity-${activityType}` } className="mfp-hide white-popup-block">
                        <h3>{activity.detailsTitle}</h3>
                        <div className="popup-text">{ parse(activity.details) }</div>
                    </div>
                </div>
            </div>
        )
    }

    renderActivities() {
        return [
            <div className="col-md-6 text-center animate-box" key="first_day">
                { this.renderActivity(ActivityType.FIRST_DAY) }
            </div>,
            <div className="col-md-6 text-center animate-box" key="second_day">
                { this.renderActivity(ActivityType.SECOND_DAY) }
            </div>
        ]
    }

    renderActivitiesDescription() {
        return (
            <div className="col-md-8 col-md-offset-2">
                <div className="col-md-12 text-center section-heading svg-sm colored">
                    <img src={ this.descriptionImage } className="svg" alt="" />
                    <h2>{ this.title }</h2>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 subtext">
                            <h3>{ this.description }</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div id="qbootstrap-when-where" data-section="when-where">
                <div className="container">
                    <div className="row animate-box">
                        { this.renderActivitiesDescription() }
                    </div>
                    <div className="row row-bottom-padded-md">
                        { this.renderActivities() }
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div id="map" className="qbootstrap-map" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
