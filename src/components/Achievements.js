import React from 'react';

const Achievements = () => {
  return (
    <div id="achievements">
      <div className="container">
        <h1 className="sub-title">My Achievements</h1>
        <div className="achievements-list">
        <div>
            <i className="fa-solid fa-code"></i>
            <h2>Media Recognition</h2>
            <p>• KRISHISEVAK.AI got published in the newspaper of kanpur.</p>
          </div>
          <div>
            <i className="fa-solid fa-code"></i>
            <h2>Coding Platforms</h2>
            <p>• Completed 350+ questions on LeetCode.<br />• 6 star on Hackerrank.</p>
          </div>
          <div>
            <i className="fa-solid fa-certificate"></i>
            <h2>Certificates</h2>
            <p>• Certificate of Evolve Club-IIT Kanpur<br />• SimpliLearn Certificate C++</p>
          </div>
          <div>
            <i className="fa-solid fa-people-group"></i>
            <h2>Team Managing and Leadership</h2>
            <p>• Organized an event from our department and made it successful with a team of 12 members.<br />• Led the class project and completed it one week before the deadline, earning appreciation from the Head of Department.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;

