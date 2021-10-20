import React from 'react';
import personSvg from '../assets/img/icon-person.svg'
import chartSvg from '../assets/img/icon-chart.svg'
import cogSvg from '../assets/img/icon-cog.svg'
export class AppMain extends React.Component {
    render() {
        return (
            <section className="app-main flex">
                <div className="left-content">
                    <p>
                        Build & manage distributed teams like no one else.
                    </p>
                </div>
                <div className="right-content flex col">
                    <div className="title-preview flex">
                        <img className="icon" src={personSvg} />
                        <div className="text-tile flex col">
                            <span className="pink-title">Experienced Individu</span>
                            <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                        </div>
                    </div>
                    <div className="title-preview flex">
                        <img className="icon" src={cogSvg} />
                        <div className="text-tile flex col">
                            <span className="pink-title">Easy to Implement</span>
                            <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                        </div>
                    </div>
                    <div className="title-preview flex">
                        <img className="icon" src={chartSvg} />
                        <div className="text-tile flex col">
                            <span className="pink-title">Enhanced Productivit</span>
                            <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}