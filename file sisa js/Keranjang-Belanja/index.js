import LayoutKeranjang from "../../component/Main-Layout-Keranjang"

export async function getStaticProps(context) {
    const res = await fetch('http://localhost:3004/Slider?status=On');
    const dataSlider = await res.json();
    return { props: { dataSlider } }
}

const Keranjang = ({ dataSlider }) => {
    return (
        <>
            <link rel="stylesheet" href="/css/Keranjang.css" media="screen" />
            <LayoutKeranjang
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
                <section className="u-align-center u-clearfix u-section-1" id="sec-6ec8">
                    <div className="u-align-left u-clearfix u-sheet u-sheet-1">
                        <h3 className="u-text u-text-default u-text-1">Keranjang</h3>
                        <div className="u-cart u-expanded-width u-cart-1">
                            <div className="u-cart-products-table u-table u-table-responsive">
                        <div className="u-border-none u-btn u-button-style u-none u-text-active-palette-2-base u-text-hover-grey-50 u-btn-1" onClick={() => (history.back(-1))}><span className="u-file-icon u-icon"><i className="fas fa-chevron-left"></i></span>&nbsp;Kembali
                        </div>
                                <table className="u-table-entity">
                                    <colgroup>
                                        <col width="65%" />
                                        <col width="10.9%" />
                                        <col width="12.4%" />
                                        <col width="21.7%" />
                                    </colgroup>
                                    <thead className="u-grey-10 u-table-header u-table-header-1">
                                        <tr style={{ height: "35px;" }}>
                                            <th className="u-border-1 u-border-grey-15 u-table-cell">Product </th>
                                            <th className="u-border-1 u-border-grey-15 u-table-cell">Price </th>
                                            <th className="u-border-1 u-border-grey-15 u-table-cell">Quantity </th>
                                            <th className="u-border-1 u-border-grey-15 u-table-cell">Subtotal </th>
                                        </tr>
                                    </thead>
                                    <tbody className="u-align-left u-table-alt-grey-5 u-table-body">
                                        <tr style={{ height: "121px;" }}>
                                            <td className="u-border-1 u-border-grey-15 u-table-cell"><span className="u-cart-remove-item u-icon u-text-grey-40 u-icon-1">
                                                <i className="far fa-times-circle button-cancel"></i></span>
                                                <img className="u-cart-product-image u-image u-image-round u-product-control u-radius-17 u-image-1" src="/images/1.jpeg" />
                                                <h2 className="u-cart-product-title u-product-control u-text u-text-2">
                                                    <a className="u-product-title-link" href="#">Product 1 Title</a>
                                                </h2>
                                            </td>
                                            <td className="u-border-1 u-border-grey-15 u-table-cell">
                                                <div className="u-cart-product-price u-product-control u-product-price">
                                                    <div className="u-price-wrapper">
                                                        <div className="u-hide-price u-old-price"></div>
                                                        <div className="u-price" style={{ fontWeight: "700", fontSize: "0.875rem;" }}>$17.00</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="u-border-1 u-border-grey-15 u-table-cell">
                                                <div className="u-cart-product-quantity u-product-control u-product-quantity u-product-quantity-1">
                                                    <div className="u-hidden u-quantity-label"> Quantity </div>
                                                    <div className="u-border-1 u-border-grey-25 u-quantity-input u-radius-5">

                                                        {/* <div className="pro-qty" style={{ width: "155px" }}> */}
                                                        <i className="fas fa-minus button-minus"></i>
                                                        <input className="u-input input-qty" type="text" defaultValue="1" pattern="[0-9]+" />
                                                        <i className="fas fa-plus button-minus"></i>
                                                        {/* </div> */}
                                                        {/* <a className="button-qty-minus">
                                                            <i class="fas fa-minus"></i>
                                                        </a>
                                                        <input className="u-input" type="text" defaultValue="1" pattern="[0-9]+" />
                                                        <a className="">
                                                            <i class="fas fa-plus"></i>
                                                        </a> */}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="u-border-1 u-border-grey-15 u-table-cell">
                                                <div className="u-cart-product-subtotal u-product-control u-product-price">
                                                    <div className="u-price-wrapper">
                                                        <div className="u-hide-price u-old-price"></div>
                                                        <div className="u-price" style={{ fontWeight: "400" }}>$17.00</div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                            <div className="u-cart-button-container">
                                <a href="#" className="u-active-none u-btn u-button-style u-cart-continue-shopping u-hover-none u-none u-text-body-color u-btn-1"><span className="u-icon">
                                    {/* SVG11 */}
                                    <img /></span>&nbsp;Continue Shopping
                                </a>
                                <a href="#" className="u-btn u-btn-round u-button-style u-cart-update u-grey-5 u-radius-50 u-btn-2">Update Cart</a>
                            </div>
                            <div className="u-cart-blocks-container">
                                <div className="u-cart-block u-indent-30">
                                    <div className="u-cart-block-container u-clearfix">
                                        {/* Tempat voucher */}
                                    </div>
                                </div>
                                <div className="u-cart-block u-cart-totals-block u-indent-30">
                                    <div className="u-cart-block-container u-clearfix">
                                        <h5 className="u-cart-block-header u-text">Cart Totals</h5>
                                        <div className="u-align-right u-cart-block-content u-text">
                                            <div className="u-cart-totals-table u-table u-table-responsive">
                                                <table className="u-table-entity">
                                                    <colgroup>
                                                        <col width="50%" />
                                                        <col width="50%" />
                                                    </colgroup>
                                                    <tbody className="u-align-right u-grey-5 u-table-body u-table-body-2">
                                                        <tr style={{ height: "46px;" }}>
                                                            <td className="u-align-left u-border-1 u-border-grey-15 u-first-column u-table-cell u-table-cell-17">Subtotal</td>
                                                            <td className="u-border-1 u-border-grey-15 u-table-cell">$281.00</td>
                                                        </tr>
                                                        <tr style={{ height: "46px;" }}>
                                                            <td className="u-align-left u-border-1 u-border-grey-15 u-first-column u-table-cell u-table-cell-19">Total</td>
                                                            <td className="u-border-1 u-border-grey-15 u-table-cell u-table-cell-20">$281.00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <a href="#" className="u-btn u-btn-round u-button-style u-cart-checkout-btn u-radius-50 u-btn-4">Proceed to Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutKeranjang>
        </>
    )
}
export default Keranjang