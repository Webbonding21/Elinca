import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
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

function App() {
  const { articulos } = data;
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/article/:id" element={<ArticleScreen articles={articulos} />} />
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Section 
                  number="01"
                  title="INNOVAMOS PARA AUTOMATIZAR"
                  content="Elinca se especializa en ofrecer soluciones avanzadas de ingeniería para el diseño, comercialización, ensamblaje y montaje de sistemas de automatización industrial, asegurando eficiencia y precisión en el manejo de energía."
                  image="robot.jpg"
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
                  image="servicios.png"
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
