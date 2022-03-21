import React from 'react';

const YouTubeIcon = ({ url }: YouTubeIconProps) => {
  const icon = {
    svgAttributes: {
      viewBox: "0 0 3333 3333",
      width: "3rem",
      height: "3rem",
    },
    data: "M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm913 1294s-18-129-74-185c-71-74-151-75-187-79-261-19-652-19-652-19h-1s-392 0-652 19c-36 4-116 5-187 79-56 56-74 185-74 185s-19 151-19 302v141c0 151 19 302 19 302s18 129 74 185c71 74 164 72 206 80 149 14 634 19 634 19s392-1 653-19c36-4 116-5 187-79 56-56 74-185 74-185s19-151 19-302v-141c0-151-19-302-19-302zm-1107 615v-524l504 263-504 261z"
  }
  
  return (
    <a href={url} target="_blank">
      <svg {...icon.svgAttributes}>
        <path 
          d={icon.data}
        />
      </svg>
    </a>
  )
}
export default YouTubeIcon;

type YouTubeIconProps = {
  url: string
}

