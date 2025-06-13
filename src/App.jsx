import { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import SpotlightCard from "./components/SpotlightCard";
import Typed from "typed.js";
import PixelTransition from "./components/PixelTransition";
import CardGrid from "./components/CardGrid";
import { SwiperSlide } from "swiper/react";
import emailjs from "@emailjs/browser";

const PortfolioSite = () => {
  const [activeSection, setActiveSection] = useState("About");
  const [portfoActiveSection, portfoSetActiveSection] = useState("All");
  const [isZoomOut, setIsZoomOut] = useState(false);
  const [showContact, setIsContact] = useState(false);
  const typedRefLg = useRef(null);
  const typedRefXl = useRef(null);

  useEffect(() => {
    const checkZoom = () => {
      const zoomLevel = window.outerWidth / window.innerWidth;
      setIsZoomOut(zoomLevel < 0.95);
    };

    checkZoom();
    window.addEventListener("resize", checkZoom);

    return () => window.removeEventListener("resize", checkZoom);
  }, []);

  useEffect(() => {
    if (!typedRefLg.current && !typedRefXl.current) return;

    const timer = setTimeout(() => {
      const option = {
        strings: [
          "MRamadhanSyahPutra",
          `<span class='text-yellow-500'>Madan</span>`,
        ],
        typeSpeed: 50,
        backSpeed: 100,
        loop: true,
      };
      let typeLg = null;
      let typeXl = null;

      if (typedRefLg.current) {
        typeLg = new Typed(typedRefLg.current, option);
      }
      if (typedRefXl.current) {
        typeXl = new Typed(typedRefXl.current, option);
      }
      return () => {
        if (typeLg) typeLg.destroy();
        if (typeXl) typeXl.destroy();
      };
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const AboutSection = () => {
    const cardBidang = {
      webDev: {
        img: "/img/coding.png",
        alt: "Web-development",
        title: "Web Development",
        subTitle: " Site development at the intermediate level.",
      },
      mobileApp: {
        img: "/img/mobile-app.png",
        alt: "Mobile-apps",
        title: "Mobile Apps",
        subTitle: "Professional app development for Android.",
      },
      photography: {
        img: "/img/photography.png",
        alt: "photography",
        title: "Photography",
        subTitle: "I produced quality photos of various objects.",
      },
    };

    const sectionTestimoni = {
      kaFitri: {
        img: "img/sister.png",
        alt: "Ka-Fitri",
        name: "Ms. Fitri",
        kutipan:
          "Madan created a rental system for my custom clothing business needs",
      },
      KaRifone: {
        img: "img/brother.png",
        alt: "Ka-Rifone",
        name: "Mr.Rifone",
        kutipan: "Rama specializes in blogging, SEO, hosting, and Google Ads",
      },
    };

    const sectionClient = {
      oneShineEdu: {
        img: "img/one-shine-edu.png",
        alt: "One-Shine-Edu",
      },
      sanggarMacenning: {
        img: "img/sanggar-macenning.png",
        alt: "Sanggar-Macenning",
      },
    };

    return (
      <div className='space-y-8'>
        <div>
          <h2 className='text-3xl font-bold text-white mb-2'>About Me</h2>
          <hr className='mt-6 border-yellow-500 border-3 rounded w-10 mb-5' />
          <p className='text-gray-300 leading-relaxed mb-4'>
            I am an active student majoring in Informatics Engineering at Batam
            State Polytechnic who has high enthusiasm in exploring various
            fields, especially web development, programming, and web design. My
            skills are effective communication, ability to collaborate in a
            team, resilience in facing pressure, creativity, and good
            coordination, strong problem solving and able to be creative in
            finding solutions.
          </p>
        </div>

        <div>
          <h3 className='text-xl font-bold text-white mb-6'>What I'm Doing</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {Object.values(cardBidang).map((item, index) => (
              <SpotlightCard
                className='custom-spotlight-card bg-gray-700'
                spotlightColor='rgba(209, 213, 219, 0.25)'
                key={index}
              >
                <div className='flex items-start space-x-4'>
                  <div className='w-10 h-10 bg-yellow-500 rounded-lg flex overflow-hidden p-2'>
                    <img
                      src={item.img}
                      alt={item.alt}
                      className='w-full h-full object-cover'
                    />
                  </div>

                  <div>
                    <h4 className='text-white font-semibold mb-2'>
                      {item.title}
                    </h4>
                    <p className='text-gray-400 text-[10px] lg:text-sm'>
                      {item.subTitle}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        <div>
          <h3 className='text-xl font-bold text-white mb-6'>Testimonials</h3>
          <CardGrid>
            {Object.values(sectionTestimoni).map((item) => (
              <SwiperSlide key={item.name}>
                <div className='bg-gray-700 p-6 rounded-lg'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <div className='w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center overflow-hidden'>
                      <img src={item.img} alt={item.alt} />
                    </div>
                    <div>
                      <h4 className='text-white font-semibold'>{item.name}</h4>
                    </div>
                  </div>
                  <p className='text-gray-300 text-sm'>{item.kutipan}</p>
                </div>
              </SwiperSlide>
            ))}
          </CardGrid>
        </div>

        <div>
          <h3 className='text-xl font-bold text-white mb-6'>Clients</h3>
          <div className='mb-15 md:mb-0'>
            <CardGrid>
              {Object.values(sectionClient).map((item) => (
                <SwiperSlide key={item.alt}>
                  <div
                    className={`bg-gray-800 flex justify-center items-center ${
                      item.alt === "One-Shine-Edu"
                        ? "card-client-1"
                        : item.alt === "Sanggar-Macenning"
                        ? "card-client-2"
                        : ""
                    } rounded-lg py-5`}
                  >
                    <img
                      src={item.img}
                      alt={item.alt}
                      className={`${
                        item.alt === "Sanggar-Macenning"
                          ? "w-33 h-33"
                          : item.alt === "One-Shine-Edu"
                          ? "w-50 h-33"
                          : ""
                      }`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </CardGrid>
          </div>
        </div>
      </div>
    );
  };

  const ResumeSection = () => (
    <div className='space-y-8'>
      <div>
        <h2 className='text-3xl font-bold text-white mb-6'>Resume</h2>
        <hr className='mt-6 border-yellow-500 border-3 rounded w-10 mb-5' />
      </div>

      <div>
        <h3 className='text-xl font-bold text-white mb-6'>Education</h3>
        <ol className='relative border-s border-gray-200 dark:border-gray-700'>
          <li className='mb-10 ms-4'>
            <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Batam State Polytechnic
            </h3>
            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
              2022 - 2026
            </time>
            <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
              Specializing in website and mobile app development.
            </p>
          </li>
        </ol>
      </div>

      <div>
        <h3 className='text-xl font-bold text-white mb-6'>Experience</h3>
        <ol className='relative border-s border-gray-200 dark:border-gray-700'>
          <li className='mb-10 ms-4'>
            <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Web Development{" "}
              <small className='text-gray-500'> – One Shine Edu</small>
            </h3>
            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
              January – May 2024
            </time>
            <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
              Design responsive layouts, optimize SEO with keywords, and manage
              hosting and subdomains for maximum accessibility.
            </p>
          </li>
          <li className='mb-10 ms-4'>
            <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Become Web Programmer
              <small className='text-gray-500'> – ID-Networkers</small>
            </h3>
            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
              Oct – Nov 2023
            </time>
            <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
              Understand Bootstrap deeply and be able to implement its
              components to improve the appearance and layout of the web.
            </p>
          </li>
          <li className='mb-10 ms-4'>
            <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Web Rentals
              <small className='text-gray-500'> – Project Based Learning</small>
            </h3>
            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
              January – June 2023
            </time>
            <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
              Build a responsive interface with authentication features,
              interactive validation using SweetAlert, dynamic data management
              via Livewire, and CRUD operations complete with uploads and
              security policies to protect user data.
            </p>
          </li>
        </ol>
      </div>

      <div>
        <h3 className='text-xl font-bold text-white mb-6'>Skills</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <h4 className='text-white font-semibold mb-4'>
              Development Skills
            </h4>
            <div className='space-y-3'>
              <div>
                <div className='flex justify-between mb-1'>
                  <span className='text-gray-300 text-sm'>HTML/CSS</span>
                  <span className='text-gray-400 text-sm'>85%</span>
                </div>
                <div className='w-full bg-gray-700 rounded-full h-2'>
                  <div
                    className='bg-yellow-500 h-2 rounded-full'
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className='flex justify-between mb-1'>
                  <span className='text-gray-300 text-sm'>JavaScript</span>
                  <span className='text-gray-400 text-sm'>82%</span>
                </div>
                <div className='w-full bg-gray-700 rounded-full h-2'>
                  <div
                    className='bg-yellow-500 h-2 rounded-full'
                    style={{ width: "82%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className='flex justify-between mb-1'>
                  <span className='text-gray-300 text-sm'>React</span>
                  <span className='text-gray-400 text-sm'>76%</span>
                </div>
                <div className='w-full bg-gray-700 rounded-full h-2'>
                  <div
                    className='bg-yellow-500 h-2 rounded-full'
                    style={{ width: "76%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className='flex justify-between mb-1'>
                  <span className='text-gray-300 text-sm'>Laravel</span>
                  <span className='text-gray-400 text-sm'>81%</span>
                </div>
                <div className='w-full bg-gray-700 rounded-full h-2'>
                  <div
                    className='bg-yellow-500 h-2 rounded-full'
                    style={{ width: "81%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className='text-white font-semibold mb-4'>Design Skills</h4>
            <div className='space-y-3'>
              <div>
                <div className='flex justify-between mb-1'>
                  <span className='text-gray-300 text-sm'>Photography</span>
                  <span className='text-gray-400 text-sm'>80%</span>
                </div>
                <div className='w-full bg-gray-700 rounded-full h-2'>
                  <div
                    className='bg-yellow-500 h-2 rounded-full'
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AllPortfolio = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }, []);
    const cardData = {
      SysInfo: {
        href: "https://github.com/MRamadhanSyahPutra/SysInfo",
        src: "img/portfolio-5.jpg",
        alt: "portfolio-5",
        title: "SysInfo",
        subTitle: "Web development",
      },
      Garasiku: {
        href: "https://mramadhansyahputra.github.io/TEAM-2-PBL-TRM403/",
        src: "img/portfolio-4.jpg",
        alt: "portfolio-4",
        title: "GarasiKu",
        subTitle: "Applications",
      },
      UltraVolt: {
        href: "https://github.com/MRamadhanSyahPutra/ultravolt",
        src: "img/portfolio-3.jpg",
        alt: "portfolio-3",
        title: "UltraVolt",
        subTitle: "Applications",
      },
      DoubleAuth: {
        href: "https://github.com/MRamadhanSyahPutra/Double-Authentication",
        src: "img/portfolio-2.jpg",
        alt: "portfolio-2",
        title: "Double Auth",
        subTitle: "Web development",
      },
      WebRentals: {
        href: "https://github.com/MRamadhanSyahPutra/rental_pakaian",
        src: "img/portfolio-1.jpg",
        alt: "portfolio-1",
        title: "Web Rentals",
        subTitle: "Web development",
      },
    };
    return (
      <>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {Object.values(cardData).map((item) => (
              <div
                className={`grid-cols-1 flex justify-center items-center mb-3 transform transition-all duration-200 ease-out ${
                  isVisible ? "scale-y-100 opacity-100" : "scale-y-50 opacity-0"
                }`}
                key={item.alt}
              >
                <div className='flex flex-col'>
                  <div className='relative group bg-gray-700 px-3 py-3 rounded-lg mb-2 overflow-hidden'>
                    <a href={item.href}>
                      <img
                        src={item.src}
                        alt={item.alt}
                        className='w-70 h-45 object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110'
                      />
                      <div className='absolute inset-3 bg-gray-900/0 group-hover:bg-gray-900/50 rounded-lg transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-110 flex items-center justify-center'>
                        <div className='transform translate-y-4 group-hover:translate-y-0 scale-75 group-hover:scale-100 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
                          <img
                            src='img/eye.png'
                            alt='eye'
                            className='p-4 bg-gray-800 backdrop-blur-sm rounded-lg border border-white/20 w-12 h-12'
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <h2 className='text-white text-[16px] ml-1'>
                      {item.title}
                    </h2>
                    <p className='text-gray-500 ml-2 text-[14px]'>
                      {item.subTitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  const WebPortfolio = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }, []);
    const cardData = {
      SysInfo: {
        href: "https://github.com/MRamadhanSyahPutra/SysInfo",
        src: "img/portfolio-5.jpg",
        alt: "portfolio-5",
        title: "SysInfo",
        subTitle: "Web development",
      },

      DoubleAuth: {
        href: "https://github.com/MRamadhanSyahPutra/Double-Authentication",
        src: "img/portfolio-2.jpg",
        alt: "portfolio-2",
        title: "Double Auth",
        subTitle: "Web development",
      },
      WebRentals: {
        href: "https://github.com/MRamadhanSyahPutra/rental_pakaian",
        src: "img/portfolio-1.jpg",
        alt: "portfolio-1",
        title: "Web Rentals",
        subTitle: "Web development",
      },
    };
    return (
      <>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {Object.values(cardData).map((item) => (
              <div
                className={`grid-cols-1 flex justify-center items-center mb-3 transform transition-all duration-200 ease-out ${
                  isVisible ? "scale-y-100 opacity-100" : "scale-y-50 opacity-0"
                }`}
                key={item.alt}
              >
                <div className='flex flex-col'>
                  <div className='relative group bg-gray-700 px-3 py-3 rounded-lg mb-2 overflow-hidden'>
                    <a href={item.href}>
                      <img
                        src={item.src}
                        alt={item.alt}
                        className='w-70 h-45 object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110'
                      />
                      <div className='absolute inset-3 bg-gray-900/0 group-hover:bg-gray-900/50 rounded-lg transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-110 flex items-center justify-center'>
                        <div className='transform translate-y-4 group-hover:translate-y-0 scale-75 group-hover:scale-100 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
                          <img
                            src='img/eye.png'
                            alt='eye'
                            className='p-4 bg-gray-800 backdrop-blur-sm rounded-lg border border-white/20 w-12 h-12'
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <h2 className='text-white text-[16px] ml-1'>
                      {item.title}
                    </h2>
                    <p className='text-gray-500 ml-2 text-[14px]'>
                      {item.subTitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  const AppPortfolio = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }, []);
    const cardData = {
      Garasiku: {
        href: "https://mramadhansyahputra.github.io/TEAM-2-PBL-TRM403/",
        src: "img/portfolio-4.jpg",
        alt: "portfolio-4",
        title: "GarasiKu",
        subTitle: "Applications",
      },
      UltraVolt: {
        href: "https://github.com/MRamadhanSyahPutra/ultravolt",
        src: "img/portfolio-3.jpg",
        alt: "portfolio-3",
        title: "UltraVolt",
        subTitle: "Applications",
      },
    };
    return (
      <>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {Object.values(cardData).map((item) => (
              <div
                className={`grid-cols-1 flex justify-center items-center mb-3 transform transition-all duration-200 ease-out ${
                  isVisible ? "scale-y-100 opacity-100" : "scale-y-50 opacity-0"
                }`}
                key={item.alt}
              >
                <div className='flex flex-col'>
                  <div className='relative group bg-gray-700 px-3 py-3 rounded-lg mb-2 overflow-hidden'>
                    <a href={item.href}>
                      <img
                        src={item.src}
                        alt={item.alt}
                        className='w-70 h-45 object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110'
                      />
                      <div className='absolute inset-3 bg-gray-900/0 group-hover:bg-gray-900/50 rounded-lg transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-110 flex items-center justify-center'>
                        <div className='transform translate-y-4 group-hover:translate-y-0 scale-75 group-hover:scale-100 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
                          <img
                            src='img/eye.png'
                            alt='eye'
                            className='p-4 bg-gray-800 backdrop-blur-sm rounded-lg border border-white/20 w-12 h-12'
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <h2 className='text-white text-[16px] ml-1'>
                      {item.title}
                    </h2>
                    <p className='text-gray-500 ml-2 text-[14px]'>
                      {item.subTitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  const renderPortfolio = () => {
    switch (portfoActiveSection) {
      case "All":
        return <AllPortfolio />;
      case "Web development":
        return <WebPortfolio />;
      case "Applications":
        return <AppPortfolio />;
      default:
        return <div className='text-white'>All</div>;
    }
  };

  const PortfolioSection = () => {
    return (
      <>
        <div className='space-y-8'>
          <div>
            <h2 className='text-3xl font-bold text-white mb-6'>Portfolio</h2>
            <hr className='mt-6 border-yellow-500 border-3 rounded w-10 mb-5' />
          </div>
          <div>
            <div className='flex space-x-8'>
              {["All", "Web development", "Applications"].map((item) => (
                <button
                  key={item}
                  onClick={() => portfoSetActiveSection(item)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    portfoActiveSection === item
                      ? "text-yellow-500 bg-gray-800 rounded-lg"
                      : "text-gray-300 hover:text-yellow-500"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className='mt-5'>{renderPortfolio()}</div>
          </div>
        </div>
      </>
    );
  };

  const ContactSection = () => {
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("");

    // Handle input changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    };

    // Validation function
    const validateForm = () => {
      const newErrors = {};

      // Full Name validation
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required";
      } else if (formData.fullName.trim().length < 2) {
        newErrors.fullName = "Full name must be at least 2 characters";
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }

      // Message validation
      if (!formData.message.trim()) {
        newErrors.message = "Message is required";
      } else if (formData.message.trim().length < 10) {
        newErrors.message = "Message must be at least 10 characters";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    // Submit handler
    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      setIsSubmitting(true);
      setSubmitStatus("");

      try {
        // Option 1: Using EmailJS (Recommended)
        await sendEmailWithEmailJS();

        // Option 2: Using your own backend API
        // await sendEmailWithAPI();
      } catch (error) {
        console.error("Error sending email:", error);
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    };

    const sendEmailWithEmailJS = async () => {
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        message: formData.message,
        to_email: "muhammadramadhansyahputra1@gmail.com", // Ganti dengan email Anda
      };

      try {
        // Replace these with your EmailJS credentials
        const result = await emailjs.send(
          "service_blimdp9",
          "template_wp2uz7j",
          templateParams,
          "UnsSZPEWFzqrK36fC"
        );

        console.log("Email sent successfully!", result.text);
        setSubmitStatus("success");

        // Reset form
        setFormData({ fullName: "", email: "", message: "" });
      } catch (error) {
        throw error;
      }
    };

    // API implementation (alternative)
    const sendEmailWithAPI = async () => {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      const result = await response.json();
      setSubmitStatus("success");
      setFormData({ fullName: "", email: "", message: "" });
    };

    return (
      <div className='space-y-8'>
        <div>
          <h2 className='text-3xl font-bold text-white mb-6'>Contact</h2>
          <hr className='mt-6 border-yellow-500 border-3 rounded w-10 mb-5' />
        </div>

        <div>
          <div className='relative w-full h-0 pb-[85%] sm:pb-[85%] md:pb-[60%] lg:pb-[46.25%]'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510642.2334152242!2d103.72344851086605!3d0.8371520944738318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d9bce8c054ce05%3A0x3039d80b220cbb0!2sBatam%2C%20Kota%20Batam%2C%20Kepulauan%20Riau!5e0!3m2!1sid!2sid!4v1749714116056!5m2!1sid!2sid'
              style={{ border: 0 }}
              className='absolute top-0 left-0 w-full h-full rounded-xl'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>

        <div>
          <h3 className='text-2xl font-bold text-white mb-6'>Contact Form</h3>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className='mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg'>
              <p className='font-medium'>✅ Message sent successfully!</p>
              <p className='text-sm'>
                Thank you for contacting me. I'll get back to you soon.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className='mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg'>
              <p className='font-medium'>❌ Failed to send message.</p>
              <p className='text-sm'>
                Please try again or contact me directly.
              </p>
            </div>
          )}

          <div className='w-full h-auto'>
            <form onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 xl:grid-cols-2 gap-7 mb-5'>
                <div>
                  <label
                    htmlFor='full-name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Full name *
                  </label>
                  <input
                    type='text'
                    id='full-name'
                    name='fullName'
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                      errors.fullName
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder='Full name'
                  />
                  {errors.fullName && (
                    <p className='mt-1 text-sm text-red-500'>
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Your email *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder='yourEmail@gmail.com'
                  />
                  {errors.email && (
                    <p className='mt-1 text-sm text-red-500'>{errors.email}</p>
                  )}
                </div>
              </div>

              <div className='mb-5'>
                <label
                  htmlFor='message'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Your message *
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='4'
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300"
                  }`}
                  placeholder='Leave a message...'
                ></textarea>
                {errors.message && (
                  <p className='mt-1 text-sm text-red-500'>{errors.message}</p>
                )}
              </div>

              <div className='flex justify-end'>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`text-slate-200 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2 transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-yellow-500 to-gray-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-800 dark:focus:ring-gray-800 hover:scale-105"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className='animate-spin -ml-1 mr-3 h-4 w-4 text-white inline'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                      >
                        <circle
                          className='opacity-25'
                          cx='12'
                          cy='12'
                          r='10'
                          stroke='currentColor'
                          strokeWidth='4'
                        ></circle>
                        <path
                          className='opacity-75'
                          fill='currentColor'
                          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeSection) {
      case "About":
        return <AboutSection />;
      case "Resume":
        return <ResumeSection />;
      case "Portfolio":
        return <PortfolioSection />;
      case "Contact":
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  const sectionContact = {
    email: {
      href: "mailto:muhammadramadhansyahputra1@gmail.com",
      icon: <Mail className='w-4.5 h-4.5 xl:w-5 xl:h-5 text-yellow-500' />,
      title: "Email",
      subTitle: "muhammadramadhan..",
    },
    phone: {
      href: "tel:+6285835671380",
      icon: <Phone className='w-4.5 h-4.5 xl:w-5 xl:h-5 text-yellow-500' />,
      title: "Phone",
      subTitle: "+62 858 3567 1380",
    },
    location: {
      href: "https://www.google.com/maps/place/Batam,+Riau+Islands,+Indonesia",
      icon: <MapPin className='w-4.5 h-4.5 xl:w-5 xl:h-5 text-yellow-500' />,
      title: "Location",
      subTitle: "Batam, Riau Islands, Indonesia",
    },
  };
  const sectionSocialMedia = {
    github: {
      href: "https://github.com/MRamadhanSyahPutra",
      icon: (
        <Github className='w-4 h-4 xl:w-5 xl:h-5 text-gray-400 hover:text-yellow-500 cursor-pointer' />
      ),
    },
    linkedin: {
      href: "https://www.linkedin.com/in/muhammad-ramadhan-syah-putra/",
      icon: (
        <Linkedin className='w-5 h-5 text-gray-400 hover:text-yellow-500 cursor-pointer' />
      ),
    },
    instagram: {
      href: "https://www.instagram.com/dhaan.468/",
      icon: (
        <Instagram className='w-5 h-5 text-gray-400 hover:text-yellow-500 cursor-pointer' />
      ),
    },
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsContact((prev) => !prev);
  };
  console.log(showContact);

  return (
    <>
      <div
        className={`container mx-auto sm:mt-[65px] grid grid-cols-4 ${
          showContact
            ? "grid-rows-3 sm:grid-rows-4 md:grid-rows-5"
            : "grid-rows-6"
        } gap-4 `}
      >
        <div
          className={`${
            showContact ? "col-span-4 row-span-1" : "col-span-4"
          } transition-all duration-200 ease-in-out xl:col-span-1 xl:row-span-5 xl:row-start-1 xl:col-start-1 mx-3 mt-4 sm:mx-0 sm:mt-0 bg-gray-800 rounded-2xl border-2 border-gray-700`}
        >
          {/* Sidebar */}
          <div className='hidden xl:block'>
            <div className='w-auto p-8 flex flex-col'>
              {/* Profile Section */}
              <div className='text-center mb-8'>
                <div className='w-34 h-30 bg-gray-700 rounded-2xl mx-auto mb-7 flex items-end justify-center mt-10'>
                  <PixelTransition
                    firstContent={<img src='img/me.png' alt='Madan' />}
                    secondContent={
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "grid",
                          placeItems: "center",
                          backgroundColor: "#374151",
                        }}
                      >
                        <p
                          style={{
                            fontWeight: 900,
                            fontSize: "1rem",
                            color: "#fff",
                          }}
                        >
                          Madan
                        </p>
                      </div>
                    }
                    gridSize={12}
                    pixelColor='#ffffff'
                    animationStepDuration={0.4}
                    className='custom-pixel-card'
                  />
                </div>
                <h1 className='text-white text-xl font-bold mb-4'>
                  <span ref={typedRefXl}></span>
                </h1>
                <p className='text-gray-200 text-sm bg-gray-700 inline-block px-4 py-1 rounded-xl italic'>
                  Web Developer
                </p>
                <hr className='mt-6 text-yellow-500 mx-2' />
              </div>

              {/* Contact Info */}
              <div className='space-y-4 mb-8 mt-2'>
                {Object.values(sectionContact).map((item, index) => (
                  <a href={item.href} className='flex' key={index}>
                    <div className='p-3 bg-gray-700 rounded-xl'>
                      {item.icon}
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-gray-400 text-sm ml-5'>
                        {item.title}
                      </span>
                      <span className='text-gray-100 text-sm ml-5'>
                        {item.subTitle}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Media */}
              <div className='flex justify-center space-x-4'>
                {Object.values(sectionSocialMedia).map((item, index) => (
                  <a href={item.href} key={index}>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Breakpoint-max-lg */}
          <div className='block xl:hidden relative'>
            <div className='w-auto p-8 flex flex-row items-center'>
              {/* Profile Section */}
              <div className='text-center'>
                <div className='w-[85px] h-[85px] sm:w-34 sm:h-30 bg-gray-700 rounded-2xl flex items-center justify-center'>
                  <PixelTransition
                    firstContent={<img src='img/me.png' alt='Madan' />}
                    secondContent={
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "grid",
                          placeItems: "center",
                          backgroundColor: "#374151",
                        }}
                      >
                        <p
                          style={{
                            fontWeight: 900,
                            fontSize: "1rem",
                            color: "#fff",
                          }}
                        >
                          Madan
                        </p>
                      </div>
                    }
                    gridSize={12}
                    pixelColor='#ffffff'
                    animationStepDuration={0.4}
                    className='custom-pixel-card'
                  />
                </div>
              </div>
              <div className='ml-5'>
                <h1 className='text-white text-[18px] sm:text-3xl font-bold mb-2 sm:mb-4'>
                  <span ref={typedRefLg}></span>
                </h1>
                <p className='text-gray-200 text-[11px] sm:text-sm bg-gray-700 inline-block px-4 py-1 rounded-xl italic'>
                  Web Developer
                </p>
                <button
                  type='button'
                  onClick={handleClick}
                  className='hidden sm:block absolute top-0 -right-2 rounded-bl-xl rounded-tr-xl text-white bg-gray-700 hover:bg-gray-800 focus:ring-1 focus:ring-gray-700 font-medium text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none '
                >
                  Show Contact
                </button>
                <button
                  type='button'
                  onClick={handleClick}
                  className=' sm:hidden absolute top-0 -right-2 rounded-bl-xl rounded-tr-xl text-white bg-gray-700 hover:bg-gray-800 focus:ring-1 focus:ring-gray-700 font-medium text-sm px-3 py-1.5 me-2 mb-2 focus:outline-none '
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                  >
                    <path
                      fill='none'
                      stroke='currentColor'
                      strokeDasharray='10'
                      strokeDashoffset='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 15l-5 -5M12 15l5 -5'
                    >
                      <animate
                        fill='freeze'
                        attributeName='stroke-dashoffset'
                        dur='0.3s'
                        values='10;0'
                      />
                    </path>
                  </svg>
                </button>
              </div>
            </div>
            {showContact && (
              <div className='w-auto px-3 flex flex-col'>
                <hr className=' text-yellow-500 mx-auto border-2 w-[320px] sm:w-[600px] md:w-[700px] lg:w-[1000px] border-gray-600 rounded-xl' />
                <div className='flex flex-col md:flex-row'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 mb-5 ml-5'>
                    {Object.values(sectionContact).map((item, index) => (
                      <div className='col-span-1' key={index}>
                        <a href={item.href} className='flex' key={index}>
                          <div className='p-2 flex justify-center items-center xl:p-3 rounded-xl'>
                            {item.icon}
                          </div>
                          <div className='flex flex-col'>
                            <span className='text-gray-400 text-sm ml-5'>
                              {item.title}
                            </span>
                            <span className='text-gray-100 text-sm ml-5'>
                              {item.subTitle}
                            </span>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                  <hr className=' md:hidden text-yellow-500 mx-auto border-2 w-[320px] sm:w-[600px] md:w-[700px] lg:w-[1000px] border-gray-600 rounded-xl' />
                  <div className='mt-5 ml-7 mb-8 md:ml-0 md:mb-0'>
                    <div className='flex  md:justify-center space-x-4'>
                      {Object.values(sectionSocialMedia).map((item, index) => (
                        <a href={item.href} key={index}>
                          {item.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* End-section */}
        </div>
        {/* Separate-parts */}
        <div
          className={`${
            showContact ? "col-span-4 row-span-5" : "col-span-4 row-span-5"
          } xl:col-span-3 xl:row-span-6 xl:row-start-1 xl:col-start-2 mx-3 mb-16 sm:mx-0 bg-gray-800 rounded-2xl border-2 ${
            isZoomOut ? "" : "h-screen"
          } border-gray-700 overflow-y-scroll scrollbar-hide`}
        >
          {/* Main Content */}
          <div className='flex-1 flex flex-col'>
            {/* Navigation */}
            <div className='relative'>
              <nav className='hidden lg:block lg:absolute top-0 right-0 rounded-bl-4xl bg-gray-700 px-8 py-4'>
                <div className='flex space-x-8'>
                  {["About", "Resume", "Portfolio", "Contact"].map((item) => (
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
                  ))}
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
      {/* Navbar-active-in-sm-to-md */}
      <div className='fixed lg:hidden w-full p-5 bottom-0 z-10 bg-gray-700/60 backdrop-blur-xl rounded-tr-2xl rounded-tl-2xl'>
        <div className='flex justify-center'>
          {["About", "Resume", "Portfolio", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => setActiveSection(item)}
              className={`px-4 py-2 text-[12px] sm:text-sm font-medium transition-colors ${
                activeSection === item
                  ? "text-yellow-500"
                  : "text-gray-300 hover:text-yellow-500"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default PortfolioSite;
