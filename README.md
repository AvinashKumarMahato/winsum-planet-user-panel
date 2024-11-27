# User Panel Documentation

The **User Panel** is a user-facing website for accessing job posts, blog posts, and essential business information, including the ability to contact the administrators.

---

**Live Preview**: [https://winsum-planet-user-panel.vercel.app/](https://winsum-planet-user-panel.vercel.app/)

---

## **Table of Contents**

1. [Overview](#overview)  
2. [Tech Stack](#tech-stack)  
3. [Pages](#pages)  
   - [Jobs](#jobs)  
   - [Blogs](#blogs)  
   - [About Us](#about-us)  
   - [Contact Us](#contact-us)  
4. [Folder Structure](#folder-structure)  
5. [Setup and Installation](#setup-and-installation)  

---

## **Overview**

The **User Panel** provides users with a seamless experience to:  
- Browse job opportunities listed in walk-in drives.  
- Read blogs about career advice, interview tips, and more.  
- Learn about the organization via the **About Us** page.  
- Contact the team using the **Contact Us** page.

---

## **Tech Stack**

- **Frontend Framework**: React.js  
- **Styling**: Tailwind CSS  
- **Additional Tools**:  
  - React Router for navigation.  
  - Axios for data retrieval.

---

## **Pages**

### 1. **Jobs**  
- **Purpose**: Lists all active job posts.  
- **Features**:  
  - Search and filter job posts by keywords, location, or categories.  
  - Display job details like company name, role, location, and walk-in dates.  
- **Design**:  
  - Uses a responsive grid layout for job cards.  
  - Tailwind CSS ensures mobile-first design.

### 2. **Blogs**  
- **Purpose**: Displays a collection of blogs.  
- **Features**:  
  - Blog posts are listed with a thumbnail, title, and short description.  
  - Clicking on a blog redirects users to the full article.  
- **Design**:  
  - Modern card-based layout with hover effects.  

### 3. **About Us**  
- **Purpose**: Provides an overview of the organization.  
- **Features**:  
  - Displays company mission, vision, and values.  
  - Includes a team introduction section or history of the organization.  
- **Design**:  
  - Clean layout with a combination of text and images.

### 4. **Contact Us**  
- **Purpose**: Allows users to send inquiries or feedback.  
- **Features**:  
  - Input fields for name, email, subject, and message.  
  - Validation for required fields.  
  - A "Send" button that submits the form.  
- **Design**:  
  - Simple form layout with Tailwind CSS styling.  
  - Integration with a backend API to handle form submissions.

---

## **Folder Structure**

```
src/
├── assets/             # Static assets (images, icons, etc.)
├── components/         # Reusable components (e.g., Navbar, Footer)
├── pages/              # Page components
│   ├── Jobs.jsx        # Jobs page
│   ├── Blogs.jsx       # Blogs page
│   ├── AboutUs.jsx     # About Us page
│   ├── ContactUs.jsx   # Contact Us page
├── styles/             # Tailwind CSS configuration
├── App.jsx             # Main app component
├── index.js            # Entry point
└── data/               # Static JSON files or API integration (if applicable)
```

---

## **Setup and Installation**

Follow these steps to set up and run the user panel:

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/AvinashKumarMahato/winsum-planet-user-panel.git
   cd winsum-planet-user-panel
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Start Development Server**  
   ```bash
   npm start
   ```
