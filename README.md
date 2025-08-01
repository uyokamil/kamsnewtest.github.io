# Kam's Game Development Portfolio

A modern, sleek, and lightweight portfolio website showcasing game development projects organized by year.

## Features

- **Clean & Modern Design**: Minimalist aesthetic with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Project Organization**: Projects organized by year with horizontal cards
- **Interactive Elements**: Hover effects, smooth scrolling, and animated transitions
- **Project Detail Pages**: Template for individual project showcases
- **Image Gallery**: Clickable images with modal view
- **Performance Optimized**: Lightweight and fast loading

## File Structure

```
KamPortfolio/
├── index.html              # Main portfolio page
├── styles.css              # Main stylesheet
├── script.js               # Main JavaScript functionality
├── project-template.html   # Template for individual project pages
├── project-styles.css      # Styles for project detail pages
├── project-script.js       # JavaScript for project pages
└── README.md              # This file
```

## Getting Started

1. **Open the Portfolio**: Simply open `index.html` in your web browser
2. **Customize Content**: Edit the HTML files to add your own projects and information
3. **Add Images**: Replace placeholder images with your actual project screenshots
4. **Update Links**: Modify contact links and project URLs

## Customizing the Portfolio

### Adding New Projects

1. **On the Home Page** (`index.html`):
   - Find the appropriate year section
   - Copy an existing project card structure
   - Update the following elements:
     - `data-project` attribute (unique identifier)
     - Project image (`src` attribute)
     - Project title
     - Project description
     - Project tags

2. **Creating Project Detail Pages**:
   - Copy `project-template.html`
   - Rename it to match your project (e.g., `cosmic-explorer.html`)
   - Replace all placeholder text (PROJECT_NAME, PROJECT_SUBTITLE, etc.)
   - Add your project images to the gallery section
   - Update project details and features

### Example Project Card Structure

```html
<article class="project-card" data-project="your-project-id">
    <div class="project-image">
        <img src="path/to/your/image.jpg" alt="Your Project Name">
    </div>
    <div class="project-content">
        <h4 class="project-title">Your Project Name</h4>
        <p class="project-description">Your project description goes here.</p>
        <div class="project-tags">
            <span class="tag">Unity</span>
            <span class="tag">C#</span>
            <span class="tag">3D</span>
        </div>
    </div>
</article>
```

### Customizing Styles

The portfolio uses a clean color scheme that can be easily customized:

- **Primary Colors**: `#667eea` and `#764ba2` (gradient)
- **Text Colors**: `#2d3748` (dark), `#4a5568` (medium)
- **Background Colors**: `#fafafa` (light), `#f7fafc` (lighter)
- **Accent Color**: `#2b6cb0` (blue)

To change colors, edit the CSS variables in `styles.css` and `project-styles.css`.

### Adding Custom Fonts

The portfolio uses Inter font from Google Fonts. To change fonts:

1. Update the Google Fonts link in the HTML files
2. Modify the `font-family` property in the CSS files

## Project Detail Page Template

The `project-template.html` file includes sections for:

- **Hero Section**: Project title, subtitle, meta information, and tags
- **Overview**: Detailed project description and technical details
- **Gallery**: Screenshots and images with captions
- **Key Features**: Highlighted project features
- **Challenges & Solutions**: Development challenges and how they were solved
- **Project Links**: Demo, source code, trailer links
- **Navigation**: Previous/Next project navigation

### Template Placeholders

Replace these placeholders in the template:

- `PROJECT_NAME` - Your project name
- `PROJECT_SUBTITLE` - Brief project description
- `YEAR` - Project completion year
- `DURATION` - Development time
- `ROLE` - Your role in the project
- `TAG1`, `TAG2`, `TAG3` - Technology tags
- `PROJECT_HERO_IMAGE` - Main project image
- `PROJECT_DESCRIPTION` - Detailed description
- `ENGINE_USED` - Game engine (Unity, Unreal, etc.)
- `PROGRAMMING_LANGUAGE` - Primary programming language
- `TARGET_PLATFORM` - Target platforms
- `TEAM_SIZE` - Number of team members
- `DEVELOPMENT_TIME` - Time spent on development

## Browser Compatibility

The portfolio is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features

- **Optimized Images**: Use compressed images for faster loading
- **Lazy Loading**: Images load as they come into view
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **Minimal Dependencies**: Only uses Google Fonts (no heavy frameworks)

## Tips for Best Results

1. **Image Optimization**: Compress your project images to reduce file size
2. **Consistent Sizing**: Use consistent aspect ratios for project images
3. **Descriptive Alt Text**: Add meaningful alt text for accessibility
4. **Regular Updates**: Keep your portfolio updated with new projects
5. **Mobile Testing**: Test on various devices to ensure responsiveness

## Customization Examples

### Adding a New Year Section

```html
<div class="year-section">
    <h3 class="year-title">2025</h3>
    <div class="projects-grid">
        <!-- Add your new project cards here -->
    </div>
</div>
```

### Adding Custom CSS

Create a new CSS file (e.g., `custom.css`) and link it in your HTML files:

```html
<link rel="stylesheet" href="custom.css">
```

### Adding Analytics

Add Google Analytics or other tracking codes in the `<head>` section of your HTML files.

## Support

If you need help customizing the portfolio or have questions, feel free to modify the code to suit your needs. The code is well-commented and structured for easy customization.

## License

This portfolio template is free to use and modify for personal and commercial projects.

---

**Happy showcasing your game development projects! 🎮** 