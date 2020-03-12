import React from 'react';
import './Contact.css';
import Button from '../Button/Button';


const Contact = () => (
    <section className="Form">
        <div className="container">
            <form>
                <legend>Contact Us</legend>

                <p><label for="camponombre" ></label>
                <input type="text" name="nombre" id="camponombre" placeholder="Name" required></input>
                </p>
                <p><label for="campoemail" ></label>
                <input type="text" name="Email" id="campoemail" placeholder="Email" required></input>
                </p>
                <p><label for="camposubject" ></label>
                <input type="text" name="subject" id="camposubject" placeholder="Subject" required></input>
                </p>
                <p><label for="campomessage" ></label>
                <textarea id="campomessage" name="message" placeholder="Message" rows="4" cols="20" required></textarea>
                </p>
        
                   <Button> Send</Button>
                 
                 </form>
                 </div>
                </section>
    
  
);

export default Contact;
