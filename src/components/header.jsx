import "./header.scss";

function Header(){
    return(
        <div className="header">
            <div className="home_interior_picture"></div>
            <div className="card_container">
                <p>Get personalized home interiors</p>
                <p>in just 50 days</p>
                <input type="button" value="SPEAK WITH ONLINE CONSULTANT" />
            </div>
        </div>
    )
}

export default Header;