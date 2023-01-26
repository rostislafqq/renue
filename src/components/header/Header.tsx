interface headerProps {
    availableMoney:number,
    insideMoney:number,
    isEnough:boolean,
    isEnoughInside:boolean
    setChange:() => void
}

const Header:React.FC<headerProps> =({setChange,isEnoughInside,isEnough,availableMoney,insideMoney})=>{
    return (
        <header>
        
        <h3 className={isEnoughInside?'' : 'red'}>Внутри:{insideMoney}₽</h3>
        <h3 className={isEnough? '' : 'red'}>В кармане:{availableMoney}</h3>
        <button onClick={()=>{
            setChange()
        }}>Вернуть сдачу</button>
     </header>
    )
}

export default Header