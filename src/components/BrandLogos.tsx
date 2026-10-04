import React from 'react'

interface LogoProps {
  id: string
  className?: string
  size?: number
}

export const BrandLogo: React.FC<LogoProps> = ({ id, className = '', size = 38 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 48 48',
    className,
  }

  switch (id) {
    case 'ikco':
      // Iran Khodro (IKCO) Horse head in shield
      return (
        <svg {...common}>
          <defs>
            <linearGradient id="ikcoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f4c81" />
              <stop offset="100%" stopColor="#02284c" />
            </linearGradient>
          </defs>
          <path
            d="M24 3 L40 9 C40 24 33 39 24 45 C15 39 8 24 8 9 Z"
            fill="url(#ikcoGrad)"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
          {/* Stylized Horse Head */}
          <path
            d="M17 33 C18 29 20 25 21 21 C22 17 21 14 26 12 C28 11.2 30 11.5 32 13 C32.8 13.6 33.2 15 32 16.5 C30 19 28 20 27 23 C26 26 27 30 29 33 C25.5 33 22 34 17 33 Z"
            fill="#ffffff"
          />
          <path
            d="M26 12 C28 9.5 30 8 33 8.5 C33.5 10 32.5 11.5 32 13 Z"
            fill="#ffffff"
          />
          <circle cx="28" cy="15" r="1" fill="#0f4c81" />
        </svg>
      )

    case 'saipa':
      // Saipa 3-blade orange geometric propeller
      return (
        <svg {...common}>
          <g fill="#e25822">
            {/* Top Blade */}
            <path d="M24 5 L30 15 L24 23 L18 15 Z" />
            {/* Bottom Right Blade */}
            <path d="M40 33 L30 33 L24 23 L34 23 Z" />
            {/* Bottom Left Blade */}
            <path d="M8 33 L18 33 L24 23 L14 23 Z" />
            {/* Central connect bars */}
            <rect x="22" y="16" width="4" height="20" rx="1" fill="#e25822" />
          </g>
        </svg>
      )

    case 'mvm':
      // MVM / Chery oval with stylized chrome monogram
      return (
        <svg {...common}>
          <ellipse cx="24" cy="24" rx="21" ry="14" fill="none" stroke="#64748b" strokeWidth="2.5" />
          <path
            d="M11 28 L14 18 L19 24 L24 18 L29 24 L34 18 L37 28"
            fill="none"
            stroke="#475569"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case 'jac':
      // JAC Motors circle with 5-pointed star
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="20" fill="none" stroke="#475569" strokeWidth="2.2" />
          <polygon
            points="24,10 27.5,19.5 37,20 29.5,26 32,35.5 24,30.5 16,35.5 18.5,26 11,20 20.5,19.5"
            fill="none"
            stroke="#1e293b"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
        </svg>
      )

    case 'haima':
      // Haima - winged emblem inside circle
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="20" fill="none" stroke="#64748b" strokeWidth="2.2" />
          <path
            d="M12 28 C15 20 20 16 24 13 C28 16 33 20 36 28 C30 26 27 22 24 22 C21 22 18 26 12 28 Z"
            fill="#475569"
          />
          <path
            d="M24 13 L24 33"
            stroke="#475569"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      )

    case 'kia':
      // KIA Red modern text badge
      return (
        <svg {...common}>
          <rect x="4" y="14" width="40" height="20" rx="6" fill="#bb162b" />
          <text
            x="24"
            y="28"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="14"
            fontWeight="900"
            fontFamily="Arial, sans-serif"
            letterSpacing="2"
          >
            KIA
          </text>
        </svg>
      )

    case 'hyundai':
      // Hyundai slanted H in oval
      return (
        <svg {...common}>
          <ellipse
            cx="24"
            cy="24"
            rx="21"
            ry="14"
            transform="rotate(-10 24 24)"
            fill="none"
            stroke="#002c5f"
            strokeWidth="2.6"
          />
          <path
            d="M16 31 C17 24 17 20 19 17 C21 23 27 25 31 17 C30 22 30 26 31 31"
            fill="none"
            stroke="#002c5f"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M18 23 C22 25 26 25 30 23"
            stroke="#002c5f"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </svg>
      )

    case 'kerman':
      // Kerman Motor stylized geometric wing
      return (
        <svg {...common}>
          <path
            d="M10 29 L24 15 L38 29 L32 29 L24 21 L16 29 Z"
            fill="#475569"
          />
          <path
            d="M15 34 L24 25 L33 34 L29 34 L24 29 L19 34 Z"
            fill="#64748b"
          />
        </svg>
      )

    case 'lamari':
      // Lamari deer / stag head in shield
      return (
        <svg {...common}>
          <defs>
            <linearGradient id="lamariGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <path
            d="M24 4 L38 8 C38 24 32 38 24 44 C16 38 10 24 10 8 Z"
            fill="url(#lamariGrad)"
            stroke="#cbd5e1"
            strokeWidth="1.2"
          />
          {/* Stag antlers & face */}
          <path
            d="M17 14 C19 17 21 18 24 21 C27 18 29 17 31 14 M20 12 L16 10 M28 12 L32 10 M22 17 L17 17 M26 17 L31 17"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <polygon points="24,20 22,27 24,31 26,27" fill="#ffffff" />
        </svg>
      )

    case 'changan':
      // Changan V-winged logo inside circle
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="20" fill="#1e3a8a" stroke="#cbd5e1" strokeWidth="2" />
          <path
            d="M15 17 L24 33 L33 17 C28 22 25 24 24 24 C23 24 20 22 15 17 Z"
            fill="#ffffff"
          />
        </svg>
      )

    case 'toyota':
      // Toyota triple interlocking ovals
      return (
        <svg {...common}>
          {/* Outer Oval */}
          <ellipse cx="24" cy="24" rx="20" ry="14" fill="none" stroke="#475569" strokeWidth="2.5" />
          {/* Inner Vertical Oval */}
          <ellipse cx="24" cy="22" rx="6" ry="11" fill="none" stroke="#475569" strokeWidth="2.3" />
          {/* Inner Horizontal Oval */}
          <ellipse cx="24" cy="18" rx="14" ry="4.5" fill="none" stroke="#475569" strokeWidth="2.3" />
        </svg>
      )

    case 'mazda':
      // Mazda soaring wings in circle
      return (
        <svg {...common}>
          <ellipse cx="24" cy="24" rx="20" ry="15" fill="none" stroke="#475569" strokeWidth="2.4" />
          <path
            d="M13 25 C18 19 22 19 24 23 C26 19 30 19 35 25 C30 23 26 25 24 29 C22 25 18 23 13 25 Z"
            fill="#475569"
          />
        </svg>
      )

    case 'citroen':
      // Citroën double chrome chevrons
      return (
        <svg {...common}>
          {/* Top Chevron */}
          <path
            d="M14 18 L24 10 L34 18 L29 18 L24 14 L19 18 Z"
            fill="#64748b"
          />
          {/* Bottom Chevron */}
          <path
            d="M14 30 L24 22 L34 30 L29 30 L24 26 L19 30 Z"
            fill="#64748b"
          />
        </svg>
      )

    case 'parskhodro':
      // Pars Khodro 3 aerodynamic waves
      return (
        <svg {...common}>
          <path d="M12 16 L36 16 L32 20 L8 20 Z" fill="#1e40af" />
          <path d="M16 23 L40 23 L36 27 L12 27 Z" fill="#2563eb" />
          <path d="M20 30 L44 30 L40 34 L16 34 Z" fill="#3b82f6" />
        </svg>
      )

    case 'bahman':
      // Bahman winged emblem
      return (
        <svg {...common}>
          <path
            d="M10 24 C14 18 19 17 24 22 C29 17 34 18 38 24 C34 26 30 25 24 31 C18 25 14 26 10 24 Z"
            fill="#334155"
          />
          <circle cx="24" cy="18" r="3.5" fill="#334155" />
        </svg>
      )

    case 'lifan':
      // Lifan 3 sails in blue circle
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="20" fill="#2563eb" />
          {/* 3 sails */}
          <path d="M13 32 C13 25 17 20 20 18 L20 32 Z" fill="#ffffff" />
          <path d="M22 32 C22 21 27 15 31 13 L31 32 Z" fill="#ffffff" />
          <path d="M33 32 C33 26 36 22 38 20 L38 32 Z" fill="#ffffff" />
        </svg>
      )

    case 'chery':
      // Chery stylized A in oval
      return (
        <svg {...common}>
          <ellipse cx="24" cy="24" rx="20" ry="14" fill="none" stroke="#475569" strokeWidth="2.5" />
          <path
            d="M17 30 L24 16 L31 30 M19 25 L29 25"
            stroke="#475569"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      )

    case 'greatwall':
      // Great Wall tower badge
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="20" fill="none" stroke="#475569" strokeWidth="2.4" />
          <path
            d="M18 31 L18 22 L20 22 L20 17 L22 17 L22 20 L26 20 L26 17 L28 17 L28 22 L30 22 L30 31 Z"
            fill="#475569"
          />
        </svg>
      )

    case 'dongfeng':
      // Dongfeng rotating dual swooshes in circle
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="20" fill="none" stroke="#dc2626" strokeWidth="2.5" />
          <path
            d="M24 13 C29 13 33 17 33 22 C33 26 29 28 25 28 C28 26 29 24 29 22 C29 18 26 16 22 17 C23 15 24 13 24 13 Z"
            fill="#dc2626"
          />
          <path
            d="M24 35 C19 35 15 31 15 26 C15 22 19 20 23 20 C20 22 19 24 19 26 C19 30 22 32 26 31 C25 33 24 35 24 35 Z"
            fill="#dc2626"
          />
        </svg>
      )

    case 'suzuki':
      // Suzuki red sharp S
      return (
        <svg {...common}>
          <path
            d="M34 11 L14 22 L14 27 L28 19 L14 30 L14 37 L34 26 L34 21 L20 29 L34 18 Z"
            fill="#e11d48"
          />
        </svg>
      )

    case 'geely':
      // Geely 6-segment shield
      return (
        <svg {...common}>
          <path
            d="M24 6 L38 12 L38 27 C38 35 24 42 24 42 C24 42 10 35 10 27 L10 12 Z"
            fill="#1e293b"
            stroke="#d97706"
            strokeWidth="1.8"
          />
          <rect x="14" y="15" width="9" height="7" fill="#b45309" rx="1" />
          <rect x="25" y="15" width="9" height="7" fill="#334155" rx="1" />
          <rect x="14" y="24" width="9" height="7" fill="#334155" rx="1" />
          <rect x="25" y="24" width="9" height="7" fill="#b45309" rx="1" />
        </svg>
      )

    case 'faw':
      // FAW blue winged number 1 in circle
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="20" fill="#1d4ed8" />
          <path
            d="M24 11 L24 35 M19 16 L24 11"
            stroke="#ffffff"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 24 C16 20 20 21 24 25 C28 21 32 20 36 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )

    default:
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="18" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
          <text x="24" y="29" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#64748b">
            {id.substring(0, 2).toUpperCase()}
          </text>
        </svg>
      )
  }
}
