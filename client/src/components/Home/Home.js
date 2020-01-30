import React from 'react';


function Home() {
  return (
    <div className="container">
      <h2>A Recipe-Sharing App. Test new flavors or impress by sharing one of your own...</h2>
      <br />
{/* button needs to be in the center of the page */}
      <a href="/welcome" className="btn btn-danger ready" type="submit">Ready to Taste</a>
    </div>
  );
}



export default Home;