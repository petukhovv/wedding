import { Component } from 'react';
import * as React from "react";
import parse from "html-react-parser";
import ScrollUpButton from "react-scroll-up-button";

export class Footer extends Component<{}> {
    title = "&copy; 2020. Anna & Victor's wedding."

    renderCopyrights() {
        return (
            <div className="col-md-12">
                <p className="copyright text-center">
                    { parse(this.title) }
                </p>
                <p className="copyright text-center">
                    All Rights Reserved. Images by <a href="http://unsplash.com/" target="_blank">Unsplash</a> & template by <a href="http://qbootstrap.com/" target="_blank">QBootstrap.com</a>
                </p>
            </div>
        )
    }

    render() {
        return (
            <footer id="footer" role="contentinfo">
                <div className="container">
                    <div className="row row-bottom-padded-sm">
                        { this.renderCopyrights() }
                    </div>
                </div>
                <ScrollUpButton />
            </footer>
        )
    }
}
