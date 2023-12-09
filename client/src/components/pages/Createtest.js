import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update } from "../../Function/User";
import Newtest from "../templates/Newtest";
import "./css/createtest.css";
import { updatetest } from "../../Function/Test";

const Createtest = () => {
  let data = useSelector((state) => state.user);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  let test = useSelector((state) => state.test);
  let auther = async () => {
    const response = await fetch("/api/authenticate", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    let res = await response.json();
    dispatch(update(res));
    if (!res.email) {
      Navigate("/");
    }
  };
  useEffect(() => {
    if (!data.email) {
      auther();
    }
  }, []);
  const [question, setQuestion] = useState({
    index:"",
    question: "",
    options: [
      {
        text: "",
        iscorrect: "",
      },
    ],
    multi_correct: false,
  });
   
  // === === === update function === === === //

  const updateQuestion = (property, value, optionIndex) => {
    setQuestion(prevQuestion => {
      if (property === 'options') {
        const updatedOptions = prevQuestion.options.map((option, index) => (
          index === optionIndex ? { ...option, [value]: value } : option
        ));
        return { ...prevQuestion, [property]: updatedOptions };
      }
      return { ...prevQuestion, [property]: value };
    });
  };

  const handleChange = (event, property, optionIndex) => {
    const { value, checked } = event.target;
    updateQuestion(property, property === 'multi_correct' ? checked : value, optionIndex);
  };

  // === === === end === === === //

  return (
    <>
      {!test.title || test.display ? <Newtest /> : ""}
      <div>
        <div className="test-subhead">
          <p>{test.title}</p>
          <button
            className="edit-test"
            onClick={() => dispatch(updatetest({ display: true }))}
          >
            {" "}
            edit{" "}
          </button>
        </div>
        <div className="Ctest-main">
          <div className="left-bx">
            {test.section == 1 ? (
              <div className="section-tgl">Test paper</div>
            ) : (
              Array.from({ length: test.section }, (_, index) => index + 1).map(
                (itm) => {
                  return <div className="section-tgl">Section {itm}</div>;
                }
              )
            )}
          </div>
          <div className="right-bx">
            <div className="test-subhead" style={{ background: "#e7e7e7" }}>
              <p>duration: {test.duration}</p>
              <p>
                Questions:{" "}
                {test.sections[0].questions.length +
                  test.sections[1].questions.length +
                  test.sections[2].questions.length}
                /
                {test.sections[0].question_count +
                  test.sections[1].question_count +
                  test.sections[2].question_count}
              </p>
              <p>
                marks:{" "}
                {test.sections[0].question_count * test.sections[0].marks +
                  test.sections[1].question_count * test.sections[1].marks +
                  test.sections[2].question_count * test.sections[2].marks}
              </p>
            </div>
            <div>
                <div>
                    Question : <input type="text" style={{"all":"initial", border:"solid 1px black"}} value={question.question} onChange={(e)=>{handleChange(e, 'question')}}/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Createtest;
