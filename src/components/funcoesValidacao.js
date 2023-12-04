import React from 'react'

const funcoesValidacao = () => {

  const validateDia = (dia) =>{
    if(dia.lenght === 0){
      setError('Preencha um valor')
      return false;
    } else if (!/^(0?[1-9]|[1-2][0-9]|3[0-1])$/.test(dia)){
      setError('Preencha um dia válido')
      return false;
    }else{
      setError(null)
      return true;
    }
 }

 const validateMes = (mes) =>{
  if(mes.lenght === 0){
    setError('Preencha um valor')
    return false;
  } else if (!/^(0?[1-9]|1[0-2])$/.test(mes)){
    setError('Preencha um mês válido')
    return false;
  }else{
    setError(null)
    return true;
  }
}

const validateAno = (ano) =>{
if(ano.lenght === 0){
    setError('Preencha um valor')
    return false;
  } else if (!/^([1-9]\d{0,3}|1\d{3}|20[0-2]\d|3000)$/.test(ano)){
    setError('Preencha um ano válido')
    return false;
  }else{
    setError(null)
    return true;
  }
}
  return {validateDia,validateMes,validateAno}
}

export default funcoesValidacao
