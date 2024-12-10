import React from 'react';

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
        <div className="work">
            <img src="/images/workkk.png" alt="KRISHISEVA" />
            <div className="layer">
              <h3>KRISHISEVA- Website (ON-GOING)</h3>
              <p>This project is a solution to daily life problems, demonstrating how technology can aid in agriculture. It reflects my IoT and web development skills.</p>
              <a href="https://drive.google.com/drive/folders/1bxIdqTEbgpSanvR8V19jZiS0761ywiUl?usp=drive_link"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
            </div>
          <div className="work">
            <img src="/images/Screenshot (182).png" alt="Text-Editor" />
            <div className="layer">
              <h3>Text-Editor</h3>
              <p>A text editor can help users by providing an intuitive interface for formatting text with features like bold, italics, bullet points, and embedded images, making document creation and editing more efficient.</p>
              <a href="https://github.com/stutikesu/Text-editor"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="work">
            <img src="/images/Screenshot (181).png" alt="EDUBOOSTER" />
            <div className="layer">
              <h3>EDUBOOSTER- Website</h3>
              <p>EDUBOOSTER can help students regarding the mentorship. If a student is facing doubts in their subject and they feel their class teacher is not helpful, they can book sessions with any teacher of their college for guidance.</p>
              <a href="https://github.com/stutikesu/EDUBOOSTER"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

