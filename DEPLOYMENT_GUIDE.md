# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages using GitHub Actions.

## Step 1: Enable GitHub Pages

1. Go to your repository: `https://github.com/BougandouraMazen/portfolio`
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Source: **GitHub Actions**
4. Save the settings

## Step 2: Push Changes

The GitHub Actions workflow is already configured in `.github/workflows/deploy.yml`

Simply push your changes to the `main` branch:

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push
```

## Step 3: Monitor Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, your site will be live!

## Step 4: Access Your Website

Your portfolio will be available at:

**https://bougandouramazen.github.io/portfolio/**

## Automatic Deployments

Every time you push to `main`:
- ✅ GitHub Actions automatically builds your Next.js site
- ✅ Exports static files
- ✅ Deploys to GitHub Pages
- ✅ Your website updates instantly

## Custom Domain (Optional)

To use a custom domain:

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain (e.g., `mazen.dev`)
3. Add DNS records as instructed by GitHub
4. Wait for DNS propagation (up to 24 hours)

## Troubleshooting

If deployment fails:

1. **Check Actions logs:** Go to Actions tab and click on the failed workflow
2. **Verify Pages is enabled:** Settings → Pages → Source should be "GitHub Actions"
3. **Check permissions:** Workflow needs `pages: write` and `id-token: write`
4. **Build errors:** Make sure the project builds locally with `npm run build`

Common issues:
- **Image optimization errors:** Already fixed with `images: { unoptimized: true }`
- **Static export issues:** Already configured with `output: 'export'`
- **Dependencies:** Using `--legacy-peer-deps` flag in workflow

## Need Help?

- GitHub Pages Documentation: https://docs.github.com/pages
- GitHub Actions Documentation: https://docs.github.com/actions
- Next.js Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
