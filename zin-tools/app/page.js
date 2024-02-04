import "./globals.css";
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks'
import ConvertFromPdf from './components/ConvertFromPdf'
import ConvertToPdf from './components/ConvertToPdf'
import Footer from "./components/Footer";
import SliderConvertFromPdf from "./components/SliderConvertFromPdf";

export default function Home() {
  return (
    <>
    <Header/>
    <main className="main-contianer">
      <Bookmarks/>
      <SliderConvertFromPdf/>
      <ConvertFromPdf/>
      <ConvertToPdf/>
    </main>
    <Footer/>
    </>
  );
}
