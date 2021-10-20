import React from 'react';
import { AppHeader } from './AppHeader';

export class AppHero extends React.Component {
    render() {
        return (
            <section className="app-hero flex col">
                <AppHeader />
                <div className="hero-content flex">
                    <div className="left-content flex">
                        <p>Find the best <span className="talent-word">talent</span></p>
                          
                    </div>
                    <div className="right-content flex">
                        <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
                    </div>
                </div>

            </section>
        )
    }
}