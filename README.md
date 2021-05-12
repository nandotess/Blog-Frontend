# Blog Frontend

- [Vercel](https://vercel.com/) (cloud hosting)
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/) (React Framework)

## Notes

- The frontend is in the Vercel cloud, on a free tire plan.
- This repository contains all **frontend** from the [Blog](https://github.com/nandotess/blog) project.
- [GROQ](https://www.sanity.io/docs/groq) is used to communicate with the database (GET).
- [SSG](https://vercel.com/blog/nextjs-server-side-rendering-vs-static-generation) feature is used for **Incremental Static Generation**.

## Updating Production Site

- When pushing code to `main` branch, Vercel will automatically deploy the code to [production site](https://blog-nandotess.vercel.app/).

## Localhost

- To run the project on localhost:
  - Execute `npm install` in your terminal.
  - Rename `.env.SAMPLE` to `.env` and update the values of the variables `SANITY_PROJECT_ID` and `SANITY_API_TOKEN`.
  - Execute `npm run dev` in your terminal.

## TODO

- Slugify URL (post)
- Pagination
- Open Graph meta tags
- Sitemap (using `next-sitemap`)
- Tracking - Google Analytics (using `react-ga`)
