import { FormEvent, useState, useRef, useEffect, ChangeEvent } from "react";
import Hoja from './components/hoja';
import Save from './components/save'
import Clean from './components/clean'
import styles from './App.module.css';
import {initial} from './utils/utils'

type m = Array<string>;
let initl:m = initial()
export default function App() {
  const [data, setData] = useState('')
  const [datos, setDatos] = useState<m>(initl)
  const ref = useRef<HTMLInputElement>(null)
  function handleSubmit(e:FormEvent) {
    e.preventDefault()
    setData(ref.current?.value || '')
    ref.current!.value = ''
    ref.current?.focus()
  }
  useEffect(() => {
    setDatos([...datos, data])
  },[data])
  function fuso() {
    ref.current?.focus()
  }
  useEffect(() => {
    window.addEventListener('mouseover', fuso)
    return () => {
      window.removeEventListener('mouseover', fuso)
    }
  },[])
  function handleSave(){
    localStorage.setItem('work', JSON.stringify(datos))
  }
  function handleChange(e:ChangeEvent){
    let file = (e.target as HTMLInputElement).files
    if (file != null){
    let url = URL.createObjectURL(file[0])
      setData(url)
    }
  }
  function handleClean(){
    localStorage.clear()
    setDatos([])
  }
  return (
    <div className={styles.container}>
      <Hoja datos={datos}/>
      <form onSubmit={handleSubmit} className={styles.barra}>
        <input className={styles.promt} type="text"  ref={ref} placeholder='utiliza mayusculas para indicar que es un titulo'/>
        <label htmlFor="file" className={styles.buton} title="subir imagen">📁</label>
          <input type="file" id="file" hidden onChange={handleChange}/>
        {/* <button type="button">Grabar</button> */}
      </form>
      <Save save={handleSave}/>
      <Clean clean={handleClean}/>
    </div>
  )  
}