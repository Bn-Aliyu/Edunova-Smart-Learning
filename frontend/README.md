<!-- FRONTEND ARCHITECTURE DOCUMENTATION -->
<!-- Edunova - Smart Learning System -->
<!-- Last Updated: 2026-05-26 -->

PROJECT STRUCTURE
================

frontend/
├── index.html                          # Main landing page
├── assets/
│   ├── css/
│   │   ├── global.css                 # Global base styles (imported)
│   │   ├── variables.css              # Design system variables
│   │   ├── responsive.css             # Mobile-first responsive styles
│   │   ├── animation.css              # Animations & transitions
│   │   ├── utilities.css              # Helper utility classes
│   │   └── style.css                  # Main stylesheet (imports all above)
│   ├── js/
│   │   └── script.js                  # Shared JavaScript utilities
│   └── image/
│       ├── home_image.png
│       ├── Web Development.png
│       ├── python_programming.png
│       ├── Database_management.png
│       └── UI and UX_Design.png
└── pages/
    ├── student/
    │   ├── login.html                 # Student login page
    │   ├── register.html              # Student registration page
    │   ├── dashboard.html             # Student dashboard
    │   ├── courses.html               # Browse courses
    │   ├── profile.html               # User profile
    │   └── quiz.html                  # Quiz/Assessment page
    └── admin/
        ├── login.html                 # Admin login page
        ├── dashboard.html             # Admin dashboard
        ├── manage_courses.html        # Manage courses
        ├── manage_students.html       # Manage students
        ├── manage_quiz.html           # Manage quizzes
        └── upload_lessons.html        # Upload lessons

KEY IMPROVEMENTS IMPLEMENTED
=============================

1. LOGIN PAGE (frontend/pages/student/login.html)
   ✓ Fixed file extension from "login" to "login.html"
   ✓ Added responsive design with Tailwind max-md: utilities
   ✓ Improved mobile layout (hidden illustration on mobile)
   ✓ Enhanced form accessibility
   ✓ Added password visibility toggle
   ✓ Social auth buttons simplified for mobile

2. RESPONSIVE CSS (frontend/assets/css/responsive.css)
   ✓ Mobile-first breakpoints
   ✓ Extra small devices (320px - 480px)
   ✓ Small devices (481px - 768px)
   ✓ Medium devices (769px - 1024px)
   ✓ Large devices (1025px - 1200px)
   ✓ Responsive touch targets (44px minimum)
   ✓ Landscape orientation support
   ✓ Print styles

3. ANIMATION & EFFECTS (frontend/assets/css/animation.css)
   ✓ Page transitions (enter/exit)
   ✓ Button animations
   ✓ Card slide animations
   ✓ Loading spinners
   ✓ Bounce effects
   ✓ Hover effects (scale, lift, shadow, brightness)
   ✓ Smooth transitions

4. UTILITY CLASSES (frontend/assets/css/utilities.css)
   ✓ Layout utilities (flex, grid, container)
   ✓ Sizing utilities
   ✓ Display utilities
   ✓ Position utilities
   ✓ Text utilities
   ✓ Opacity utilities
   ✓ Overflow utilities
   ✓ Transform utilities
   ✓ Cursor utilities

5. JAVASCRIPT UTILITIES (frontend/assets/js/script.js)
   ✓ DOM selectors
   ✓ Event listener shortcuts
   ✓ Local storage helpers
   ✓ Validation functions (email, password, phone, URL)
   ✓ String utilities (capitalize, truncate, format)
   ✓ API fetch helpers with error handling
   ✓ Time utilities (date format, time ago)
   ✓ Animation utilities (fade in/out, scroll to)
   ✓ Toast notification system
   ✓ Automatic scroll-to-top button

6. STYLE CONSOLIDATION (frontend/assets/css/style.css)
   ✓ Main stylesheet that imports all dependencies
   ✓ Loading overlay support
   ✓ Scroll-to-top button styles

COLOR PALETTE
=============
Primary: #5130e5
Primary Dark: #3f1fb8
Primary Light: #6B3BFF
Secondary: #7c5cf5
Background Primary: #f5f4fb
Background Light: #f7f6fb
Text Dark: #111827
Text Gray: #555f76
Success: #22c55e
Error: #ef4444
Warning: #f97316

TYPOGRAPHY
===========
Font Family: Poppins, Inter, Outfit (sans-serif)
Font Weights: 300, 400, 500, 600, 700, 800
Text Sizes: xs(12px), sm(14px), base(16px), lg(18px), xl(20px), 2xl(24px), 3xl(28px), 4xl(34px), 5xl(42px), 6xl(56px), 7xl(72px)
Line Heights: tight(1.1), normal(1.5), relaxed(1.8), loose(1.9)

SPACING SCALE
=============
xs: 4px, sm: 8px, md: 12px, base: 16px, lg: 20px, xl: 24px
2xl: 28px, 3xl: 32px, 4xl: 40px, 5xl: 48px, 6xl: 60px

BORDER RADIUS
=============
sm: 8px, md: 12px, lg: 14px, xl: 18px, 2xl: 25px, full: 50%

SHADOWS
=======
sm: 0 2px 10px rgba(0, 0, 0, 0.04)
md: 0 10px 30px rgba(0, 0, 0, 0.1)
lg: 0 15px 35px rgba(81, 48, 229, 0.2)
xl: 0 20px 40px rgba(0, 0, 0, 0.15)
2xl: 0 25px 50px rgba(0, 0, 0, 0.2)

Z-INDEX SCALE
=============
dropdown: 100, sticky: 50, fixed: 1000
modal-backdrop: 1040, modal: 1050, tooltip: 1070

TRANSITIONS
===========
fast: 0.15s ease-in-out
base: 0.3s ease-in-out
slow: 0.5s ease-in-out

BROWSER SUPPORT
===============
✓ Chrome (latest)
✓ Firefox (latest)
✓ Safari (latest)
✓ Edge (latest)
✓ Mobile browsers (iOS Safari, Chrome Mobile)

RESPONSIVE BREAKPOINTS
======================
Mobile: 320px - 480px
Tablet: 481px - 1024px
Desktop: 1025px - 1400px
Large: 1401px+

ACCESSIBILITY FEATURES
======================
✓ Semantic HTML structure
✓ ARIA labels where needed
✓ Keyboard navigation support
✓ Color contrast compliance (WCAG AA)
✓ Touch target sizes (minimum 44px)
✓ Focus states on interactive elements
✓ Form labels properly associated

PERFORMANCE OPTIMIZATIONS
==========================
✓ CSS variables for efficient styling
✓ Minimal CSS duplication
✓ Optimized animations (GPU-accelerated)
✓ Lazy-loaded images in production
✓ Minified CSS/JS in production
✓ Font optimization (Poppins, Inter, Outfit)

IMPLEMENTATION CHECKLIST
========================
✓ login.html - Fixed and responsive
✓ register.html - Fixed and responsive
✓ responsive.css - Complete
✓ animation.css - Complete
✓ utilities.css - Complete
✓ script.js - Complete
✓ style.css - Complete
✓ variables.css - Verified
✓ global.css - Verified
□ Image assets - To be added
□ Dashboard pages - To be optimized
□ Course pages - To be optimized
□ Admin pages - To be optimized

NEXT STEPS
==========
1. Add all missing image assets to frontend/assets/image/
2. Create .gitignore for sensitive files
3. Optimize all page responsiveness
4. Add form validation to JavaScript
5. Implement API integration
6. Add comprehensive error handling
7. Create loading states
8. Add form submission handling
9. Test on all devices and browsers
10. Performance audit and optimization

NOTES
=====
- All CSS files import variables.css for consistency
- Use CSS custom properties for colors, spacing, etc.
- Follow mobile-first responsive design approach
- Use Tailwind utility classes where applicable
- Maintain semantic HTML structure
- Test accessibility with screen readers
- Ensure all forms have proper labels
- Use rel="noopener noreferrer" for external links
