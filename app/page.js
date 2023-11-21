import Image from 'next/image';
import styles from './page.module.css';
import Result from './Results';
import Text from './Text';

export default function Home() {
  return (
      <div className="container-fluid text-center vh-100 d-flex flex-column">
        <h1 className='fs-1'>Proyecto 3er Parcial</h1>
        <div className="row align-items-start flex-grow-1 h-75" >
          <Text 
            title="Texto" 
            />
          <Result 
            title="Resultados" 
            content="Estos son los resultados del archivo"
          />
        </div>
      </div>
  );
}
