import "./globals.css";
import Header from './components/Header/Header'
import CovertFromPdf from './components/CovertFromPdf';
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Header/>
    <main className="main-contianer">
      <h1>Umair</h1>
      <CovertFromPdf/>
    </main>
    <Footer/>
    </>
  );
}
