const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('.'));

// Handle clean URLs for project pages
app.get('/projects/:year/:project', (req, res) => {
    const { year, project } = req.params;
    const filePath = path.join(__dirname, 'projects', year, `${project}.html`);
    
    // Check if the .html file exists
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send('Project not found');
    }
});

// Handle clean URLs for root pages
app.get('/:page', (req, res) => {
    const { page } = req.params;
    const filePath = path.join(__dirname, `${page}.html`);
    
    // Check if the .html file exists
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send('Page not found');
    }
});

// Default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Clean URLs are now supported!');
    console.log('Example: http://localhost:3000/projects/2024/dishdash');
}); 