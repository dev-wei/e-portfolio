# Deployment Guide for E-Portfolio

## Production Build

This project uses Vite as its build tool. To create a production-ready build, follow these steps:

1. Make sure all your changes are committed and your code is ready for production.

2. Run the build command:
   ```bash
   npm run build
   ```

3. This will create a `dist` directory with the following structure:
   ```
   dist/
   ├── assets/
   │   ├── index-[hash].js     # Bundled and minified JavaScript
   │   └── index-[hash].css    # Bundled and minified CSS
   ├── images/                 # Static images
   ├── index.html              # Entry HTML file
   └── other static assets     # SVGs and other static files
   ```

4. You can preview the production build locally with:
   ```bash
   npm run preview
   ```
   This will serve the built files at http://localhost:4173/

## Deployment Options

### Option 1: Static Hosting Services

The `dist` folder can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder or connect your GitHub repository
- **Vercel**: Import your project from GitHub or use the Vercel CLI
- **GitHub Pages**: Automatically deployed via GitHub Actions workflow (see below)
- **AWS S3 + CloudFront**: Upload to an S3 bucket and configure CloudFront

#### GitHub Pages Automatic Deployment

This project is configured with a GitHub Actions workflow that automatically deploys the site to GitHub Pages whenever changes are pushed to the main branch:

1. The workflow builds the application and generates the `dist` directory
2. It then uploads the contents as a GitHub Pages artifact
3. Finally, it deploys the site to GitHub Pages

To enable GitHub Pages for your repository:

1. Go to your repository settings
2. Navigate to the "Pages" section
3. Under "Build and deployment" > "Source", select "GitHub Actions"
4. The site will be available at `https://<username>.github.io/<repository-name>/`

### Option 2: Traditional Web Hosting

Upload the contents of the `dist` directory to your web hosting service via FTP or their file manager.

### Option 3: Docker Deployment

You can create a simple Docker container with Nginx to serve your static files:

```dockerfile
# Example Dockerfile
FROM nginx:alpine
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Environment Configuration

If your application uses environment variables:

1. Create a `.env.production` file for production-specific variables
2. Access variables in your code with `import.meta.env.VITE_YOUR_VARIABLE`
3. Only variables prefixed with `VITE_` will be included in the client bundle

## Optimizing for Production

- Ensure images are optimized
- Consider implementing a service worker for offline capability
- Set up proper caching headers on your hosting service
- Configure a custom domain with HTTPS

## Troubleshooting

- If you encounter 404 errors, make sure your hosting service is configured to redirect all requests to `index.html` for client-side routing
- If assets aren't loading, check that your `base` path in `vite.config.js` matches your deployment subdirectory (if any)

## Continuous Deployment

Consider setting up a CI/CD pipeline with GitHub Actions, GitLab CI, or similar services to automate your deployment process whenever changes are pushed to your main branch.