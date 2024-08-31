# Plant IT Website

## Description

This project is a web application designed to manage user accounts with features including personal information management, address management, password management, and log out functionality. The application has a responsive design that adapts to both desktop and mobile screens. 

The main components of the application include:

- **Responsive Design**: Adapts to both mobile and desktop screens.
- **Account Settings Sidebar**: Provides navigation to different account sections.
- **Personal Information**: Manage user personal details.
- **Addresses**: Manage user addresses.
- **Password Manager**: Update and manage passwords.
- **Log Out**: Sign out of the application.
- **Homepage**: A landing page with promotional content.
- **Login Page**: Allows users to authenticate and access their accounts.
- **Sign Up Page**: Allows new users to register an account.

## Features

- Responsive design for both mobile and desktop views.
- Dynamic sidebar navigation.
- Toggleable mobile top bar.
- Overlay for mobile sidebar.

## Technologies Used

- React
- Tailwind CSS
- Font Awesome (for icons)
- JavaScript

## Setup Instructions

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Amanbig/Plant-IT-Fronten.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Plant-IT-Fronten
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm run dev
    ```

5. **Open the application in your browser:**

    Navigate to `http://localhost:5173` to view the application.

## Components

### `AccountSideNav`

A responsive sidebar for navigating account settings.

- **Props:**
  - `setActiveSection`: Function to set the active section in the sidebar.

### `Myaccount`

The main account management page that utilizes `AccountSideNav` for navigation.

### `Homepage`

The landing page of the application, designed to showcase promotions and key information.

### `Login`

A page that allows users to log into their account.

### `SignUp`

A page that allows new users to create an account.



## Usage

- **AccountSideNav**: This component provides navigation options. It displays as a top bar on mobile devices and a sidebar on larger screens.
- **Myaccount**: This page integrates `AccountSideNav` and displays different sections based on user selection.
- **Homepage**: The starting point of the application, featuring promotional content and links to login or sign-up.
- **Login**: Users can log in to access their account.
- **SignUp**: New users can register to create a new account.

## Contributing

1. **Fork the repository** on GitHub.
2. **Create a new branch** (`git checkout -b feature/YourFeature`).
3. **Make your changes** and commit (`git commit -am 'Add new feature'`).
4. **Push to the branch** (`git push origin feature/YourFeature`).
5. **Create a new Pull Request**.

## Contact

For any inquiries or issues, please contact:

- **Your Name** - [amanpreetsinghjhiwant7@gmail.com](mailto:amanpreetsinghjhiwant7@gmail.com)
- **GitHub Profile** - [github.com/Amanbig](https://github.com/Amanbig)

