import React, { Fragment } from 'react';
import Image from 'next/image';

const contact = () => {
  return (
    <Fragment>
      <div className="relative min-h-[120vh] overflow-hidden py-6">
        <div className="absolute inset-0 z-20 aspect-video object-cover">
          <Image
            src="/images/face.jpg"
            alt="skin care"
            className="aspect-video h-full object-cover object-bottom"
            width={1920}
            height={1280}
          />
        </div>
        <div className="absolute bottom-0 left-0 bg-white z-40 min-h-[40vh]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26471.04016066065!2d25.624947815411417!3d-33.969923191798635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1650910147449!5m2!1sen!2sza"
            className="w-[100vw] min-h-[40vh]"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="absolute inset-0 z-50 mb-8">
          <div className="max-w-6xl mx-auto ">
            <div className="translate-y-[80%] rounded-md w-[300px] bg-sky-500 text-white px-6 py-4">
              <h1 className="text-xl font-bold">Get in touch</h1>
              <p className="text-xs py-6">skininc1988@gmail.com</p>
              <p className="text-xs pb-6">info@skininc.co.za</p>
              <p className="text-xs pb-6">
                Cell 079 821 2540 <br />
                WhatsApp 068 333 2924 <br />
                Tiktok @skininc1988 <br />
                IG skininc1988
              </p>
              <form>
                <textarea
                  name="description"
                  className="w-full rounded text-sm p-2"
                  placeholder="Message"
                  rows="3"
                ></textarea>
                <button className="bg-sky-800 text-base px-6 py-2 rounded-md">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default contact;
