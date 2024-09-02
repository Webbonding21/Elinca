import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Section from './components/Section';
import '../src/css/App.css';
import Footer from './components/Footer';
import Services from './components/Services';
import Clientes from './components/Clientes';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import Articles from './components/Articles';
import ArticleScreen from './components/ArticleScreen'; 
import data from '../public/index'; 
import AllArticles from './components/AllAriticles';
import Header from './components/Header';

function App() {
  const [language, setLanguage] = useState('es'); // Estado para el idioma
  const [translatedContent, setTranslatedContent] = useState(null);

  const { articulos } = data;

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'es' ? 'en' : 'es'));
  };

  useEffect(() => {
    const translateText = async (text) => {
      try {
        const response = await axios.post(
          `https://translation.googleapis.com/language/translate/v2`,
          {},
          {
            params: {
              q: text,
              target: language,
              key: 'YOUR_GOOGLE_CLOUD_API_KEY', // Reemplaza con tu API Key
            },
          }
        );
        return response.data.data.translations[0].translatedText;
      } catch (error) {
        console.error("Error al traducir:", error);
        return text;
      }
    };

    const translateContent = async () => {
      const sections = [
        {
          number: "01",
          title: "INNOVAMOS PARA AUTOMATIZAR",
          content: "Elinca se especializa en ofrecer soluciones avanzadas de ingeniería para el diseño, comercialización, ensamblaje y montaje de sistemas de automatización industrial, asegurando eficiencia y precisión en el manejo de energía.",
        },
        {
          number: "02",
          title: "CRECEMOS PARA LIDERAR",
          content: "Con una sólida presencia en Venezuela, Elinca ha consolidado su reputación en el sector industrial. Además, la empresa continúa expandiendo su influencia y experiencia internacionalmente, con sedes en Estados Unidos y España, fortaleciendo su capacidad de ofrecer soluciones globales.",
        },
        {
          number: "03",
          title: "RESPALDAMOS PARA PERFECCIONAR",
          content: "Más allá de la implementación, Elinca se dedica a ofrecer un servicio postventa de alta calidad, que incluye soporte técnico y mantenimiento continuo, asegurando la operatividad ininterrumpida y la eficiencia óptima de todos sus sistemas.",
        }
      ];

      const translatedSections = await Promise.all(
        sections.map(async (section) => ({
          ...section,
          title: await translateText(section.title),
          content: await translateText(section.content),
        }))
      );

      setTranslatedContent(translatedSections);
    };

    translateContent();
  }, [language]);

  if (!translatedContent) {
    return <div>Cargando...</div>; // Mostrar un mensaje de carga mientras se traduce
  }

  return (
    <Router>
      <div className="App">
        <Header backgroundColor="#333" language={language} toggleLanguage={toggleLanguage} />
        <Routes>
          <Route path="/article/:id/:title" element={<ArticleScreen articles={articulos} />} />
          <Route path='/articles' element={<AllArticles />} />
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                {translatedContent.map((section, index) => (
                  <Section
                    key={index}
                    number={section.number}
                    title={section.title}
                    content={section.content}
                    image={index === 0 ? "https://img.freepik.com/vector-gratis/composicion-isometrica-equipo-almacen-moderno-brazos-roboticos-controlados-computadora-cargar-clasificar-paquetes-carga_1284-61812.jpg?t=st=1725285086~exp=1725288686~hmac=8b29b6d603bb8aaec2a7ba5f553e7c73a16960443e370cee215d2f8b8e168442&w=740" : index === 1 ? "maps.png" : "https://img.freepik.com/foto-gratis/escena-fotorrealista-operaciones-logisticas-almacen_23-2151468932.jpg?t=st=1725284940~exp=1725288540~hmac=79f18f0c35afde21ab760e98ef646ead8ba114596faa7666ac447a1785a8a9de&w=740"}
                    color={index % 2 === 0 ? "#000" : "#fff"}
                    textcolor={index % 2 === 0 ? "white" : "black"}
                    titlecolor={index === 0 ? "#00ff00" : index === 1 ? "blue" : "#00ff00"}
                    reverse={index % 2 !== 0}
                  />
                ))}
                <Services />
                <Clientes />
                <Articles />
              </>
            }
          />
        </Routes>
        <Footer />
        <TawkMessengerReact
          propertyId="66d36f64ea492f34bc0c4310" 
          widgetId="1i6kum8op"                   
        />
      </div>
    </Router>
  );
}

export default App;
