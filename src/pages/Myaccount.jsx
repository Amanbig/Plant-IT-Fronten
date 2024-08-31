// MyAccount.js
import React, { useState } from 'react';
import PersonalInfo from '../components/accounts/PersonelInfo';
import Addresses from '../components/accounts/Addresses';
import PasswordManager from '../components/accounts/PasswordManager';
import Logout from '../components/accounts/LogOut';
import AccountSideNav from '../components/accounts/AccountSideNav';
import Footer from '../components/Footer';

export default function MyAccount() {
  const [activeSection, setActiveSection] = useState('personal-info');

  const renderContent = () => {
    switch (activeSection) {
      case 'personal-info':
        return <PersonalInfo />;
      case 'addresses':
        return <Addresses />;
      case 'password-manager':
        return <PasswordManager />;
      case 'logout':
        return <Logout />;
      default:
        return <div>Select a section from the sidebar</div>;
    }
  };

  return (
    <>
    <div className="flex h-screen bg-gray-100">
      <AccountSideNav setActiveSection={setActiveSection} />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Account Settings</h1>
        {renderContent()}
      </div>
    </div>
    <Footer/>
    </>
  );
}
