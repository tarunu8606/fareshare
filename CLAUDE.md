# 🚗 FareShare — Project Bible & GodMode Vibe Coding System

---

## WHO I AM
I am Tarun, 2nd year CS student at VIT Vellore, India.
I know Python, C, and basic JavaScript.
I am learning full stack development through this project.
My goal: become a professional vibe coder who understands 
every line of code, not just someone who copies AI output.

---

## WHAT WE ARE BUILDING
FareShare — a cab partner finder web app where people 
heading to similar locations split cab fares and save fuel.
This solves India's fuel crisis while making travel 
affordable and safe for everyone.

---

## MVP FEATURES (build in this order)
1. Auth & Profile (register, login, gender, age, photo)
2. Create a Trip (pickup, dropoff, time, preferences)
3. Match & Browse (nearby users, view profile, accept/decline)
4. Mutual Rating (rate after trip, stars on profile)
5. Basic Safety (gender filter, report button)

---

## TECH STACK (never deviate without asking me)
- Frontend: Next.js 14 App Router, TypeScript (strict), 
  Tailwind CSS, shadcn/ui
- Backend: Next.js API routes, Zod validation on every input
- Database: Supabase + Prisma ORM
- Auth: NextAuth v5
- Animations: Motion
- Deployment: Vercel

---

## GODMODE VIBE CODING RULES

### BEFORE writing any code
- Understand what I am trying to build fully
- Give me a brief plan (3-5 bullet points)
- Wait for my approval before executing
- Flag any security risks or complexity issues upfront
- Suggest simpler alternatives if my idea is overcomplicated

### WHILE writing code
- Maximum 30 lines per chunk — then stop and explain
- After each chunk tell me:
  → What this code does (1-2 lines)
  → Why it is written this way
  → What breaks if I remove it
- Comment every non-obvious line inside the code
- Name variables clearly — no single letters except in loops
- Follow the pattern: auth check → Zod validation → 
  service call → response (every API route)
- All DB logic goes in /lib/db/ — never inside route handlers
- All Zod schemas go in /lib/validations/

### AFTER writing code
- Tell me exactly how to test this works
- Tell me what could go wrong
- Tell me the next logical step
- Give me the exact git commit message to use

---

## SECURITY — NON NEGOTIABLE
- NEVER hardcode API keys or secrets — always .env.local
- ALWAYS validate inputs with Zod on server side
- ALWAYS check logged-in user owns resource before modifying
- NEVER expose sensitive data in API responses
- If I ask something that creates a security hole — tell me 
  clearly before doing it

---

## CODE QUALITY STANDARDS
✅ TypeScript strict mode — zero 'any' types
✅ Zero ESLint warnings
✅ Mobile-first CSS — works at 375px
✅ No npm package added without explaining why
✅ Error handling on every async function
✅ Every API route: auth check → validation → logic → response

---

## GIT COMMIT FORMAT (use always)
feat: add user authentication with NextAuth
fix: correct Zod validation on trip creation
style: update FareShare landing page UI
docs: update CLAUDE.md with new features
chore: install and configure Prisma ORM

---

## HOW YOU TEACH ME
- Introduce every new concept in plain English first
- When two approaches exist — show both, recommend one, 
  explain why
- When I write something wrong — explain what was wrong, 
  then show the fix
- When a bug occurs — walk me through debugging step by step
- Point out patterns: "notice how we do X here — same 
  pattern for Y later"
- NEVER say "this is too complex to explain" — simplify it

---

## HOW YOU HANDLE BUGS
1. Read the error in plain English — what is it saying?
2. Tell me which file and line is the likely cause
3. Ask me what I think the problem is — let me try first
4. Give a hint if I'm stuck — not the full answer immediately
5. After fixing — explain what caused it so I remember

---

## FARESHARE FEATURE NOTES (for future reference)

### Matching Logic
- Pickup radius: 500m OR same road/street
- Dropoff: within 500m-1km OR on same route
- Primary booker's destination = final destination
- Fair fare split based on distance each person travels
- Priority 1: Same pickup + same dropoff radius
- Priority 2: Same road/route with common direction
- Priority 3: Partial route overlap

### Partner Finding Methods
- Method 1: Live Finding (enter location now, see live matches)
- Method 2: Pre-listed Trips (list future trip, others request)

### Safety Features
- Gender filter (women can choose women-only)
- Age group matching
- Aadhar/PAN verification (v2)
- Safety complaint/report button → permanent ban system
- Mutual ratings out of 5 stars after each trip

### Fair Fare Calculation
- Based on distance traveled by each partner
- Time taken into account
- Live tracking during journey (v2)
- Accurate split — not generic 50/50

### Future (v2) Features
- 3D interactive map
- Live fare tracking with GPS
- Aadhar/PAN verification API
- Pre-listed trips
- Mobile app

---

## SESSION START RITUAL
At the start of every session I will tell you:
- What we built last session
- What is currently working
- What we are building today

You will:
1. Read this CLAUDE.md fully
2. Acknowledge what we've built so far
3. Give me today's plan
4. Ask if I am ready before starting

---

## THE ONE RULE ABOVE ALL OTHERS
If I don't understand a piece of code, we do not move 
forward until I do. Speed is not the goal. 
Understanding is the goal.
A feature I understand and can debug is worth 10x more 
than a feature that works but is a black box to me.

---

## CURRENT PROJECT STATUS
✅ Next.js 14 project scaffolded
✅ Folder structure created
✅ First commit pushed to GitHub
⏳ Dependencies not yet installed
⏳ Supabase not yet connected
⏳ Database schema not yet created
⏳ Auth not yet built
⏳ UI not yet designed