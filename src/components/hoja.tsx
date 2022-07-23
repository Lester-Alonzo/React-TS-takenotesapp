import '../hoja.css';
import {compare, filetype} from '../utils/utils';

interface porps {
    datos: Array<string>;
}
export default function Hoja({ datos }: porps) {
  return (
    <>
      <div className='container'>
          {datos.map(dato => filetype(dato) == 'image' ? <img src={dato} alt="part" />  : <div className={compare(dato)} >{dato}</div>)}
      </div>
    </>
  );
}