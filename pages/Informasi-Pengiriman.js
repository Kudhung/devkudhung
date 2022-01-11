import LayoutSlider from "../component/Main-Layout-Slider"

const InfoPengiriman = () => {
    return (
        <>
        <link rel="stylesheet" href="/css/Informasi-Pengiriman.css" media="screen" />
            <LayoutSlider>
                <section className="u-clearfix u-section-1" id="sec-966d">
                    <div className="u-clearfix u-sheet u-valign-top u-sheet-1">
                        <h3 className="u-text u-text-default u-text-1">Informasi Pengiriman<span style={{fontWeight: 700}}></span>
                        </h3>
                        <p className="u-text u-text-2"> 1. Paket akan dikirimkan pada hari yang sama apabila transfer sebelum jam 14.00
                            wib.&nbsp;<br />
                            <br />2. Apabila transfer setelah jam 14.00 wib, maka paket akan dikirimkan pada hari berikutnya.&nbsp;<br />
                            <br />3. KHUSUS saat launching produk baru, batas transfer maksimal jam 16.00 wib.&nbsp;<br />
                            <br />4. Paket dikirim menggunakan ekspedisi J&amp;T Express (diluar Kabupaten Banyuwangi), dan Kurir Pribadi
                            KUDHUNG (khusus daerah Kabupaten Banyuwangi).&nbsp;<br />
                            <br />5. Perubahan status order dari Pesanan Diproses menjadi Sedang Dikirim akan otomatis berubah setelah diinput
                            pihak admin KUDHUNG.&nbsp;<br />
                            <br />6. Nomor Resi akan dikirimkan otomatis via SMS.
                        </p>
                    </div>
                </section>
            </LayoutSlider>
        </>
    )
}

export default InfoPengiriman