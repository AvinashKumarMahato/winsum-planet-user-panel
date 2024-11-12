import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-600 md:text-lg">
            Your trusted platform for verified walk-in drives, helping candidates take control of their job search with confidence.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="flex flex-col md:flex-row md:items-center mt-12 space-y-8 md:space-y-0 md:space-x-12">
          <img
            src="https://cdn.pixabay.com/photo/2017/10/31/09/55/dream-job-2904780_1280.jpg"
            alt="Job Portal Mission"
            className="rounded-lg shadow-lg w-full md:w-1/2 object-cover"
          />

          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            <p className="text-gray-700">
              Our mission is to provide candidates with access to verified walk-in job drives where they can apply and interview on the same day. By ensuring a straightforward hiring process, we eliminate the uncertainty and delays associated with job searches, empowering candidates to make clear and timely career decisions.
            </p>
            <p className="text-gray-700">
              No more "ghosting" by HR or endless rounds of interviews. With our platform, every candidate knows their status—either selected or not—allowing them to move forward with purpose.
            </p>
          </div>
        </div>

        {/* Values section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Transparency</h4>
            <p className="text-gray-600">
              We only list verified walk-in drives, giving candidates reliable opportunities and removing any guesswork from the application process.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Efficiency</h4>
            <p className="text-gray-600">
              We focus on immediate results—one-day walk-in drives with on-the-spot interviews—enabling candidates to make faster career decisions.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Empowerment</h4>
            <p className="text-gray-600">
              By connecting candidates directly to hiring drives, we empower them to take charge of their job search and make informed choices with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
