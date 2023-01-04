import { useState } from "react"
import SectionTitle from "../Global-components/SectionTitle"
import Link from "next/link"
import { Icon } from '@iconify/react';
import {NameValidator, formatCompany, Emailvalidator, isEmpty } from "../../utils/validator.utils";


export default function Contact1stSection() {
    const [inputsFocus, setInputFocus] = useState({nameInput: false, emailInput: false, companyInput: false, subjectInput: false, messageInput: false})
    const [inputsValue, setInputValue] = useState({name: null, email: null, company: null, subject: null, message: null})
    const [inputError, setInputError] = useState({nameErr: "", emailErr: "", subjectErr: "", messageErr: ""})
    const [formState, setFormState] = useState({submitted: false, sending: false, success: false})

    function checkInput(value, input) {
        if (input === 'nameInput') {
            if (value === null || value.length === 0) {
                setInputFocus({...inputsFocus, nameInput: false})
            } else {
                setInputFocus({...inputsFocus, nameInput: true})
            }
        }
        if (input === 'emailInput') {
            if (value === null || value.length === 0) {
                setInputFocus({...inputsFocus, emailInput: false})
            } else {
                setInputFocus({...inputsFocus, emailInput: true})
            }
        }
        if (input === 'companyInput') {
            if (value === null || value.length === 0) {
                setInputFocus({...inputsFocus, companyInput: false})
            } else {
                setInputFocus({...inputsFocus, companyInput: true})
            }
        }
        if (input === 'subjectInput') {
            if (value === null || value.length === 0) {
                setInputFocus({...inputsFocus, subjectInput: false})
            } else {
                setInputFocus({...inputsFocus, subjectInput: true})
            }
        }
        if (input === 'messageInput') {
            if (value === null || value.length === 0) {
                setInputFocus({...inputsFocus, messageInput: false})
            } else {
                setInputFocus({...inputsFocus, messageInput: true})
            }
        }
    }

    async function sendMessage(e) {
        e.preventDefault()

        if (inputsValue.name === null && inputsValue.email === null && inputsValue.subject === null && inputsValue.message === null) {
            setInputError({...inputError, nameErr: 'Name required', emailErr: 'Email required', subjectErr: 'Subject required', messageErr: 'Message required'})
            return
        }

        if (NameValidator(inputsValue.name)) {
            setInputError({...inputError, nameErr: 'Name should be 3+ character long'})
            return
        } else if (NameValidator(inputsValue.name) === null) {
            setInputError({...inputError, nameErr: 'Name required'})
            return
        }

        if (Emailvalidator(inputsValue.email)) {
            setInputError({...inputError, emailErr: 'Email is invalid'})
            return
        } else if (Emailvalidator(inputsValue.email) === null) {
            setInputError({...inputError, emailErr: 'Email is required'})
            return
        }

        if (isEmpty(inputsValue.subject) === null) {
            setInputError({...inputError, subjectErr: 'Subject required'})
            return
        }

        if (isEmpty(inputsValue.message) === null) {
            setInputError({...inputError, messageErr: 'Message required'})
            return
        }

        // If Validation Successfull
        setFormState({...formState, sending: true})
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(inputsValue),
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            }
        })

        if (response.status === 200) {
            setInputValue({...inputsValue, name: null, email: null, company: null, subject: null, message: null})
            setInputError({...inputError, nameErr: "", emailErr: "", subjectErr: "", messageErr: ""})
            window.alert('Message sent successfully ✅✅✅')
        } else {
            window.alert('Error sending message 📛📛📛')
        }
    }


    return (
        <div className={'app-main-wrapper'}>
            <div className="contact-1st-section-wrapper">
                <div className="contact-flex-content-wrapper contact-flex-content-wrapper1">
                    <SectionTitle title={'Lets Work Together'} />
                    <div className="contact-info-wrapper">
                        <h4>Contact Info</h4>
                        <div className="contact-info-inner-wrapper">
                            <Icon icon="gg:profile" color="#ff8c92" style={{borderRadius: '5px'}} width="33" />
                            <div className="contact-details-container">
                                <p>Name</p>
                                <span>Ayomide Ishola</span>
                            </div>
                        </div>
                        <div className="contact-info-inner-wrapper">
                            <Icon icon="material-symbols:share-location" color="#ff8c92" style={{borderRadius: '5px'}} width="33" />
                            <div className="contact-details-container">
                                <p>Location</p>
                                <span>Lagos State, Nigeria</span>
                            </div>
                        </div>
                        <div className="contact-info-inner-wrapper">
                            <Icon icon="material-symbols:mark-email-unread-rounded" color="#ff8c92" style={{borderRadius: '5px'}} width="33" />
                            <div className="contact-details-container">
                                <p>Email</p>
                                <form action="mailto:ay4codes@gmail.com" method="post">
                                    <button type="submit">ay4codes@gmail.com</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-flex-content-wrapper contact-flex-content-wrapper2">
                    <div className="contact-flex-content-inner">
                        <form onSubmit={(e) => {e.preventDefault(); sendMessage(e)}}>
                            <div className="input-block-wrapper">
                                <div className="input-wrapper">
                                    <p style={{transform: inputsFocus.nameInput && 'translateY(8px)'}}>Fullname</p>
                                    <input onKeyDown={() => {setInputError({...inputError, nameErr: null})}} onChange={(e) => setInputValue({...inputsValue, name: e.target.value})} onBlur={() => {checkInput(inputsValue.name, 'nameInput')}} onFocus={() => {setInputFocus({...inputsFocus, nameInput: true})}} type="text" className="nameInput" />
                                    <span>{inputError.nameErr}</span>
                                </div>
                                <div className="input-wrapper">
                                    <p style={{transform: inputsFocus.emailInput && 'translateY(8px)'}}>Email</p>
                                    <input onKeyDown={() => {setInputError({...inputError, emailErr: null})}} onChange={(e) => setInputValue({...inputsValue, email: e.target.value})} onBlur={() => {checkInput(inputsValue.email, 'emailInput')}} onFocus={() => {setInputFocus({...inputsFocus, emailInput: true})}} className="emailInput" type="text" />
                                    <span>{inputError.emailErr}</span>
                                </div>
                            </div>
                            <div className="input-block-wrapper">
                                <div className="input-wrapper">
                                    <p style={{transform: inputsFocus.companyInput && 'translateY(8px)'}}>Company</p>
                                    <input onChange={(e) => setInputValue({...inputsValue, company: e.target.value})} onBlur={() => {checkInput(inputsValue.company, 'companyInput')}} onFocus={() => {setInputFocus({...inputsFocus, companyInput: true})}} type="text" className="companyInput" />
                                    <span id="company-span">Optional</span>
                                </div>
                                <div className="input-wrapper">
                                    <p style={{transform: inputsFocus.subjectInput && 'translateY(8px)'}}>Subject</p>
                                    <input onKeyDown={() => {setInputError({...inputError, subjectErr: null})}} onChange={(e) => setInputValue({...inputsValue, subject: e.target.value})} onBlur={() => {checkInput(inputsValue.subject, 'subjectInput')}} onFocus={() => {setInputFocus({...inputsFocus, subjectInput: true})}} type="text" className="subjectInput"/>
                                    <span>{inputError.subjectErr}</span>
                                </div>
                            </div>
                            <div className="input-block-wrapper">
                                <div className="input-wrapper">
                                    <p style={{transform: inputsFocus.messageInput && 'translateY(8px)'}}>Message</p>
                                    <textarea onKeyDown={() => {setInputError({...inputError, messageErr: null})}} rows="7" onChange={(e) => setInputValue({...inputsValue, message: e.target.value})} onBlur={() => {checkInput(inputsValue.message, 'messageInput')}} onFocus={() => {setInputFocus({...inputsFocus, messageInput: true})}} type="text" className="messageInput" />
                                    <span>{inputError.messageErr}</span>
                                </div>
                            </div>
                            <div className="send-btn-wrapper">
                                <button onMouseDown={() => setInputValue({...inputsValue, company: formatCompany(inputsValue.company)})} type="submit">Send Message</button>
                            </div>
                            <div className="form-btm-content-wrapper">
                                <div className="divider"></div>
                                <div className="form-socials-wrapper">
                                    <div>Follow me my journey</div>
                                    <div className="form-social-inner-wrapper">
                                        <Link target="_blank" rel="noopener noreferrer" href={'https://www.linkedin.com/in/ayomide-ishola-b1240124a'}><img src="/linkedin.png" /></Link>
                                        <Link target="_blank" rel="noopener noreferrer" href={'https://www.github.com/ay4codes'}><img src="/github.png" /></Link>
                                        <Link target="_blank" rel="noopener noreferrer" href={'https://www.twitter.com/ay4codes'}><img src="/twitter.png" /></Link>
                                        <Link target="_blank" rel="noopener noreferrer" href={'https://www.instagram.com/haryormeed_256/'}><img src="/instagram.svg" /></Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}