import { Component } from 'react';
import * as React from "react";

import {declinationOfNumber, daysDeclination, hoursDeclination, minutesDeclination, secondsDeclination} from "../../utils/utils"

type WeddingDayState = {
    remainingTime: number
}

export class WeddingDay extends Component<{}, WeddingDayState> {
    weddingExactTime = new Date("Aug 15, 2020 16:30:00").getTime();
    updateRemainingTimeInterval = 1000; // ms

    state = {
        remainingTime: this.weddingExactTime - new Date().getTime()
    }

    title = "День свадьбы"
    weddingDate = "15 августа 2020"
    weddingWeekDay = "Суббота"

    ornamentIconPath = "./images/flaticon/svg/006-flower-bell-outline-design-variant-with-vines-and-leaves.svg"
    backgroundImagePath = "./images/photos/wedding_day.jpg"

    constructor(props) {
        super(props)
        this.runRemainingTimeTimer()
    }

    updateRemainingTime() {
        this.setState({
            remainingTime: this.weddingExactTime - new Date().getTime()
        })
    }

    runRemainingTimeTimer() {
        setInterval(this.updateRemainingTime.bind(this), this.updateRemainingTimeInterval)
    }

    renderWeddingInfo() {
        return (
            <div className="col-md-12 section-heading text-center svg-sm colored">
                <img src={ this.ornamentIconPath } className="svg" alt="" />
                <h2 className="">{ this.title }</h2>
                <span className="datewed">{ this.weddingDate }<br /></span>
                <span className="datewed">{ this.weddingWeekDay }</span>
            </div>
        )
    }

    renderRemainingTime() {
        const remainingTime = this.state.remainingTime
        const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        return (
            <div className="col-md-10 col-md-offset-1 text-center">
                <p className="countdown">
                    <span id="days" className="item">
                        <span>{ remainingDays }</span>
                        <small>{declinationOfNumber(remainingDays, daysDeclination)}</small>
                    </span>
                    <span id="hours" className="item">
                        <span>{ remainingHours }</span>
                        <small>{declinationOfNumber(remainingHours, hoursDeclination)}</small>
                    </span>
                    <span id="minutes" className="item">
                        <span>{ remainingMinutes }</span>
                        <small>{declinationOfNumber(remainingMinutes, minutesDeclination)}</small>
                    </span>
                    <span id="seconds" className="item">
                        <span>{ remainingSeconds }</span>
                        <small>{declinationOfNumber(remainingSeconds, secondsDeclination)}</small>
                    </span>
                </p>
            </div>
        )
    }

    render() {
        return (
            <div id="qbootstrap-countdown" style={{ backgroundImage: `url(${this.backgroundImagePath})` }} data-section="wedding-day">
                <div className="overlay" />
                <div className="display-over">
                    <div className="container">
                        <div className="row animate-box">
                            { this.renderWeddingInfo() }
                        </div>
                        <div className="row animate-box">
                            { this.renderRemainingTime() }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
