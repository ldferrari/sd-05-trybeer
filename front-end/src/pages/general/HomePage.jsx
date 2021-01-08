import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <div>
        <button type="button" data-testid="no-account-btn">
          <Link to="/register">
            Ainda não tenho conta
          </Link>
        </button>
      </div>
    </div>
  );
}
