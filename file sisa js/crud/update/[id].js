import { useState } from "react"

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3004/DataLogin')
  const data = await res.json()

  const paths = data.map((login) => ({
    params: { id: login.id.toString() },
  }))

  return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3004/DataLogin/${params.id}`)
  const data = await res.json()

  return { props: { data } }
}

const Update = ({ data }) => {
  const [namaLengkap, setNamaLengkap] = useState(data.namalengkap);
  const [Email, setEmail] = useState(data.email)
  const [Password, setPassword] = useState(data.password)
  const [base64URL, setBase64URL] = useState(data.gambar)
  const [idLogin] = useState(data.id)

  const getBase64 = (file) => {
    return new Promise(resolve => {
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };


  const handleFileInputChange = (e) => {
    let { file } = base64URL;

    file = e.target.files[0];
    getBase64(file)
      .then(result => {
        let filebase64 = file["base64"] = result
        setBase64URL(filebase64)
        console.log("BASE64:", filebase64)
        console.log("InfoFile", file)
      })
      .catch(err => {
        console.log(err);
      });
  };

  const updateLogin = async () => {
    const response = await fetch(`/api/login/update`, {
      method: 'PUT',
      body: JSON.stringify({ namaLengkap, Email, Password, idLogin, base64URL }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
  }



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
            <div className="u-align-center u-container-style u-grey-10 u-group u-radius-50 u-shape-round u-group-2">
              <div className="u-container-layout u-container-layout-2"><span
                className="u-icon u-icon-circle u-text-palette-1-base u-icon-2">
                <i className="fas fa-user-alt" style={{ fontSize: "80px" }}></i>
              </span>
                <h3 className="u-text u-text-default u-text-3">Daftar</h3>
                <div className="u-expanded-width u-form u-form-2">
                  <div className="u-clearfix u-form-spacing-30 u-form-vertical u-inner-form"
                    source="custom" name="form" style={{ padding: "10px" }}>
                    <div className="u-form-group u-form-group-7">
                      <label htmlFor="text-3c64" className="u-form-control-hidden u-label"></label>
                      <input
                        type="text"
                        placeholder="Masukkan nama pengguna"
                        id="text-3c64"
                        defaultValue={data.namalengkap}
                        name={namaLengkap}
                        className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-42 u-white"
                        onChange={(e) => setNamaLengkap(e.target.value)}
                      />
                    </div>
                    <div className="u-form-email u-form-group">
                      <label htmlFor="email-11e4" className="u-form-control-hidden u-label"></label>
                      <input
                        type="email"
                        placeholder="Masukkan email anda"
                        id="email-11e4"
                        name="Email"
                        defaultValue={data.email}
                        className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-42 u-white"
                        required=""
                        name={Email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="u-form-group u-form-group-6">
                      <label htmlFor="text-58f0" className="u-form-control-hidden u-label"></label>
                      <input
                        type="text"
                        placeholder="Masukkan kata sandi"
                        id="text-58f0"
                        defaultValue={data.password}
                        name={Password}
                        className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-42 u-white"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="u-form-group u-form-group-6">
                      <img src={data.gambar} />
                      <input
                        type="file"
                        name={base64URL}
                        onChange={handleFileInputChange}
                      />
                      <img src={base64URL} />
                    </div>
                    <div className="u-align-center u-form-group u-form-submit">
                      <button className="u-btn u-btn-round u-btn-submit u-button-style u-radius-43 u-btn-3"
                        onClick={updateLogin}
                      >Submit</button>
                    </div>
                    {/* <div className="u-align-center u-form-group u-form-submit">
                      <p className="u-btn u-btn-round u-btn-submit u-button-style u-radius-43 u-btn-3">Daftar
                        Sekarang</p>
                      <input type="submit" defaultValue="submit" className="u-form-control-hidden" onClick={postLogin} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div >
    </>
  )
}

export default Update