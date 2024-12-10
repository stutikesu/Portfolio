import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="/images/WhatsApp Image 2024-07-03 at 11.03.06 AM.jpeg" alt="About me" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              I'm passionate about implementing and launching new, challenging projects. I have a strong ability to translate business requirements into technical solutions. I am someone who never gives up, continuously upgrades my knowledge and skills, and displays uniqueness in everything I do. Additionally, I have an energetic, enthusiastic, and people-driven communication style. I have a proven ability to learn new technologies quickly and apply them appropriately.
            </p>
            <div className="tab-titles">
              <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => openTab('skills')}>Skills</p>
              <p className={`tab-links ${activeTab === 'projects' ? 'active-link' : ''}`} onClick={() => openTab('projects')}>Projects</p>
              <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => openTab('education')}>Education</p>
            </div>
            {activeTab === 'skills' && (
              <div className="tab-contents active-tab">
                <ul>
                  <li><span>Web Development</span><br />HTML, CSS, JavaScript, NodeJs, Expressjs, SQL, ReactJs, Machine Learning, etc.</li>
                  <li><span>DSA</span><br />C/C++/Python</li>
                  <li><span>Version Control</span><br />Git/GitHub</li>
                </ul>
              </div>
            )}
            {activeTab === 'projects' && (
              <div className="tab-contents active-tab">
                <ul>
                  <li><span>EDUBOOSTER</span><br />• Designed and Developed the entire website from scratch using HTML, CSS, JavaScript.<br />• Created a mentorship platform to facilitate better guidance for college students from their mentors.</li>
                  <li><span>Text-editor</span><br />• Built an entire text editor from scratch using HTML, CSS, and JavaScript.<br />• Utilized JavaScript to enable features such as text font customization, color changes, alignment adjustments, and more.</li>
                  <li><span>KRISHISEVA-(ON-GOING)</span><br />• Developing a module using various sensors like soil and temperature sensors to address daily agricultural challenges through technology.<br />• Designing both a website and an app for module operation; this IoT-based project is a collaborative effort with a team of six members.</li>
                </ul>
              </div>
            )}
            {activeTab === 'education' && (
              <div className="tab-contents active-tab">
                <ul>
                  <li><span>Class 10-2020</span><br />Bethany Convent School Prayagraj, Uttar Pradesh.</li>
                  <li><span>Class 12-2022</span><br />Bethany Convent School Prayagraj, Uttar Pradesh.</li>
                  <li><span>Bachelor Of Technology - Information Technology</span><br />Pranveer Singh Institute Of Technology Kanpur, Uttar Pradesh <br />7.77/10 CGPA.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
