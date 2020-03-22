import React from 'react'
import ResumePdf from '../assets/pdf/CV-Michel-Moraes-2020-EN.pdf'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope"></span>
            <h3>Email</h3>
            <a href="mailto:michel@nitdesign.com.br">michel@nitdesign.com.br</a>
          </div>
          <div className="contact-method">
            <span className="icon alt fa-phone"></span>
            <h3>Call me</h3>
            <span>+34 679119468</span>
          </div>
        </section>

        <section>
          <ul class="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/michelmany"
                class="icon fa-linkedin"
              >
                <span class="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/michelmany" class="icon fa-github">
                <span class="label">Github</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/michelmany" class="icon fa-twitter">
                <span class="label">Twitter</span>
              </a>
            </li>
          </ul>
          <a
            href={ResumePdf}
            className="button icon fa-file-pdf-o"
            download="CV-Michel-Moraes-2020-EN"
          >
            Download CV
          </a>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
