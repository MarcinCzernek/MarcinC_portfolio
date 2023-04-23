
import './App.css';

import Cafe from './images/cafe.jpg';
import Easy_eng from './images/easy_english_app.png';
import GitKot from './images/GitHub-Mark.png';
import Info_tech from './images/info_tech.jpg';
import Leaftlet from './images/leaflet.jpg';
import Mail from './images/mail.png';
import Pak_register from './images/pak_register.jpg';
import Pomodoro from './images/pomodoro.jpg';
import ShopSport from './images/shopsport.jpg'
import Traveler from './images/traveler.jpg'

function App() {
  return (
    <div className="App">
      <div className="welcome">
        <h1>Marcin Czernek - <span className="frontend" > Frontend developer </span></h1>
      </div>

      <div className="about">
        <p>Języki programowania:<span className="langauges"> Java, HTML, CSS, JavaScript, PHP </span> Bazy danych: <span
            className="langauges">MySQL, SQLite</span></p>
        <p>Biblioteki które znam: <span className="langauges">Bootstrap, SCSS, React, Symfony </span> Inne narzędzia: <span
            className="langauges">Git</span></p>
      </div>

      <div className="apps_container">

        <div className="app">
          <h2 className="app_header">Pomodoro JS</h2>
          <p className="app_desc">Responsywna aplikacja webowa pomodoro odliczająca wybrany czas w minutach i sekundach.
            Możliwośc pauzy i kontynuacji odliczania. Po upłynięciu wyznaczonego czasu odtwarzany jest gong.</p>
          <p className="app_tech">JavaScript HTML CSS Node</p>
          <img className="app_img" src={Pomodoro} alt="example" width="300px" height="250px"/>
          <a className="app_link_live" href="https://pomodoro-js-ten.vercel.app/">Podgląd</a>
            <a className="app_link_git" href="https://github.com/MarcinCzernek/pomodoro_js">Kod na Github</a>
        </div>

        <div className="app">
          <h2 className="app_header">Shop Sport</h2>
          <p className="app_desc">Internetowy sklep w którym użytkownicy mogą zarejestrować i zalogować się do systemu
            aby móc dodawać produkty sportowe do koszyka, a także usuwać je zgodnie z ich życzeniem.
            Ponadto, mogą oni potwierdzić zamówienie do dalszego procesu.
            Mogą także w ustawieniach konta zmienić hasło swojego konta lub całkowcie usunać swoje konto.
            Projekt umożliwia administratorowi sklepu/inwentaryzacji wygodne prowadzenie ewidencji produktów i zamówień
            w odpowiedni sposób.</p>
          <p className="app_tech">PHP JavaScript HTML CSS Bootstrap MySQL</p>
          <img className="app_img" src={ShopSport} alt="example" width="300px" height="250px"/>
           
            <a className="app_link_git" href="https://github.com/MarcinCzernek/shopSport">Kod na Github</a>
        </div>

        <div className="apps_links">
          <a href="https://github.com/MarcinCzernek/" target="_blank"><img className="profile" src={GitKot} alt="" width="50px" height="50px"/></a><br/>
          <a href="mailto:marcinczernek12@gmail.com" target="_blank"><img className="profile" src={Mail} alt="" width="50px" height="50px"/></a>
        </div>

        <div className="app">
          <h2 className="app_header">OpenAQ map</h2>
          <p className="app_desc">Aplikacja webowa zaznacza na mapie dane miasto i wyświetla poziom zanieczyszczenia
            powietrza w jego strefie. Korzysta z bazy danych o zanieczyszczeniu powietrza - API OpenAQ</p>
          <p className="app_tech">JavaScript</p>
        
          <a className="app_link_git" href="https://github.com/MarcinCzernek/Leaflet_javascript_lab3">Kod na Github</a>
          <img className="app_img" src={Leaftlet} alt="example" width="300px" height="250px"/>
        </div>

        <div className="app">
          <h2 className="app_header">Czat internetowy</h2>
          <p className="app_desc">Responsywna strona z formularzem logowania, rejestracji z możliwoscią dodawania
            użytkowników. Mogą oni zamieszczać na czacie komentarze które są filtrowane i nie zazwalają na używanie
            niedopowiednich słów.</p>
          <p className="app_tech">JavaScript PHP HTML CSS MySQL</p>
          <img className="app_img" src={Pak_register} alt="example" width="300px" height="250px"/>
            
            <a className="app_link_git" href="https://github.com/MarcinCzernek/PAK-project">Kod na Github</a>
        </div>
        <div className="app">
          <h2 className="app_header">Strona kawiarni</h2>
          <p className="app_desc">Strona dla kawiarni stworzona w React JS z animacjami.</p>
          <p className="app_tech">React JS</p>
          <img className="app_img" src={Cafe} alt="example" width="300px" height="250px"/>
            <a className="app_link_live" href="https://cafe-page.vercel.app/">Podgląd</a>
            <a className="app_link_git" href="https://github.com/MarcinCzernek/cafe_page">Kod na Github</a>
        </div>
        <div className="app">
          <h2 className="app_header">Strona info_tech</h2>
          <p className="app_desc">Responsywna strona template dla usług informatycznych stworzona w React.</p>
          <p className="app_tech">React JS</p>
          <img className="app_img" src={Info_tech} alt="example" width="300px" height="250px"/>
            <a className="app_link_live" href="https://info-tech-website.vercel.app/">Podgląd</a>
            <a className="app_link_git" href="https://github.com/MarcinCzernek/info_tech_website">Kod na Github</a>
        </div>
        <div className="app">
          <h2 className="app_header">Strona Traveler</h2>
          <p className="app_desc">Szablon strony internetowej domyślnej firmy turystycznej</p>
          <p className="app_tech">React JS</p>
          <img className="app_img" src={Traveler} alt="example" width="300px" height="250px"/>
            <a className="app_link_live" href="https://traveler-website.vercel.app/">Podgląd</a>
            <a className="app_link_git" href="https://github.com/MarcinCzernek/traveler_website">Kod na Github</a>
        </div>
        <div className="app">
          <h2 className="app_header">Aplikacja mobilna EasyEnglish</h2>
          <p className="app_desc">Napisana pod system Android pomaga w skuteczenej i efektywnej nauce języka
            angielskiego ze słuchu.</p>
          <p className="app_tech">Java SQLite Android</p>
          <img className="app_img" src={Easy_eng} alt="example" width="300px" height="250px"/>
            
            <a className="app_link_git" href="https://github.com/MarcinCzernek/LearnEnglishApp">Kod na Github</a>
        </div>

      </div>
    </div>
  );
}

export default App;
