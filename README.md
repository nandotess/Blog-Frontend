# Blog Frontend

- [Vercel](https://vercel.com/) (cloud hosting)
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/) (React Framework)

## Notes

- The frontend is in the Vercel cloud, on a free tire plan.
- This repository contains all **frontend** from the [Blog](https://github.com/nandotess/blog) project.
- [GROQ](https://www.sanity.io/docs/groq) is used by to communicate with the database.
- [SSG](https://vercel.com/blog/nextjs-server-side-rendering-vs-static-generation) feature is used for **Incremental Static Generation**.

## Updating Development and Production sites

- When pushing code to `main` branch, Vercel will automatically deploy the code to [production site](https://blog-digital-extremes.vercel.app/).

## Localhost

- To run the project on localhost:
  - Rename `.env.SAMPLE` to `.env` and update the values of the variables `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_API_TOKEN`.
  - Execute `npm run start` in your terminal.

## TODO

- Pagination
- Sitemap (using `next-sitemap`)
- Tracking - Google Analytics (using `react-ga`)
