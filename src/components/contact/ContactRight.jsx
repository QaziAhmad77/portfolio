import { useState } from 'react';

const ContactRight = () => {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  const handleSend = (e) => {
    e.preventDefault();
    if (userName === '') {
      setErrMsg('Please enter your username!');
    } else if (phoneNumber === '') {
      setErrMsg('Please enter your phone number!');
    } else if (email === '') {
      setErrMsg('Please enter your email!');
    } else if (!emailValidation(email)) {
      setErrMsg('Give a valid Email');
    } else if (subject === '') {
      setErrMsg('Please give your Subject!');
    } else if (message === '') {
      setErrMsg('Message is required!');
    } else {
      setSuccessMsg(
        `Thank you dear ${userName} Your Message has been sent Successfully!`
      );
      setErrMsg('');
      setUserName('');
      setPhoneNumber('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
  };
  return (
    <div className="w-full lgl:w-[60%] h-full flex flex-col justify-center py-10 bg-gradient-to-r from-[1e2024] to-[#23272b] gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
      <form
        action=""
        className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
      >
        {errMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
            {errMsg}
          </p>
        )}
        {successMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
            {successMsg}
          </p>
        )}
        <div className="w-full flex flex-col lgl:flex-row gap-10">
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              YOUR NAME
            </p>
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              className={`${
                errMsg === 'Please enter your username!' &&
                'outline-designColor'
              } contactInput`}
              type="text"
            />
          </div>
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Phone Number
            </p>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              className={`${
                errMsg === 'Please enter your phone number!' &&
                'outline-designColor'
              } contactInput`}
              type="text"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={`${
              errMsg === 'Please enter your email!' && 'outline-designColor'
            } contactInput`}
            type="email"
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Subject
          </p>
          <input
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            className={`${
              errMsg === 'Please give your Subject!' && 'outline-designColor'
            } contactInput`}
            type="text"
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Message
          </p>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className={`${
              errMsg === 'Message is required!' && 'outline-designColor'
            } contactTextArea`}
            cols="30"
            rows="8"
          ></textarea>
        </div>
        <div className="w-full">
          <button
            onClick={handleSend}
            className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
          >
            Send Message
          </button>
        </div>
        {errMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
            {errMsg}
          </p>
        )}
        {successMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
            {successMsg}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactRight;
