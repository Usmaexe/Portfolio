'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Technology Icons Component
const TechIcon = ({ name, size = 40 }) => {
  const icons = {
    'Java': (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <path fill="#64FFDA" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
        <path fill="#64FFDA" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/>
        <path fill="#64FFDA" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"/>
        <path fill="#64FFDA" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"/>
        <path fill="#64FFDA" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
      </svg>
    ),
    'Python': (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <linearGradient id="python-gradient" x1="70%" y1="0%" x2="30%" y2="100%">
          <stop offset="0%" stopColor="#64FFDA" stopOpacity="1" />
          <stop offset="100%" stopColor="#64FFDA" stopOpacity="0.7" />
        </linearGradient>
        <path fill="url(#python-gradient)" d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"/>
      </svg>
    ),
    'JavaScript': (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <path fill="#64FFDA" d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-10.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"/>
      </svg>
    ),
    'TypeScript': (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <path fill="#64FFDA" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"/>
      </svg>
    ),
    'React': (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <g fill="#64FFDA">
          <circle cx="64" cy="64" r="11.4"/>
          <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21.1c-1.2-2-2.3-4.1-3.4-6.2-1.2-2.1-2.4-4.1-3.6-6-3.8.5-7.4 1.1-10.8 1.9 1.1 3.3 2.3 6.8 3.8 10.3zM17 64c0-4.2 4.3-8.3 11.7-11.4 2-.8 4.2-1.5 6.4-2.1 1.6 5.2 3.6 10.6 6.1 16.2-2.4 5.6-4.5 11-6.1 16.2-2.2-.7-4.4-1.4-6.4-2.1C21.3 77.5 17 73.4 17 64zm65.7 24.1c-.7 3.7-1.9 7.2-3.3 10.5-2 5.2-4.6 9.7-7.8 13.5 7.4-7.3 12.9-12.3 18.3-18.9.4-2.3.7-4.7.9-7.1zM111 88.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5.2-3.6-10.6-6.1-16.2 2.4-5.6 4.5-11 6.1-16.2 2.2.7 4.4 1.4 6.4 2.1 7.4 3.1 11.7 7.2 11.7 11.4 0 4.2-4.3 8.3-11.7 11.4z"/>
        </g>
      </svg>
    ),
    'Next.js': (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <path fill="#64FFDA" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/>
      </svg>
    ),
    'Spring Boot': (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <path fill="#64FFDA" d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205-.026C28.984-.026 0 28.982 0 64.242a64.316 64.316 0 0019.945 46.562l2.368 2.1a64.22 64.22 0 0041.358 15.122c33.487 0 61.637-26.24 64.021-59.683 1.751-16.371-3.051-37.077-11.24-61.7zM29.067 111.17a5.5 5.5 0 01-4.269 2.034c-3.018 0-5.487-2.484-5.487-5.502s2.485-5.501 5.487-5.501c1.25 0 2.485.433 3.452 1.234 2.351 1.9 2.718 5.384.817 7.735zm87.119-19.238c-15.843 21.122-49.68 14.003-71.376 15.02 0 0-3.852.234-7.721.867 0 0 1.45-.617 3.335-1.334 15.226-5.301 22.43-6.335 31.685-11.086 17.427-8.869 34.654-28.274 38.24-48.463-6.637 19.422-26.75 36.11-45.077 42.895-12.557 4.635-35.238 9.136-35.238 9.136l-.917-.484c-15.442-7.518-15.91-40.977 12.157-51.78 12.291-4.735 24.048-2.134 37.323-5.302 14.175-3.367 30.568-14.004 37.238-27.874 7.471 22.19 16.46 56.932.35 78.405z"/>
      </svg>
    ),
    'Laravel': (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <path fill="#64FFDA" d="M27.271 80.221c.024-.085.056-.168.084-.253.333-1.229-.042-2.656-.935-3.572l-.016-.016c-.004-.004-.008-.01-.012-.016-.184-.207-.396-.391-.64-.54-1.463-.892-3.368-.45-4.259 1.014-.89 1.462-.44 3.367 1.022 4.257a3.063 3.063 0 003.572-.019c.013-.009.023-.02.036-.029.056-.04.108-.086.16-.132a3.063 3.063 0 001.388-1.693zm71.855-21.405c-3.65-6.372-9.656-10.776-16.916-12.401-7.261-1.626-14.87-.444-21.426 3.325-6.556 3.77-11.398 9.794-13.636 16.963-2.237 7.168-1.665 14.902 1.612 21.782 3.278 6.88 8.926 12.233 15.906 15.077 2.265.923 4.621 1.542 6.997 1.851.375.05.75.09 1.125.12.367.03.738.051 1.109.06h.004c5.655.136 11.26-1.41 16.095-4.439 4.835-3.029 8.673-7.389 11.023-12.525 2.35-5.136 3.115-10.825 2.198-16.345-.918-5.52-3.395-10.628-7.117-14.684l.026-.016zm-11.17 35.483c-2.126 3.692-5.45 6.595-9.467 8.268-4.017 1.673-8.486 1.98-12.725.874-4.24-1.105-7.992-3.607-10.685-7.12-2.693-3.514-4.166-7.816-4.195-12.253-.029-4.437 1.378-8.764 4.01-12.316 2.632-3.553 6.338-6.125 10.555-7.323 4.217-1.197 8.7-1.04 12.765.448 4.065 1.488 7.489 4.271 9.744 7.922 2.255 3.65 3.21 7.935 2.72 12.197-.49 4.262-2.358 8.253-5.318 11.357l-.404-.054z"/>
        <path fill="#64FFDA" d="M64 1.594C29.347 1.594 1.093 29.846 1.093 64.5c0 34.653 28.254 62.906 62.907 62.906 34.653 0 62.906-28.253 62.906-62.906C126.906 29.846 98.653 1.594 64 1.594zm54.088 62.906c0 29.876-24.212 54.089-54.088 54.089-29.876 0-54.089-24.213-54.089-54.089 0-29.876 24.213-54.089 54.089-54.089 29.876 0 54.088 24.213 54.088 54.089z"/>
      </svg>
    ),
    'Docker': (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <path fill="#64FFDA" d="M27.7 50.4h13.8v12.9H27.7zm16.3 0h13.8v12.9H44zm16.4 0h13.8v12.9H60.4zm16.3 0H90v12.9H76.7zM44 34.7h13.8v12.9H44zm16.4 0h13.8v12.9H60.4zm16.3 0h13.8v12.9H76.7zM60.4 19h13.8v12.9H60.4zM27.7 66.2h13.8v12.9H27.7zm16.3 0h13.8v12.9H44zm16.4 0h13.8v12.9H60.4zm16.3 0H90v12.9H76.7zM44 50.4h13.8v12.9H44zm-16.3 0h13.8v12.9H27.7zm55 0h13.8v12.9H82.7zm16.3 0h13.8v12.9H99zm16.5 0h13.8v12.9h-13.8zm-4.3 0h-13.8v12.9H111.2zM77.5 34.7H91v12.9H77.5zm16.3 0h13.7v12.9H93.8zm0 15.7h13.7v12.9H93.8zm-41.3 0h13.8v12.9H52.5z"/>
      </svg>
    ),
    'Kubernetes': (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <path fill="#64FFDA" d="M60.937 7.477a6.907 6.907 0 016.176 0l50.247 25.747c1.917.98 3.14 2.942 3.14 5.043v51.467c0 2.101-1.223 4.064-3.14 5.043L67.113 120.523a6.907 6.907 0 01-6.176 0L10.69 94.777c-1.917-.98-3.14-2.942-3.14-5.043V38.267c0-2.101 1.223-4.064 3.14-5.043zm3.088 9.24L16.78 41.62v44.76l47.245 24.903L111.27 86.38v-44.76zm0 9.46l32.005 16.879-32.005 16.878-32.005-16.878zM26.36 53.357l25.457 13.42v33.757L26.36 87.113zm75.33 0v33.756l-25.457 13.42V66.777z"/>
      </svg>
    ),
    'Git': (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <path fill="#64FFDA" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.857-54.858a8.135 8.135 0 00-.001-11.501z"/>
      </svg>
    ),
    'Figma': (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <path fill="#64FFDA" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0-86H67v43H45.5C33.6 86 24 76.4 24 64.5S33.6 43 45.5 43zm0-43H67v43H45.5C33.6 43 24 33.4 24 21.5S33.6 0 45.5 0z"/>
        <path fill="#64FFDA" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67V0z"/>
        <path fill="#64FFDA" d="M110 64.5C110 76.4 100.4 86 88.5 86S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5z"/>
      </svg>
    ),
    'C++': (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <path fill="#64FFDA" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM82 66.5h-6v6c0 .8-.7 1.5-1.5 1.5h-5c-.8 0-1.5-.7-1.5-1.5v-6h-6c-.8 0-1.5-.7-1.5-1.5v-5c0-.8.7-1.5 1.5-1.5h6v-6c0-.8.7-1.5 1.5-1.5h5c.8 0 1.5.7 1.5 1.5v6h6c.8 0 1.5.7 1.5 1.5v5c0 .8-.7 1.5-1.5 1.5zm23 0h-6v6c0 .8-.7 1.5-1.5 1.5h-5c-.8 0-1.5-.7-1.5-1.5v-6h-6c-.8 0-1.5-.7-1.5-1.5v-5c0-.8.7-1.5 1.5-1.5h6v-6c0-.8.7-1.5 1.5-1.5h5c.8 0 1.5.7 1.5 1.5v6h6c.8 0 1.5.7 1.5 1.5v5c0 .8-.7 1.5-1.5 1.5z"/>
      </svg>
    ),
    'SQL': (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <path fill="#64FFDA" d="M64.002 11.428c-35.944 0-65.096 10.562-65.096 23.593v58.391c0 13.031 29.152 23.593 65.096 23.593 35.945 0 65.098-10.562 65.098-23.593V35.021c0-13.031-29.153-23.593-65.098-23.593zm0 6.86c32.545 0 58.949 8.835 58.949 19.73 0 10.897-26.404 19.732-58.949 19.732-32.544 0-58.948-8.835-58.948-19.732 0-10.895 26.404-19.73 58.948-19.73zm0 92.858c-32.544 0-58.948-8.836-58.948-19.732V70.146c9.888 7.454 29.24 11.928 58.948 11.928 29.709 0 49.061-4.474 58.949-11.928v21.268c0 10.896-26.405 19.732-58.949 19.732zm0-29.538c-32.544 0-58.948-8.835-58.948-19.731V40.609c9.888 7.453 29.24 11.928 58.948 11.928 29.709 0 49.061-4.475 58.949-11.928v21.268c0 10.896-26.405 19.731-58.949 19.731z"/>
      </svg>
    ),
    'PHP': (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <path fill="#64FFDA" d="M64 33.039C30.26 33.039 2.906 46.901 2.906 64S30.26 94.961 64 94.961 125.094 81.099 125.094 64 97.74 33.039 64 33.039zM48.103 70.032c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34h14.04c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515-.759 1.357-1.75 2.624-2.972 3.748zm21.984-8.032c-2.876 0-5.153-.359-6.831-1.076-1.678-.718-2.802-1.904-3.372-3.559-.57-1.655-.603-3.957-.098-6.902.484-2.814 1.201-5.196 2.153-7.146.952-1.95 2.139-3.561 3.562-4.828 1.423-1.267 3.063-2.202 4.921-2.803 1.858-.601 3.936-.9 6.233-.9 2.876 0 5.153.359 6.831 1.076 1.678.718 2.802 1.904 3.372 3.559.57 1.655.603 3.957.098 6.902-.484 2.814-1.201 5.196-2.153 7.146-.952 1.95-2.139 3.561-3.562 4.828-1.423 1.267-3.063 2.202-4.921 2.803-1.858.601-3.936.9-6.233.9zm33.082-15h-7.118l-1.733 10h6.253c2.759 0 4.871-.461 6.332-1.382 1.461-.921 2.397-2.597 2.807-5.028.41-2.431-.117-4.104-1.582-5.022-1.465-.918-3.243-1.568-5.959-1.568z"/>
      </svg>
    ),
  };

  return icons[name] || <div className="w-full h-full bg-[#64FFDA]/20 rounded-full" />;
};

// Draggable Skill Orb Component
function DraggableSkillOrb({ skill, index, initialPosition }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      drag
      dragElastic={0.2}
      dragMomentum={false}
      whileHover={{ scale: 1.2, zIndex: 100 }}
      whileTap={{ scale: 0.95, cursor: "grabbing" }}
      style={{
        position: 'absolute',
        ...initialPosition
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.08,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className="cursor-grab active:cursor-grabbing"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative group"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 3 + (index % 3),
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {/* Skill Icon Container */}
        <div className={`${skill.size === 'large' ? 'w-20 h-20' : skill.size === 'medium' ? 'w-16 h-16' : 'w-12 h-12'} bg-[#0A192F]/90 backdrop-blur-sm rounded-2xl border-2 border-[#64FFDA]/30 flex items-center justify-center p-3 transition-all duration-300 hover:border-[#64FFDA] hover:shadow-lg hover:shadow-[#64FFDA]/20`}>
          <TechIcon name={skill.name} size={skill.size === 'large' ? 48 : skill.size === 'medium' ? 40 : 32} />
        </div>
        
        {/* Tooltip on hover */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-[#0A192F] border border-[#64FFDA]/50 px-3 py-1 rounded-lg text-[#64FFDA] text-xs font-mono pointer-events-none"
        >
          {skill.name}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Animated Proficiency Bar
function ProficiencyBar({ skill, proficiency, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="text-[#CCD6F6] font-medium font-mono">{skill}</span>
        <motion.span
          className="text-[#64FFDA] font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {proficiency}%
        </motion.span>
      </div>
      <div className="h-2 bg-[#112240] rounded-full overflow-hidden border border-[#64FFDA]/20">
        <motion.div
          className="h-full bg-gradient-to-r from-[#64FFDA] to-[#64FFDA]/60 rounded-full relative"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${proficiency}%` } : { width: 0 }}
          transition={{ delay: index * 0.1 + 0.2, duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-white/30"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

// 3D Rotating Certification Card
function CertificationCard({ cert, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block perspective-1000"
      initial={{ opacity: 0, y: 50, rotateX: 90 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 90 }}
      transition={{
        delay: index * 0.2,
        duration: 0.8,
        type: "spring"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="bg-gradient-to-br from-[#112240] to-[#0d1b2a] border border-[#64FFDA]/20 rounded-2xl p-8 hover:border-[#64FFDA] transition-colors relative overflow-hidden group"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#64FFDA]/0 via-[#64FFDA]/10 to-[#64FFDA]/0"
          animate={{
            x: isHovered ? ['-100%', '100%'] : '-100%',
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-start gap-4">
          <motion.div
            className="w-16 h-16 bg-[#64FFDA]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#64FFDA]/30"
            animate={{
              rotateY: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6 }}
          >
            <svg
              className="w-8 h-8 text-[#64FFDA]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </motion.div>
          <div className="flex-1">
            <h3 className="text-[#CCD6F6] font-semibold text-lg mb-2">
              {cert.title}
            </h3>
            <p className="text-[#8892B0] text-sm">Oracle Certified Professional</p>
          </div>
          <motion.svg
            className="w-6 h-6 text-[#64FFDA] flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ x: isHovered ? 5 : 0, y: isHovered ? -5 : 0 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </motion.svg>
        </div>

        {/* Glowing corners */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-[#64FFDA]/20 rounded-full blur-2xl"
          animate={{
            scale: isHovered ? [1, 1.5, 1] : 1,
            opacity: isHovered ? [0.2, 0.4, 0.2] : 0.2,
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.a>
  );
}

export default function Skills() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  
  // Skills with specific positions and sizes for better layout
  const skillsWithPositions = [
    // Languages - scattered throughout
    { name: 'Java', position: { top: '10%', left: '15%' }, size: 'large' },
    { name: 'Python', position: { top: '12%', left: '68%' }, size: 'medium' },
    { name: 'JavaScript', position: { top: '25%', left: '38%' }, size: 'large' },
    { name: 'TypeScript', position: { top: '20%', left: '82%' }, size: 'medium' },
    { name: 'C++', position: { top: '38%', left: '10%' }, size: 'small' },
    { name: 'SQL', position: { top: '45%', left: '58%' }, size: 'medium' },
    { name: 'PHP', position: { top: '52%', left: '28%' }, size: 'small' },
    
    // Frameworks - mid area
    { name: 'React', position: { top: '8%', left: '48%' }, size: 'large' },
    { name: 'Next.js', position: { top: '58%', left: '72%' }, size: 'medium' },
    { name: 'Spring Boot', position: { top: '68%', left: '18%' }, size: 'large' },
    { name: 'Laravel', position: { top: '72%', left: '48%' }, size: 'medium' },
    
    // Technologies - bottom area
    { name: 'Docker', position: { top: '78%', left: '78%' }, size: 'medium' },
    { name: 'Kubernetes', position: { top: '85%', left: '35%' }, size: 'large' },
    { name: 'Git', position: { top: '35%', left: '85%' }, size: 'small' },
    { name: 'Figma', position: { top: '88%', left: '8%' }, size: 'small' },
  ];

  const proficiencyData = [
    { skill: 'React & Next.js', proficiency: 95 },
    { skill: 'Spring Boot & Java', proficiency: 90 },
    { skill: 'TypeScript', proficiency: 88 },
    { skill: 'Docker & Kubernetes', proficiency: 85 },
    { skill: 'Python', proficiency: 82 },
  ];

  const certifications = [
    {
      title: t('oracleJavaCert'),
      url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=B13F98A95CBA19438942D4A792B8EDF84FF760B915F4E83823F6B6AAB721F5AC',
    },
    {
      title: t('oracleCloudCert'),
      url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=B437EA6CF73B5CF09C2C1DC10C4E899A19D767E837ACD7DE88F7F6EBE6CBB421',
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden" id="skills">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Skills Cloud Section */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#CCD6F6] text-center mb-4 font-space-grotesk"
            initial={{ y: -30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('technical')} <span className="text-[#64FFDA]">{t('skills')}</span>
          </motion.h2>
          <motion.p
            className="text-[#8892B0] text-center mb-16 hidden md:block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hover over the skills to interact
          </motion.p>
          <motion.p
            className="text-[#8892B0] text-center mb-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            Tap to explore skills
          </motion.p>

          {/* Desktop: Interactive Draggable Skill Cloud */}
          <div className="hidden md:block relative h-[700px] max-w-5xl mx-auto bg-gradient-to-br from-[#0A192F]/50 to-[#112240]/50 rounded-3xl border border-[#64FFDA]/20 overflow-hidden backdrop-blur-sm">
            {/* Animated background orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#64FFDA]/10 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#64FFDA]/10 rounded-full blur-3xl"
              animate={{
                x: [0, -100, 0],
                y: [0, -50, 0],
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 5
              }}
            />

            {/* Draggable Skills with Icons */}
            {skillsWithPositions.map((skill, index) => (
              <DraggableSkillOrb 
                key={skill.name} 
                skill={skill} 
                index={index}
                initialPosition={skill.position}
              />
            ))}

            {/* Instruction text */}
            <motion.div
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-[#8892B0] text-sm font-mono flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
              Drag and drop the icons!
            </motion.div>
          </div>

          {/* Mobile: Categorized Grid with Tap Interaction */}
          <div className="md:hidden space-y-8">
            {/* Languages Category */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-[#64FFDA] font-mono text-sm mb-4 flex items-center gap-2">
                <span className="text-xl">💻</span>
                Languages
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'PHP'].map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[#112240]/70 backdrop-blur-sm border border-[#64FFDA]/30 rounded-xl p-3 flex flex-col items-center justify-center gap-2 active:border-[#64FFDA] transition-colors"
                  >
                    <TechIcon name={skill} size={32} />
                    <span className="text-[#8892B0] text-[10px] font-mono text-center">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Frameworks Category */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-[#64FFDA] font-mono text-sm mb-4 flex items-center gap-2">
                <span className="text-xl">⚡</span>
                Frameworks
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {['React', 'Next.js', 'Spring Boot', 'Laravel'].map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[#112240]/70 backdrop-blur-sm border border-[#64FFDA]/30 rounded-xl p-3 flex flex-col items-center justify-center gap-2 active:border-[#64FFDA] transition-colors"
                  >
                    <TechIcon name={skill} size={36} />
                    <span className="text-[#8892B0] text-[10px] font-mono text-center">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools Category */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-[#64FFDA] font-mono text-sm mb-4 flex items-center gap-2">
                <span className="text-xl">🛠️</span>
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {['Docker', 'Kubernetes', 'Git', 'Figma'].map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.5 + idx * 0.05 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[#112240]/70 backdrop-blur-sm border border-[#64FFDA]/30 rounded-xl p-3 flex flex-col items-center justify-center gap-2 active:border-[#64FFDA] transition-colors"
                  >
                    <TechIcon name={skill} size={32} />
                    <span className="text-[#8892B0] text-[10px] font-mono text-center">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Proficiency Bars Section */}
        <div className="mb-32">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#CCD6F6] text-center mb-16 font-space-grotesk"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          >
            <span className="text-[#64FFDA]">Proficiency</span> Levels
          </motion.h2>

          <div className="max-w-3xl mx-auto bg-[#112240]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#64FFDA]/20">
            {proficiencyData.map((item, index) => (
              <ProficiencyBar key={item.skill} {...item} index={index} />
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#CCD6F6] text-center mb-16 font-space-grotesk"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          >
            <span className="text-[#64FFDA]">{t('certifications')}</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Floating particles in background */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#64FFDA]/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}
    </section>
  );
}
