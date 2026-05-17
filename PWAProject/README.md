# A11y Learn - Accessibility Education PWA

## Overview
A11y Learn is a comprehensive Progressive Web App designed to educate software developers, designers, and tech professionals about web accessibility and inclusive design principles. The application teaches WCAG 2.1 guidelines and best practices for creating accessible digital experiences.

## Features

### 📚 Educational Content
- **Basics**: Introduction to web accessibility, semantic HTML, color contrast, and alt text
- **WCAG Guidelines**: Detailed explanation of the four WCAG principles (Perceivable, Operable, Understandable, Robust)
- **Keyboard Navigation**: Best practices for accessible keyboard interactions
- **Form Accessibility**: Creating accessible forms and input fields
- **Accessibility Testing**: Tools and manual testing strategies

### 🧪 Interactive Quiz
Five questions covering accessibility concepts to test your knowledge:
1. What does "A11y" mean?
2. WCAG four principles
3. Contrast ratio requirements
4. Alt text implementation
5. Importance of keyboard accessibility

### 🛠️ Testing Tools Guide
Comprehensive resource for accessibility testing:
- **Automated Tools**: Axe DevTools, WAVE, Lighthouse, WebAIM Contrast Checker
- **Manual Testing**: Keyboard navigation, screen reader testing, mobile accessibility
- **Interactive Checklist**: 10-point accessibility testing checklist

### ♿ Accessibility Features (Itself!)
This PWA demonstrates accessibility best practices:
- ✓ Semantic HTML structure
- ✓ ARIA labels and descriptions
- ✓ Keyboard navigation support
- ✓ Skip to main content link
- ✓ High color contrast ratios (WCAG AAA)
- ✓ Focus indicators for keyboard users
- ✓ Responsive design for all screen sizes
- ✓ Dark mode support
- ✓ Reduced motion preferences respected
- ✓ Screen reader friendly

## Progressive Web App Features

### Offline Access
The app works completely offline after the first visit:
- Service worker caches all assets
- Cached-first strategy for fast loading
- Works on any device with a modern browser

### Installation
Install on your device for quick access:
- **Desktop**: Click the "Install" button in your browser address bar
- **Mobile**: Add to home screen from your browser menu
- **Standalone**: Runs like a native app without browser UI

### Browser Support
- Chrome/Edge 90+
- Firefox 78+
- Safari 15+
- Mobile browsers (iOS Safari, Chrome Android)

## File Structure
```
PWAProject/
├── PWAProject.html          # Main application file with all content
├── manifest.json            # PWA manifest for installation
├── service-worker.js        # Service worker for offline functionality
├── style.css                # Accessibility-focused styling
└── README.md               # This file
```

## Getting Started

### 1. Local Development
Simply open `PWAProject.html` in a modern web browser. For best results, serve over HTTPS:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server
```

Then navigate to `http://localhost:8000/PWAProject/PWAProject.html`

### 2. Installation
Once loaded in a browser that supports PWAs:
1. Look for the "Install" prompt in your browser
2. Click to install the app
3. The app will be added to your home screen or applications

### 3. Navigation
- **Basics Tab**: Learn fundamental accessibility concepts
- **WCAG Guidelines Tab**: Understand the four WCAG principles in detail
- **Testing Tools Tab**: Discover tools and methods for testing accessibility
- **Quiz Tab**: Test your knowledge with interactive questions

## Learning Outcomes
After completing this PWA, you'll understand:
- What web accessibility means and why it matters
- The four WCAG principles and how to apply them
- How to write semantic, accessible HTML
- Color contrast requirements and testing
- Keyboard navigation best practices
- Form accessibility principles
- How to test for accessibility issues
- Which tools to use for accessibility testing

## Key Accessibility Topics Covered

### Semantic HTML
Using proper HTML elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`) instead of generic `<div>` tags.

### Color Contrast
Meeting WCAG standards for text-to-background color contrast ratios:
- Level AA: 4.5:1 for normal text
- Level AAA: 7:1 for normal text

### Alt Text
Providing descriptive alternative text for images that screen reader users can understand.

### Keyboard Navigation
Ensuring all functionality works with keyboard alone:
- Tab order management
- Focus indicators
- Keyboard event handling

### Forms
Making forms accessible:
- Label associations
- Error messages
- Input validation
- Help text

### ARIA
Using ARIA attributes to enhance semantics:
- `aria-label`
- `aria-labelledby`
- `aria-describedby`
- `role` attributes

## Testing & Validation

### Manual Testing
1. Navigate using only keyboard (Tab, Enter, arrow keys)
2. Test with screen readers (NVDA, JAWS, VoiceOver)
3. Check color contrast with WebAIM tools
4. Verify on mobile devices with accessibility features enabled

### Automated Testing
1. Run Axe DevTools browser extension
2. Use Lighthouse in Chrome DevTools
3. Check with WAVE online tool
4. Use WebAIM Contrast Checker for color validation

## Browser DevTools
Modern browsers include accessibility testing features:
- **Chrome/Edge**: Lighthouse (Ctrl+Shift+I → Lighthouse)
- **Firefox**: Inspector accessibility panel
- **Safari**: Accessibility Inspector

## Resources

### Official Standards
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [HTML Specification](https://html.spec.whatwg.org/)

### Testing Tools
- [Axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [NVDA Screen Reader](https://www.nvaccess.org/)

### Learning Resources
- [WebAIM](https://webaim.org/)
- [A11ycasts](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9Xc-RgEzwLvoPccXSS)
- [The A11Y Project](https://www.a11yproject.com/)

## Contributing
This is an educational project. Suggestions for improvements are welcome!

## License
This PWA is part of an educational portfolio project.

## Accessibility Statement
A11y Learn is committed to accessibility. This application:
- Complies with WCAG 2.1 Level AA
- Is tested with assistive technologies
- Works with keyboard navigation
- Provides high color contrast
- Respects user preferences

If you encounter any accessibility issues, please report them.

---

**Made with ❤️ for accessible web development**

Last Updated: May 2026
