import Header from "../components/Header";
import QuestionList from "../components/QuestionList";

// verejne
function PollsList() {
  // normalne si to GETnem zo servere - konretne z API
  let questions = [
    {
      id: 1,
      question_text: "Ako sa mas?",
      choices: [
        {
          id: 1,
          text: "Dobre"
        },
        {
          id: 2,
          text: "Zle"
        }
      ]
    }
  ]
  // let questions = ["Q1", "Q2"];

  // console.log(questions);

  return (
    <>
      <Header title={"Zoznam"} />
      <QuestionList data={questions} />
    </>
  );
}

export default PollsList;
