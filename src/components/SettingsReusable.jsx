import { KeyRound, Link2 } from 'lucide-react';
import React from 'react';

const SettingsReusable = ({ icon, title, title_description }) => {
  return (
    <div className='flex flex-cols gap-4'>
      <div className='flex items-center gap-4'>
        <div>{icon}</div>
        <div className='flex flex-cols gap-1'>
            <h4>{title}</h4>
            <p>{title_description}</p>
        </div>
      </div>
    </div>
  );
}

export default SettingsReusable;
