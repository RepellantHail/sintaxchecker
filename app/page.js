import Image from 'next/image';
import styles from './page.module.css';
import Result from './Results';

export default function Home() {
  return (
      <div className="container-fluid text-center align-items-center vh-100">
        <h2 className='fs-1'>Proyecto 3er Parcial</h2>
        <div className="row align-items-center ">
          <div className="col-8">
            <h2>Column 1</h2>
            <p>This is the content of the first column.</p>
            {/* Additional content goes here */}
          </div>
          <Result title="Resultados" content="Estos son los resultados del archivo"/>
        </div>
      </div>
  );
}
