# How To Setup

Step 1. Create a `.env` file on the root folder.

Step 2. Add this line in the `.env` file:

```
DATABASE_URL=file:./dev.db
```

Step 3. And run

```
npm run dev
```

## Notes

if you get an error about map is not a function try to hard refresh(`ctrl+F5`) the browser.

# Libraries

| Name                          | Usage                                              |
| ----------------------------- | -------------------------------------------------- |
| `tailwind-merge`              | a library for tailwindCSS                          |
| `prisma`                      | database migration and communicating with database |
| `react-icons`                 | icons                                              |
| `nanoid`                      | for generating component keys                      |
| `tailwindcss`                 | css framework                                      |
| `prettier-plugin-tailwindcss` | for sorting tailwind classNames                    |
