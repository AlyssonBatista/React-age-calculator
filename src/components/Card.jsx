import React from 'react'
import Input from './componentsCard/Input'
import arrow from './componentsCard/icon-arrow.svg';
import './Card.css'
 
 

const Card = () => {

  const [day,setDay] = React.useState('')
  const [month,setMonth] = React.useState('')
  const [year,setYear] = React.useState('')

  const [updateDay,setUpdateDay] = React.useState(day)
  const [updateMonth,setUpdateMonth] = React.useState(month)
  const [updateYear,setUpdateYear] = React.useState(year)
   
  const [errorDay,setErrorDay] = React.useState(null)
  const [errorMes,setErrorMes] = React.useState(null)
  const [errorAno,setErrorAno] = React.useState(null)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ validando o que o usuário digita no input
const validateDia = (dia) =>{
  if(dia.length === 0){
    setErrorDay('Preencha um valor')
    return false;
  } else if (!/^(0?[1-9]|[1-2][0-9]|3[0-1])$/.test(dia)){
    setErrorDay('Preencha um dia válido')
    return false;
  }else{
    setErrorDay(null)
    return true;
  }
}

const validateMes = (mes) =>{
  if(mes.length === 0){
    setErrorMes('Preencha um valor')
    return false;
  } else if (!/^(0?[1-9]|1[0-2])$/.test(mes)){
    setErrorMes('Preencha um mês válido')
    return false;
  }else{
    setErrorMes(null)
    return true;
  }
}

const validateAno = (ano) =>{
  let anoAtual = new Date().getFullYear()

if(ano.length === 0){
    setErrorAno('Preencha um valor')
    return false;
  } else if (!/^([1-9]\d{0,3}|1\d{3}|20[0-2]\d)$/.test(ano)){
    setErrorAno('Preencha um ano válido')
    return false;
  }else if(ano > anoAtual){
    setErrorAno(`Preencha com um ano menor que ${anoAtual}`)
    return false;
  }else{
    setErrorAno(null)
    return true;
  }
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

function handleBlurDia({target}){
validateDia(target.value)
}

function handleBlurMes({target}){
validateMes(target.value)
}

function handleBlurAno({target}){
validateAno(target.value)
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const handleDayChange = event => {
  if(errorDay) validateDia(event.target.value)
    setDay(event.target.value);
};

const handleMonthChange = event => {
  if(errorMes) validateMes(event.target.value)
    setMonth(event.target.value);
};

const handleYearChange = event => {
  let anoDeNascimento = event.target.value
  if(errorAno) validateAno(anoDeNascimento)
    setYear(anoDeNascimento);
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function getCurrentDate(data){ // esss função retorna o dia ou o mês ou o ano
    let newDate = new Date()
    let day2 = newDate.getDate();
    let month2 = newDate.getMonth() + 1;
    let year2 = newDate.getFullYear();

    switch(data){
      case 'day':
        return day2;
      case 'month':
        return month2;
      case 'year':
        return year2
    }
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const handleClickTodos  = () => {
  let anoAtual = new Date().getFullYear()

    if ( year <= anoAtual && month <= 12 && day <= 31 && year !== '' && month !== '' && day !== '' ){
      let anos = getCurrentDate('year') - year
      let yearFinal = setUpdateYear(anos);

      let meses = getCurrentDate('month') - month
      let monthFinal = setUpdateMonth(meses);
    
      let days = getCurrentDate('day') - day < 0 ? (Number(getCurrentDate('day')) - day)* -1 : Number(getCurrentDate('day')) - day 
      let dayFinal =  setUpdateDay(days);

      return yearFinal,monthFinal,dayFinal;
    }
}

console.log(errorDay)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



  return (
  
        <div className='container'>
          <div className='inputs'>
              <div>        
                <Input   tam='2'  id='dia' value={day}   estado={handleDayChange}   onBlur={handleBlurDia}  place='DD'   label='DAY' />
                {errorDay && <p className='info'>{errorDay}</p>}
              </div>
              <div>
                <Input   tam='2'  id='mes' value={month} estado={handleMonthChange} onBlur={handleBlurMes}  place='MM'   label='MONTH' />
                {errorMes && <p className='info'>{errorMes}</p>}
              </div>
              <div>
                <Input  tam='4'  id='ano' value={year}  estado={handleYearChange}  onBlur={handleBlurAno}  place='YYYY' label='YEAR' />
                {errorAno && <p className='info'>{errorAno}</p>}
              </div>
          </div>
            
                
            <div className='saida'>
              <div className='container-botao'>
                <div className='linha'></div>
                <button className='botao'  type="submit"  onClick={ handleClickTodos  }><img   src={arrow} alt="React Logo" /></button>
              </div>
             
              <div className='show'>
                <p className={updateYear !== '' ? 'cheio' : 'vazio'}> { updateYear !== '' ? updateYear : '--'} <span >years</span> </p>
                <p className={updateYear !== '' ? 'cheio' : 'vazio'}> { updateMonth !== ''  ? updateMonth : '--'} <span>months</span> </p>
                <p className={updateYear !== '' ? 'cheio' : 'vazio'}> { updateDay !== ''  ? updateDay : '--'} <span>days</span> </p>
              </div>
            </div>
        
        </div>

  )
}

export default Card
