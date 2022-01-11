import HeaderAdmin from "./Header-Admin"

const LayoutAdmin = (props) => (
    <>
        <link rel="stylesheet" href="/css/Admin.css" media="screen" />
        <div className="u-body">
            < header className="u-align-center u-clearfix u-header u-header" id="sec-dce1" >
                <div className="u-clearfix u-sheet u-sheet-1">
                    <a href="Beranda.html" data-page-id="488405423" className="u-align-center u-image u-logo u-image-1 shadow-header"
                        data-image-width="500" data-image-height="500" title="Beranda" style={{ marginTop: "3%" }}>
                        <img src="/images/kudhung-removebg-preview.png" className="u-logo-image u-logo-image-1" />
                    </a>
                </div>
            </header >
            {/* Haeder  */}
            {props.children}
        </div>
    </>
)


export default LayoutAdmin