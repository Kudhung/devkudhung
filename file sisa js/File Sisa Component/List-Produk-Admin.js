import Link from 'next/link'

const ListProdukAdmin = (props) => (
  <>
    <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell u-table-cell-16">{props.nomor}</td>
    <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">
      <span className="u-file-icon u-icon u-icon-6">
        <img src={props.gambar1} alt="" />
      </span>
    </td>
    <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">{props.namaProduk}</td>
    <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">{props.hargaProduk}</td>
    <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">{props.kategori}</td>
    <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">
      <span className="u-icon">
        <span className="u-align-center-sm u-align-center-xs u-icon u-icon-circle ">
          <Link href="/admin/produk/update/[idProduk]" as={`/admin/produk/update/${props.idProduk}`}>
            <span className="fontawesome-pen"><i className="fas fa-pen" style={{cursor:"pointer"}}></i></span>
          </Link>
          |
          <span className="fontawesome-trash"><i className="fas fa-trash-alt"></i></span>
          |
          <span className="fontawesome-info"><i className="fas fa-info-circle"></i></span>
        </span>
        {/* SVG */}
      </span>
    </td>
  </>
)

export default ListProdukAdmin