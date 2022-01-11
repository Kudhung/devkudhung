import Footer from "./Footer"
import NavbarUser from "./Navbar-User";

const LayoutDeskripsi = (props) => (
    <div className="u-body">
        < header className="u-align-center u-clearfix u-header u-header" id="sec-dce1" >
            <div className="u-clearfix u-sheet u-valign-middle-sm u-valign-middle-xs u-sheet-1">
                {/* <!-- Logo  --> */}
                <a href="Beranda.html" data-page-id="488405423" className="u-align-center u-image u-logo u-image-1"
                    data-image-width="500" data-image-height="500" title="Beranda">
                    <img src="/images/kudhung-removebg-preview.png" className="u-logo-image u-logo-image-1" />
                </a>
                {/* <!-- Slider  --> */}
                {/* <!-- Profile --> */}
                <span className="u-align-center-sm u-align-center-xs u-icon u-icon-circle u-icon-1" style={{ fontSize: "37px;" }}>
                    <i className="far fa-user-circle profile-respon-2"></i>
                </span>
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
            </div>
        </header >
        {props.children}
        <Footer />
    </div>
)

export default LayoutDeskripsi;