import LayoutInformasiPesanan from "../../../component/Main-Layout-Informasi Pesanan"
// import LayoutSlider from "../../../component/Main-Layout-Slider"

export async function getStaticProps(context) {
    const res = await fetch('http://localhost:3004/Slider?status=On');
    const dataSlider = await res.json();
    return { props: { dataSlider } }
}

const Uploadfoto = ({ dataSlider }) => {
    return (
        <>
            <link rel="stylesheet" href="/css/Upload-Bukti-Transfer.css" media="screen" />
            <LayoutInformasiPesanan
                childrenSlider=
                {dataSlider.map((ds) => (
                    <div key={ds.id} className="u-carousel-item u-effect-fade u-gallery-item u-carousel-item-2">
                        <div className="u-back-slide" data-image-width="500" data-image-height="500">
                            <img className="u-back-image u-expanded" src={ds.gambar} />
                        </div>
                        <div className="u-align-center u-over-slide u-shading u-valign-bottom u-over-slide-2">
                            <h3 className="u-gallery-heading">{ds.keterangan}</h3>
                            <p className="u-gallery-text">{ds.periode}</p>
                        </div>
                    </div>
                )
                )}

                childrenCircle=
                {dataSlider.map((circle) => (
                    <li key={circle.id} data-u-target="#carousel-80dd" data-u-slide-to="1" className="u-grey-70 u-shape-circle"
                        style={{ width: "10px;", height: "10px;" }}></li>
                )
                )}
            >

                <section className="u-clearfix u-section-1" id="sec-d82d">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <div className="u-border-none u-btn u-button-style u-none u-text-active-palette-2-base u-text-hover-grey-50 u-btn-1" onClick={() => (history.back(-1))}><span className="u-file-icon u-icon"><i className="fas fa-chevron-left"></i></span>&nbsp;Kembali
                        </div>
                        <div className="u-container-style u-group u-opacity u-opacity-60 u-shape-rectangle u-white u-group-1">
                            <div className="u-container-layout u-container-layout-1">
                                <img className="u-align-center u-image u-image-default gambar-upload" src="/images/BCA.jpg" alt="" />
                                <a href="https://nicepage.studio" className="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-6 u-btn-2">Kirim Bukti Transfer</a>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutInformasiPesanan>
        </>
    )
}

export default Uploadfoto