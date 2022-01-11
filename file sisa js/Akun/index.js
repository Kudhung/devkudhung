import LayoutSlider from "../../component/Main-Layout-Slider"
import Link from 'next/link'

export async function getStaticProps(context) {
    const res = await fetch('http://localhost:3004/Slider?status=On');
    const dataSlider = await res.json();
    return { props: { dataSlider } }
}

const AkunSaya = ({ dataSlider }) => {
    return (
        <>
            <link rel="stylesheet" href="/css/Akun-Saya.css" media="screen" />
            <LayoutSlider
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
                <section className="u-clearfix u-section-1" id="sec-9238">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <h3 className="u-text u-text-default u-text-1">Akun Saya</h3>
                        <img className="u-border-11 u-border-grey-75 u-image u-image-circle u-image-1" alt="" data-image-width="642" data-image-height="642" src="/images/lalisa.jpg"></img>
                        <h4 className="u-text u-text-default u-text-2">riska_aulia</h4>
                        <div className="id-user">Id User : 09876553465</div>
                        <div className="u-container-style u-group u-group-1">
                            <div className="u-container-layout">
                                <p className="u-text u-text-default u-text-3">Email</p>
                                <h4 className="u-text u-text-default u-text-4">riskaaulion@gmail.com</h4>
                            </div>
                        </div>
                        <div className="u-container-style u-group u-group-2">
                            <div className="u-container-layout">
                                <p className="u-text u-text-default u-text-5">No.Hp</p>
                                <h4 className="u-text u-text-default-xl u-text-6">+62 812-3456-7899</h4>
                            </div>
                        </div>
                        <div className="u-border-3 u-border-grey-dark-1 u-expanded-width u-line u-line-horizontal u-line-1"></div>
                    </div>
                </section>
                <section className="u-clearfix u-section-2" id="sec-6460">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <h3 className="u-text u-text-default u-text-1">Pesanan Saya
                            <span style={{ fontWeight: "700;" }}></span>
                        </h3>
                        <Link href="/Akun/Sedang-Dikemas">
                            <span className="u-icon u-icon-circle u-text-black u-icon-1" style={{ cursor: "pointer" }}>
                                <i className="fas fa-box font-awesome"></i>
                            </span>
                        </Link>
                        <Link href="/Akun/Dibatalkan">
                            <span className="u-icon u-icon-circle u-icon-2" style={{ cursor: "pointer" }}>
                                <i className="fas fa-times font-awesome "></i>
                            </span>
                        </Link>
                        <Link href="/Akun/Selesai">
                            <span className="u-icon u-icon-circle u-text-black u-icon-3" style={{ cursor: "pointer" }}>
                                <i className="fas fa-check font-awesome "></i>
                            </span>
                        </Link>
                        <Link href="/Akun/Dikirim">
                            <span className="u-icon u-icon-circle u-text-black u-icon-4" style={{ cursor: "pointer" }}>
                                <i className="fas fa-truck font-awesome"></i>
                            </span>
                        </Link>
                        <Link href="/Akun/Belum-Dibayar">
                            <span className="u-icon u-icon-circle u-text-black u-icon-5" style={{ cursor: "pointer" }}>
                                <i className="fas fa-wallet font-awesome"></i>
                            </span>
                        </Link>
                        <p className="u-text u-text-default u-text-2">Belum Dibayar
                            <span style={{ fontWeight: "700;" }}></span>
                        </p>
                        <p className="u-text u-text-default u-text-3">Sedang Dikemas</p>
                        <p className="u-text u-text-default u-text-4">Dikirim</p>
                        <p className="u-text u-text-default u-text-5">Selesai</p>
                        <p className="u-text u-text-default u-text-6">Dibatalkan<span style={{ fontWeight: "700;" }}></span>
                        </p>
                    </div>
                </section>
            </LayoutSlider>
        </>
    )
}

export default AkunSaya