import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/testlister.css"; // Import CSS

const TestLister = () => {
  const [activeSection, setActiveSection] = useState("explorersQuest");
  const [queryTestId, setQueryTestId] = useState("");
  const [queryCreatorId, setQueryCreatorId] = useState("");

  const handleQueryTestIdChange = (e) => {
    setQueryTestId(e.target.value);
  };

  const handleQueryCreatorIdChange = (e) => {
    setQueryCreatorId(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission or filtering based on queryTestId and queryCreatorId
    console.log(`Query submitted for ${activeSection} with Test ID: ${queryTestId} and Creator ID: ${queryCreatorId}`);
  };

  return (
    <div className="test-lister-container">
      <div className="sidebar">
        <ul className="ul">
          <li className="li">
            <button className={`button ${activeSection === "explorersQuest" ? "active" : ""}`} onClick={() => setActiveSection("explorersQuest")}>
              Explorer's Quest
            </button>
          </li>
          <li className="li">
            <button className={`button ${activeSection === "tailoredChallenges" ? "active" : ""}`} onClick={() => setActiveSection("tailoredChallenges")}>
              Tailored Challenges
            </button>
          </li>
          <li className="li">
            <button className={`button ${activeSection === "creatorsLab" ? "active" : ""}`} onClick={() => setActiveSection("creatorsLab")}>
              Creator's Lab
            </button>
          </li>
        </ul>
      </div>

      <div className="content">
        <div className={`div ${activeSection === "explorersQuest" ? "active" : ""}`}>
          <form className="form" onSubmit={handleFormSubmit}>
            <div className="form-row">
              <label className="label">
                Test ID:
                <input className="input" type="text" value={queryTestId} onChange={handleQueryTestIdChange} />
              </label>
              <label className="label">
                Creator ID:
                <input className="input" type="text" value={queryCreatorId} onChange={handleQueryCreatorIdChange} />
              </label>
              <button className="submit-button" type="submit">
                Filter Tests
              </button>
            </div>
          </form>
          <p className="p">
            Embark on a journey of diverse challenges that span various topics and fields. Explore and test your knowledge across a wide spectrum of subjects.
          </p>

          {/* Card Component */}
          <div className="test-card">
            <div className="card-details">
              <div>
                <strong>Test Name:</strong> Sample Test
              </div>
              <div>
                <strong>Marks:</strong> 100
              </div>
              <div>
                <strong>Duration:</strong> 60 mins
              </div>
              <div>
                <strong>Negative Marking:</strong> Yes
              </div>
            </div>
            <button className="card-button">Attempt Test</button>
          </div>
        </div>

        <div className={`div ${activeSection === "tailoredChallenges" ? "active" : ""}`}>
          <form className="form" onSubmit={handleFormSubmit}>
            <div className="form-row">
              <label className="label">
                Test ID:
                <input className="input" type="text" value={queryTestId} onChange={handleQueryTestIdChange} />
              </label>
              <label className="label">
                Creator ID:
                <input className="input" type="text" value={queryCreatorId} onChange={handleQueryCreatorIdChange} />
              </label>
              <button className="submit-button" type="submit">
                Filter Tests
              </button>
            </div>
          </form>
          <p className="p">
            Tailored challenges designed to test your skills in specific areas. Choose a challenge that aligns with your interests and expertise.
          </p>

          {/* Card Component */}
          <div className="test-card">
            <div className="card-details">
              <div>
                <strong>Test Name:</strong> Tailored Challenge 1
              </div>
              <div>
                <strong>Marks:</strong> 50
              </div>
              <div>
                <strong>Duration:</strong> 30 mins
              </div>
              <div>
                <strong>Negative Marking:</strong> No
              </div>
            </div>
            <button className="card-button">Attempt Test</button>
          </div>
        </div>

        <div className={`div ${activeSection === "creatorsLab" ? "active" : ""}`}>
          <p className="p">
            Unleash your creativity in the Creator's Lab. Design and share your own tests, and challenge others to explore your curated assessments. Be the architect of knowledge!
          </p>

          {/* Card Component */}
          <div className="test-card">
            <div className="card-details">
              <div>
                <strong>Test Name:</strong> Creator's Lab Test
              </div>
              <div>
                <strong>Marks:</strong> 75
              </div>
              <div>
                <strong>Duration:</strong> 45 mins
              </div>
              <div>
                <strong>Negative Marking:</strong> Yes
              </div>
            </div>
            <button className="card-button">Attempt Test</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestLister;
