import Link from 'next/link'

const ListSliderAdmin = (props) => (
    <>
        <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">{props.nomor}</td>
        <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell img-fluid">
            <div className="u-file-icon u-icon u-icon-24 ">
                <img src={props.gambarSlider} alt="" className="" /></div>
        </td>
        <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">{props.statusSlider}</td>
        <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">{props.periodeSlider}</td>
        <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell"><span className="u-icon">
            <span className="u-align-center-sm u-align-center-xs u-icon u-icon-circle ">
                <Link href="/admin/slider/update/[idSlider]" as={`/admin/slider/update/${props.idSlider}`}>
                    <span className="fontawesome-pen"><i className="fas fa-pen" style={{ cursor: "pointer" }}></i></span>
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

export default ListSliderAdmin