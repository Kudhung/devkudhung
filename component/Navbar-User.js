import Link from 'next/link'
const NavbarUser = () => (
    <nav className="u-align-left u-menu u-menu-dropdown u-offcanvas u-menu-1" data-responsive-from="MD"
        data-position="Navbar">
        <div className="menu-collapse u-custom-font"
            style={{ fontSize: "1rem", letterSpacing: "0px", fontFamily: "Lato", fontWeight: "900" }}>
            <a className="u-button-style u-custom-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base">
                <i className="fas fa-bars hamburger-respon" style={{cursor:"pointer"}}> </i>
            </a>
        </div>
        <div className="u-custom-menu u-nav-container" style={{ marginTop: "-100px" }}>
            <ul className="u-custom-font u-nav u-unstyled u-nav-1 nav-respon">
                <li className="u-nav-item"><a
                    className="u-button-style u-custom-color-1 u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base li-respon-2"
                    href="/" style={{ padding: "16px 99px" }}><i className="fas fa-home li-respon-2" style={{ marginRight: "5px" }}></i>Beranda</a>
                </li>
                <li className="u-nav-item"><a
                    className="u-button-style u-custom-color-1 u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base i-respon-2"
                    href="/Sale" style={{ padding: "16px 99px" }}><i className="fas fa-tags li-respon-2" style={{ marginRight: "5px" }}></i>Sale</a>
                </li>
                <li className="u-nav-item"><a
                    className="u-button-style u-custom-color-1 u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base "
                    href="/Bundling" style={{ padding: "16px 99px" }}><i className="fas fa-box-open li-respon-2" style={{ marginRight: "5px" }}></i>Bundling</a>
                </li>
                <li className="u-nav-item"><a
                    className="u-button-style u-custom-color-1 u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base li-respon-2"
                    href="/Tentang-Kami" style={{ padding: "16px 99px" }}><i className="fas fa-info-circle li-respon-2" style={{ marginRight: "5px" }}></i>Tentang Kami</a>
                </li>
            </ul>
        </div>

        {/* Header Sidebar */}
        <div className="u-custom-menu u-nav-container-collapse">
            <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                <div className="u-inner-container-layout u-sidenav-overflow">
                    <div className="u-menu-close"><i className="fas fa-times" style={{ fontSize: "35px", cursor: "pointer" }}></i></div>
                    <ul className=" u-nav u-popupmenu-items u-unstyled u-nav-2">
                        <li className="u-nav-item">
                            <a className="u-button-style u-nav-link" href="/"
                                style={{ padding: "16px 99px" }}><i className="fas fa-home" style={{ marginRight: "5px" }}></i>Beranda</a>
                        </li>
                        <li className="u-nav-item">
                            <Link href="/Sale">
                                <a className="u-button-style u-nav-link"
                                    style={{ padding: "16px 99px" }}><i className="fas fa-tags" style={{ marginRight: "5px" }}></i>Sale</a>
                            </Link>
                        </li>
                        <li className="u-nav-item"><a className="u-button-style u-nav-link" href="/Bundling"
                            style={{ padding: "16px 99px" }}><i className="fas fa-box-open" style={{ marginRight: "5px" }}></i>Bundling</a>
                        </li>
                        <li className="u-nav-item"><a className="u-button-style u-nav-link" href="/Tentang-Kami"
                            style={{ padding: "16px 99px" }}><i className="fas fa-info-circle" style={{ marginRight: "5px" }}></i>Tentang Kami</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
        </div >
    </nav >
)

export default NavbarUser