import { useState } from "react"
import Link from 'next/link'



export async function getStaticProps(context) {
    const response = await fetch('http://localhost:3004/DataLogin');
    const data = await response.json();
    return { props: { dataLogin: data } }
}


const ListLogin = (props) => {
    return (
        <>
            {props.cekData.map((cd) => {
                return (
                    <div key={cd.id} className="u-body">
                        <div>
                            <p>Id : ({cd.id})</p>
                            <p>Nama Lengkap : ({cd.namalengkap})</p>
                            <img src={cd.gambar} style={{width:"200px", height:"200px"}}/>
                        </div>
                        <button className="u-btn u-btn-round u-btn-submit u-button-style u-radius-43 u-btn-3"
                            onClick={async () => {
                                const idLogin = cd.id
                                const response = await fetch('/api/login/delete', {
                                    method: 'DELETE',
                                    body: JSON.stringify({ idLogin }),
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                })
                                await response.json()
                            }}
                        >Delete</button>
                        <Link href="/crud/update/[id]" as={`/crud/update/${cd.id}`}>
                            <button className="u-btn u-btn-round u-btn-submit u-button-style u-radius-43 u-btn-3"
                            // onClick={postLogin}
                            >Update</button>
                        </Link>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}

const Login = (props) => {
    const [namaLengkap, setNamaLengkap] = useState(" ");
    const [Email, setEmail] = useState(" ")
    const [Password, setPassword] = useState(" ")
    const [base64URL, setBase64URL] = useState(" ")
    const [cekData] = useState(props.dataLogin)

    const postLogin = async () => {
        const response = await fetch('/api/login/post', {
            method: 'POST',
            body: JSON.stringify({ namaLengkap, Email, Password, base64URL }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        setNamaLengkap(data)
        console.log(data)
    }

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
                    <div className="u-align-center u-container-style u-grey-10 u-group u-radius-50 u-shape-round u-group-1">
                        <div className="u-align-center u-form-group u-form-submit">
                            <div>
                                <ListLogin cekData={cekData} />
                            </div>
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
                                            id="email-11e4" name="Email"
                                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-42 u-white"
                                            required=""
                                            name={Email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="u-form-group u-form-group-6">
                                        <label htmlFor="text-58f0" className="u-form-control-hidden u-label"></label>
                                        <input
                                            type="text"
                                            placeholder="Masukkan kata sandi"
                                            id="text-58f0"
                                            name={Password}
                                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-42 u-white"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="u-form-group u-form-group-7">
                                        <input
                                            type="file"
                                            name={base64URL}
                                            onChange={handleFileInputChange}
                                        />
                                        <img src={base64URL} />
                                    </div>
                                    <div className="u-align-center u-form-group u-form-submit">
                                        <button className="u-btn u-btn-round u-btn-submit u-button-style u-radius-43 u-btn-3" onClick={postLogin}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </>
    )
}

export default Login