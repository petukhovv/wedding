import { Component } from 'react';
import * as React from "react";

interface MenuItems {
    [itemId: string]: [string, boolean]
}

export class Header extends Component<{}> {
    logoText = "Wedding"

    menuItems: MenuItems = {
        "home": ["Главная", true],
        "groom-bride": ["Жених и Невеста", false],
        "when-where": ["Где и когда", false],
        "story": ["Love Story", false],
        "people": ["Гости", false],
        "wish-list": ["Желания", false],
        "gallery": ["Моменты", false],
        "blog": ["Блог", false]
    }

    renderLogo() {
        return [
            <a href="#" key="icon" className="js-qbootstrap-nav-toggle qbootstrap-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>,
            <a key="logo" className="navbar-brand" href="/">{ this.logoText }</a>
        ]
    }

    renderMenuItem(itemId, itemParams) {
        const className = itemParams[1] ? "active" : "";
        return <li className={ className } key={ itemId }><a href="#" data-nav-section={ itemId }><span>{ itemParams[0] }</span></a></li>
    }

    renderMenu() {
        return (
            <ul className="nav navbar-nav navbar-right">
                { Object.keys(this.menuItems).map((itemId) => this.renderMenuItem(itemId, this.menuItems[itemId])) }
            </ul>
        )
    }

    render() {
        return (
            <header role="banner" id="qbootstrap-header">
                <div className="container">
                    <nav className="navbar navbar-default">
                        <div className="navbar-header">
                            { this.renderLogo() }
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            { this.renderMenu() }
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
