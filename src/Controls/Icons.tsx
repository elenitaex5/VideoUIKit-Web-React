import React from 'react'

const icons = {
  videocam: (
    <React.Fragment>
      <polygon points='23 7 16 12 23 17 23 7' />
      <rect x='1' y='5' width='15' height='14' rx='2' ry='2' />
    </React.Fragment>
  ),
  videocamOff: (
    <React.Fragment>
      <path d='M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10' />
      <line x1='1' y1='1' x2='23' y2='23' />
    </React.Fragment>
  ),
  remoteSwap: (
    <React.Fragment>
      <polyline points='15 3 21 3 21 9' />
      <polyline points='9 21 3 21 3 15' />
      <line x1='21' y1='3' x2='14' y2='10' />
      <line x1='3' y1='21' x2='10' y2='14' />
    </React.Fragment>
  ),
  callEnd: (
    <React.Fragment>
      <path d='M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91' />
      <line x1='23' y1='1' x2='1' y2='23' />
    </React.Fragment>
  ),
  mic: (
    <React.Fragment>
      <path d='M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z' />
      <path d='M19 10v2a7 7 0 0 1-14 0v-2' />
      <line x1='12' y1='19' x2='12' y2='23' />
      <line x1='8' y1='23' x2='16' y2='23' />
    </React.Fragment>
  ),
  micOff: (
    <React.Fragment>
      <line x1='1' y1='1' x2='23' y2='23' />
      <path d='M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6' />
      <path d='M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23' />
      <line x1='12' y1='19' x2='12' y2='23' />
      <line x1='8' y1='23' x2='16' y2='23' />
    </React.Fragment>
  ),
  screen: (
    <React.Fragment>
      <rect x='2' y='3' width='20' height='14' rx='2' ry='2' />
      <line x1='8' y1='21' x2='16' y2='21' />
      <line x1='12' y1='17' x2='12' y2='21' />
    </React.Fragment>
  ),
  stop: (
    <React.Fragment>
      <line x1='18' y1='6' x2='6' y2='18' />
      <line x1='6' y1='6' x2='18' y2='18' />
    </React.Fragment>
  ),
  fullScreen: (
    <React.Fragment>
      <path
        d='M0.31456 13.6441L0.314903 13.7441L0.414903 13.7438L5.74537 13.7255L5.84537 13.7251L5.84502 13.6251L5.84009 12.1862L5.83974 12.0863L5.73975 12.0866L2.82959 12.0966L2.82925 12.0966L1.94516 12.0966L1.94516 11.2189L1.94516 11.2185L1.93517 8.30803L1.93483 8.20803L1.83483 8.20838L0.395932 8.21331L0.295932 8.21366L0.296275 8.31366L0.31456 13.6441ZM0.287412 5.73018L0.287755 5.83018L0.387754 5.82984L1.82665 5.8249L1.92665 5.82456L1.92631 5.72456L1.91689 2.97864L1.93333 2.09348L2.79459 2.09348L2.79493 2.09348L5.57462 2.08394L5.67462 2.0836L5.67428 1.9836L5.66934 0.544703L5.669 0.444703L5.569 0.445046L0.369343 0.462884L0.269343 0.463228L0.269686 0.563227L0.287412 5.73018ZM8.2285 13.617L8.22884 13.717L8.32884 13.7166L13.4958 13.6989L13.5958 13.6986L13.5955 13.5986L13.5777 8.43161L13.5774 8.33161L13.4774 8.33195L12.0385 8.33689L11.9385 8.33723L11.9388 8.43723L11.9483 11.1839L11.9483 11.1842L11.9483 12.0683L11.0706 12.0683L11.0702 12.0683L8.32322 12.0777L8.22322 12.0781L8.22357 12.1781L8.2285 13.617ZM8.18856 1.97498L8.18891 2.07498L8.28891 2.07463L11.0343 2.06521L11.9284 2.09065L11.92 2.94192L11.92 2.94192L11.92 2.94325L11.9294 5.69024L11.9297 5.79024L12.0297 5.7899L13.4686 5.78496L13.5686 5.78462L13.5683 5.68462L13.5506 0.517667L13.5502 0.417667L13.4502 0.41801L8.28328 0.435736L8.18328 0.436079L8.18363 0.536078L8.18856 1.97498Z'
        fill='white'
        stroke='white'
        strokeWidth='0.2'
      />
    </React.Fragment>
  ),
  switchCamera: (
    <React.Fragment>
      <path
        d='M17.2315 9.27891L14.3054 12.2422L15.3695 13.2898L16.5517 12.0925C16.4138 13.5293 15.9212 14.6966 15.0739 15.5946C14.2266 16.4925 13.202 16.9415 12 16.9415C11.665 16.9415 11.3744 16.9166 11.1281 16.8667C10.8818 16.8168 10.6502 16.7419 10.4335 16.6422L9.3399 17.7197C9.75369 17.9791 10.1724 18.1637 10.5961 18.2735C11.0197 18.3832 11.4877 18.4381 12 18.4381C13.6749 18.4381 15.069 17.8494 16.1823 16.6721C17.2956 15.4948 17.9015 13.9882 18 12.1524L19.1232 13.2898L20.1872 12.2422L17.2315 9.27891ZM6.82759 15.415L9.75369 12.4517L8.68966 11.4041L7.50739 12.6014C7.64532 11.1646 8.13793 9.99728 8.98522 9.09932C9.83251 8.20136 10.8571 7.75238 12.0591 7.75238C12.3941 7.75238 12.6847 7.77732 12.931 7.82721C13.1773 7.8771 13.4089 7.95193 13.6256 8.0517L14.7192 6.97415C14.3054 6.71474 13.8867 6.53016 13.4631 6.42041C13.0394 6.31066 12.5714 6.25578 12.0591 6.25578C10.3842 6.25578 8.99015 6.84444 7.87685 8.02177C6.76355 9.19909 6.15764 10.7057 6.05911 12.5415L4.93596 11.4041L3.87192 12.4517L6.82759 15.415ZM2.00985 22C1.47783 22 1.00985 21.7955 0.605911 21.3864C0.20197 20.9773 0 20.5034 0 19.9646V4.72925C0 4.19048 0.20197 3.71655 0.605911 3.30748C1.00985 2.89841 1.47783 2.69388 2.00985 2.69388H6.26601L8.48276 0H15.5172L17.734 2.69388H21.9901C22.5222 2.69388 22.9901 2.89841 23.3941 3.30748C23.798 3.71655 24 4.19048 24 4.72925V19.9646C24 20.5034 23.798 20.9773 23.3941 21.3864C22.9901 21.7955 22.5222 22 21.9901 22H2.00985ZM21.9901 19.9646V4.72925H16.8177L14.5714 2.06531H9.42857L7.18227 4.72925H2.00985V19.9646H21.9901Z'
        fill='white'
        stroke='white'
        strokeWidth='0.2'
      />
    </React.Fragment>
  )
}

export default icons
