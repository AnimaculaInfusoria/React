// const ArrowList = ({tu}) => {};

// function SimpleList({tu}) {}

const QuestionListItem = ({ item }) => {
  console.log(item);

  return (
    <>
      <li style={{ listStyle: "none" }}>{item.question_text}</li>
    </>
  );
};

function QuestionList({ data }) {
  console.log("List -> ", data);

  // ked robim s polom a chcem ho prechadzat NIE cyklus ale MAP
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  // ked pouzivam map tak pouzivam arrow function
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  return (
    <>
      <ul>
        {data.map((item) => {
          return <QuestionListItem item={item} />;
        })}
      </ul>
    </>
  );
}

export default QuestionList;
