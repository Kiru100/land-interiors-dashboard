import "./top_navigation.scss";

function TopNavigation(){
    return(
        <div className="top_navigation">

            <section className="logo_section">
                <span className="logo"></span>
                <section className="join_section">
                    <a href="/">Join as Design Expert</a> 
                    <a href="/">Partner with LAND Interiors</a> 
                </section>
            </section>
            <div className="links">
                <span></span>
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Studio</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default TopNavigation;