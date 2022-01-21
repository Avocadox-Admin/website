import sl1 from '../assets/sl1_1400x700.png';

const Home = () => {
  return (
    <>
      <img src={sl1} alt="slider 1" />
      <div className="h-[600px]">
        <span>Desarrollo Sustentable</span>
        <span>
          ¿Cuál es es el impacto de lo que consumes en el ambiente y en tu grupo local? Nuestra
          empresa esta realmente comprometida con el cuidado del planeta y el
          <strong> BIENESTAR</strong> de tu país, ciudad grupo de amigos y de tu familia. Tú eres
          parte de este esfuerzo y compromiso.
        </span>
        <button>¿Sabes como?</button>
        <div>Interactive Image</div>
      </div>
      <div className="h-[600px]">Etapas del Producto</div>
      <div className="h-[600px]">Certificaciones</div>
    </>
  );
};

export default Home;
