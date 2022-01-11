import Footer from "./Footer"
import NavbarUser from "./Navbar-User";
import Link from 'next/link'

const LayoutKeranjang = (props) => (
    <div className="u-body">
        < header className="u-align-center u-clearfix u-header u-header" id="sec-dce1" >
            <div className="u-clearfix u-sheet u-valign-middle-sm u-valign-middle-xs u-sheet-1">
                {/* <!-- Logo  --> */}
                <a href="Beranda.html" data-page-id="488405423" className="u-align-center u-image u-logo u-image-1"
                    data-image-width="500" data-image-height="500" title="Beranda">
                    <img src="/images/kudhung-removebg-preview.png" className="u-logo-image u-logo-image-1" />
                </a>
                {/* <!-- Search  --> */}
                {/* <!-- Slider  --> */}
                {/* <!-- Profile --> */}
                <Link href="/Akun"><span className="u-align-center-sm u-align-center-xs u-icon u-icon-circle u-icon-1" style={{ fontSize: "37px", cursor: "pointer" }}>
                    <i className="far fa-user-circle profile-respon-2"></i>
                </span></Link>
                {/* <!--Shopping_Cart--> */}
                <a className="u-align-center-sm u-align-center-xs u-shopping-cart u-shopping-cart-1" href="#" >
                    <span className="u-icon u-shopping-cart-icon">
                        <span className="u-align-center-sm u-align-center-xs u-icon u-icon-circle "
                            style={{ fontSize: "33px;", marginTop: "2px;" }}>
                            <i className="fas fa-cart-arrow-down"></i>
                        </span>
                        <span className="u-icon-circle u-palette-1-base u-shopping-cart-count" style={{ fontSize: "0.75rem;" }}>
                            {/* <!--Shopping_Cart_Count--> */}2
                        </span>
                    </span>
                </a>
                <div
                    className="u-carousel u-expanded-width u-gallery u-gallery-slider u-layout-carousel u-lightbox u-no-transition u-show-text-on-hover u-gallery-1"
                    data-interval="5000" data-u-ride="carousel" id="carousel-80dd" >
                    {/* <!-- Indicator Slide  --> */}
                    <ol className="u-absolute-hcenter u-carousel-indicators u-carousel-indicators-1">
                        <li data-u-target="#carousel-80dd" data-u-slide-to="0" className="u-active u-grey-70 u-shape-circle"
                            style={{ width: "10px;", height: "10px;" }}></li>
                        {props.childrenCircle}
                    </ol>
                    <div className="u-carousel-inner u-gallery-inner" role="listbox">
                        <div className="u-active u-carousel-item u-effect-fade u-gallery-item u-carousel-item-1">
                            <div className="u-back-slide" data-image-width="500" data-image-height="500">
                                <img className="u-back-image u-expanded" src="/images/kudhung.jpeg" />
                            </div>
                            <div className="u-align-center u-over-slide u-shading u-valign-bottom u-over-slide-1">
                                <h3 className="u-gallery-heading">Sample Title</h3>
                                <p className="u-gallery-text">Sample Text</p>
                            </div>
                        </div>
                        {props.childrenSlider}
                        <a className="u-absolute-vcenter u-carousel-control u-carousel-control-prev u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-carousel-control-1"
                            href="#carousel-80dd" role="button" data-u-slide="prev">
                            <span aria-hidden="true">
                                <i className="fas fa-chevron-left" style={{ fontSize: "25px;", marginTop: "-2px;", marginLeft: "-3px;" }}></i>
                            </span>
                        </a>
                        <a className="u-absolute-vcenter u-carousel-control u-carousel-control-next u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-carousel-control-2"
                            href="#carousel-80dd" role="button" data-u-slide="next">
                            <span aria-hidden="true">
                                <i className="fas fa-chevron-right" style={{ fontSize: "25px;", marginTop: "-2px;", marginRight: "-3px;" }}></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            {/* Navbar */}
        </header >
        {props.children}
        <Footer />
    </div>
)

export default LayoutKeranjang;