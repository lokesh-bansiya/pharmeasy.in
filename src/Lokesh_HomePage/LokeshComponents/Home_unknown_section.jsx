import "./Home_Styles/Home_unknown_section.css";


const Home_unknown_section = () => {
    return (
        <div className="home_unknown_section-container">
            <img src="https://assets.pharmeasy.in/apothecary/images/downloadBanner.webp?dim=1440x0&q=100" alt="" />
            <div>
                <h2>Simplifying</h2>
                <h2>Healthcare</h2>
                <h2>Impacting Lives</h2>
                <p>Download the App for Free</p>
                <div className="home_unknown_section-Box">
                    <div>
                        <img src="https://assets.pharmeasy.in/apothecary/images/googlePlay.svg?dim=360x0" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.pharmeasy.in/apothecary/images/appStore.svg?dim=360x0" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export {Home_unknown_section};