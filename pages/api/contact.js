import nodemailer from 'nodemailer'

export default async function contact(req,res) {
    try {
        const {name, email, company, subject, message} = req.body

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            auth: {
              user: process.env.EMAIL,
              pass: process.env.APP_PASSWORD
            }
        });
        
        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: 'Message From My Portfolio',
            html: `
                    <h3>Message From My Portfolio</h3>
                    <p>Name: <b>${name}</b></p>
                    <p>Email: <b>${email}</b></p>
                    <p>Subject: <b>${subject}</b></p>
                    <p>Company: <b>${company}</b></p>
                    <br />
                    <p>Message: <br /> ${message}</p>
                `
        };
    
        transporter.sendMail(mailOptions, function(err, info){
            if (err) {
                return res.status(500).send('')
            } else {
                res.status(200).send('')
            }
        });
    } catch (error) {
        console.log(error);
    }
}