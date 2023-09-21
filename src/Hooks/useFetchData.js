import React,{useEffect, useState} from 'react'

export function useFetchData(url) {
    const [data, setData] = useState();

    useEffect(()=>{
      fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch((ex)=>{console.error(ex)})
    },[url])
  return (data)
}

export default useFetchData
