# MentorAI

MentorAI is an AI-powered career assistant platform that helps users create professional resumes, generate tailored cover letters, and prepare for interviews with personalized insights. Built with Next.js, Clerk authentication, Prisma ORM, and Tailwind CSS, MentorAI leverages modern web technologies and AI to streamline the job application process.

[Live Demo](https://mentorai-eta.vercel.app)

---

## 🚀 Features

- **AI Resume Builder:** Generate and manage professional resumes.
- **AI Cover Letter Generator:** Create tailored cover letters for job applications.
- **Interview Preparation:** Get personalized technical interview questions and improvement tips.
- **User Authentication:** Secure sign-up and login with Clerk.
- **Personalized Dashboard:** View insights and manage your career documents.
- **Theme Support:** Light/dark mode with persistent user preference.
- **Responsive Design:** Fully responsive UI for all devices.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Database:** PostgreSQL (configurable)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **AI Integration:** Google Generative AI (Gemini API)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 Folder Structure

```
.
├── actions/                # Server actions for business logic (CRUD, AI, etc.)
│   ├── cover-letter.js
│   ├── dashboard.js
│   ├── interview.js
│   ├── resume.js
│   └── user.js
├── app/                    # Next.js app directory (routing, pages, layouts)
│   ├── globals.css
│   ├── layout.js
│   ├── not-found.jsx
│   ├── page.jsx
│   └── (main)/             # Main app routes (dashboard, ai-cover-letter, etc.)
│       ├── dashboard/
│       ├── ai-cover-letter/
│       ├── resume/
│       └── interview/
├── components/             # Reusable UI components
│   ├── Header.jsx
│   ├── theme-provider.jsx
│   ├── ui/
│   └── ...
├── data/                   # Static data (if any)
├── hooks/                  # Custom React hooks
├── lib/                    # Library files (Prisma client, helpers)
│   ├── prisma.js
│   └── checkUser.js
├── prisma/                 # Prisma schema and migrations
│   └── schema.prisma
├── public/                 # Static assets (images, favicon, etc.)
│   └── imgs/
├── .env                    # Environment variables
├── package.json
└── README.md
```

---

## 🧩 Key Components & Workflow

### 1. **Authentication**
- **ClerkProvider** wraps the app in `app/layout.js` for authentication.
- User info is accessed via Clerk hooks and server helpers.

### 2. **Theme Management**
- **ThemeProvider** (`components/theme-provider.jsx`) enables dark/light mode using `next-themes`.

### 3. **Header**
- **Header.jsx** displays navigation, user info, and authentication controls.

### 4. **Dashboard**
- **DashboardView** (in `app/(main)/dashboard/_components/`) shows user onboarding status and industry insights.
- Data fetched via `getUserOnboardingStatus` and `getIndustryInsights` actions.

### 5. **Resume Builder**
- **ResumeList**, **ResumeGenerator** components for listing and creating resumes.
- CRUD operations handled in `actions/resume.js`.

### 6. **Cover Letter Generator**
- **CoverLetterList** and **CoverLetterGenerator** in `app/(main)/ai-cover-letter/_components/`.
- Uses `getCoverLetters` and AI APIs to generate and manage cover letters.

### 7. **Interview Preparation**
- **InterviewQuiz** and related components for generating and taking quizzes.
- Uses Gemini API for question generation (`actions/interview.js`).

### 8. **Database**
- **Prisma ORM** manages all user, resume, cover letter, and assessment data.
- Schema defined in `prisma/schema.prisma`.

---

## ⚙️ Setup & Development

### 1. **Clone the Repository**
```sh
git clone https://github.com/Raushan-Kumar-Gupta/mentorai.git
cd mentorai
```

### 2. **Install Dependencies**
```sh
npm install
```

### 3. **Configure Environment Variables**
Create a `.env` file in the root with the following (replace values as needed):
```
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
GEMINI_API_KEY=your_google_gemini_api_key
```

### 4. **Set Up the Database**
```sh
npx prisma migrate dev --name init
npx prisma generate
```

### 5. **Run the Development Server**
```sh
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000).

---

## 🚀 Deployment

MentorAI is ready for deployment on [Vercel](https://vercel.com/):

- Push your code to GitHub.
- Import the repo in Vercel.
- Set environment variables in the Vercel dashboard.
- Vercel will handle build and deployment automatically.

**Important:**  
Add a `postinstall` script in `package.json` to ensure Prisma Client is generated on Vercel:
```json
"scripts": {
  "postinstall": "prisma generate"
}
```

---

## 📝 Example Usage

- **Sign up/login** with Clerk.
- **Onboard** by providing your industry and skills.
- **Generate resumes** and **cover letters** using AI.
- **Take interview quizzes** and get improvement tips.
- **Manage all documents** from your dashboard.

---

## 📦 Main Files & Components

| File/Folder                              | Purpose                                                      |
|------------------------------------------|--------------------------------------------------------------|
| `app/layout.js`                          | Root layout, theme, and auth providers                       |
| `components/Header.jsx`                  | Main navigation and user controls                            |
| `components/theme-provider.jsx`          | Theme context and switching                                  |
| `actions/cover-letter.js`                | Server actions for cover letter CRUD and AI integration      |
| `actions/interview.js`                   | Server actions for interview quiz and AI integration         |
| `lib/prisma.js`                          | Prisma client instance                                       |
| `prisma/schema.prisma`                   | Database schema                                              |
| `public/imgs/`                           | Static images                                                |

---

## 🤝 Contributing

Contributions are welcome! Please open issues or pull requests for improvements or bug fixes.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Clerk](https://clerk.com/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Generative AI](https://ai.google.dev/)

---

> Made with ❤️ by Raushan Kumar Gupta
