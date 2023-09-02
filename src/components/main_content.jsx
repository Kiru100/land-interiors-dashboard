import "./main_content.scss";
import "./what_we_do.scss";

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
                <div className="steps_content"> 
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
            <div className="what_we_do">
                <h2>What we do?</h2>
                <div className="what_we_do_cards">
                    <section className="modular_kitchen">
                        <span></span>
                        <p>Modular Kitchen</p>
                    </section>
                    <section className="bedroom">
                        <span></span>
                        <p>Bedroom</p>
                    </section>
                    <section className="living_room">
                        <span></span>
                        <p>Living room</p>
                    </section>
                    <section className="home_office">
                        <span></span>
                        <p>Home office</p>
                    </section>
                </div>
                <p className="what_we_do_paragraph">In the modular kitchen, the focus is on efficient design with durable materials and ample storage solutions. The bedroom aims to create a cozy and relaxing atmosphere through soothing colors, comfortable bedding, and thoughtful lighting, often enhanced by personal decor touches. </p>
            </div>
        </div>
    )
}

export default MainContent;