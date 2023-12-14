import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = ({ showContact, setShowContact, arabicLanguage }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    cName: '',
    jobTitle: '',
    phoneNumber: '',
    email: '',
    country: '',
    message: '',
    checkbox: false
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const inputStyle = { border: '1px solid rgba(208, 213, 221, 0.15)', background: 'rgba(255, 255, 255, 0.05)', boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)', direction: arabicLanguage ? 'rtl' : 'ltr' };

  function closeContact() {
    document.body.style.overflow = '';
    setShowContact(false);
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleCheckboxChange = event => {
    setFormData({
      ...formData,
      checkbox: event.target.checked
    });
  };

  const sendEmail = e => {
    e.preventDefault();
    let formErrors = {};
    if (formData.fName.trim() === '') {
      formErrors.fName = arabicLanguage ? 'Arabic error text place here!' : 'First Name is required';
    }
    if (formData.lName.trim() === '') {
      formErrors.lName = arabicLanguage ? 'Arabic error text place here!' : 'Last Name is required';
    }
    if (formData.cName.trim() === '') {
      formErrors.cName = arabicLanguage ? 'Arabic error text place here!' : 'Company Name is required';
    }
    if (formData.jobTitle.trim() === '') {
      formErrors.jobTitle = arabicLanguage ? 'Arabic error text place here!' : 'Job Title is required';
    }
    if (formData.phoneNumber.trim() === '') {
      formErrors.phoneNumber = arabicLanguage ? 'Arabic error text place here!' : 'Phone Number is required';
    }
    if (formData.email.trim() === '') {
      formErrors.email = arabicLanguage ? 'Arabic error text place here!' : 'Email is required';
    }
    if (formData.email.trim() !== '' && !validateEmail(formData.email)) {
      formErrors.email = arabicLanguage ? 'Arabic error text place here!' : 'Email must be a valid Email';
    }
    if (formData.country.trim() === '') {
      formErrors.country = arabicLanguage ? 'Arabic error text place here!' : 'Country Name is required';
    }
    if (formData.message.trim() === '') {
      formErrors.message = arabicLanguage ? 'Arabic error text place here!' : 'Message Name is required';
    }
    if (!formData.checkbox) {
      formErrors.checkbox = arabicLanguage ? 'Arabic error text place here!' : 'You need to check the agreement box!';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log('Form submitted:', formData);

      emailjs.sendForm('iit_ServiceID', 'template_cr56atj', form.current, 'yJoZ_bCYfV15rk83C').then(
        result => {
          console.log(result.text);
          Swal.fire({
            title: arabicLanguage ? 'Arabic Text' : 'Good job!',
            text: arabicLanguage ? 'Arabic Message' : 'Your message sent successfully!',
            icon: 'success'
          });
          closeContact();
          setFormData({
            fName: '',
            lName: '',
            cName: '',
            jobTitle: '',
            phoneNumber: '',
            email: '',
            country: '',
            message: '',
            checkbox: false
          });
          setErrors({});
        },
        error => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <>
      <div className={`fixed inset-0 z-20 bg-black bg-opacity-50 ${showContact ? '' : 'hidden'} `}></div>
      <div className={`max-w-[823px] w-full lg:rounded-lg mx-auto text-center fixed z-50 left-1/2 transform -translate-x-1/2 top-0 bottom-0 py-20 backdrop-blur-[10px] px-4 lg:px-16 overflow-y-scroll custom-scrollbar ${showContact ? '' : 'hidden'}`}>
        <div className={`sticky top-0 lg:top-12 pr-0 w-[18px]${arabicLanguage ? ' left-0 mr-[100%] pr-6' : ' ml-[100%] pl-6 right-0'}`}>
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
            <div className={`flex flex-col gap-[30px] lg:flex-row`}>
              <div className="flex flex-col gap-1.5 items-start flex-1">
                <label htmlFor="fName" className={`font-Gilroy font-medium text-sm text-white ${arabicLanguage ? 'text-right block w-full' : ''}`}>
                  {arabicLanguage ? 'الاسم الأول' : 'First name'}
                </label>
                <input style={inputStyle} onChange={handleChange} value={formData.fName} type="text" id="fName" name="fName" placeholder={`${arabicLanguage ? 'الاسم الأول' : 'First name'}`} className={`p-[12px_10px_12px_16px] text-base text-white rounded-[8px] outline-transparent focus:border-transparent w-full ${arabicLanguage ? 'text-right' : ''} `} />
                {errors.fName && <p className={`text-red-600 text-xs mt-1 w-full ${arabicLanguage ? 'text-right' : 'text-left'}`}>{errors.fName}</p>}
              </div>
              <div className="flex flex-col gap-1.5 items-start flex-1">
                <label htmlFor="lName" className={`font-Gilroy font-medium text-sm text-white ${arabicLanguage ? 'text-right block w-full' : ''}`}>
                  {arabicLanguage ? 'اسم العائلة' : 'Last Name'}
                </label>
                <input style={inputStyle} type="text" id="lName" onChange={handleChange} value={formData.lName} name="lName" placeholder={`${arabicLanguage ? 'اسم العائلة' : 'Last Name'}`} className={`p-[12px_10px_12px_16px] text-base text-white rounded-[8px] outline-transparent focus:border-transparent w-full ${arabicLanguage ? 'text-right' : ''} `} />
                {errors.lName && <p className={`text-red-600 text-xs mt-1 w-full ${arabicLanguage ? 'text-right' : 'text-left'}`}>{errors.lName}</p>}
              </div>
            </div>
            <div className={`flex flex-col  gap-[30px] lg:flex-row`}>
              <div className="flex flex-col gap-1.5 items-start flex-1">
                <label htmlFor="cName" className={`font-Gilroy font-medium text-sm text-white ${arabicLanguage ? 'text-right block w-full' : ''}`}>
                  {arabicLanguage ? 'اسم الشركة' : 'Company Name'}
                </label>
                <input style={inputStyle} onChange={handleChange} value={formData.cName} type="text" id="cName" name="cName" placeholder={`${arabicLanguage ? 'اسم الشركة' : 'Company Name'}`} className={`p-[12px_10px_12px_16px] text-base text-white rounded-[8px] outline-transparent focus:border-transparent w-full ${arabicLanguage ? 'text-right' : ''} `} />
                {errors.cName && <p className={`text-red-600 text-xs mt-1 w-full ${arabicLanguage ? 'text-right' : 'text-left'}`}>{errors.cName}</p>}
              </div>
              <div className="flex flex-col gap-1.5 items-start flex-1">
                <label htmlFor="jobTitle" className={`font-Gilroy font-medium text-sm text-white ${arabicLanguage ? 'text-right block w-full' : ''}`}>
                  {arabicLanguage ? 'مسمى وظيفي' : 'Job Title'}
                </label>
                <input style={inputStyle} onChange={handleChange} value={formData.jobTitle} type="text" id="jobTitle" name="jobTitle" placeholder={`${arabicLanguage ? 'مسمى وظيفي' : 'Job Title'}`} className={`p-[12px_10px_12px_16px] text-base text-white rounded-[8px] outline-transparent focus:border-transparent w-full ${arabicLanguage ? 'text-right' : ''} `} />
                {errors.jobTitle && <p className={`text-red-600 text-xs mt-1 w-full ${arabicLanguage ? 'text-right' : 'text-left'}`}>{errors.jobTitle}</p>}
              </div>
            </div>
            <div className={`flex flex-col  gap-[30px] lg:flex-row`}>
              <div className="flex flex-col gap-1.5 items-start flex-1">
                <label htmlFor="pNumber" className={`font-Gilroy font-medium text-sm text-white ${arabicLanguage ? 'text-right block w-full' : ''}`}>
                  {arabicLanguage ? 'رقم التليفون' : 'Phone number'}
                </label>
                <input style={{ border: '1px solid rgba(208, 213, 221, 0.15)', background: 'rgba(255, 255, 255, 0.05)', boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)', direction: 'ltr' }} onChange={handleChange} value={formData.phoneNumber} type="text" id="pNumber" name="phoneNumber" placeholder="+1 (555) 000-0000" className={`p-[12px_10px_12px_16px] text-base text-white rounded-[8px] outline-transparent focus:border-transparent w-full ${arabicLanguage ? 'text-left' : ''} `} />
                {errors.phoneNumber && <p className={`text-red-600 text-xs mt-1 w-full ${arabicLanguage ? 'text-right' : 'text-left'}`}>{errors.phoneNumber}</p>}
              </div>
              <div className="flex flex-col gap-1.5 items-start flex-1">
                <label htmlFor="email" className={`font-Gilroy font-medium text-sm text-white ${arabicLanguage ? 'text-right block w-full' : ''}`}>
                  {arabicLanguage ? 'بريد إلكتروني' : 'Email'}
                </label>
                <input style={inputStyle} type="text" onChange={handleChange} value={formData.email} id="email" name="email" placeholder={`${arabicLanguage ? 'you@company.com' : 'you@company.com'}`} className={`p-[12px_10px_12px_16px] text-base text-white rounded-[8px] outline-transparent focus:border-transparent w-full ${arabicLanguage ? 'text-right' : ''} `} />
                {errors.email && <p className={`text-red-600 text-xs mt-1 w-full ${arabicLanguage ? 'text-right' : 'text-left'}`}>{errors.email}</p>}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-[30px]">
              <div className="flex flex-col gap-1.5 items-start flex-1">
                <label htmlFor="Country" className={`font-Gilroy font-medium text-sm text-white ${arabicLanguage ? 'text-right block w-full' : ''}`}>
                  {arabicLanguage ? 'دولة' : 'Country'}
                </label>

                <input type="text" onChange={handleChange} value={formData.country} style={inputStyle} name="country" id="Country" className={`p-[12px_10px_12px_16px] text-base text-white rounded-[8px] outline-transparent focus:border-transparent w-full ${arabicLanguage ? 'text-right' : ''} `} />

                {errors.country && <p className={`text-red-600 text-xs mt-1 w-full ${arabicLanguage ? 'text-right' : 'text-left'}`}>{errors.country}</p>}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-[30px]">
              <div className="flex flex-col gap-1.5 items-start flex-1">
                <label htmlFor="message" className={`font-Gilroy font-medium text-sm text-white ${arabicLanguage ? 'text-right block w-full' : ''}`}>
                  {arabicLanguage ? 'رسالة' : 'Message'}
                </label>

                <textarea style={inputStyle} onChange={handleChange} value={formData.message} name="message" id="message" cols="30" rows="5" className={`p-[12px_10px_12px_16px] text-base text-white rounded-[8px] outline-transparent focus:border-transparent w-full ${arabicLanguage ? 'text-right' : ''} `}></textarea>
                {errors.message && <p className={`text-red-600 text-xs mt-1 w-full ${arabicLanguage ? 'text-right' : 'text-left'}`}>{errors.message}</p>}
              </div>
            </div>
            <div className={`flex items-start`}>
              <input type="checkbox" checked={formData.checkbox} onChange={handleCheckboxChange} name="checkbox" className={`${arabicLanguage ? 'mt-1 ml-3' : 'mt-1 mr-3'}`} />{' '}
              <p className={`text-xs lg:text-sm text-white ${arabicLanguage ? 'text-right' : 'text-left'}`}>
                {arabicLanguage ? (
                  <span>
                    من خلال إكمال هذا النموذج، فإنك توافق على قيام IIT المعلومات المتعلقة بخدماتنا. اقرأ المزيد حول كيفية إدارتنا لبياناتك الشخصية{' '}
                    <a href="/ar" rel="noopener noreferrer" className="underline" style={{ direction: 'rtl' }}>
                      بتخزين معلوماتك حتى تتمكن من تلقي
                    </a>
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
            {errors.checkbox && <p className={`text-red-600 text-xs mt-1 w-full ${arabicLanguage ? 'text-right' : 'text-left'}`}>{errors.checkbox}</p>}
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
