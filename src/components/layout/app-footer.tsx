import React from 'react';

const AppFooter = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center py-6 border-t border-border">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} ArtDent Clinic. All rights reserved.
      </p>
      <p className="text-xs text-muted-foreground mt-1">
        Your smile, our passion.
      </p>
    </footer>
  );
};

export default AppFooter;
