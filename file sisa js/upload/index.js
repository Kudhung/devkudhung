import Image from 'next/image'
const Convert = () => {
    var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAAN...';
    return (
        <Image  className="" layout="fill" src={base64Icon} />
    )
}
export default Convert