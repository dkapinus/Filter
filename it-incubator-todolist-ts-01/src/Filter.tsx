import React, {useState} from 'react';

type FilterType = {
money:Array<MoneyType>
}

type MoneyType = {
    banknots:string;
    value:number;
    number:string;
}


export const  Filter = (props:FilterType)=>{

 let [nameButton,setNameButton] = useState('All')

    let currentmoney= props.money;
 if(nameButton==='RUBLS'){currentmoney= props.money.filter(filterMoney=>filterMoney.banknots==='RUBLS')}
    if(nameButton==='Dollars'){currentmoney= props.money.filter(filterMoney=>filterMoney.banknots==='Dollars')}

   const onClickHandler = (nameButton:string)=> {
       setNameButton(nameButton)
   }
    return (
        <div>

            <ul>
                    {currentmoney.map((el,index)=>{
                        return (
                            <li key={index}><div>
                                {el.banknots}
                            </div>
                                <span>
                                {el.value}
                            </span>
                                <span>
                                {el.number}
                            </span>

                            </li>

                        )
                    })
                    }

            </ul>
            <button onClick={(e)=>onClickHandler('All')}>All</button>
            <button onClick={(e)=>onClickHandler('RUBLS')}>Rubles</button>
            <button onClick={(e)=>onClickHandler('Dollars')}>Dollars</button>

        </div>
    )
}