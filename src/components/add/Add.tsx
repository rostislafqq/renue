 interface addProps {
    money : number,
    setInsideMoney:React.Dispatch<React.SetStateAction<number>>,
    setAvailableMoney:React.Dispatch<React.SetStateAction<number>>,
    availableMoney:number,
    insideMoney:number,
    setIsEnough:React.Dispatch<React.SetStateAction<boolean>>
    calcValIns:(i: number) => void
 }

const Add:React.FC<addProps> =({calcValIns,money,setIsEnough,insideMoney,availableMoney,setInsideMoney,setAvailableMoney})=>{
    return(
      <button onClick={()=>{
        if(availableMoney >= money) {
          setAvailableMoney(availableMoney-money)
          setInsideMoney(insideMoney+money)
          setIsEnough(true)
          calcValIns(money)
        }
        else setIsEnough(false)
      }}>{money}</button>    
    )
}

export default Add