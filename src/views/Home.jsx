import Header from "../components/Header";


function Home({ text, druha, tretia }) {
  // for (let i = 0; i < 100; i++) {
  //   console.log(i);
  // }

  // console.log(druha, tretia)

  return (
    <>
      <Header title={"Domov"}/>
      <p>{text}</p>
    </>
  );
}

export default Home;
