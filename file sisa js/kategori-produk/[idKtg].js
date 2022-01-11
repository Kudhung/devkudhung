import prisma from '../../../client.ts'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Link from 'next/link';

export async function getServerSideProps(context) {
  const daftarKategori = await prisma.kategori.findMany();
  let kode = context.params.idKtg;
  let data = await prisma.kategori.findUnique({
      where: { jenisKtg:kode },
  });

  let { idKtg, jenisKtg } = data;
  return { props: { idKtg, jenisKtg } };
}

const FormKategoriProduk = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <div className="u-clearfix u-form-horizontal u-form-spacing-10 u-inner-form" style={{ padding: "10px;" }}>
      <div className="u-form-group u-form-name">
        <label htmlFor="name-e208" className="u-form-control-hidden u-label"></label>
        <input
          {...register('jenisKtg', { required: true })}
          value={props.jenisKtg}
          onChange={(Event) => props.setJenisKtg(Event.target.value)}
          className="form-control u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
          type="text"
          id="jenisKtg"
          placeholder="Categories Name"
          style={{ height: "45px", width: "250px" }}
        />
      </div>
      <div className="u-align-center u-form-group u-form-submit">
        <button
          style={{ marginTop: "-6% " }}
          className="u-btn u-btn-submit u-button-style"
          onClick={handleSubmit(props.onClick)}
        >
          Simpan
        </button>
        <Link href="/admin">
          <button
            style={{ backgroundColor: "red", marginLeft: "2%", marginTop: "-6% " }}
            className="u-btn u-btn-submit u-button-style"
          >
            Batal
          </button>
        </Link>
      </div>
    </div>
  )
}


const EditKategori = (props) => {
  const [jenisKtg, setJenisKtg] = useState(props.jenisKtg)
  return (
    <>
      <div className="u-body">
        <link rel="stylesheet" href="/css/Admin.css" media="screen" />
        <header className="u-align-center u-clearfix u-header u-header" id="sec-dce1"><div className="u-clearfix u-sheet u-sheet-1">
          <a href="Beranda.html" data-page-id="488405423" className="u-align-center u-image u-logo u-image-1" data-image-width="500" data-image-height="500" title="Beranda">
            <img src="/images/kudhung-removebg-preview.png" className="u-logo-image u-logo-image-1" />
          </a>
          <span className="u-icon u-icon-circle u-text-black u-icon-1 fontawesome-out">
            <i className="fas fa-sign-out-alt" ></i>
            {/* SVG */}
          </span>
          {/* Nav */}
        </div>
        </header>


        {/* Bagian Kategori  */}
        <section className="u-align-center u-clearfix u-section-1" id="sec-4015">
          <div className="u-clearfix u-sheet u-valign-top u-sheet-1">
            <div className="u-expanded-width u-tab-links-align-justify u-tabs u-tabs-1">
              <div className="u-tab-content">
                <div className="u-container-style u-grey-10 u-shape-rectangle u-tab-active" >
                  <div className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form ">
                    <div className="u-form-group u-form-select u-form-group-8">
                      {/* Bagian Kategori Produk */}
                      <div className="u-container-layout u-container-layout-1">
                        <h4 className="u-text u-text-default u-text-1">EDIT KATEGORI PRODUK</h4>
                        <div className="u-form u-form-1">
                          <FormKategoriProduk
                          jenisKtg={jenisKtg} setJenisKtg={setJenisKtg}
                          onClick={async (data) => {
                              const kategoriProduk = {
                                  jenisKtg:data.jenisKtg,
                                  idKtg: props.idKtg
                              };
                              try {
                                  const respon = await fetch('/api/Kategori/Update', {
                                      method: 'POST',
                                      body: JSON.stringify(kategoriProduk),
                                  });
                                  if (!respon.ok) throw new Error(respon.statusText);
                                  let status = await respon.json();
                                  if (status !== null) {
                                      window.history.back()
                                  }
                              } catch (error) {
                                  console.log(error);
                              }
                          }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default EditKategori