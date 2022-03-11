import React from 'react'
import '../Styles/global.css'
import Header from '../Components/subComponents/Header'
export const Aboutus = () => {
  return (
    <div >
        <div className='blank__resume'>
          
        <div className="wrapper">
              <div className="intro">
                <div className="profile">
                  <div className="photo">
                    <img src="https://i.imgur.com/zh9eNsh.jpg" />
                  </div>
                  <div className="bio">
                    <h1 className="name">Chih-Hsiang Chen</h1>
                    <p className="profession">Front-end Developer</p>
                  </div>
                </div>
                <div className="intro-section about">
                  <h1 className="title">about me</h1>
                  <p className="paragraph">
                    Hi everyone, I am a web front-end developer, graduated from NTHU, Taiwan and my major is CS. I recently try my
                    best to improve my skills on web front-end. My favorite thing is to observe others' portfolio.
                  </p>
                </div>
                <div className="intro-section contact">
                  <h1 className="title">Contact</h1>
                  <div className="info-section">
                    <i className="fas fa-phone"></i>
                    <span>(+886)888-888-888</span>
                  </div>
                  <div className="info-section">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Kaoshiung, Taiwan</span>
                  </div>
                  <div className="info-section">
                    <i className="fas fa-paper-plane"></i>
                    <span>chih.hsi.chen@gmail.com</span>
                  </div>
                  <div className="info-section link">
                    <i className="fab fa-facebook"></i>
                    <a target="_blank" rel="author" href="https://www.facebook.com/profile.php?id=100006277752355">
                      <span>陳志祥</span>
                    </a>
                  </div>
                </div>
                <div className="intro-section follow">
                  <h1 className="title">Follow</h1>
                  <div className="info-section link">
                    <i className="fab fa-github"></i>
                    <a className="_blank" rel="author" href="https://github.com/chih-hsi-chen">
                      <span>chih-hsi-chen@github</span>
                    </a>
                  </div>
                  <div className="info-section link">
                    <i className="fab fa-codepen"></i>
                    <a target="_blank" rel="author" href="https://codepen.io/chih-hsi-chen">
                      <span>codepen.io</span>
                    </a>
                  </div>
                  <div className="info-section link">
                    <i className="fab fa-medium"></i>
                    <a target="_blank" rel="author" href="https://medium.com/狗奴工程師">
                      <span>狗奴工程師</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="detail">
                <div className="detail-section edu">
                  <div className="detail-title">
                    <div className="title-icon">
                      <i className="fas fa-user-graduate"></i>
                    </div>
                    <span>Eduation</span>
                  </div>
                  <div className="detail-content">
                    <div className="timeline-block">
                      <h1>Department of Computer Science</h1>
                      <p>National Tsing Hua University, Taiwan</p>
                      <time>2015 - 2019</time>
                    </div>
                    <div className="timeline-block">
                      <h1>Institute of Computer Science and Engineering</h1>
                      <p>National Chiao Tung University, Taiwan</p>
                      <time>2020 - present</time>
                    </div>
                  </div>
                </div>
                <div className="detail-section pg-skill">
                  <div className="detail-title">
                    <div className="title-icon">
                      <i className="fas fa-laptop-code"></i>
                    </div>
                    <span>Programming skills</span>
                  </div>
                  <div className="detail-content">
                    <ul className="pg-list">
                      <li>
                        <span>HTML5</span>
                        <div className="sb-skeleton">
                          <div className="skillbar" ></div>
                        </div>
                      </li>
                      <li>
                        <span>CSS3</span>
                        <div className="sb-skeleton">
                          <div className="skillbar" ></div>
                        </div>
                      </li>
                      <li>
                        <span>Javascript</span>
                        <div className="sb-skeleton">
                          <div className="skillbar" ></div>
                        </div>
                      </li>
                      <li>
                        <span>JQuery</span>
                        <div className="sb-skeleton">
                          <div className="skillbar" ></div>
                        </div>
                      </li>
                      <li>
                        <span>NodeJS</span>
                        <div className="sb-skeleton">
                          <div className="skillbar" ></div>
                        </div>
                      </li>
                      <li>
                        <span>ReactJS</span>
                        <div className="sb-skeleton">
                          <div className="skillbar" ></div>
                        </div>
                      </li>
                      <li>
                        <span>VueJS</span>
                        <div className="sb-skeleton">
                          <div className="skillbar"></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="detail-section tool-skill">
                  <div className="detail-title">
                    <div className="title-icon">
                      <i className="fas fa-tools"></i>
                    </div>
                    <span>Developement Tools</span>
                  </div>
                  <div className="detail-content">
                    <ul className="tool-list">
                      <li>
                        <svg viewbox="0 0 100 100">
                          <circle cx="50" cy="50" r="45"></circle>
                          <circle className="cbar" cx="50" cy="50" r="45" ></circle>
                        </svg>
                        <span className="tl-name">Photoshop</span>
                        <span className="tl-exp">60%</span>
                      </li>
                      <li>
                        <svg viewbox="0 0 100 100">
                          <circle cx="50" cy="50" r="45"></circle>
                          <circle className="cbar" cx="50" cy="50" r="45" ></circle>
                        </svg>
                        <span className="tl-name">Sublime</span>
                        <span className="tl-exp">80%</span>
                      </li>
                      <li>
                        <svg viewbox="0 0 100 100">
                          <circle cx="50" cy="50" r="45"></circle>
                          <circle className="cbar" cx="50" cy="50" r="45" ></circle>
                        </svg>
                        <span className="tl-name">Git</span>
                        <span className="tl-exp">70%</span>
                      </li>
                      <li>
                        <svg viewbox="0 0 100 100">
                          <circle cx="50" cy="50" r="45"></circle>
                          <circle className="cbar" cx="50" cy="50" r="45" ></circle>
                        </svg>
                        <span className="tl-name">NPM</span>
                        <span className="tl-exp">74%</span>
                      </li>
                    </ul>
                  </div>

                </div>
                <div className="detail-section interests">
                  <div className="detail-title">
                    <div className="title-icon">
                      <i className="fas fa-heart"></i>
                    </div>
                    <span>Interests</span>
                  </div>
                  {/* <div className="detail-content">
                    <div className="outer-frame">
                      <ul className="favor-list">
                        <li>
                          <i className="fas fa-gamepad"></i>
                          <span>Game</span>
                        </li>
                        <li>
                          <i className="fas fa-paw"></i>
                          <span>Pet</span>
                        </li>
                        <li>
                          <i className="far fa-headphones-alt"></i>
                          <span>Music</span>
                        </li>
                        <li>
                          <i className="fas fa-book-spells"></i>
                          <span>Self-learning</span>
                        </li>
                        <li>
                          <i className="fas fa-user-edit"></i>
                          <span>Blog</span>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
