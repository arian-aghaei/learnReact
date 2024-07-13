export default function Heading({title,isWhite=false}){
    return <>
        <div className="text-black">{title}</div>
        <img className="mx-auto" src={isWhite ? './underline.png' :'./gunderline.png'} alt="heading"/>
    </>
}