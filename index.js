// React Template

// ================================================ JSX ==========================================================

function Footer(props) {
    return <div className="footer">
        <Logo />
        <Title text="WE ARE SOCIAL" />
        <Line />
        <Social />
        <Text />
    </div>;
}

function Logo() {
    return <div className="footer__logo-block">
        <img src="./img/logo.png" className="footer__logo" />
    </div>
}
function Title(props) {
    return <h1 className="footer__title">{props.text}</h1>
}
function Line() {
    return <div className="footer__line"></div>
}
function Social() {
    return <div className="footer__social-block">
        <img src="./img/fb.png" className="footer__social"></img>
        <img src="./img/tw.png" className="footer__social"></img>
        <img src="./img/g.png" className="footer__social"></img>
        <img src="./img/ball.png" className="footer__social"></img>
    </div>
}
function Text(props) {
    return <p className="footer__text">(c) 2014 - <span className="blue">Lorem</span> ipsum sample text random</p>
}
// Маємо скласти все в купу і можна виводити в HTML
let page = <Footer />

// ================================================ Render ==========================================================

ReactDOM.render(page, document.getElementById("root"));
