import "./App.css";
import HtmlPartExos from "./components/htmlParts";
import CssPartExos from "./components/cssPart";
import JsPartExos from "./components/javascript";
import DocsInfos from "./components/documentation";


function App() {
  return (
    <>
      <header className="flex p-5 mb-10 bg-blue-900 shadow-md rounded-b-lg w-screen fixed md:w-screen">
        <h1 className="sm:text-10">The Starting Point</h1>
        
        <nav className="w-14 text-xl m-5 px-50 bg-auto border-blue-950 md:divide-t-4 flex xl:visible md:invisible">

          <a href="app.jsx" className="mx-20">
            <p className="text-white">Home</p>
          </a>
          <a href="#sources" className="mx-20">
            <p className="text-white">Sources</p>
          </a>
          <a href="#exercices" className="mx-20">
            <p className="text-white">Exercices</p>
          </a>
        </nav>
        

      </header>

      <section className="p-10 m-10 text-xl md:px-100 md:mt-200">
        <article className="intro mt-20 mb-20">
          <p>
            Hello There ! If you are here it is because you want to learn, right
            ? Well this is the "Starting Point" and it's here to help you with
            the world of coding. You see it as an little introduction and here,
            you can find some sources that can help you to starting your coding
            journey !
          </p>
        </article>

        <article id="sources" className="mb-10">
          <h2 className="underline mb-10 font-bold">Sources</h2>

          <DocsInfos />

          <article className="videos mb-10">
            <h3 className="mb-10 underline">
              Video Courses & Youtube Channels
            </h3>
            <ul>
              <li className="mb-20 font-black">
                <a href="https://www.freecodecamp.org/">
                  freeCodeCamp: for HTML, CSS, Javascript and more
                  <img className="shadow-md" src="https://play-lh.googleusercontent.com/6Sg_Za7s_9pgZnxN-2w5-rHkV1iBJcGNUmrGdfayjgHCXD3JYnumEhXFMbIYJePXjBdB" alt="fcc" />
                </a>
              </li>

              <li className="mb-30">
                <a href="https://www.youtube.com/traversymedia">
                  Traversy Media: From basic to advanced web developpement
                  <img className="shadow-md" 
                  src="https://yt3.googleusercontent.com/tgu72YzXtku2Ua3jfbDDIPgy_rm81Lt9uTKrYLWGJsiQTcBEhvrxe8OJDKvTYTrMNpTr45V1T-4=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" alt="tm" />
                </a>
              </li>

              <li className="mb-30">
                <a href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg">
                  The Net Ninja: well structured tutos on various framework
                  <img className="shadow-md"
                   src="https://yt3.googleusercontent.com/MPzoc_Hh8eZ-83FD1gNg3NubBUNcf6wuykpnc0y4OpDxP60pbXOhHbEtaX6J-9uyW5z1rDlI=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" alt="nn" />
                </a>
              </li>

              <li className="mb-30">
                <a href="https://www.youtube.com/c/programmingwithmosh">
                  Programming with Mosh: Great JavaScript and backend tutos
                  <img className="shadow-md"
                   src="https://yt3.googleusercontent.com/ebwd1JYISYUL4Psf_tA5U4SavSAHC9gjO0UliAKSZvoXuOH6Ygr6KEIExbyYypYudHLNUXaAXuo=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" alt="my" />
                </a>
              </li>
            </ul>
          </article>

          <article className="apps">
            <h2 className="underline mb-10">Apps for learning</h2>

            <ul>
              <li className="mb-20">
                <a href="https://www.sololearn.com/fr/">
                  SoloLearn: Interactive web developpemnt courses
                  <img className="shadow-md"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/SoloLearn_logo.svg/2560px-SoloLearn_logo.svg.png"
                  alt="sl"
                />
                </a>

              </li>

              <li className="mb-20">
                <a href="https://mimo.org/">Mimo: learn coding like a game
                <img
                  className="size-50 shadow-lg"
                  src="https://upload.wikimedia.org/wikipedia/commons/b/be/Mimo_Logo.png"
                  alt="mm"
                />
                </a>

              </li>

              <li className="mb-20">
                <a href="https://grasshopper-yz.netlify.app/">
                  Grasshopper: Js basics for beginners
                  <img className="shadow-lg"
                 src="https://grasshopper-yz.netlify.app/img/logo.blue.svg" alt="gh" />
                </a>
              </li>
            </ul>
          </article>
        </article>

        <section id="exercices" className="mb-10">
          <h2 className="underline mb-5">Exercices</h2>
          <p className="mb-10">
            Here, you can find some exercices to do to train a little bit
          </p>

          <article className="html part mb-10">
            <h3 className="font-bold mb-5">HTML Exercices</h3>
            <HtmlPartExos />
          </article>

          <article className="css part mb-10">
            <h3 className="mb-5 font-bold">CSS Ecerices</h3>
            <CssPartExos />
          </article>

          <article className="js part mb-10">
            <h3 className="mb-5 font-bold">Javascript Exercices</h3>
            <JsPartExos />
          </article>
        </section>

        <article className="mb-20 mt-20">
          <p>You can use Codepen to type your code in case</p>
          <a href="https://codepen.io/pen/" className="m-50 mt-5">
            Here !
          </a>
        </article>

        <article>
          <h2 className="underline mb-10">
            Final Task: Make a To Do list with Styled UI
          </h2>
          <p>
            With HTML, CSS and Javascript, build a responsive ToDo list with
            three things that the user can:
          </p>
          <ol>
            <li className="mb-5">Add and removes tasks</li>
            <li className="mb-5">See a well-styled interface.</li>
            <li className="mb-5">Change the background color dynamically.</li>
          </ol>
        </article>
      </section>

      <footer className="bg-blue-900 h-20 w-screen">
  
        <nav className="w-14 text-xl m-5 pt-5 px-50 bg-auto border-blue-950 lg:flex md:divide-t-4">
          <a href="app.jsx" className="mx-20">
            <p className="text-white">Home</p>
          </a>
          <a href="#sources" className="mx-20">
            <p className="text-white">Sources</p>
          </a>
          <a href="#exercices" className="mx-20">
            <p className="text-white">Exercices</p>
          </a>
        </nav>

      </footer>
    </>
  );
}

export default App;
