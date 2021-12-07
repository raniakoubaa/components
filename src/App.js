
import './App.css';

// import Adresse from './component/Profil/Adresse';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Profil from './component/Profil/Profil';
import Listimage from './component/ListImage/Listimage';

function App() {
  const nom = "Rania Koubaa"
  const descrip = "Personnalité publique"
  const profess = "Developper"
  const handlclick = (Profilname) => { alert(`This person name is : ${Profilname}`) }
  let UrlImg = [
    {
      src: "https://static.remove.bg/remove-bg-web/126e8851f6e88bf644890fafdf1b0d82aff0629e/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
      title: "image1",
    },
    {
      src: "https://www.inpixio.com/remove-background/images/main-before.jpg",
      title: "image2",
    },
    {
      src: "https://www.slazzer.com/static/images/remove_image_background.jpg",
      title: "image3",
    },
    {
      src:
        "https://techager.com/wp-content/uploads/2021/06/How-to-100-Remove-Background-from-Image-online.jpg",
      title: "image4",
    },
  ];
  return (
    <div className="App">
      <Header />
      <Profil name={nom} handlclick={handlclick} bio={descrip} professional={profess} />
      <Listimage list={UrlImg}/>
      <Footer />
    </div>
  );
}

export default App;
