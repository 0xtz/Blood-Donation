# Blood Donation Web Application

This web application aims to connect blood donors with those in need of blood donations. It allows hospitals to create blood donation requests that are broadcasted to users who match certain criteria, such as location and blood type. Users can then choose to accept the request and donate blood.

"Blood Donation" is a web application designed to connect blood donors with those in need of blood donations. Users can sign up as either blood donors or blood takers (recipients), and they can create and respond to blood donation requests. Blood donation requests are broadcasted to users who match certain criteria, such as location and blood type. Users can then choose to donate blood and be a **Hero**.

The application is built using **Next.js** v 13. The database used is **MySQL**, and authentication is handled using **NextAuth.js**. The application is open source and licensed under the MIT License.

## Table of Contents

- [Blood Donation Web Application](#blood-donation-web-application)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [credits](#credits)

## Installation

To install and run this application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/blood-donation.git`
2. Install the dependencies: `npm install`
3. Set up the database by running the SQL script: `mysql -u <username> -p < blood_donation.sql`
4. Configure the environment variables by creating a `.env.local` file based on `.env.example`.
5. Start the development server: `npm run dev`

## Usage

To use the application, navigate to `http://localhost:3000` in your web browser. If you're not already logged in, you'll be redirected to the login page. Once you're logged in, you'll be able to see any blood donation requests that match your location and blood type. You can choose to accept a request and donate blood.

## License

This project is licensed under the terms of the MIT license. See [LICENSE](LICENSE) for more information.

## credits

This project was created by [Siddharth Kshetrapal](t) and [Siddharth Kshetrapal](d).

<!-- give credits to the techs used and libraries -->

- []: [Next.js](https://nextjs.org/)
- []: [MySQL](https://www.mysql.com/)
- []: [NextAuth.js](https://next-auth.js.org/)
- []: [React](https://reactjs.org/)
- []: [React Spinners](https://mhnpd.github.io/react-loader-spinner/)
- []: [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- []: [React Icons](https://react-icons.github.io/react-icons/)
- []: [React Hook Form](https://react-hook-form.com/) // not used `yet`
