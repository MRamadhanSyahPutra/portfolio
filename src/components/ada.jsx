const Ada = () => {
  return (
    <>
      <div className='container mx-auto mt-[50px]'>
        <div className='grid grid-cols-4 grid-rows-5 gap-4'>
          <div className='row-span-5 bg-gray-800 rounded-2xl border-2 border-gray-700'>
            {/* Sidebar */}
            <div className='w-auto p-8 flex flex-col'>
              {/* Profile Section */}
              <div className='text-center mb-8'>
                <div className='w-28 h-28 bg-gray-700 rounded-2xl mx-auto mb-7 flex items-end justify-center mt-10'>
                  <img
                    src='img/me.png'
                    className='w-[100px] h-[100px]'
                    alt="I'm"
                  />
                </div>
                <h1 className='text-white text-xl font-bold mb-4'>
                  <span ref={typedRef}></span>
                </h1>
                <p className='text-gray-200 text-sm bg-gray-700 inline-block px-4 py-1 rounded-xl italic'>
                  Web Developer
                </p>
                <hr className='mt-6 text-yellow-500 mx-2' />
              </div>

              {/* Contact Info */}
              <div className='space-y-4 mb-8 mt-2'>
                <a href='#' className='flex'>
                  <div className='p-3 bg-gray-700 rounded-xl'>
                    <Mail className='w-5 h-5 text-yellow-500' />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-gray-400 text-sm ml-5'>Email</span>
                    <span className='text-gray-100 text-sm ml-5'>
                      muhammadramadhan...
                    </span>
                  </div>
                </a>
                <a href='#' className='flex'>
                  <div className='p-3 bg-gray-700 rounded-xl'>
                    <Phone className='w-5 h-5 text-yellow-500' />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-gray-400 text-sm ml-5 '>Phone</span>
                    <span className='text-gray-100 text-sm ml-5 '>
                      +62 858 3567 1380
                    </span>
                  </div>
                </a>
                <a href='#' className='flex'>
                  <div className='p-3 bg-gray-700 rounded-xl'>
                    <MapPin className='w-5 h-5 text-yellow-500' />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-gray-400 text-sm ml-5'>Location</span>
                    <span className='text-gray-100 text-sm ml-5'>
                      Batam, Riau Islands, Indonesia
                    </span>
                  </div>
                </a>
              </div>

              {/* Social Media */}
              <div className='flex justify-center space-x-4'>
                <a href='#'>
                  <Github className='w-5 h-5 text-gray-400 hover:text-yellow-500 cursor-pointer' />
                </a>
                <a href='#'>
                  <Twitter className='w-5 h-5 text-gray-400 hover:text-yellow-500 cursor-pointer' />
                </a>
                <a href='#'>
                  <Instagram className='w-5 h-5 text-gray-400 hover:text-yellow-500 cursor-pointer' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-span-3 row-span-5 bg-gray-800 rounded-2xl border-2 border-gray-700 h-screen overflow-y-scroll scrollbar-hide'>
            {/* Main Content */}
            <div className='flex-1 flex flex-col'>
              {/* Navigation */}
              <div className='relative'>
                <nav className=' absolute top-0 right-0 rounded-bl-4xl bg-gray-700 px-8 py-4'>
                  <div className='flex space-x-8'>
                    {["About", "Resume", "Portfolio", "Blog", "Contact"].map(
                      (item) => (
                        <button
                          key={item}
                          onClick={() => setActiveSection(item)}
                          className={`px-4 py-2 text-sm font-medium transition-colors ${
                            activeSection === item
                              ? "text-yellow-500 bg-gray-700 rounded-lg"
                              : "text-gray-300 hover:text-yellow-500"
                          }`}
                        >
                          {item}
                        </button>
                      )
                    )}
                  </div>
                </nav>

                {/* Content Area */}
                <div className='flex-1 p-8 overflow-y-auto'>
                  {renderContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
