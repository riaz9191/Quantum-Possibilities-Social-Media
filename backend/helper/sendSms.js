const http = require('http');
const { emailWithNodeMailer } = require('./sendMail');
const generateUnique5DigitNumber = () => {
    const min = 10000;
    const max = 99999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const sendSMS = async (req, res) => {
    try {
        const apiURL = process.env.smsURL;
        const senderId = process.env.senderId; 
        const mobile = req.params.id; 
        const {status,email}=req.query;
        const uniqueNumber = generateUnique5DigitNumber();
        let message;
        // console.log(email)
        if(status==1){
            message= `Your  signup verification OTP ${uniqueNumber}`;
            const subject=" signup verification OTP.";
            text=message;
            emailWithNodeMailer({ email, subject, text });
        }
        else if(status==2){
            message= `Your  forgat password verification OTP ${uniqueNumber}`;
            const subject=" Forget Password Verification OTP.";
            text=message;
            emailWithNodeMailer({ email, subject, text });
        }
        const fullURL = `${apiURL}&number=${mobile}&senderid=${senderId}&message=${encodeURIComponent(message)}`;

        const request = http.get(fullURL, function (response) {
            response.setEncoding('utf8');
            let responseData = '';

            response.on('data', function (chunk) {
                responseData += chunk;
            });

            response.on('end', function () {
                // console.log('SMS response:', responseData);
                res.status(200).json({statusCode:1,status:"success",data:uniqueNumber,message: `SMS sent OTP ${uniqueNumber}`});
            });
        });

        request.on('error', function (error) {
            // console.error('Error sending SMS:', error);
            res.status(500).json({statusCode:2,status:"failed",data:null, message: 'SMS sending failed' });
        });
    } catch (error) {
        // console.error('Internal server error:', error);
        res.status(500).json({statusCode:3,status:"server error",data:null, message: 'Internal server error' });
    }
};

const MemberSendSMS=async(req,res)=>{
    const {mobile,message}=req.body;
    if(!mobile||!message){
        res.status(400).json({status:"not success",statusCode:3,message:"Your sending data validation is not right"});
        return;
    }
    try {
        const apiURL = process.env.smsURL;
        const senderId = process.env.senderId; 
        // const mobile = req.params.id; 
        // const uniqueNumber = generateUnique5DigitNumber();
        // const message = `verification OTP ${uniqueNumber}`;

        const fullURL = `${apiURL}&number=${mobile}&senderid=${senderId}&message=${encodeURIComponent(message)}`;

        const request = http.get(fullURL, function (response) {
            response.setEncoding('utf8');
            let responseData = '';

            response.on('data', function (chunk) {
                responseData += chunk;
            });

            response.on('end', function () {
                // console.log('SMS response:', responseData);
                res.status(200).json({ status:"success",statusCode:1,message: `SMS sent by ${mobile} in sms is : ${message}`});
            });
        });

        request.on('error', function (error) {
            // console.error('Error sending SMS:', error);
            res.status(500).json({status:"failed",statusCode:2, message: 'SMS sending failed' });
        });
    } catch (error) {
        // console.error('Internal server error:', error);
        res.status(500).json({ message: 'Internal server error',status:"success",statusCode:3,statusMessage:error.message});
    }
}

const messageSendingAllSystem=(mobile,message)=>{
    
    if(!mobile||!message){
        return 'Please send valid info';
    }
    try {
        const apiURL = process.env.smsURL;
        const senderId = process.env.senderId; 
        const fullURL = `${apiURL}&number=${mobile}&senderid=${senderId}&message=${encodeURIComponent(message)}`;
        const request = http.get(fullURL, function (response) {
            response.setEncoding('utf8');
            let responseData = '';

            response.on('data', function (chunk) {
                responseData += chunk;
            });

            response.on('end', function () {
                return `SMS sent by ${mobile} in sms is : ${message}`;
            });
        });

        request.on('error', function (error) {
           return 'SMS sending failed';
        });
    } catch (error) {
       return 'Internal server error';
    }
}


module.exports = { sendSMS,MemberSendSMS,messageSendingAllSystem };