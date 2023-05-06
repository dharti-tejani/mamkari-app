import React from 'react';
import Zoom from 'react-reveal/Zoom';
export const Backto_bottom = () => {
  const scrollToTop = () => {
    var sectionbgSelector = document.querySelector('.Who_we_are_sec');
    var header_height = document.querySelector('.in_header_wrapper').offsetHeight;
    let secpostion = sectionbgSelector.offsetTop;
    const distance = secpostion - header_height;
    window.scrollTo({
      top: distance,
      behavior: "smooth",
    });
  };
  return (
    <div className="backto_bottom">
      <Zoom top  delay={500}  duration={1000} > 
      <a href='#0' onClick={scrollToTop} className='backto_bottom-btn' >
        <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M6.74766 7.57533L6.74785 7.57533C6.88443 7.57497 7.0126 7.51752 7.10503 7.41998C7.10512 7.41989 7.1052 7.4198 7.10529 7.41971L12.605 1.62497L12.605 1.62495L12.6141 1.6154L12.6141 1.61531C12.7996 1.41292 12.7948 1.09496 12.602 0.898728L12.602 0.898685C12.4026 0.695815 12.0802 0.701583 11.8876 0.909617L6.74715 6.32628L1.60499 0.908815L1.60502 0.908789L1.60199 0.905704C1.40713 0.707405 1.09287 0.707436 0.898023 0.905683L0.89799 0.905716C0.705232 1.10191 0.700328 1.41993 0.885908 1.62234L0.88588 1.62237L0.888849 1.62549L6.38886 7.4205L6.38903 7.42068C6.4819 7.51834 6.61065 7.57558 6.74766 7.57533ZM1.07632 1.08092C1.17321 0.982343 1.3268 0.982343 1.42367 1.08092L6.9237 7.24788C6.87692 7.29732 6.81343 7.32515 6.74719 7.32533C6.68084 7.32545 6.61716 7.29779 6.57019 7.2484L1.07018 1.45339C0.974251 1.34876 0.977017 1.182 1.07632 1.08092Z" fill="white" stroke="white" strokeWidth="0.5" />
          <path opacity="0.5" d="M6.74766 15.9008L6.74785 15.9008C6.88443 15.9004 7.0126 15.843 7.10503 15.7454C7.10512 15.7453 7.1052 15.7452 7.10529 15.7452L12.605 9.95041L12.605 9.95039L12.6141 9.94084L12.6141 9.94075C12.7996 9.73836 12.7948 9.4204 12.602 9.22417L12.602 9.22412C12.4026 9.02125 12.0802 9.02702 11.8876 9.23506L6.74715 14.6517L1.60499 9.23425L1.60502 9.23423L1.60199 9.23114C1.40713 9.03284 1.09287 9.03288 0.898023 9.23112L0.89799 9.23116C0.705232 9.42735 0.700328 9.74537 0.885908 9.94778L0.88588 9.94781L0.888849 9.95093L6.38886 15.7459L6.38903 15.7461C6.4819 15.8438 6.61065 15.901 6.74766 15.9008ZM1.07632 9.40636C1.17321 9.30778 1.3268 9.30778 1.42367 9.40636L6.9237 15.5733C6.87692 15.6228 6.81343 15.6506 6.74719 15.6508C6.68084 15.6509 6.61716 15.6232 6.57019 15.5738L1.07018 9.77883C0.974251 9.6742 0.977017 9.50744 1.07632 9.40636Z" fill="white" stroke="white" strokeWidth="0.5" />
        </svg>
      </a>
      </Zoom>
    </div>
  )
}
