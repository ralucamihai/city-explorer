export default function App() {
  return (
    <>
      <header className="site-header">
        <h1>City Explorer</h1>
        <nav className="menu">
          <a href="#destinatii">Destinații</a>
          <a href="#planifica">Planifică</a>
          <a href="#recomandari">Recomandări</a>
        </nav>
      </header>

      <main>
        <section id="destinatii">
          <h2>Destinații</h2>
          <div className="cards">
            <article className="card">
              <h3>Paris</h3>
              <p><strong>Țara:</strong> Franța</p>
              <p>Orașul luminilor, perfect pentru plimbări pe malul Senei.</p>
              <p><em>Durata recomandată: 4 zile</em></p>
            </article>
            <article className="card featured">
              <h3>Roma</h3>
              <p><strong>Țara:</strong> Italia</p>
              <p>Un muzeu în aer liber, ideal pentru pasionații de istorie.</p>
              <p><em>Durata recomandată: 5 zile</em></p>
            </article>
            <article className="card">
              <h3>Kyoto</h3>
              <p><strong>Țara:</strong> Japonia</p>
              <p>Temple antice și grădini tradiționale de o frumusețe rară.</p>
              <p><em>Durata recomandată: 7 zile</em></p>
            </article>
            <article className="card">
              <h3>New York</h3>
              <p><strong>Țara:</strong> SUA</p>
              <p>O metropolă vibrantă cu zgârie-nori și parcuri imense.</p>
              <p><em>Durata recomandată: 6 zile</em></p>
            </article>
            <article className="card">
              <h3>Barcelona</h3>
              <p><strong>Țara:</strong> Spania</p>
              <p>Plaje însorite și arhitectura inconfundabilă a lui Gaudí.</p>
              <p><em>Durata recomandată: 4 zile</em></p>
            </article>
          </div>
        </section>

        <section id="planifica">
          <h2>Planifică excursia</h2>
          <form>
            <label htmlFor="name">Nume</label>
            <input id="name" name="name" type="text" />

            <label htmlFor="destination">Destinație</label>
            <select id="destination" name="destination">
              <option value="">Alege...</option>
              <option value="Paris">Paris</option>
              <option value="Roma">Roma</option>
              <option value="Kyoto">Kyoto</option>
              <option value="New York">New York</option>
              <option value="Barcelona">Barcelona</option>
            </select>

            <label htmlFor="days">Număr de zile</label>
            <input id="days" name="days" type="number" />

            <button type="submit">Planifică excursia</button>
          </form>
        </section>

        <section id="recomandari">
          <h2>Recomandări</h2>
          <ul>
            <li>Fă-ți mereu o asigurare de călătorie înainte de a pleca.</li>
            <li>Verifică prognoza meteo pentru a împacheta hainele potrivite.</li>
            <li>Salvează o hartă offline a orașului pe telefon.</li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        Raluca WorldTour, 2026
      </footer>
    </>
  )
}