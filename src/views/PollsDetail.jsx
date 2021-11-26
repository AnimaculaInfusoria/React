import Header from "../components/Header";

import Choices from "../components/Choices";
import { Link } from "react-router-dom";

function PollsDetail() {

  const poll = {
    "id": 1,
    "question_text": "Ako sa mas?",
    "choices": [
        {
            "id": 1,
            "choice_text": "Dobre",
            "question": 1,
            "votes": 5
        },
        {
            "id": 2,
            "choice_text": "Zle",
            "question": 1,
            "votes": 3
        },
        {
            "id": 3,
            "choice_text": "Neviem",
            "question": 1,
            "votes": 5
        },
        {
            "id": 4,
            "choice_text": "Dobre",
            "question": 1,
            "votes": 1
        }
    ]
}


  return (
    <>
      <Header title={poll.question_text}/>
      <Choices choices={poll.choices}/>
      <Link to="/list/">Spat</Link>
    </>
  );
}

export default PollsDetail;
