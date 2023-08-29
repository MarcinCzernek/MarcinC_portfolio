
import { useState } from 'react';
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

//Main app component
function App() {

  const [lighting, setLighting] = useState('day');

  const toogleLighting = () => {setLighting(lighting === 'day' ? 'night' : 'day')};

  return (
    <div className="App" lighting={lighting}>
      <div className="welcome">
        <h1>Marcin - <span className="frontend" > Website developer </span></h1>
      </div>

      <div className="about">
        <p>Języki programowania:<span className="langauges"> HTML, CSS, JavaScript, PHP, Java </span> Bazy danych: <span
            className="langauges">MySQL, SQLite</span></p>
        <p>Biblioteki które znam: <span className="langauges">Bootstrap, SCSS, React </span> Inne narzędzia: <span
            className="langauges">Git</span></p>
      </div>

      <div className="apps_container">

        <div className="app">
          <h2 className="app_header">Pomodoro JS</h2>
          <p className="app_desc">Aplikacja pomodoro napisana w vanilla Javascript. Dzięki funkcji setInterval wykonywane jest odliczanie w sekundach czas trwania pomodoro. Gdy ustalony czas dobiegnie końca odtwarzany wtedy jest gong. Posiada czytelny i przejrzysty interfejs który dopasowuje się do ekranu urządzenia użytkownika</p>
          <p className="app_tech">JavaScript HTML CSS Node</p>
          <img className="app_img" src={Pomodoro} alt="example" width="300px" height="250px"/>
          <a className="app_link_live" href="https://pomodoro-js-ten.vercel.app/">Podgląd</a>
            <a className="app_link_git" href="https://github.com/MarcinCzernek/pomodoro_js">Kod na Github</a>
        </div>

        <div className="app">
          <h2 className="app_header">Shop Sport</h2>
          <p className="app_desc">Internetowy sklep ze sprzętem sportowym w którym użytkownicy mogą zarejestrować i zalogować się do systemu
            aby móc dodawać produkty sportowe do koszyka, a także usuwać je zgodnie z ich życzeniem.
            Ponadto, mogą oni potwierdzić zamówienie do dalszego procesu.
            Mogą także w ustawieniach konta zmienić hasło swojego konta lub całkowcie usunać swoje konto.
            Projekt umożliwia administratorowi sklepu/inwentaryzacji wygodne prowadzenie ewidencji produktów i zamówień
            w odpowiedni sposób. Użytkownicy - ich loginy, hasła oraz wybrane produkty są przechowywane w bazie danych MySQL</p>
          <p className="app_tech">PHP JavaScript HTML CSS Bootstrap MySQL</p>
          <img className="app_img" src={ShopSport} alt="example" width="300px" height="250px"/>
           
            <a className="app_link_git" href="https://github.com/MarcinCzernek/shopSport">Kod na Github</a>
        </div>

         
       
       

        <div className="app">
          <h2 className="app_header">OpenAQ map</h2>
          <p className="app_desc">Aplikacja webowa przy pomocy której można sprawdzić poziom zanieczyszczenia powietrza dowolnego miasta na świecie.
           Po wpisaniu nazwy miasta i Po naciśnięciu przycisku zostanie aktywowana funkcja getData która, jeśli otrzyma prawidłową
wartość, pobierze w pętli z Api OpenAQ 3 wartości: city, country i count - wartość określającą poziom zanieczyszczenia powietrza. Stworzyłem obiekt mapy, z warstwą oraz zmienną query_addr do której trafia nazwa wyszukanego miasta, która następnie zostanie wyszukana w OS. Marker wyświetla nazwę miasta oraz
poziom jego zanieczyszczenia. Mapa świata zostaje wyśrodkowana na jego lokalizacji. Aplikacja korzysta z odczytu API o zanieczyszczeniu powietrza - API OpenAQ</p>
          <p className="app_tech">JavaScript</p>
        
          <a className="app_link_git" href="https://github.com/MarcinCzernek/Leaflet_javascript_lab3">Kod na Github</a>
          <img className="app_img" src={Leaftlet} alt="example" width="300px" height="250px"/>
        </div>

        <div className="app">
          <h2 className="app_header">Czat internetowy</h2>
          <p className="app_desc">Wymaga zarejestrowania użytkownika i zalogowania. Mogą oni zamieszczać na czacie komentarze które są filtrowane i nie zazwalają na używanie
            wybranych niedopowiednich słów. Użytkownicy i ich komentarze są przechowywane w bazie danych MySQl. Mechanizm cenzury został napisany w języku PHP.</p>
          <p className="app_tech">JavaScript PHP HTML CSS MySQL</p>
          <img className="app_img" src={Pak_register} alt="example" width="300px" height="250px"/>
            
            <a className="app_link_git" href="https://github.com/MarcinCzernek/PAK-project">Kod na Github</a>
        </div>
        <div className="app">
          <h2 className="app_header">Kawiarnia</h2>
          <p className="app_desc">Klimatyczna strona internetowa dla wykwintnej kawiarni utrzymana w złotej kolorystyce z dużą ilością zdjęć. Jest responsywna a więc pasuje do przeglądania na każdym urządzeniu. Napisana w React.</p>
          <p className="app_tech">React JS</p>
          <img className="app_img" src={Cafe} alt="example" width="300px" height="250px"/>
            <a className="app_link_live" href="https://cafe-page.vercel.app/">Podgląd</a>
            <a className="app_link_git" href="https://github.com/MarcinCzernek/cafe_page">Kod na Github</a>
        </div>
        <div className="app">
          <h2 className="app_header">Info-tech</h2>
          <p className="app_desc">Przykład strony internetowej o biało-niebieskim motywie zbudowanej w React, przeznaczony dla firm powiązanych z IT lub technologią. </p>
          <p className="app_tech">React JS</p>
          <img className="app_img" src={Info_tech} alt="example" width="300px" height="250px"/>
            <a className="app_link_live" href="https://info-tech-website.vercel.app/">Podgląd</a>
            <a className="app_link_git" href="https://github.com/MarcinCzernek/info_tech_website">Kod na Github</a>
        </div>
        <div className="app">
          <h2 className="app_header">Traveler</h2>
          <p className="app_desc">Szablon strony internetowej dla branży turystycznej oferującej podróze po świecie.</p>
          <p className="app_tech">React JS</p>
          <img className="app_img" src={Traveler} alt="example" width="300px" height="250px"/>
            <a className="app_link_live" href="https://traveler-website.vercel.app/">Podgląd</a>
            <a className="app_link_git" href="https://github.com/MarcinCzernek/traveler_website">Kod na Github</a>
        </div>
        <div className="app">
          <h2 className="app_header">Aplikacja mobilna EasyEnglish</h2>
          <p className="app_desc">Napisana pod system Android pomaga w skutecznej i efektywnej nauce języka
            angielskiego ze słuchu. Realizuje to za pomocą czterech głównych funkcjonalności: <br></br><b>Rejestrator dźwięku</b> - za jego pomocą można nagrywać i zapisywać do plików wav dźwięk, wychodzący z urządzenia mobilnego.<br></br>
            <b>Odtwarzacz audio</b> - odtwarzanie nagranych plików audio, lub pochodzących z innych źródeł.<br></br> <b>Możliwość powtórki w odtwarzaczu</b> - zapętlenia odtwarzanego materiału audio, lub wyznaczenia- za pomocą widżetu „Range seekbar” - jego początku i końca.<br></br> <b>Przypomnienia </b> - menu z fiszkami, składające się z listy, oraz - z dwóch przycisków. Jeden przycisk odpowiada za usunięcie wszystkich fiszek a drugi - za utworzenie nowej fiszki.
</p>
          <p className="app_tech">Java SQLite Android</p>
          <img className="app_img" src={Easy_eng} alt="example" width="300px" height="250px"/>
            
            <a className="app_link_git" href="https://github.com/MarcinCzernek/LearnEnglishApp">Kod na Github</a>
        </div>

      </div>

      <div className="apps_links">
          <a href="https://github.com/MarcinCzernek/" target="_blank"><img className="profile" src={GitKot} alt="" width="50px" height="50px"/></a><br/>
          <a href="mailto:marcinczernek12@gmail.com" target="_blank"><img className="profile" src={Mail} alt="" width="50px" height="50px"/></a>
          <button id="setColor" onClick={toogleLighting}></button>
        </div>

        

    </div>
  );
}

export default App;
