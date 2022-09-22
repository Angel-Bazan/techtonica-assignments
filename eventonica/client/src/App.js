  import "./App.css";
  import Header from "./components/header"; 
  import Users from "./components/Users"; 
  import Footer from "./components/footer"
  import Events from "./components/events"

function App() {
  return (
    <div className="App">
     
      <Header />
      <main>
        <div className="user-and-events">

        <section className="user-management">
            
          <Users />
        
          </section>

          <section className="event-management">
           <Events />
          </section>
        </div>

      

        <aside className="search-toolbar">
          <div>
            <h3>Find Events</h3>
            <form id="search" action="#">
              <fieldset>
                <label htmlFor="date-search">Date</label>
                <input type="text" id="date-search" placeholder="YYYY-MM-DD" />
              </fieldset>
              <fieldset>
                <label htmlFor="category-search">Category</label>
                <input type="text" id="category-search" />
              </fieldset>

              <input type="submit" value="Search" />
            </form>
          </div>
        </aside>
      </main>
      <Footer />

      {/* <footer>
        <div>
          Star Calendar favicon made by
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>
          Find your own on
          <a href="https://www.flaticon.com/" title="Flaticon">
            FlatIcon.com
          </a>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
