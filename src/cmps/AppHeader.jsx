import { Component } from "react";

export class AppHeader extends Component {
    render() {
        return (
            <section className="app-header flex space-between">
                <nav className="left-nav flex align-center ">
                    <h1 className="logo">myteam</h1>
                    <span>home</span>
                    <span>about</span>
                </nav>
                <nav className="right-nav flex align-center ">
                    <button className="contact-btn">contuct us</button>
                </nav>
            </section>
        )
    }
}