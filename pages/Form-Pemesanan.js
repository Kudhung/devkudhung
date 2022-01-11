import LayoutSlider from "../component/Main-Layout-Slider";

export default function Home() {
  return (
    <>
    <link rel="stylesheet" href="/css/Form-Data-Penerima.css" media="screen"></link>
    <LayoutSlider>
<section className="u-clearfix u-section-1" id="sec-3e5f">
  <div className="u-clearfix u-sheet u-sheet-1">
    <h3 className="u-text u-text-default u-text-1">Data Penerima</h3>
    <div className="u-form u-form-1">
      <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="form" style={{padding: "10px"}}>
        <div className="u-form-group u-form-name">
          <label for="name-4793" className="u-form-control-hidden u-label"></label>
          <input type="text" placeholder="Masukkan nama penerima (Nama Lengkap)" id="name-4793" name="name" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-9 u-white" required=""/>
        </div>
        <div className="u-form-group u-form-phone u-form-group-2">
          <label for="phone-36c7" className="u-form-control-hidden u-label"></label>
          <input type="tel" pattern="\+?\d{0,3}[\s\(\-]?([0-9]{2,3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})" placeholder="Masukkan nomor telepon aktif" id="phone-36c7" name="phone" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-9 u-white" required=""/>
        </div>
        <div className="u-form-address u-form-group u-form-group-3">
          <label for="address-2dd0" className="u-form-control-hidden u-label"></label>
          <input type="text" placeholder="Masukkan alamat lengkap" id="address-2dd0" name="address" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-9 u-white" required=""/>
        </div>
        <div className="u-form-email u-form-group">
          <label for="email-4793" className="u-form-control-hidden u-label"></label>
          <input type="email" placeholder="Masukkan alamat email aktif" id="email-4793" name="email" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-9 u-white" required=""/>
        </div>
        <div className="u-align-center u-form-group u-form-submit">
          <a href="#" className="u-btn u-btn-round u-btn-submit u-button-style u-radius-10">Pesan Sekarang</a>
          <input type="submit" value="submit" className="u-form-control-hidden"/>
        </div>
        <div className="u-form-send-message u-form-send-success"> Terima kasih! Data anda sukses terkirim. </div>
        <div className="u-form-send-error u-form-send-message"> Gagal mengirim data. Coba Lagi. </div>
        <input type="hidden" value="" name="recaptchaResponse"/>
      </form>
    </div>
  </div>
</section>
</LayoutSlider>
</>
  )
}