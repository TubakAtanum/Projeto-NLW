import React from 'react'
import Svg, {Path, Rect} from 'react-native-svg'


export default function Logo() {
  return (
  <Svg width="116" height="64" viewBox="0 0 116 64" fill="none">
      <Path d="M7.31818 46.0455V56H1.76136V32.7273H7.13636V41.75H7.32955C7.72349 40.6742 8.36742 39.8333 9.26136 39.2273C10.1629 38.6212 11.2652 38.3182 12.5682 38.3182C13.7955 38.3182 14.8636 38.5909 15.7727 39.1364C16.6818 39.6742 17.3864 40.4356 17.8864 41.4205C18.3939 42.4053 18.6439 43.5568 18.6364 44.875V56H13.0795V45.9659C13.0871 44.9962 12.8447 44.2386 12.3523 43.6932C11.8598 43.1477 11.1667 42.875 10.2727 42.875C9.68939 42.875 9.17424 43.0038 8.72727 43.2614C8.28788 43.5114 7.94318 43.8712 7.69318 44.3409C7.45076 44.8106 7.32576 45.3788 7.31818 46.0455ZM27.0256 56.2955C25.9119 56.2955 24.9233 56.1098 24.0597 55.7386C23.2036 55.3598 22.5256 54.7917 22.0256 54.0341C21.5331 53.2689 21.2869 52.3106 21.2869 51.1591C21.2869 50.1894 21.4574 49.3712 21.7983 48.7045C22.1392 48.0379 22.6089 47.4962 23.2074 47.0795C23.8059 46.6629 24.4953 46.3485 25.2756 46.1364C26.0559 45.9167 26.8892 45.7689 27.7756 45.6932C28.768 45.6023 29.5672 45.5076 30.1733 45.4091C30.7794 45.303 31.2188 45.1553 31.4915 44.9659C31.7718 44.7689 31.9119 44.4924 31.9119 44.1364V44.0795C31.9119 43.4962 31.7112 43.0455 31.3097 42.7273C30.9081 42.4091 30.3665 42.25 29.6847 42.25C28.9498 42.25 28.3589 42.4091 27.9119 42.7273C27.465 43.0455 27.1809 43.4848 27.0597 44.0455L21.9347 43.8636C22.0862 42.803 22.4763 41.8561 23.1051 41.0227C23.7415 40.1818 24.6127 39.5227 25.7188 39.0455C26.8324 38.5606 28.1695 38.3182 29.7301 38.3182C30.8438 38.3182 31.8703 38.4508 32.8097 38.7159C33.7491 38.9735 34.5672 39.3523 35.2642 39.8523C35.9612 40.3447 36.4991 40.9508 36.8778 41.6705C37.2642 42.3902 37.4574 43.2121 37.4574 44.1364V56H32.2301V53.5682H32.0938C31.7831 54.1591 31.3854 54.6591 30.9006 55.0682C30.4233 55.4773 29.8589 55.7841 29.2074 55.9886C28.5634 56.1932 27.8362 56.2955 27.0256 56.2955ZM28.7415 52.6591C29.34 52.6591 29.8778 52.5379 30.3551 52.2955C30.84 52.053 31.2263 51.7197 31.5142 51.2955C31.8021 50.8636 31.946 50.3636 31.946 49.7955V48.1364C31.7869 48.2197 31.5938 48.2955 31.3665 48.3636C31.1468 48.4318 30.9044 48.4962 30.6392 48.5568C30.3741 48.6174 30.1013 48.6705 29.821 48.7159C29.5407 48.7614 29.2718 48.803 29.0142 48.8409C28.4915 48.9242 28.0445 49.053 27.6733 49.2273C27.3097 49.4015 27.0294 49.6288 26.8324 49.9091C26.643 50.1818 26.5483 50.5076 26.5483 50.8864C26.5483 51.4621 26.7528 51.9015 27.1619 52.2045C27.5786 52.5076 28.1051 52.6591 28.7415 52.6591ZM40.8551 56V32.7273H46.4119V41.5341H46.5256C46.7528 41.0038 47.0748 40.4924 47.4915 40C47.9157 39.5076 48.4536 39.1061 49.1051 38.7955C49.7642 38.4773 50.5521 38.3182 51.4688 38.3182C52.6809 38.3182 53.8134 38.6364 54.8665 39.2727C55.9271 39.9091 56.7831 40.8902 57.4347 42.2159C58.0862 43.5417 58.4119 45.2311 58.4119 47.2841C58.4119 49.2614 58.0975 50.9167 57.4688 52.25C56.8475 53.5833 56.0066 54.5833 54.946 55.25C53.893 55.9167 52.7225 56.25 51.4347 56.25C50.5559 56.25 49.7945 56.1061 49.1506 55.8182C48.5066 55.5303 47.965 55.1515 47.5256 54.6818C47.0938 54.2121 46.7604 53.7083 46.5256 53.1705H46.3551V56H40.8551ZM46.2983 47.2727C46.2983 48.2121 46.4233 49.0303 46.6733 49.7273C46.9309 50.4242 47.2983 50.9659 47.7756 51.3523C48.2604 51.7311 48.84 51.9205 49.5142 51.9205C50.196 51.9205 50.7756 51.7311 51.2528 51.3523C51.7301 50.9659 52.09 50.4242 52.3324 49.7273C52.5824 49.0303 52.7074 48.2121 52.7074 47.2727C52.7074 46.3333 52.5824 45.5189 52.3324 44.8295C52.09 44.1402 51.7301 43.6061 51.2528 43.2273C50.7831 42.8485 50.2036 42.6591 49.5142 42.6591C48.8324 42.6591 48.2528 42.8447 47.7756 43.2159C47.2983 43.5871 46.9309 44.1174 46.6733 44.8068C46.4233 45.4962 46.2983 46.3182 46.2983 47.2727ZM61.3239 56V38.5455H66.8807V56H61.3239ZM64.108 36.5114C63.3277 36.5114 62.6572 36.2538 62.0966 35.7386C61.536 35.2159 61.2557 34.5871 61.2557 33.8523C61.2557 33.125 61.536 32.5038 62.0966 31.9886C62.6572 31.4659 63.3277 31.2045 64.108 31.2045C64.8958 31.2045 65.5663 31.4659 66.1193 31.9886C66.6799 32.5038 66.9602 33.125 66.9602 33.8523C66.9602 34.5871 66.6799 35.2159 66.1193 35.7386C65.5663 36.2538 64.8958 36.5114 64.108 36.5114ZM80.2699 38.5455V42.6364H69.2585V38.5455H80.2699ZM71.5653 34.3636H77.1222V50.5114C77.1222 50.8523 77.1752 51.1288 77.2812 51.3409C77.3949 51.5455 77.5578 51.6932 77.7699 51.7841C77.982 51.8674 78.2358 51.9091 78.5312 51.9091C78.7434 51.9091 78.9669 51.8902 79.2017 51.8523C79.4441 51.8068 79.6259 51.7689 79.7472 51.7386L80.5881 55.75C80.3229 55.8258 79.9479 55.9205 79.4631 56.0341C78.9858 56.1477 78.4138 56.2197 77.7472 56.25C76.4441 56.3106 75.3267 56.1591 74.3949 55.7955C73.4706 55.4242 72.7623 54.8485 72.2699 54.0682C71.785 53.2879 71.5502 52.3068 71.5653 51.125V34.3636ZM98.125 43.875L93.0227 44.0114C92.9697 43.6477 92.8258 43.3258 92.5909 43.0455C92.3561 42.7576 92.0492 42.5341 91.6705 42.375C91.2992 42.2083 90.8674 42.125 90.375 42.125C89.7311 42.125 89.1818 42.2538 88.7273 42.5114C88.2803 42.7689 88.0606 43.1174 88.0682 43.5568C88.0606 43.8977 88.197 44.1932 88.4773 44.4432C88.7652 44.6932 89.2765 44.8939 90.0114 45.0455L93.375 45.6818C95.1174 46.0152 96.4129 46.5682 97.2614 47.3409C98.1174 48.1136 98.5492 49.1364 98.5568 50.4091C98.5492 51.6061 98.1932 52.6477 97.4886 53.5341C96.7917 54.4205 95.8371 55.1098 94.625 55.6023C93.4129 56.0871 92.0265 56.3295 90.4659 56.3295C87.9735 56.3295 86.0076 55.8182 84.5682 54.7955C83.1364 53.7652 82.3182 52.3864 82.1136 50.6591L87.6023 50.5227C87.7235 51.1591 88.0379 51.6439 88.5455 51.9773C89.053 52.3106 89.7008 52.4773 90.4886 52.4773C91.2008 52.4773 91.7803 52.3447 92.2273 52.0795C92.6742 51.8144 92.9015 51.4621 92.9091 51.0227C92.9015 50.6288 92.7273 50.3144 92.3864 50.0795C92.0455 49.8371 91.5114 49.6477 90.7841 49.5114L87.7386 48.9318C85.9886 48.6136 84.6856 48.0265 83.8295 47.1705C82.9735 46.3068 82.5492 45.2083 82.5568 43.875C82.5492 42.7083 82.8598 41.7121 83.4886 40.8864C84.1174 40.053 85.0114 39.4167 86.1705 38.9773C87.3295 38.5379 88.697 38.3182 90.2727 38.3182C92.6364 38.3182 94.5 38.8144 95.8636 39.8068C97.2273 40.7917 97.9811 42.1477 98.125 43.875Z" fill="white"/>
      <Rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#18181B" stroke="#27272A"/>
      <Rect x="20.5" y="0.5" width="15" height="15" rx="3.5" fill="#4C1D95" stroke="#6D28D9"/>
      <Rect x="40.5" y="0.5" width="15" height="15" rx="3.5" fill="#5B21B6" stroke="#7C3AED"/>
      <Rect x="60.5" y="0.5" width="15" height="15" rx="3.5" fill="#6D28D9" stroke="#8B5CF6"/>
      <Rect x="80.5" y="0.5" width="15" height="15" rx="3.5" fill="#7C3AED" stroke="#A78BFA"/>
      <Rect x="100.5" y="0.5" width="15" height="15" rx="3.5" fill="#8B5CF6" stroke="#C4B5FD"/>
  </Svg>
  )
}