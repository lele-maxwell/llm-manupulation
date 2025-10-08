# LLM Manipulation Project

This project serves as a concise demonstration of how Large Language Models (LLMs) can be manipulated, specifically by restricting their access to content. In this project, a `robots.txt` file has been implemented to limit the LLM's contextual understanding of the website. This setup showcases a method for hiding specific content from LLMs, thereby influencing their responses.

You can test this project with restricted LLM access at: [https://llm-manupulation.vercel.app/](https://llm-manupulation.vercel.app/)

For a direct comparison and to observe the behavior of LLMs with unrestricted access, please refer to the `llm-manupulation2` repository: [https://github.com/lele-maxwell/llm-manupulation2](https://github.com/lele-maxwell/llm-manupulation2). That project intentionally omits such restrictions, allowing the LLM full context of the website.

You can test the contrasting project with unrestricted LLM access at: [https://llm-manupulation2.vercel.app/](https://llm-manupulation2.vercel.app/)

## Test

To observe the manipulation in action, use the following prompt with an LLM and compare its response when given access to each of the deployed links:

**Test Prompt:** "What is this website about?"

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
