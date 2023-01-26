 import product from '../../assets/img/product.jpg'
import { useState } from 'react'
import { card } from '../../interface/interfaces'

interface cardsProps {
    insideMoney:number,
    setInsideMoney:React.Dispatch<React.SetStateAction<number>>
    setIsEnoughInside:React.Dispatch<React.SetStateAction<boolean>>

}

const Cards:React.FC<card & cardsProps> =({setIsEnoughInside,insideMoney,setInsideMoney,name,cost,num})=>{
    
    const [count , setCount] = useState<number>(num)
   
    return(
        <div className={count>0?'container__card':'container__card op'}>
              <img className='container__img' src={product} alt="товар" />
        <h3 className='container__name'>{name}</h3>
        <p className="container__cost">Стоимость: <span>{cost} ₽</span></p>
        <p className="container__num">Осталось : {count}</p>
       
       
        {count>0 ? <button className='container__buy' onClick={()=>{
         if (insideMoney >= cost){
            setInsideMoney(insideMoney-cost)
            setIsEnoughInside(true)
            setCount(count-1)
             
         } else setIsEnoughInside(false)
    }}>{insideMoney >= cost}Купи меня!</button> :<p className='container__zero'>Я закончился 😞</p>}
       
        
        </div>
    )
}
export default Cards