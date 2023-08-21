import "./main_content.scss";

function MainContent(){
    return(
        <div className="main_content">
            <h2>Why LAND Interiors</h2>
            <div className="why_land_sections">
                <section>
                    <span className="calenday_icon"></span>
                    <p>50 days or we pay you rent</p>
                </section>
                <section>
                    <span className="home_icon"></span>
                    <p>1500+ happy customers</p>
                </section>
                <section>
                    <span className="certificate_icon"></span>
                    <p>300+ design experties</p>
                </section>
            </div>
            <div className="three_easy_steps">
                <h2>
                    <span>Make your dream interior in</span>
                    <span>3 easy steps</span>
                </h2>
                <section>
                    <h3>Explore</h3>
                    <p>Explore more than just modular design ideas with our experts.</p>
                </section>

                <section>
                    <h3>Design</h3>
                    <p>Complete the designs with painting, flooring and other decor solutions.</p>
                </section>

                <section>
                    <h3>Move-in</h3>
                    <p>Move in with ease, with our hassle-free civil work and installation services.</p>
                </section>

            </div>
        </div>
    )
}

export default MainContent;