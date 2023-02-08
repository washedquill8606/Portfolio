import navBar from './sections/navBar/navBar';
import floatingNav from './sections/roating-nav/floatingNav';
import services from './sections/services/services';
import contact from './sections/contact/contact';
import footer from './sections/footer/footer';
import header from './sections/header/header';
import about from './sections/about/about';
import portfolio from './sections/portfolio/portfolio';
import faqs from './sections/faqs/faqs';


const App = () => {
  return (
    <main>

      <navBar/>
      <header/>
      <about/>
      <services/>
      <portfolio/>
      <faqs/>
      <contact/>
      <footer/>
      <floatingNav/>

    </main>
  )
}

export default App