
const Choice = ({choice}) => {
  return <li>{choice.choice_text}: {choice.votes}</li>;
}

const Choices = ({ choices }) => {
  return (
    <ul>
      {choices.map((choice) => {
        return <Choice choice={choice}/>
      })}
    </ul>
  );
};

export default Choices;
