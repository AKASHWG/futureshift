import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import AuthModal from "./AuthModal.jsx";

import Button from "./Button";

const navItems = ["Account", "About Us", "Contact"];

const NavBar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const openAuthModal = (e) => {
    e.preventDefault();
    setIsAuthModalOpen(true);
  };

  return (
      <>
        <div
            ref={navContainerRef}
            className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
        >
          <header className="absolute top-1/2 w-full -translate-y-1/2">
            <nav className="flex size-full items-center justify-between p-4">
              <div className="flex items-center gap-7">
                {/* Logo button opens Auth Modal */}
                <button
                    className="w-10 cursor-pointer transition-transform duration-300 hover:scale-125"
                    onClick={openAuthModal}
                >
                  <img src="/img/logo.png" alt="logo" className="w-10" />
                </button>

                <div className={'font-bold '}>

                <Button
                    id="product-button"
                    title="Lets Play!"
                    rightIcon={<TiLocationArrow />}
                    containerClass=" md:flex hidden items-center justify-center gap-1 "
                />
                </div>
              </div>

              <div className="flex h-full items-center">
                <div className="hidden md:block">
                  {navItems.map((item, index) => (
                      <a
                          key={index}
                          href={`#${item.toLowerCase()}`}
                          className="nav-hover-btn cursor-pointer"
                          onClick={(e) => {
                            if (item === "Account") {
                              openAuthModal(e);
                            }
                          }}
                      >
                        {item}
                      </a>
                  ))}
                </div>

                <button
                    onClick={toggleAudioIndicator}
                    className="ml-10 flex items-center space-x-1 p-3 rounded-lg transition-transform duration-300 hover:scale-125"
                >
                  <audio
                      ref={audioElementRef}
                      className="hidden"
                      src="/audio/loop.mp3"
                      loop
                  />
                  {[1, 2, 3, 4].map((bar) => (
                      <div
                          key={bar}
                          className={clsx("indicator-line", {
                            active: isIndicatorActive,
                          })}
                          style={{
                            animationDelay: `${bar * 0.1}s`,
                          }}
                      />
                  ))}
                </button>
              </div>
            </nav>
          </header>
        </div>

        {/* Modal (fix name depending on whether it's AuthModel or AuthModal) */}
        <AuthModal
            isOpen={isAuthModalOpen}
            onClose={() => setIsAuthModalOpen(false)}
        />
      </>
  );
};

export default NavBar;
