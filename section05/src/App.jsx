import './App.css'
import Button from './components/Button.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

function App() {

  const buttonProps = {
    text: "메일",
    color: "yellow",
    a: 1,
    b: 2,
  };

  return (
    <>
      <Header />
      <Main />
      <Footer />

      <Button {...buttonProps} />
      <Button text={"카페"}/>
      <Button text={"블로그"}>
        <div>자식요소</div>
        <Header />
      </Button>
    </>
  )
}

export default App
