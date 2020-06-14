import { Component } from 'react';
import * as React from "react";
import {Header} from "./Header";

import "css/animate.css"
import "css/icomoon.css"
import "css/simple-line-icons.css"
import "css/owl.carousel.min.css"
import "css/owl.theme.default.min.css"
import "css/magnific-popup.css"
import "sass/bootstrap.scss"
import "sass/style.scss"

import {Home} from "./sections/Home";
import {Couple} from "./sections/Couple";
import {WeddingDay} from "./sections/WeddingDay";
import {GroomAndBride} from "./sections/GroomAndBride";
import {LoveStory} from "./sections/LoveStory";
import {Guests} from "./sections/Guests";
import {Ceremony} from "./sections/Ceremony";
import {ConfirmationForm} from "./sections/ConfirmationForm";
import {Gallery} from "./sections/Gallery";
import {Blog} from "./sections/Blog";
import {Footer} from "./Footer";
import {WeddingStyle} from "./sections/WeddingStyle";
import {WishList} from "./sections/WishList";

export class Bootstrap extends Component<{}> {
    render() {
        return [
            <Header key="header" />,
            <Home key="home" />,
            <Couple key="couple" />,
            <WeddingDay key="wedding_day" />,
            <Ceremony key="ceremony" />,
            <WeddingStyle key="wedding_style" />,
            <GroomAndBride key="groom_and_bride" />,
            <LoveStory key="love_story" />,
            <Guests key="guests" />,
            <WishList key="wish_list" />,
            <Gallery key="gallery" />,
            <Blog key="blog" />,
            <Footer key="footer" />,
        ]
    }
}
