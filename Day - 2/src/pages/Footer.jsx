import "../assets/css/Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="widget1">
                            <div className="logo">
                                <img src="https://i.ibb.co/vLDyPtM/ak-logo-yellow.png" className="img-fluid" alt="" />
                            </div>
                            <p>
                                In eu libero ligula. Fusce eget metus lorem, ac viverra
                                leo. Nullam convallis, arcu vel pellentesque sodales,
                                nisi est varius diam, ac ultrices sem ante quis sem.
                                Proin ultricies volutpat sapien.
                            </p>
                            <div className="socialLinks">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-google-plus-g"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="widget2">
                            <h5>
                                Latest News
                            </h5>
                            <div className="media">
                                <img className="img-fluid" src="https://i.ibb.co/CKNmhMX/blog1.jpg" alt="" />
                                <div className="media-body d-flex align-self-center">
                                    <div className="content">
                                        <a href="#">
                                            <p>
                                                Did son unreserved themselves indulgence its
                                            </p>
                                        </a>
                                        <span>
                                            Aug 17, 2019
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="media">
                                <img className="img-fluid" src="https://i.ibb.co/m5yGbdR/blog2.jpg" alt="" />
                                <div className="media-body d-flex align-self-center">
                                    <div className="content">
                                        <a href="#">
                                            <p>
                                                Rapturous am eagerness it as resolving household
                                            </p>
                                        </a>
                                        <span>
                                            Aug 17, 2019
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="widget3">
                            <h5>
                                Quick Links
                            </h5>
                            <ul>
                                <li>
                                    <a href="#">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        about
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        contact
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        privacy
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        skills
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        career
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="widget4">
                            <h5>
                                Other Links
                            </h5>
                            <ul>
                                <li>
                                    <a href="#">
                                        themeforest
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        graphicriver
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        codecanyon
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        videohive
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        redpen
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        codepen
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyRightArea">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p>&copy; Copyright All rights reserved 2019.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
