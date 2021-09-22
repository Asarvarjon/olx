const nodemailer = require("nodemailer");



module.exports.email = async function email(to, subject, mail_body, main_html) {
    const transport  = await nodemailer.createTransport({
        host: "smtp.yandex.ru",
        port: 465,
        secure: true,
        auth : {
            user: "amriyevsarvarjon@yandex.com",
            pass: "20sArvar_02#",
        }
    })


    return transport.sendMail({
        from: `Amriyev Sarvarjon <amriyevsarvarjon@yandex.com>`,
        to,
        subject,
        text: mail_body,
        html: main_html,
    })
}


