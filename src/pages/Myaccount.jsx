import React, { useState } from 'react';
import PersonalInfo from '../components/accounts/PersonelInfo';
import Addresses from '../components/accounts/Addresses';
import PasswordManager from '../components/accounts/PasswordManager';
import Logout from '../components/accounts/LogOut';
import AccountSideNav from '../components/accounts/AccountSideNav';
import Footer from '../components/Footer';
import { FiArrowLeft } from 'react-icons/fi';

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
    <div>
      <div className="flex h-full bg-gray-100 flex-col xl:flex-row">
        <AccountSideNav setActiveSection={setActiveSection} />
        <div className="flex-1 p-6">
            <h1 className="text-3xl font-bold">Account Settings</h1>
          {renderContent()}
        </div>
      </div>
      <Footer />
    </div>
  );
}
