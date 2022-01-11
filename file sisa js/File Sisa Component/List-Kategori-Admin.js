import Link from 'next/link'

const ListKategoriAdmin = (props) => (
  <>
  
    <td className="u-align-center u-border-3 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell u-table-cell-4">{props.nomor}</td>
    <td className="u-border-3 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell u-table-cell-5">{props.jenisKtg}</td>
    <td className="u-align-center u-border-3 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell u-table-cell-6">
      <span className="u-icon u-icon-1">
        <span className="u-align-center-sm u-align-center-xs u-icon u-icon-circle ">
          <span className="fontawesome-pen"><i className="fas fa-pen" style={{ cursor: "pointer" }}
            onClick={() => {
              props.setIdKtg,
                props.setJenisKtg,
                document.getElementById('id01').style.display = 'block'
            }}
          >
          </i>
          </span>
          |
          <span className="fontawesome-trash"><i className="fas fa-trash-alt"></i></span>
        </span>
      </span>
    </td>
  </>
)

export default ListKategoriAdmin