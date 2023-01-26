import React, { useState ,useCallback,useMemo} from 'react';

import Header from './components/header/Header';
import Cards from './components/cards/Cards';
import Add from './components/add/Add';
import { card, changeMoney } from './interface/interfaces';

const App:React.FC=() => {
  const money:number[] = [50,100,500,1000]

  //сделаем вид, что все пришло с useEffect
  const [cards,setCards] = useState<card[]>([{
    
    name:'марс',
    cost:100,
    num:3
  },
  {
    name:'орбит',
    cost:1,
    num:100
  },
  {
    name:'баунти',
    cost:90,
    num:100
  },
 {
  name:'люстра',
  cost:1010,
  num:1
},
{
  name:'киткат',
cost:80,
num:0
},
{
name:'фанта',
cost:400,
num:10
},
{
name:'фанта3',
cost:360,
num:8
},
{
name:'фанта2',
cost:390,
num:9
},
{ 
name:'фанта4',
cost:370,
num:1
},

])

  const [availableMoney,setAvailableMoney] = useState<number>(1500)
  const [insideMoney,setInsideMoney] = useState<number>(0)

  
  const [isEnough,setIsEnough] = useState<boolean>(true)
  const [isEnoughInside,setIsEnoughInside] = useState<boolean>(true)
//логика сдачи
//деньги в аппарате
const moneyIns:changeMoney[] = useMemo(() => 
[
  {
    item:1,
    count:Math.floor(Math.random()*100)
  },
  {
    item:5,
    count:Math.floor(Math.random()*100)
  },
  {
    item:10,
    count:Math.floor(Math.random()*100)
  },
  {
    item:50,
    count:Math.floor(Math.random()*100)
  },
  {
    item:100,
    count:Math.floor(Math.random()*100)
  },
  {
    item:500,
    count:Math.floor(Math.random()*100)
  }
]
, [])
//нехватка сдачи
const [difference , setDifference] = useState<number>(0)

//считаем кол-во  вложеных купюр

const calcValIns =useCallback(
  (ite:number) => {
   // если поле совпало , то +1
    for (let i = 0 ; i < moneyIns.length ; i++){
      if(moneyIns[i].item === ite){
        moneyIns[i].count+=1
        
      }
    }
  },
  [insideMoney],
)

 
//выcчитаем купюры из имеющихся
const setChange = useCallback(()=>{
   {  
    let dif = 0
    let fill:changeMoney[] = []
    let count:number = 1
  const coins:number[] = [1,5,10,50,100,500]
    let result:number[] = [], rest = insideMoney;
    const sorted = Array(...coins).sort((a, b) => b - a);
    while (rest > 0 && sorted.length > 0)
    {
        if (sorted[0] <= rest)
        {
            result.push(sorted[0]);
            rest -= sorted[0];
        }
        else sorted.shift();
    }
    
    //собираем в кучу 
    for (let i = 0 ; i< result.length ; i++){
      if ( result[i] === result[i+1]){
        count+=1
      }
      else {
        fill.push({count,item:result[i]} )
        count = 1
      }
    }
    console.log(fill)

    //вычитаем 
    for (let i = 0 ; i< fill.length ; i++ ){
      for (let j = 0 ; j < moneyIns.length ; j++){
        //проверка на нехватку сдачи 
        if(fill[i].item === moneyIns[j].item ){
          moneyIns[j].count -=fill[i].count

          if(moneyIns[j].count<0){
          dif += moneyIns[j].count * -moneyIns[j].item  
          setDifference(difference+dif)    
          moneyIns[j].count = 0
          }
        }
      }
    }
    result=[]
    fill =[]
    setAvailableMoney(availableMoney + insideMoney)
    setInsideMoney(0)

}
         
},[insideMoney])

  

  return (
    
    <>
 
   <Header isEnough={isEnough} setChange={setChange} isEnoughInside={isEnoughInside} availableMoney={availableMoney} insideMoney={insideMoney}/>
   <div className="add">
    <h3>Внести </h3>
    <div className="add__btns">
    {money.map((v) => <Add key={v} calcValIns={calcValIns} setIsEnough={setIsEnough} insideMoney={insideMoney} availableMoney={availableMoney} setAvailableMoney={setAvailableMoney} setInsideMoney={setInsideMoney} money={v}/> )}
      </div>
    </div>
    <div className="container">
      {cards.map((v,i)=> <Cards key={i}  setIsEnoughInside={setIsEnoughInside} insideMoney={insideMoney} setInsideMoney={setInsideMoney}  name={v.name} cost={v.cost} num={v.num} />  )}    
        
    </div>
</>
  )
}

export default App;
