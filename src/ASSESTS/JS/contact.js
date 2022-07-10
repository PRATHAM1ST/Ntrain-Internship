import '../CSS/contact.css';
import contactBg from './IMAGES/contact.png';
import React from "react";

export default function Contact(){
        
    const FormSubmit = (e)=>{
        e.preventDefault();
        const Form = document.forms["contact-form"];
        const submitButton = document.querySelector('.contact-field-submit');
        const allFields = document.querySelectorAll('.contact-field');
        allFields.forEach(e=>{
            e.style.userSelect = 'none';
        })
        submitButton.innerHTML = "Please Wait...";  
        submitButton.classList.add('wait');
        fetch(process.env.REACT_APP_CONTACT_FORM_KEY, { method: "POST", body: new FormData(Form) })
        .then((response) => {
            submitButton.classList.remove('wait');
            submitButton.innerHTML = "Thank You";  
            submitButton.classList.add('success');
            allFields.forEach(e=>{
                e.style.userSelect = 'auto';
            })
            setTimeout(()=>{
                submitButton.innerHTML = "Submit";  
                submitButton.classList.remove('success');
            }, 5000)  
        })
        .catch((error) => {
            submitButton.classList.remove('wait');
            submitButton.innerHTML = "Error";  
            submitButton.classList.add('error');  
            setTimeout(()=>{
                submitButton.innerHTML = "Submit";  
                submitButton.classList.remove('error');
            }, 5000)  
          });
        Form.reset();
    }

    return(
        <div className="section" id='contact'>
            <h1 className="orbitron">Contact</h1>
            <img className="contact-background" alt='contact-background' src={contactBg}/>

            <form name="contact-form" method='post' className='contact-form' onSubmit={e=>FormSubmit(e)}>
                <div className="contact-field">
                    <label htmlFor="Name">Name</label>
                    <input name="Name" type="text" required/>
                </div>
                <div className="contact-field">
                    <label htmlFor="Email">Email</label>
                    <input name="Email" type="email" required/>
                </div>
                <div className="contact-field">
                    <label htmlFor="Message">Message</label>
                    <textarea name="Message" type="text" rows={10}/>
                </div>
                <div className="contact-field">
                    <label htmlFor="Purpose">Purpose</label>
                    <select id="Purpose" name='Purpose' required>
                        <option value="">Choose a purpose</option>
                        <option value="creator">Join as a Creator</option>
                        <option value="business">Business Inquiries</option>
                        <option value="career">Career Inquiries</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit" data-wait="please wait" className="contact-field-submit">Submit</button>
            </form>

        </div>
    )
}


 
