import { Component } from 'react';
import * as React from "react";
import parse from 'html-react-parser';
import $ from "jquery"

type Story = {
    image: string,
    title: string,
    date: string,
    description: string
}

type LoveStoryState = {
    renderingStory: number
}

export class LoveStory extends Component<{}, LoveStoryState> {
    state = {
        renderingStory: 1
    }

    title = "Love story"
    loveStoryIcon = "./images/flaticon/svg/003-luxury.svg"

    badgeHeight = 250
    storiesOffset = 60

    stories: Story[] = [
        {
            image: "./images/photos/volleyball.gif",
            title: "Первая встреча",
            date: "7 марта 2018",
            description: `
                На день первой встречи было два кандидата: 6-е и 7-е марта 2018, но мы
                решили считать им 7-е марта, т. к. та самая волейбольная тренировка
                закончилась в 01 ночи 7-го марта (а началась в 11 вечера), и именно
                после неё начались увлекательные поиски отснятого там видео с борбой за
                победу в матче и разговоры с их автором почти до утра 😄 И да, рядом –
                фрагмент того самого видео
                (<a class="popup-youtube" href="https://www.youtube.com/watch?v=xzRXnc16Vu8">а вот оно целиком</a>) 🏐
            `
        },
        {
            image: "./images/photos/love_story/IMG_0817.JPG",
            title: "Лисята",
            date: "14 марта 2018",
            description: `
                Примерно через неделю мы обменялись стикерами-лисёнками в ВК, и с этого
                момента стали называть друг друга лисятами 🦊. Кое-кто, правда, потом
                изменился до 🐰, но по сей день мы называем друг друга почти всегда именно так 🙂.<br />
                🦊 + 🐰
            `
        },
        {
            image: "./images/photos/love_story/IMG_6950.JPG",
            title: "Прогулки",
            date: "конец марта 2018",
            description: `
                В какой-то момент маршрут от м. Парк Победы до конца Московского проспекта стал примерно также часто преодолеваться,
                как дорога домой/в универ/на работу. Хотя нет, пожалуй, чаще 😁 На фото – кусочек Площади Победы 🌃
            `
        },
        {
            image: "./images/photos/love_story/IMG_5097.JPG",
            title: "«Евразия»",
            date: "апрель 2018",
            description: `
                Прогулки, конечно, хорошо, но холодно! ❄️ Тем более тот март в Петербурге выдался куда холоднее любого
                периода календарной зимы. Поэтому мы открыли для себя «Евразию». К тому же, мы оба были в восторге от
                чего бы то ни было сушеподобного. Сколько литров облепихово-липового чая было выпито и часов проведено
                там – даже представить сложно! А в некоторые дни «Евразия» закрывалась раньше, чем мы хотели бы из неё уйти (да, закрывается она в 05:00 😅)
            `
        },
        {
            image: "./images/photos/love_story/IMG_7098.JPG",
            title: "Парк, плед, природа",
            date: "май-июнь 2018",
            description: `
                Вот и подкрался май, а с ним и горсточка теплных дней. «Евразия», конечно, вариант отличный, без сомнения.
                Но в такие прекрасные дни нас не мог не соблазнить Пулковский парк 🌿, который был на одном из концов нашего
                привычного маршрута прогулок. Плед, вкусняхи и мяч – всё, что нужно в такое время!
            `
        },
        {
            image: "./images/photos/IMG_3279.JPG",
            title: "Палаточная эпоха",
            date: "июль-август 2018",
            description: `
                В один прекрасный день плед всё-таки подкачал. Враг был невероятно силён. Под натиском петербургского дождя
                промокший насквозь плед был невероятными усилями доставлен домой. Так и родилась идея обзавестись вдонепроницаемой
                палаткой. И в этот же день осуществилась 😁 Впереди будет много всего замечательного, включая пикник в
                Солнечном и у Ладожского озера. 🍗 🔥
            `
        },
        {
            image: "./images/photos/love_story/IMG_8837.JPG",
            title: "Квартирно-уютная эпоха",
            date: "сентябрь 2018 - настоящее время",
            description: `
                Вот уже настал сентябрь, палатка даже с морозоустойчивыми спальниками не справляется с петербургскими холодными днями.
                Поэтому настало время найти не зависимое от холода жилище! 🏠
            `
        },
        {
            image: "./images/photos/love_story/IMG_0852.JPG",
            title: "Wedding!",
            date: "август 2020",
            description: `И вот мы здесь! 💍`
        }
    ]

    runRenderingNextStory() {
        if (this.state.renderingStory < this.stories.length) {
            this.setState({
                renderingStory: this.state.renderingStory + 1
            })
        }
    }

    componentDidUpdate() {
        this.runRenderingNextStory();
    }

    componentDidMount() {
        this.runRenderingNextStory();
    }

    renderStory(story: Story, index: number) {
        const blockTypeClass = index % 2 != 0 ? "timeline-inverted" : ""
        const overlayClass = index % 2 != 0 ? "overlay-2" : ""
        const zIndex = this.stories.length - index

        let offsetFromPreviousStory: number = 0

        if (index != 0) {
            const $previousStory = $(`.timeline .animate-box:eq(${index - 1}) .timeline-panel`)
            const $beforePreviousStory = $(`.timeline .animate-box:eq(${index - 2}) .timeline-panel`)
            const previousStoryHeight = $previousStory.outerHeight()

            if (index > 1) {
                const previousStoryTopOffset = $previousStory.offset().top
                const beforePreviousStoryTopOffset = $beforePreviousStory.offset().top
                const beforePreviousStoryHeight = $beforePreviousStory.outerHeight()

                const isPreviousHigherThanBadgeOfBeforePrevious =
                    (beforePreviousStoryTopOffset + beforePreviousStoryHeight) - (previousStoryTopOffset + this.badgeHeight)
                const isPreviousHigherThanBeforePrevious =
                    (previousStoryTopOffset + previousStoryHeight) - (beforePreviousStoryTopOffset + beforePreviousStoryHeight)

                if (isPreviousHigherThanBadgeOfBeforePrevious > 0) {
                    if (isPreviousHigherThanBeforePrevious > 0) {
                        offsetFromPreviousStory = -isPreviousHigherThanBeforePrevious + this.storiesOffset
                    } else {
                        offsetFromPreviousStory = this.storiesOffset
                    }
                }
            } else {
                offsetFromPreviousStory = -previousStoryHeight + this.badgeHeight
            }
        }

        return (
            <li className={`${blockTypeClass} animate-box`} key={ `story-${index}` } style={{ marginTop: offsetFromPreviousStory, zIndex: zIndex }}>
                <div className="timeline-badge" style={{ backgroundImage: `url(${story.image})` }} />
                <div className="timeline-panel">
                    <div className={`overlay ${overlayClass}`} />
                    <div className="timeline-heading">
                        <h3 className="timeline-title">{ story.title }</h3>
                        <span className="date">{ story.date }</span>
                    </div>
                    <div className="timeline-body">
                        <p>{ parse(story.description) }</p>
                    </div>
                </div>
            </li>
        )
    }

    renderStoryList() {
        return (
            <ul className="timeline animate-box">
                { this.stories.slice(0, this.state.renderingStory).map(this.renderStory.bind(this)) }
            </ul>
        )
    }

    render() {
        return (
            <div id="qbootstrap-story" data-section="story">
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="col-md-12 text-center section-heading svg-sm-2">
                                <img src={ this.loveStoryIcon } className="svg" alt="" />
                                <h2>{ this.title }</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            { this.renderStoryList() }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
