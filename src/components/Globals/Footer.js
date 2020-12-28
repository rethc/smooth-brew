import React from "react"

export default function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-yellow text-center">
            <h6>
              <small>
                &copy;{new Date().getFullYear().toString()} Chesda Reth. All
                rights reserved.
              </small>
            </h6>
          </div>
        </div>
      </div>
    </footer>
  )
}
