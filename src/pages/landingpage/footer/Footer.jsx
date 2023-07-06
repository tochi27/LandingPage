import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='h-[60rem] bg-[#333333]'>
       <div className='flex items-center justify-between'>
            <div className='w-[34rem] px-20 py-5 text-white flex items-center justify-between'>
                <div className='flex flex-col pb-[4.5rem] gap-3'>
                    <h1 className='font-bold '>Resources</h1>
                    <NavLink to="#">The Manual</NavLink>
                    <NavLink to="#">The Archive</NavLink>
                    <NavLink to="#">Offer Calculator</NavLink>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='font-bold '>Company</h1>
                    <NavLink to="#">Approach</NavLink>
                    <NavLink to="#">About</NavLink>
                    <NavLink to="#">Careers</NavLink>
                    <NavLink to="#">Newsroom</NavLink>
                    <NavLink to="#">FAQs</NavLink>
                </div>
                <div className='flex flex-col pb-[2.4rem] gap-3'>
                    <h1 className='font-bold '>Legal</h1>
                    <NavLink to="#">Directory</NavLink>
                    <NavLink to="#">Privacy</NavLink>
                    <NavLink to="#">Terms of Service</NavLink>
                    <NavLink to="#">Security</NavLink>
                </div>

            </div>
            <div className='text-white pr-20 pb-[6rem]'>
                <p>© Compound Financial Inc. All rights reserved.</p>
            </div>
       </div>

       <div className='pt-[10rem] text-white px-20'>
            <p>
                Compound Financial Inc. (“Compound Financial”) offers software-based financial management and planning tools. Investment advisory services are provided by Compound Advisors, Inc. (“Compound Advisers”), an SEC-registered investment adviser. Compound Tax, LLC (“Compound Tax”) provides tax consulting and compliance services. Compound Advisers and Compound Tax are wholly owned subsidiaries of Compound Financial. Altogether, we refer to our business as (“Compound”). Registration as an investment adviser does not imply any level of skill or training. By using this website, you accept our Terms of Use and Privacy Policy. Compound’s investment advisory services are available only to residents of the United States in jurisdictions where Compound is registered to provide financial advice. Nothing on this website should be considered an offer, solicitation of an offer, or advice to buy or sell securities. Past performance is no guarantee of future results. Any historical returns, expected returns, or probability projections are hypothetical in nature and may not reflect actual future performance. Compound is not a licensed lender, law firm or insurance agency, and Clients should consult with their personal investment, insurance, tax or legal advisors or brokers regarding their particular circumstances as needed before making any final financial decisions.Account holdings are for illustrative purposes only and are not investment recommendations. The content on this website is for informational purposes only and does not constitute a comprehensive description of Compound’s investment advisory services.
            </p>
            <p className='pt-[2rem]'>
                Refer to Compound’s Brochure (Form ADV Part 2A) and Client Relationship Summary (Form CRS) for more information. Certain investments are not suitable for all investors. Before investing, consider your investment objectives and the applicable fees. The rate of return on investments can vary widely over time, especially for long term investments. Investment losses are possible, including the potential loss of all amounts invested. Brokerage services are provided by Charles Schwab & Co., Inc. (“Schwab,” Member SIPC). For more information, see our General Disclosures. Contact: 2261 Market Street, #4013 San Francisco, CA 94114. Information provided by Compound Financial Inc. is for informational and general educational purposes only and is not investment or financial advice. Check our background and that of our custodian Schwab on FINRA’s BrokerCheck.
            </p>
            <p className='pt-[2rem]'>
                All logos are trademarks of their respective owners. For more information, please see withcompound.com/legal.
            </p>
            <p className='pt-[2rem]'>
                In accordance with SEC rules concerning the use of third-party endorsements and client testimonials in marketing materials, please be aware of the following. Endorsements and testimonials appearing on this site are actually received by the promoter (as defined in the SEC’s Marketing Rule) and used with their consent. They reflect the experiences of those who have used or are familiar with Compound, our products and/or services in some way. However, they are individual results, and results will vary. We do not claim that they are typical results that clients will generally achieve. The endorsements and testimonials are not necessarily representative of all of those who have used or will use our products and/or services. The endorsements and testimonials are given verbatim except for correction of grammatical or typing errors. Promoters do not receive any compensation, direct or indirect, in any form, for providing their endorsement or testimonial, as applicable.
            </p>
       </div>
    </footer>
  )
}

export default Footer