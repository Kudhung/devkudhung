
const LoginSignup = () => {

  return (
    <>
      <link rel="stylesheet" href="/css/Log-In-Sign-Up.css" media="screen" />
      <div data-home-page="Beranda.html" data-home-page-title="Beranda" className="u-body">
        < header className="u-align-center u-clearfix u-header u-header header-res" id="sec-dce1">
          <div className="u-clearfix u-sheet u-valign-middle-sm u-valign-middle-xs u-sheet-1">
            {/* <!-- Logo  --> */}
            <a href="Beranda.html" data-page-id="488405423" className="u-align-center u-image u-logo u-image-1"
              data-image-width="500" data-image-height="500" title="Beranda">
              <img src="/images/kudhung-removebg-preview.png" className="u-logo-image u-logo-image-1" />
            </a>
          </div>
        </header >

        {/* <!-- Kategori Produk  --> */}
        <section className="u-clearfix u-section-1 padding-section" id="sec-27f6">
          <div className="u-clearfix u-sheet u-valign-middle-xl u-valign-top-md u-valign-top-sm u-valign-top-xs u-sheet-1">
            <div className="u-align-center u-container-style u-grey-10 u-group u-radius-50 u-shape-round u-group-1">
              <div className="u-container-layout u-container-layout-1"><span
                className="u-icon u-icon-circle u-text-palette-1-base u-icon-1">
                <i className="fas fa-user-alt" style={{ fontSize: "80px" }}></i>
              </span>
                <h3 className="u-text u-text-default u-text-1">Masuk</h3>
                <div className="u-expanded-width u-form u-login-control u-form-1">
                  <div
                    className="u-clearfix u-form-custom-backend u-form-spacing-30 u-form-vertical u-inner-form"
                    name="" style={{ padding: "10px;" }}>
                    <div className="u-form-group u-form-name">
                      <label htmlFor="username-5b0a" className="u-form-control-hidden u-label"></label>
                      <input type="text" placeholder="Masukkan nama pengguna" id="" name=""
                        className="u-border-2 u-border-white u-input u-input-rectangle u-radius-43 u-white" />
                    </div>
                    <div className="u-form-group u-form-password">
                      <label htmlFor="password-5b0a" className="u-form-control-hidden u-label"></label>
                      <input type="text" placeholder="Masukkan kata sandi" id="" name=""
                        className="u-border-2 u-border-white u-input u-input-rectangle u-radius-43 u-white" />
                    </div>
                    <div className="u-form-checkbox u-form-group">
                      <input type="checkbox" id="checkbox-5b0a" name="remember" defaultValue="On" />
                      <label htmlFor="checkbox-5b0a" className="u-label">Ingat saya</label>
                    </div>
                    <div className="u-align-left u-form-group u-form-submit">
                      <button className="u-border-none u-btn u-btn-round u-btn-submit u-button-style u-radius-50 u-btn-1" onClick=" ">Submit</button>
                    </div>
                  </div>
                </div>
                <a href=""
                  className="u-border-1 u-border-active-palette-2-base u-border-hover-palette-1-base u-btn u-button-style u-login-control u-login-forgot-password u-none u-text-palette-1-base u-btn-2">Lupa
                  kata sandi?</a>
              </div>
            </div>
            <h3 className="u-text u-text-default u-text-2">Atau</h3>
            <div className="u-align-center u-container-style u-grey-10 u-group u-radius-50 u-shape-round u-group-2">
              <div className="u-container-layout u-container-layout-2"><span
                className="u-icon u-icon-circle u-text-palette-1-base u-icon-2">
                <i className="fas fa-user-alt" style={{ fontSize: "80px" }}></i>
              </span>
                <h3 className="u-text u-text-default u-text-3">Daftar</h3>
                <div className="u-expanded-width u-form u-form-2">
                  <form action="#" method="POST" className="u-clearfix u-form-spacing-30 u-form-vertical u-inner-form"
                    source="custom" name="form" style={{ padding: "10px;" }}>
                    <div className="u-form-group u-form-group-7">
                      <label htmlFor="text-3c64" className="u-form-control-hidden u-label"></label>
                      <input
                        type="text"
                        placeholder="Masukkan nama pengguna"
                        id="text-3c64"
                        name="namaLengkap"
                        className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-42 u-white"
                        onChange=""
                      />
                    </div>
                    <div className="u-form-email u-form-group">
                      <label htmlFor="email-11e4" className="u-form-control-hidden u-label"></label>
                      <input
                        type="email"
                        placeholder="Masukkan email anda"
                        id="email-11e4" name="Email"
                        className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-42 u-white"
                        required=""
                        name="Email"
                        onChange="" />
                    </div>
                    <div className="u-form-group u-form-group-6">
                      <label htmlFor="text-58f0" className="u-form-control-hidden u-label"></label>
                      <input
                        type="text"
                        placeholder="Masukkan kata sandi"
                        id="text-58f0"
                        name="Password"
                        className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-42 u-white"
                        onChange=""
                      />
                    </div>
                    <div className="u-form-group u-form-group-7">
                      <label htmlFor="text-3c64" className="u-form-control-hidden u-label"></label>
                      <input type="text" placeholder="Konfirmasikan kata sandi" id="text-3c64" name="text-1"
                        className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-42 u-white" />
                    </div>
                    <div className="u-align-center u-form-group u-form-submit">
                      <p className="u-btn u-btn-round u-btn-submit u-button-style u-radius-43 u-btn-3">Daftar
                        Sekarang</p>
                      <input type="submit" defaultValue="submit" className="u-form-control-hidden" onClick=" " />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div >
    </>
  )
}

export default LoginSignup