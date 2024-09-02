import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Section from './components/Section';
import '../src/css/App.css';
import Footer from './components/Footer';
import Services from './components/Services';
import Clientes from './components/Clientes';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import Articles from './components/Articles';
import ArticleScreen from './components/ArticleScreen'; // Importa ArticleScreen
import data from '../public/index'; // Asegúrate de tener los artículos importados
import AllArticles from './components/AllAriticles';

function App() {
  const { articulos } = data;
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/article/:id/:title" element={<ArticleScreen articles={articulos} />} />
          <Route path='/articles' element={<AllArticles/>} />
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Section 
                  number="01"
                  title="INNOVAMOS PARA AUTOMATIZAR"
                  content="Elinca se especializa en ofrecer soluciones avanzadas de ingeniería para el diseño, comercialización, ensamblaje y montaje de sistemas de automatización industrial, asegurando eficiencia y precisión en el manejo de energía."
                  image="https://img.freepik.com/vector-gratis/composicion-isometrica-equipo-almacen-moderno-brazos-roboticos-controlados-computadora-cargar-clasificar-paquetes-carga_1284-61812.jpg?t=st=1725285086~exp=1725288686~hmac=8b29b6d603bb8aaec2a7ba5f553e7c73a16960443e370cee215d2f8b8e168442&w=740"
                  color="#000"
                  textcolor="white"
                  titlecolor="#00ff00"
                />
                <Section 
                  number="02"
                  title="CRECEMOS PARA LIDERAR"
                  content="Con una sólida presencia en Venezuela, Elinca ha consolidado su reputación en el sector industrial. Además, la empresa continúa expandiendo su influencia y experiencia internacionalmente, con sedes en Estados Unidos y España, fortaleciendo su capacidad de ofrecer soluciones globales."
                  image="maps.png"
                  color="#fff"
                  reverse
                  textcolor="black"
                  titlecolor="blue"
                />
                <Section 
                  number="03"
                  title="Respaldamos para Perfeccionar"
                  content="Más allá de la implementación, Elinca se dedica a ofrecer un servicio postventa de alta calidad, que incluye soporte técnico y mantenimiento continuo, asegurando la operatividad ininterrumpida y la eficiencia óptima de todos sus sistemas."
                  image="https://img.freepik.com/foto-gratis/escena-fotorrealista-operaciones-logisticas-almacen_23-2151468932.jpg?t=st=1725284940~exp=1725288540~hmac=79f18f0c35afde21ab760e98ef646ead8ba114596faa7666ac447a1785a8a9de&w=740"
                  color="#000"
                  textcolor="white"
                  titlecolor="#00ff00"
                />
                <Services />
                <Clientes />
                <Articles />
              </>
            }
          />
        </Routes>
        <Footer />
        <TawkMessengerReact
          propertyId="66d36f64ea492f34bc0c4310"  // Reemplaza con tu ID de propiedad
          widgetId="1i6kum8op"                    // Reemplaza con tu ID de widget
        />
      </div>
    </Router>
  );
}

export default App;
