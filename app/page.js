import Image from 'next/image';
import styles from './page.module.css';
import Result from './Results';
import Text from './Text';

export default function Home() {
  return (
      <div className="container-fluid text-center align-items-center vh-100">
        <h1 className='fs-1'>Proyecto 3er Parcial</h1>
        <div className="row align-items-center">
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
