# Blood Donation

## LEARN

- [ ] [Next.js](https://nextjs.org/learn/basics/create-nextjs-app)
- [ ] [Prisma](https://www.prisma.io/docs/getting-started/quickstart-typescript)
- [ ] [Next.js + Prisma](https://www.prisma.io/docs/guides/deployment/deploying-to-vercel)
- [ ] [NextAuth.js](https://next-auth.js.org/getting-started/example)
- [ ] [NextAuth.js + Prisma](https://next-auth.js.org/adapters/prisma)
- [ ] [NextAuth.js + Prisma + Next.js](https://next-auth.js.org/tutorials/nextjs-prisma-my-sql)

--

## Design

- Design system (DONE).
- Prototype ()
- ...

--

## Pages

(public)
/
    /about
    /privacy
    /(auth)
        /signIn
        /signUp
        /signOut

(user)
/user/
    /dashboard
    /profile
        /settings

    /notifications
        /[id]
    /donations
    /requests

(admin)
/dashboard
    /requests
        /requests/new (create)

    /donations
    /donors
        /[id]

    /profile
        /settings

- /users
   /dashboard
  - Displays the user's dashboard after they have logged in.
   /profile
    - Allows the user to view and edit their profile information.
   /requests
    - Displays a list of current blood donation requests.
    - Allows the user to filter the requests by location, blood type, etc.
    - Allows the user to respond to a request by offering to donate blood.

   /donations
  - Displays a list of the user's previous blood donations.
   /appointments
    - Allows the user to schedule an appointment to donate blood.
   /notifications
    - Displays a list of the user's notifications (e.g. when a new request is posted).
   /settings
    - Allows the user to change their account settings, such as email and password.

--

## Techs Used

- [ ] Next.js
- [ ] NextAuth.js
- [ ] Prisma.js
- [ ] MySQL
- [ ] Vercel
- [ ] and more... `¯\_(ツ)_/¯`

--

## Features
<!-- 
to be added
 -->
- [x] Authentication
- [ ] Admin Dashboard
- [ ] User Dashboard
- [ ] Role Based Access Control
- [ ] User Profile

### Resources

- [Intercom](https://www.intercom.com/blog/nextjs-tutorial/)
- [UnDraw](https://undraw.co/illustrations)
- [checklyhq](https://checklyhq.com/)
- [Vercel](https://vercel.com/)
- [Free illustrations](https://lineicons.com/blog/free-illustrations/)
