import React from 'react'
import Input from './componentsCard/Input'
// import Botao from './componentsCard/Botao'

const Card = () => {

  const [day,setDay] = React.useState('')
  const [month,setMonth] = React.useState('')
  const [year,setYear] = React.useState('')

  const [visibility, setVisibility] = React.useState(true);


  function getCurrentDate(data){ // ess função retorna o dia ou o mês ou o ano
  let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    switch(data){
      case 'day':
        return date;
      case 'month':
        return month;
      case 'year':
        return year
    }
    }
 
   const dias = () => {
    return Number(getCurrentDate('year')) - year
   }
   const meses = () => {
    return Number(getCurrentDate('month')) - month
   }
   const anos = () => {
    return  Number(getCurrentDate('day')) - day < 0 ? (Number(getCurrentDate('day')) - day)* -1 : Number(getCurrentDate('day')) - day  
   }
   

  
  
  return (
    <div>
     <Input value={day} estado={(e) => setDay(e.target.value)}  place='DD' label='DAY' />
     <Input value={month} estado={(e) => setMonth(e.target.value)}  place='MM' label='MONTH' />
     <Input value={year} estado={(e) => setYear(e.target.value)}  place='YYYY' label='YEAR' />
  
      
    <button
      type="submit"
      onClick={() => {
        if (visibility) {
          setVisibility(false);
        } 
        if (!visibility) {
          setVisibility(true);
        }
      }}>seta</button>
 
      {visibility && <p>{dias()} years </p>}
      {visibility && <p>{meses()} months</p>}
      {visibility && <p>{anos()} days</p>}
    
    </div>
  )
}

export default Card
