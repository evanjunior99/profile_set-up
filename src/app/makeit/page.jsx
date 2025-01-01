import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Learn = () => {
  return (
    <div
      style={{
        background: 'black',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {/* Header */}
      <header className="flex items-center w-full font-bold p-4 justify-center">
        <ul className="flex gap-4 text-white justify-center">
          <li>home</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </header>

      {/* Profile Section */}
      <div style={{ padding: '90px' }}>
        {/* Main Content Container */}
        <div className="flex gap-8" style={{ width: '100%' }}>
          {/* Profile Column */}
          <div className="flex flex-col gap-6" style={{ width: 'fit-content' }}>
            {/* Profile Picture */}
            <div
              className="shadow-gray-50 rounded-lg p-8 border-2"
              style={{ width: 'fit-content' }}
            >
              <img
                src="/images/evan.jpg"
                alt="Profile"
                className="rounded-full object-cover border-1"
                style={{
                  borderColor: 'var(--profile-picture-border)',
                  height: '320px',
                }}
              />
            </div>

            {/* New Card Below Profile Picture */}
            <div
              className="overflow-hidden shadow-lg shadow-gray-500/50 rounded-lg p-6 flex flex-col items-center justify-center"
              style={{
                width: '370px',
                backgroundColor: 'black',
                height: '293px',
              }}
            >
              <h1 className="text-center text-black mb-4">Download My CV</h1>
              <a
                href="/path-to-your-cv.pdf"
                download
                className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
              >
                <i className="fas fa-download"></i>
                <span>Download</span>
              </a>
            </div>
            <div
  className="overflow-hidden shadow-lg shadow-gray-500/50 rounded-lg p-6"
  style={{
    width: '370px',
    backgroundColor: 'white',
    height: '293px',
  }}
>
  <h1 className="text-center text-black text-xl">Total Projects</h1>
  <div className="flex justify-center items-center mt-6">
    <span className="text-6xl font-bold text-black p-6">+10</span>
    <span className="text-xl text-gray-800 ml-2">Projects</span>
  </div>
</div>

          </div>

          {/* Cards Column */}
          <div className="flex flex-col gap-6" style={{ width: '780px' }}>
            {/* First Card */}
            <div
              className="overflow-hidden shadow-lg shadow-gray-500/50 rounded-lg p-6"
              style={{ width: '100%', backgroundColor: 'white' }}
            >
              <p
                className="text-center text-white animate-marquee"
                style={{
                  fontSize: '18px',
                  lineHeight: '0.9',
                  color: 'var(--text-color)',
                }}
              >
                Am Evan Chimwaza, a full-stack developer who is passionate about
                my work. You can hire me; I am available.
              </p>
            </div>

            {/* Two Cards Side by Side */}
            <div className="flex gap-6">
              {/* First Card */}
              <div
                className="overflow-hidden shadow-lg shadow-gray-500/50 rounded-lg p-6 flex flex-col items-center justify-center gap-4"
                style={{
                  width: '50%',
                  backgroundColor: 'white',
                  height: '293px',
                }}
              >
                <h1 className="text-center text-black font-bold mb-4">Services Offered</h1>
                <i className="fas fa-cogs text-4xl text-blue-500"></i>
              </div>

              {/* Second Card */}
              <div
                className="overflow-hidden shadow-lg shadow-gray-500/50 rounded-lg p-6 flex flex-col items-center justify-center gap-4"
                style={{
                  width: '50%',
                  backgroundColor: 'white',
                  height: '293px',
                }}
              >
                <h1 className="text-center text-black font-bold mb-4">Evan Card</h1>
                <i className="fas fa-tools text-4xl text-green-500"></i>
              </div>
            </div>

            {/* Additional Cards */}
            <div className="flex gap-6">
              <div
                className="overflow-hidden shadow-lg shadow-gray-500/50 rounded-lg p-6 flex flex-col items-center justify-center gap-4"
                style={{
                  width: '50%',
                  backgroundColor: 'black',
                  height: '293px',
                }}
              >
                <h1 className="text-center text-black font-bold mb-4">Services Offered</h1>
                <div className="flex gap-6">
                  {/* Code Icon */}
                  <div className="flex flex-col items-center text-center">
                    <i className="fas fa-code text-3xl text-blue-500"></i>
                    <p className="text-black mt-2"></p>
                  </div>

                  {/* Graphic Design Icon */}
                  <div className="flex flex-col items-center text-center">
                    <i className="fas fa-paint-brush text-3xl text-purple-500"></i>
                    <p className="text-black mt-2"></p>
                  </div>
                </div>
              </div>

              <div
                className="overflow-hidden shadow-lg shadow-gray-500/50 rounded-lg p-6 flex flex-col items-center justify-center gap-4"
                style={{
                  width: '50%',
                  backgroundColor: 'black',
                  height: '293px',
                }}
              >
                <h1 className="text-center text-black mb-4">
                  Connect with me on social media
                </h1>
                <div className="flex gap-6">
                  {/* Instagram Icon */}
                  <a
                    href="https://www.instagram.com/cimwaza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 text-3xl hover:text-pink-600"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  {/* WhatsApp Icon */}
                  <a
                    href="https://wa.me/+265883341542"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 text-3xl hover:text-green-600"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  {/* X (Twitter) Icon */}
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-3xl hover:text-blue-600"
                  >
                    <i className="fab fa-x-twitter"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* New Row for Below Second and Third Cards */}
            <div className="flex gap-6">
            <div
  className="overflow-hidden shadow-lg shadow-gray-500/50 rounded-lg p-6"
  style={{
    width: '50%',
    backgroundColor: 'white',
    height: '293px',
  }}
>
  <div className="flex items-center justify-center mb-4">
    <i className="fas fa-briefcase text-3xl text-gray-600"></i> {/* Icon for experience */}
    <h1 className="ml-4 text-xl font-semibold text-black">Work Experience</h1>
  </div>
  <div className="text-center">
    <p className="text-4xl font-bold text-black">
      02
    </p>
    <p className="text-xl text-gray-500 mt-2 opacity-70 animate-fade">Years Experience</p>
  </div>
</div>


<div
  className="overflow-hidden shadow-lg shadow-gray-500/50 rounded-lg p-6"
  style={{
    width: '50%',
    backgroundColor: 'white',
    height: '293px',
  }}
>
  <h1 className="text-center text-4xl font-bold p-7">
    <span className="text-black">Let's</span> 
    <span className="text-black"> work</span> 
    <span className="text-blue-600"> together</span>
  </h1>
</div>

            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="bg-black text-white text-center p-4 mt-8"
        style={{
          borderTop: '1px solid gray',
        }}
      >
        <p>© 2025 Evan Chimwaza. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Learn;
