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

        
(public) [DONE]
/
    /about
    /privacy
    /(auth)
        /signIn
        /signUp
        /signOut

(user) [DONE]
/user/
    /dashboard 
    /profile
        /settings

    /notifications
        /[id]
    /donations
    /requests

(admin) [DONE]
/dashboard
    /requests
        /requests/new (create)

    /donations
    /donors
        /[id]

    /profile
        /settings

Public Routes:

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
Home page: /
About page: /about
Contact page: /contact
Login page: /login
Register page: /register
User Routes:

Dashboard page: /dashboard
Profile page: /profile
Blood requests page: /requests
Donations page: /donations
Logout: /logout
Admin Routes:

Admin dashboard page: /admin
Manage requests page: /admin/requests
Create request page: /admin/requests/create
Edit request page: /admin/requests/:id/edit
Delete request: /admin/requests/:id/delete
Hospital Routes:

Hospital dashboard page: /hospital
Manage requests page: /hospital/requests
Create request page: /hospital/requests/create
Edit request page: /hospital/requests/:id/edit
Delete request: /hospital/requests/:id/delete

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
- [DatePicker] -(https://easepick.com/)

