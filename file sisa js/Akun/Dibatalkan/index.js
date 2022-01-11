import LayoutInformasiPesanan from "../../../component/Main-Layout-Informasi Pesanan"

export async function getStaticProps(context) {
    const res = await fetch('http://localhost:3004/Slider?status=On');
    const dataSlider = await res.json();
    return { props: { dataSlider } }
}

const Dibatalkan = ({ dataSlider }) => {
    return (
        <>
            <link rel="stylesheet" href="/css/Dibatalkan.css" media="screen" />
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
                <section className="u-clearfix u-section-1" id="sec-bb22">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <div className="u-border-none u-btn u-button-style u-none u-text-active-palette-2-base u-text-hover-grey-50 u-btn-1" onClick={() => (history.back(-1))}><span className="u-file-icon u-icon"><i className="fas fa-chevron-left"></i></span>&nbsp;Kembali
                        </div>

                        <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-2">
                            <div className="u-layout">
                                <div className="u-layout-row">
                                    <div className="u-container-style u-layout-cell u-opacity u-opacity-60 u-shape-rectangle u-size-14-xl u-size-15-lg u-size-19-md u-size-19-sm u-size-19-xs u-white u-layout-cell-6">
                                        <div className="u-border-1 u-border-grey-75 u-container-layout u-valign-middle u-container-layout-11">
                                            <img className="u-image u-image-round u-radius-10 u-image-1" src="/images/1.jpeg" alt="" data-image-width="1280" data-image-height="853" />
                                        </div>
                                    </div>
                                    <div className="u-container-style u-layout-cell u-opacity u-opacity-60 u-size-41-md u-size-41-sm u-size-41-xs u-size-45-lg u-size-46-xl u-white u-layout-cell-7">
                                        <div className="u-border-1 u-border-grey-75 u-container-layout u-container-layout-12">
                                            <h4 className="u-text u-text-default u-text-6">Product 1 Title</h4>
                                            <p className="u-text u-text-default u-text-7">$92.0</p>
                                            <p className="u-text u-text-default u-text-8">x 1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-3">
                            <div className="u-gutter-0 u-layout">
                                <div className="u-layout-row">
                                    <div className="u-container-style u-layout-cell u-opacity u-opacity-60 u-size-60 u-white u-layout-cell-8">
                                        <div className="u-border-1 u-border-grey-75 u-container-layout u-container-layout-13">
                                            <h1 className="u-text u-text-default u-title u-text-9">Total Pembayaran :</h1>
                                            <h1 className="u-text u-text-default u-title u-text-10">$92.0</h1>
                                            <p className="u-small-text u-text u-text-default u-text-variant u-text-11">Pesanan dibatalkan
                                                {/* <span className="u-text-palette-2-base">12-12-2022</span> */}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutInformasiPesanan>
        </>
    )
}

export default Dibatalkan