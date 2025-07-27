const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/yashmalvi525" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a href="https://linkedin.com/in/yash-malvi" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/twitter.svg" alt="linkedin" className="w-1/2 h-1/2" />
        </a>
        <a href="mailto:yashlohar158@gmail.com?subject=Contact from Portfolio&body=Hi Yash, I visited your portfolio and would like to connect." className="social-icon">
          <img src="/assets/instagram.svg" alt="email" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2025 Yash Malvi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
