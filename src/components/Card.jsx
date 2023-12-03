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
    
   const handleDayChange = event => {
      return setDay(event.target.value);
  };

  const handleMonthChange = event => {
      return setMonth(event.target.value);
  };

  const handleYearChange = event => {
     return setYear(event.target.value);
  };

  
  
  return (
    <div>
     <Input  tam='2'  id='dia' value={day}   estado={handleDayChange}    place='DD'   label='DAY' />
     <Input  tam='2'  id='mes' value={month} estado={handleMonthChange}  place='MM'   label='MONTH' />
     <Input  tam='4'  id='ano' value={year}  estado={handleYearChange}   place='YYYY' label='YEAR' />
  
      
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
