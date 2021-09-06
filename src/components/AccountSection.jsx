import React from 'react'
import "./account.css"
const AccountSection = () => {
    return (
        <div className="accountSection">
            <div className="input__section">
                <h1 className="input__heading">NUMBER OF ACCOUNTS</h1>
                <input type="text" className="form__input" placeholder="Enter Number Here"/>
                <h1 className="amount">$0.00</h1>
            </div>
            <div className="detail__section">
                <p className='detail'>TRY IT FREE</p>
                <div className="paySection">
                    <h2 className="paySection__heading">Pay As You Go Rates</h2>
                    <p className="paySection__content">
                       Emails Price per email <br/> up to 10,000 $0.008 <br/> up to 100,000 $0.005 <br/> up to 250,000 $0.004<br/> up to 1,000,000 $0.003 
                    </p>
                </div>
                <div className="enterpriseSection">
                  <h2 className="enterprise__heading">
                      Enterprise Packages
                  </h2>
                  <p className="enterprise__content">Over 1,000,000</p>
                </div>
                <h3 className="contact-us">CONTACT US</h3>
                <p className="learnMore">LEARN MORE ABOUT ENTERPRISE</p>
            </div>
        </div>
    )
}

export default AccountSection
