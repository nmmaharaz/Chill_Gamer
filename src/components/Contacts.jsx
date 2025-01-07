import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import Title from './shered/Title';

const AllReviews = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3t9eqfs', 'template_24rx1vh', e.target, {
        publicKey: 'UdZ3gM-Tjt-40Zn9L',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
      <div className="bg-opacity-20 dark:bg-opacity-20 bg-[#633aa9] min-h-screen py-12">
      <div className='mb-10'>
      <Title title={"Meet Our Team"}></Title>
      </div>
        <div className="mx-auto w-10/12 flex lg:flex-row flex-col">
          <form
            className="lg:w-1/2 flex *:mb-5 flex-col dark:bg-opacity-20 dark:bg-[#633aa9] bg-[#141119] shadow-md shadow-gray-700 dark:shadow-gray-400 hover:shadow-[#8750f7] p-8 rounded-2xl"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="dark:bg-opacity-5 dark:border-base-200 dark:bg-[#633aa9] bg-black dark:text-white text-white py-3 rounded-md"
              type="text"
              placeholder="First name"
              name="from_f_name"
            />
            <input
              className="dark:bg-opacity-5 dark:border-base-200 dark:bg-[#633aa9] bg-black dark:text-white text-white py-3 rounded-md"
              type="text"
              placeholder="Last name"
              name="from_l_name"
            />
            <input
              className="dark:bg-opacity-5 dark:border-base-200 dark:bg-[#633aa9] bg-black dark:text-white text-white py-3 rounded-md"
              type="email"
              placeholder="Email address"
              name="from_email"
            />
            <input
              className="dark:bg-opacity-5 dark:border-base-200 dark:bg-[#633aa9] bg-black dark:text-white text-white py-3 rounded-md"
              type="number"
              placeholder="Phone number"
              name="from_number"
            />
            <textarea
              className=" dark:bg-white bg-black text-white h-48 py-3 rounded-md"
              name="message"
              placeholder="Massage"
            />
            <div className="float-end flex">
              <input
                className="dark:bg-opacity-60 cursor-pointer dark:border-base-200 bg-[#7539d8] shadow-md shadow-gray-700 dark:shadow-gray-400 hover:shadow-[#b097e2] text-white font-semibold px-6 py-2 rounded-3xl "
                type="submit"
                value="Send Massage"
              />
            </div>
          </form>
          <div className="lg:w-1/2 flex flex-col mt-10 lg:mt-0 *:mb-6 justify-center ml-10 lg:ml-28">
            <div className="flex items-center ">
              <div className="hover:border mr-5 bg-purple-500 hover:bg-[#141119] hover:border-solid hover:border-[#8750f7] border-none flex items-center justify-center w-12 h-12 rounded-full">
                <FiPhoneCall className="hover:text-[#8750f7] text-white text-3xl" />
              </div>
              <p className="text-white text-2xl font-semibold dark:text-[#8750f7]">
                +880 1610 229720
              </p>
            </div>
            <div className="flex items-center">
              <div className="hover:border mr-5 bg-purple-500 hover:bg-[#141119] hover:border-solid hover:border-[#8750f7] border-none flex items-center justify-center w-12 h-12 rounded-full">
                <MdOutlineMail className="hover:text-[#8750f7] text-white text-3xl" />
              </div>
              <p className="text-white text-2xl font-semibold dark:text-[#8750f7]">
                nmmaharaz@gmail.com
              </p>
            </div>
            <div className="flex items-center">
              <div className="hover:border mr-5 bg-purple-500 hover:bg-[#141119] hover:border-solid hover:border-[#8750f7] border-none flex items-center justify-center w-12 h-12 rounded-full">
                <GrLocation className="hover:text-[#8750f7] text-white text-3xl" />
              </div>
              <p className="text-white text-2xl font-semibold dark:text-[#8750f7]">
                Chattogram, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
