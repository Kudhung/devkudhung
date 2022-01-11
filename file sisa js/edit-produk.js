import LayoutAdmin from "../component/Main-Layout-Admin";

export default function FormProduk() {
    return (
        <>
        <link rel="stylesheet" href="/css/Edit-Produk.css" media="screen"></link>
        <LayoutAdmin/>
        <section className="u-align-center u-clearfix u-section-1" id="sec-c4fb">
        <div className="u-clearfix u-sheet u-sheet-1">
        <h4 className="u-text u-text-default u-text-1">FORM PRODUK</h4>
        <div className="u-border-1 u-border-black u-expanded-width u-form u-radius-9 u-form-1">
          <form action="#" method="POST" className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form" style={{padding: "15px"}} source="custom">
            <div className="u-form-group u-form-group-1">
              <label for="text-5d67" className="u-label">Nama Produk</label>
              <input type="text" placeholder="Masukkan Nama Produk" id="text-5d67" name="text" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-1"/>
            </div>
            <div className="u-form-group u-form-group-2">
              <label for="text-80fd" className="u-label">Harga</label>
              <input type="text" placeholder="Masukkan Harga" id="text-80fd" name="text-1" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-2"/>
            </div>
            <div className="u-form-send-message u-form-send-success">Thank you! Your message has been sent.</div>
            <div className="u-form-send-error u-form-send-message">Unable to send your message. Please fix errors then try again.</div>
            <input type="hidden" value="" name="recaptchaResponse"/>
          </form>
        </div>
        {/* Button tambahan */}
        <a href="https://nicepage.com/c/gallery-html-templates" className="u-btn u-button-style u-btn-2">Batal</a>
        <a href="https://nicepage.com/c/tabs-website-templates" className="u-btn u-button-style u-btn-3">Simpan</a>
      </div>
    </section>
    </>
    )
}