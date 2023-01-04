import { useState } from "react"
import SectionTitle from "../Global-components/SectionTitle"

export default function Contact1stSection() {
    const [inputsFocus, setInputFocus] = useState({nameInput: false, emailInput: false, companyInput: false, subjectInput: false})
    const [inputsValue, setInputValue] = useState({name: '', email: '', company: '', subject: '', message: ''})

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
        
    }
    return (
        <div className={'app-main-wrapper'}>
            <div className="contact-1st-section-wrapper">
                <div className="contact-flex-content-wrapper contact-flex-content-wrapper1">
                    <SectionTitle title={'Lets Work Together'} />
                </div>
                <div className="contact-flex-content-wrapper contact-flex-content-wrapper2">
                    <div className="contact-flex-content-inner">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="input-block-wrapper">
                                <div className="input-wrapper">
                                    <p style={{transform: inputsFocus.nameInput && 'translateY(8px)'}}>Fullname</p>
                                    <input onChange={(e) => setInputValue({...inputsValue, name: e.target.value})} onBlur={() => {checkInput(inputsValue.name, 'nameInput')}} onFocus={() => {setInputFocus({...inputsFocus, nameInput: true})}} type="text" className="nameInput" />
                                </div>
                                <div className="input-wrapper">
                                    <p style={{transform: inputsFocus.emailInput && 'translateY(8px)'}}>Email</p>
                                    <input onChange={(e) => setInputValue({...inputsValue, email: e.target.value})} onBlur={() => {checkInput(inputsValue.email, 'emailInput')}} onFocus={() => {setInputFocus({...inputsFocus, emailInput: true})}} className="emailInput" type="text" />
                                </div>
                            </div>
                            <div className="input-block-wrapper">
                                <div className="input-wrapper">
                                    <p style={{transform: inputsFocus.companyInput && 'translateY(8px)'}}>Company</p>
                                    <input onChange={(e) => setInputValue({...inputsValue, company: e.target.value})} onBlur={() => {checkInput(inputsValue.company, 'companyInput')}} onFocus={() => {setInputFocus({...inputsFocus, companyInput: true})}} type="text" className="companyInput" />
                                </div>
                                <div className="input-wrapper">
                                    <p style={{transform: inputsFocus.subjectInput && 'translateY(8px)'}}>Subject</p>
                                    <input onChange={(e) => setInputValue({...inputsValue, subject: e.target.value})} onBlur={() => {checkInput(inputsValue.subject, 'subjectInput')}} onFocus={() => {setInputFocus({...inputsFocus, subjectInput: true})}} type="text" className="subjectInput"/>
                                </div>
                            </div>
                            <div className="input-block-wrapper">
                                <div className="input-wrapper">
                                    <p style={{transform: inputsFocus.companyInput && 'translateY(8px)'}}>Company</p>
                                    <textarea rows="7" onChange={(e) => setInputValue({...inputsValue, company: e.target.value})} onBlur={() => {checkInput(inputsValue.company, 'companyInput')}} onFocus={() => {setInputFocus({...inputsFocus, companyInput: true})}} type="text" className="messageInput" />
                                </div>
                            </div>
                            <div className="send-btn-wrapper">
                                <button>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}