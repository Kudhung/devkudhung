import Link from 'next/link'
import { useState } from 'react'
const ListBundlingAdmin = (props) => {
  const [namaBundling,setNamaBundling] =useState(props.namaBundling)
  return(
  <>
    <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">{props.nomor}</td>
    <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">
      <span className="u-file-icon u-icon u-icon-15 img-fluid">
        <img src={props.gambar1} style={{ width: "150px", height: "150px" }} alt="" />
      </span>
    </td>
    <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">{props.namaBundling}</td>
    <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">{props.hargaBundling}</td>
    <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">
      <span className="u-icon">
        <span className="u-align-center-sm u-align-center-xs u-icon u-icon-circle ">

          <Link href="/admin/bundling/update/[idBundling]" as={`/admin/bundling/update/${props.idBundling}`}>
            <span className="fontawesome-pen"><i className="fas fa-pen" style={{ cursor: "pointer" }}></i></span>
          </Link>
          |
          <span className="fontawesome-trash"><i className="fas fa-trash-alt" style={{ cursor: "pointer" }}
            onClick={() => {
              document.getElementById('overlay').style.display = 'block'
            }}
          ></i></span>
          |
          <span className="fontawesome-info"><i className="fas fa-info-circle"></i></span>
        </span>
      </span>
    </td>
    
  </>
  )
          }

export default ListBundlingAdmin