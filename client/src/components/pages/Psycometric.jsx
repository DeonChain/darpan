import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update } from "../../Function/User";
import "./css/createtest.css";

const Createtest = () => {
  let data = useSelector((state) => state.user);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data.email && !data.loading) {
      Navigate("/");
    }
  }, [data]);


  return (
    <>
      <div className="Createtest">
        <div className="Ctest-main">
          <div className="left-bx">

          <div className="section-tgl">
                Fill Up Details
          </div>
           
          <div
                  key=""
                  className=
                       "section-tgl selected-tgl"             
                >
                  Section 

                </div>
              
            
            <div className="button-submit-container">
              <button className="">
                Submit
              </button>
            </div>
            
            <div className="test-subhead">
              <p>Test Title</p>
              <button className="edit-test"> Edit </button>
            </div>

            <div className="section-select">
              <label>Select Section:</label>
              <select value="" onChange="">
                
                  <option key="" value="">
                    Section 
                  </option>
              </select>
            </div>
            
              <div className="section-tgl">
                Test paper
              </div>
           
               

          </div>

          <div className="right-bx">
            <div className="test-subhead" style={{ background: "#e7e7e7" }}>
              <p>Duration: {} Min</p>
              <p>
                Questions:{" "}
                
              </p>
              <p>
                Marks:{" "}
              </p>
            </div>
            <div className="input-container">
              <p>
                <span>
                  Question :{" "}
                  <input
                    type="text"
                    value=""
                  />
                </span>
                <span>
                  Options:
                  <select  >
                    <option value={2}>Two </option>
                    <option value={3}>Three</option>
                    <option value={4}>Four</option>
                    <option value={5}>Five</option>
                  </select>
                </span>
              </p>
                <div key="" className="option-con">
                  <span>Options :</span>
                  <input
                    className="option-entry"
                    value=""
                  />
                  <label>
                    Is Correct:
                    <input
                      type="checkbox"
                      checked=""
                    />
                  </label>
                </div>
              
              <div className="button-container">
                <button>Previous</button>
                <button>
                  "Add Question"
                  </button>
                <button >Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Createtest;
