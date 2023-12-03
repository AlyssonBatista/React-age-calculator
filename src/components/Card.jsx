import React from 'react'
import Input from './componentsCard/Input'
// import Botao from './componentsCard/Botao'

const Card = () => {

  const [day,setDay] = React.useState('')
  const [month,setMonth] = React.useState('')
  const [year,setYear] = React.useState('')
  const [linha, setLinha] =React.useState('--')
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
    return getCurrentDate('year') - year
   }
   const meses = () => {
    return getCurrentDate('month') - month
   }
   const anos = () => {
    return  getCurrentDate('day') - day < 0 ? (Number(getCurrentDate('day')) - day)* -1 : Number(getCurrentDate('day')) - day  
   }
   

  
  
  return (
    <div>
     <Input id='dia' value={day} estado={(e) => setDay(e.target.value)}  place='DD' label='DAY' />
     <Input id='mes' value={month} estado={(e) => setMonth(e.target.value)}  place='MM' label='MONTH' />
     <Input min='1' max='12' id='ano' value={year} estado={(e) => setYear(e.target.value)}  place='YYYY' label='YEAR' />
  
      
    <button
      type="submit"
      onClick={() => {
        if (day && month && year === '') {
          setVisibility(true);
        } 
        if (day && month && year !== '') {
          setVisibility(false);
        }
      }}>seta</button>
 
      <p>{ !visibility && dias()} { visibility && linha} years </p>
      <p>{ !visibility && meses()} { visibility && linha} months</p>
      <p>{ !visibility && anos()} { visibility && linha} days</p>
    
    </div>
  )
}

export default Card
