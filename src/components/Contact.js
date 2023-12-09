import { useAppContext } from '@/context/AppContext';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = ({ showContact, setShowContact, arabicLanguage }) => {
  const form = useRef();
  const inputStyle = { border: '1px solid rgba(208, 213, 221, 0.15)', background: 'rgba(255, 255, 255, 0.05)', boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)', direction: arabicLanguage ? 'rtl' : 'ltr' };

  function closeContact() {
    document.body.style.overflow = '';
    setShowContact(false);
  }

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_e0yblnd', 'template_cfli0ks', form.current, 'tmF67ljka4s6SYzJ0').then(
      result => {
        console.log(result.text);
        Swal.fire({
          title: 'Good job!',
          text: 'Your message sent successfully!',
          icon: 'success'
        });
      },
      error => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <div className={`fixed inset-0 z-20 bg-black bg-opacity-50 ${showContact ? '' : 'hidden'} `}></div>
      <div className={`max-w-[823px] w-full lg:rounded-lg mx-auto text-center fixed z-50 left-1/2 transform -translate-x-1/2 top-0 bottom-0 py-20 backdrop-blur-[10px] px-4 lg:px-16 overflow-y-scroll custom-scrollbar ${showContact ? '' : 'hidden'}`}>
        <div className="sticky right-0 top-0 lg:top-12 pr-0 w-full">
          <svg onClick={closeContact} className="cursor-pointer ml-auto" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
            <path d="M15.4517 17.5117C15.7343 17.8146 16.2089 17.8309 16.5117 17.5483C16.8146 17.2657 16.8309 16.7911 16.5483 16.4883L10.0259 9.5L16.5483 2.51174C16.8309 2.20893 16.8146 1.73433 16.5117 1.45171C16.2089 1.16908 15.7343 1.18545 15.4517 1.48826L9 8.40081L2.54829 1.48826C2.26567 1.18545 1.79107 1.16908 1.48826 1.45171C1.18545 1.73433 1.16908 2.20893 1.45171 2.51174L7.97409 9.5L1.45171 16.4883C1.16908 16.7911 1.18545 17.2657 1.48826 17.5483C1.79107 17.8309 2.26567 17.8146 2.54829 17.5117L9 10.5992L15.4517 17.5117Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="font-black font-GilroyBlack capitalize text-xl lg:text-4xl lg:leading-[56px] text-white mb-2.5 lg:mb-5">
          {arabicLanguage ? 'اتصل بـ ' : 'Contact'} <span className="text-yellow">IIT</span>
        </h2>
        <p className="text-xs lg:text-lg text-white mx-auto text-center pb-[30px] lg:pb-[60px]">{arabicLanguage ? 'نحن نحب أن نسمع منك. يرجى ملء هذا النموذج.' : 'We’d love to hear from you. Please fill out this form.'} </p>
        <form ref={form} onSubmit={sendEmail} action="#" className={`form flex flex-col gap-[30px] ${arabicLanguage ? 'text-right' : ''}`}>
          <div className="flex flex-col gap-[30px] lg:gap-6">
            <div className={`flex flex-col lg:flex-row gap-[30px] ${arabicLanguage ? 'flex-row-reverse' : ''}`}>
              <div className="flex flex-col gap-1.5 items-start flex-1">
                <label htmlFor="fName" className={`font-Gilroy font-medium text-sm text-white ${arabicLanguage ? 'text-right block w-full' : ''}`}>
                  {arabicLanguage ? 'الاسم الأول' : 'First name'}
                </label>
                <input style={inputStyle} type="text" id="fName" name="fName" placeholder={`${arabicLanguage ? 'الاسم الأول' : 'First name'}`} className={`p-[12px_10px_12px_16px] text-base text-white rounded-[8px] outline-transparent focus:border-transparent w-full ${arabicLanguage ? 'text-right' : ''} `} />
              </div>
              <div className="flex flex-col gap-1.5 items-start flex-1">
                <label htmlFor="lName" className={`font-Gilroy font-medium text-sm text-white ${arabicLanguage ? 'text-right block w-full' : ''}`}>
                  {arabicLanguage ? 'اسم العائلة' : 'Last Name'}
                </label>
                <input style={inputStyle} type="text" id="lName" name="lName" placeholder={`${arabicLanguage ? 'اسم العائلة' : 'Last Name'}`} className={`p-[12px_10px_12px_16px] text-base text-white rounded-[8px] outline-transparent focus:border-transparent w-full ${arabicLanguage ? 'text-right' : ''} `} />
              </div>
            </div>
            <div className={`flex flex-col lg:flex-row gap-[30px] ${arabicLanguage ? 'flex-row-reverse' : ''}`}>
              <div className="flex flex-col gap-1.5 items-start flex-1">
                <label htmlFor="cName" className={`font-Gilroy font-medium text-sm text-white ${arabicLanguage ? 'text-right block w-full' : ''}`}>
                  {arabicLanguage ? 'اسم الشركة' : 'Company Name'}
                </label>
                <input style={inputStyle} type="text" id="cName" name="cName" placeholder={`${arabicLanguage ? 'اسم الشركة' : 'Company Name'}`} className={`p-[12px_10px_12px_16px] text-base text-white rounded-[8px] outline-transparent focus:border-transparent w-full ${arabicLanguage ? 'text-right' : ''} `} />
              </div>
              <div className="flex flex-col gap-1.5 items-start flex-1">
                <label htmlFor="jTitle" className={`font-Gilroy font-medium text-sm text-white ${arabicLanguage ? 'text-right block w-full' : ''}`}>
                  {arabicLanguage ? 'مسمى وظيفي' : 'Job Title'}
                </label>
                <input style={inputStyle} type="text" id="jTitle" name="jTitle" placeholder={`${arabicLanguage ? 'مسمى وظيفي' : 'Job Title'}`} className={`p-[12px_10px_12px_16px] text-base text-white rounded-[8px] outline-transparent focus:border-transparent w-full ${arabicLanguage ? 'text-right' : ''} `} />
              </div>
            </div>
            <div className={`flex flex-col lg:flex-row gap-[30px] ${arabicLanguage ? 'flex-row-reverse' : ''}`}>
              <div className="flex flex-col gap-1.5 items-start flex-1">
                <label htmlFor="pNumber" className={`font-Gilroy font-medium text-sm text-white ${arabicLanguage ? 'text-right block w-full' : ''}`}>
                  {arabicLanguage ? 'رقم التليفون' : 'Phone number'}
                </label>
                <input style={{ border: '1px solid rgba(208, 213, 221, 0.15)', background: 'rgba(255, 255, 255, 0.05)', boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)', direction: 'ltr' }} type="text" id="pNumber" name="pNumber" placeholder="+1 (555) 000-0000" className={`p-[12px_10px_12px_16px] text-base text-white rounded-[8px] outline-transparent focus:border-transparent w-full ${arabicLanguage ? 'text-left' : ''} `} />
              </div>
              <div className="flex flex-col gap-1.5 items-start flex-1">
                <label htmlFor="email" className={`font-Gilroy font-medium text-sm text-white ${arabicLanguage ? 'text-right block w-full' : ''}`}>
                  {arabicLanguage ? 'بريد إلكتروني' : 'Email'}
                </label>
                <input style={inputStyle} type="text" id="email" name="email" placeholder={`${arabicLanguage ? 'you@company.com' : 'you@company.com'}`} className={`p-[12px_10px_12px_16px] text-base text-white rounded-[8px] outline-transparent focus:border-transparent w-full ${arabicLanguage ? 'text-right' : ''} `} />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-[30px]">
              <div className="flex flex-col gap-1.5 items-start flex-1">
                <label htmlFor="Country" className={`font-Gilroy font-medium text-sm text-white ${arabicLanguage ? 'text-right block w-full' : ''}`}>
                  {arabicLanguage ? 'دولة' : 'Country'}
                </label>
                {/* <input style={inputStyle} type="text" id="pNumber" name="pNumber" placeholder="+1 (555) 000-0000" className={`p-[12px_10px_12px_16px] text-base text-white rounded-[8px] outline-transparent focus:border-transparent w-full ${arabicLanguage?'text-right':''} `} /> */}
                <input type="text" style={inputStyle} name="Country" id="Country" className={`p-[12px_10px_12px_16px] text-base text-white rounded-[8px] outline-transparent focus:border-transparent w-full ${arabicLanguage ? 'text-right' : ''} `} />
                {/* <option value="Country">{arabicLanguage ? 'دولة' : 'Country'}</option> */}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-[30px]">
              <div className="flex flex-col gap-1.5 items-start flex-1">
                <label htmlFor="message" className={`font-Gilroy font-medium text-sm text-white ${arabicLanguage ? 'text-right block w-full' : ''}`}>
                  {arabicLanguage ? 'رسالة' : 'Message'}
                </label>
                {/* <select style={inputStyle} name="Country" id="Country" className={`p-[12px_10px_12px_16px] text-base text-white rounded-[8px] outline-transparent focus:border-transparent w-full ${arabicLanguage?'text-right':''} `}>
                <option value="Country">Country</option>
              </select> */}
                <textarea style={inputStyle} name="message" id="message" cols="30" rows="5" className={`p-[12px_10px_12px_16px] text-base text-white rounded-[8px] outline-transparent focus:border-transparent w-full ${arabicLanguage ? 'text-right' : ''} `}></textarea>
              </div>
            </div>
            <div className={`flex items-start ${arabicLanguage ? 'flex-row-reverse' : ''}`}>
              <input type="checkbox" className={`${arabicLanguage ? 'mt-1 ml-3' : 'mt-1 mr-3'}`} />{' '}
              <p className={`text-xs lg:text-sm text-white ${arabicLanguage ? 'text-right' : 'text-left'}`}>
                {arabicLanguage ? (
                  <span>
                    {' '}
                    <a href="/ar" rel="noopener noreferrer" className="underline" style={{ direction: 'rtl' }}>
                      من خلال إكمال هذا النموذج، فإنك توافق على قيام{' '}
                    </a>{' '}
                    IIT بتخزين معلوماتك حتى تتمكن من تلقي المعلومات المتعلقة بخدماتنا. اقرأ المزيد حول كيفية إدارتنا لبياناتك الشخصية{' '}
                  </span>
                ) : (
                  <span>
                    By completing this form you agree to IIT storing your information so that you can receive information related to our services.{' '}
                    <a href="/" rel="noopener noreferrer" className="underline">
                      Read more about how we manage your personal data
                    </a>
                  </span>
                )}
              </p>
            </div>
            <div className="flex-1">
              <button className="text-textColor bg-yellow hover:bg-yellowHover text-[10px] text-center py-2 lg:py-3 lg:text-lg w-full rounded-full">{arabicLanguage ? 'يُقدِّم' : 'Submit'}</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
