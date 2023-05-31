// app/page.js
import { useState } from 'react';

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <h2>Complaints</h2>
      {/* Render list of complaints here */}
      <button onClick={() => setShowPopup(true)}>Log in / Register</button>
      {showPopup && (
        <div>
          {isLogin ? (
            <form>
              <label>
                Email:
                <input type="email" name="email" />
              </label>
              <label>
                Password:
                <input type="password" name="password" />
              </label>
              <input type="submit" value="Log in" />
              <button onClick={() => setIsLogin(false)}>Don't have an account?</button>
            </form>
          ) : (
            <form>
              <label>
                NIK:
                <input type="text" name="nik" />
              </label>
              <label>
                Email:
                <input type="email" name="email" />
              </label>
              <label>
                Password:
                <input type="password" name="password" />
              </label>
              <input type="submit" value="Register" />
              <button onClick={() => setIsLogin(true)}>Already have an account?</button>
            </form>
          )}
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
}
