// Main Component, Defines the Root Component Which is The Project Entry Point
import { Link } from 'react-router-dom'
import Navbar from './Components/NavigationBar/Navbar';
import './home.css'
import '/src/Components/NavigationBar/Navbar'

function Home() {
  return (
    <>
     <Navbar />
      <div className='home'>
        <div className='large-space'>
        </div>
          <div className='intro-text'>
            <h1>Bringing Finance to Everyone</h1>
            <h2>Introducing Turing, a web-based financial Terminal</h2>
        </div>
        <div className='demo-buttons'>
          <Link to={"https://calendly.com/"}>
            <a className='book-demo'>
              Book Demo
            </a>
          </Link>
          <Link to={"/terminal"}>
            <a className='launch-terminal'>
              Launch Terminal
            </a>
          </Link>
          </div>
          <div className="uui-heroheader16_image-wrapper">
            {/* ADD IMAGE */}
            <img src="test" loading="lazy" alt="" className="image-3"/>
          </div>
          <section className="uui-section_layout49">
              <div className="uui-page-padding-3">
                  <div className="uui-container-large"></div>
              </div>
          </section>
          <section className="uui-section_layout10">
              <div className="uui-page-padding-3">
                  <div className="uui-container-large">
                      <div className="uui-padding-vertical-xhuge">
                          <div className="w-layout-grid uui-layout10_component">
                              <div className="uui-layout10_content">
                                  <div className="uui-icon-featured-outline-large">
                                      <div className="uui-icon-1x1-xsmall w-embed">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-candlestick-chart">
                                              <path d="M9 5v4"/>
                                              <rect width="4" height="6" x="7" y="9" rx="1"/>
                                              <path d="M9 15v2"/>
                                              <path d="M17 3v2"/>
                                              <rect width="4" height="8" x="15" y="5" rx="1"/>
                                              <path d="M17 13v3"/>
                                              <path d="M3 3v18h18"/>
                                          </svg>
                                      </div>
                                  </div>
                                  <div className="uui-space-small"></div>
                                  <h2 className="uui-heading-medium">Realtime Charting</h2>
                                  <div className="uui-space-xsmall"></div>
                                  <div className="uui-text-size-large">Realtime charts, built on Nasdaq data. Unlimited history, intraday charts</div>
                                  <div className="uui-space-medium"></div>
                              </div>
                              <div className="uui-layout10_image-wrapper">
                                  {/* ADD IMAGE */}
                                  <img src="test" loading="lazy" alt="Dashboard mockup" className="uui-layout10_image shadow-xlarge"/>
                              </div>
                          </div>
                          <div className="w-layout-grid uui-layout10_component">
                              <div className="uui-layout10_image-wrapper">
                                  {/* ADD IMAGE */}
                                  <img src="test" loading="lazy" alt="Dashboard mockup" className="uui-layout10_image-copy shadow-xlarge"/>
                              </div>
                              <div className="uui-layout10_content">
                                  <div className="uui-icon-featured-outline-large">
                                      <div className="uui-icon-1x1-xsmall w-embed">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-newspaper">
                                              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
                                              <path d="M18 14h-8"/>
                                              <path d="M15 18h-5"/>
                                              <path d="M10 6h8v4h-8V6Z"/>
                                          </svg>
                                      </div>
                                  </div>
                                  <div className="uui-space-small"></div>
                                  <h2 className="uui-heading-medium">Realtime Global News</h2>
                                  <div className="uui-space-xsmall"></div>
                                  <div className="uui-text-size-large">Real time news from hundreds of news wires and providers. Delivered in less than 100ms</div>
                                  <div className="uui-space-medium"></div>
                              </div>
                          </div>
                          <div className="w-layout-grid uui-layout10_component">
                              <div className="uui-layout10_content">
                                  <div className="uui-icon-featured-outline-large">
                                      <div className="uui-icon-1x1-xsmall w-embed">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap">
                                              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                                          </svg>
                                      </div>
                                  </div>
                                  <div className="uui-space-small"></div>
                                  <h2 className="uui-heading-medium">Live Market Quotes</h2>
                                  <div className="uui-space-xsmall"></div>
                                  <div className="uui-text-size-large">Live market quotes, trades, and level II realtime prices directly from Nasdaq. Delivered to you in under 100ms</div>
                                  <div className="uui-space-medium"></div>
                              </div>
                              <div className="uui-layout10_image-wrapper">
                                  {/* ADD IMAGE */}
                                  <img src="test" loading="lazy" alt="Dashboard mockup" className="uui-layout10_image shadow-xlarge"/>
                              </div>
                          </div>
                          <section className="uui-section_layout33">
                              <div className="uui-page-padding-3">
                                  <div className="uui-container-large"></div>
                              </div>
                          </section>
                          <section className="uui-section_cta07">
                              <div className="uui-page-padding-3">
                                  <section className="uui-section_layout10-2">
                                      <div className="uui-page-padding-7">
                                          <div className="uui-container-large-5">
                                              <div className="w-layout-grid uui-layout10_component">
                                                  <div className="uui-layout10_image-wrapper">
                                                      {/* ADD IMAGE */}
                                                      <img src="test" loading="lazy" sizes="(max-width: 479px) 53vw, (max-width: 767px) 63vw, (max-width: 991px) 28vw, 30vw" srcSet="test" alt="Dashboard mockup" className="uui-layout10_image-copy shadow-xlarge"/>
                                                  </div>
                                                  <div className="uui-layout10_content">
                                                      <div className="uui-icon-featured-outline-large">
                                                          <div className="uui-icon-1x1-xsmall w-embed">
                                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-newspaper">
                                                                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
                                                                  <path d="M18 14h-8"/>
                                                                  <path d="M15 18h-5"/>
                                                                  <path d="M10 6h8v4h-8V6Z"/>
                                                              </svg>
                                                          </div>
                                                      </div>
                                                      <div className="uui-space-small"></div>
                                                      <h2 className="uui-heading-medium">SEC Filings</h2>
                                                      <div className="uui-space-xsmall"></div>
                                                      <div className="uui-text-size-large">Search SEC Filings by Company, with direct links to EDGAR from company inception, and updated in realtime.</div>
                                                      <div className="uui-space-medium"></div>
                                                  </div>
                                              </div>
                                              <div className="uui-padding-vertical-xhuge-6">
                                                  <div className="w-layout-grid uui-layout10_component">
                                                      <div className="uui-layout10_content">
                                                          <div className="uui-icon-featured-outline-large">
                                                              <div className="uui-icon-1x1-xsmall w-embed">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap">
                                                                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                                                                  </svg>
                                                              </div>
                                                          </div>
                                                          <div className="uui-space-small"></div>
                                                          <h2 className="uui-heading-medium">Company Financials</h2>
                                                          <div className="uui-space-xsmall"></div>
                                                          <div className="uui-text-size-large">Company Balance Sheets, Income Statements, and Cash Flow Statements since company inception.</div>
                                                          <div className="uui-space-medium"></div>
                                                      </div>
                                                      <div className="uui-layout10_image-wrapper">
                                                          {/* ADD IMAGE */}
                                                          <img src="test" loading="lazy" sizes="(max-width: 479px) 67vw, (max-width: 767px) 79vw, (max-width: 991px) 35vw, 38vw" srcSet="test" alt="Dashboard mockup" className="uui-layout10_image-copy shadow-xlarge-copy"/>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </section>
                                  <section className="uui-section_layout16">
                                      <div className="uui-page-padding-3">
                                          <div className="uui-container-large"></div>
                                      </div>
                                  </section>
                                  <header className="uui-section_header01">
                                      <div className="uui-page-padding-7">
                                          <div className="uui-container-large-5">
                                              <div className="uui-padding-vertical-xhuge-6">
                                                  <div className="uui-max-width-large-5">
                                                      <div className="uui-heading-subheading-4">Roadmap</div>
                                                      <h1 className="uui-heading-large-3">Adding More Every Day</h1>
                                                      <div className="uui-space-small-3"></div>
                                                      <div className="uui-text-size-xlarge-2">We &#x27;re actively expanding our coverage to more asset classes and geographies every day. See our Roadmap for more information.</div>
                                                      <div className="uui-space-medium-2"></div>
                                                      <div className="uui-button-row-2 is-reverse-mobile-landscape">
                                                          <div className="uui-button-wrapper-2 max-width-full-mobile-landscape">
                                                              <a href="/roadmap" className="uui-button-9 w-inline-block">
                                                                  <div>View Roadmap</div>
                                                              </a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </header>
                                  <div className="uui-container-large">
                                      <div className="uui-padding-vertical-xhuge-2">
                                          <div className="uui-cta07_component">
                                              <div className="uui-cta07_content">
                                                  <div className="uui-max-width-large">
                                                      <h3 className="uui-heading-small">Try the Terminal For Free</h3>
                                                      <div className="uui-space-xsmall"></div>
                                                      <div className="uui-text-size-large">Test drive without any payment or signup</div>
                                                  </div>
                                              </div>
                                              <div className="uui-cta07_form w-form">
                                                  <form id="email-form" name="email-form" data-name="Email Form" method="get" className="uui-form_component" data-wf-page-id="659f5dc3d989400a72ae7e2c" data-wf-element-id="7f5482e8-aaac-f3f3-1b30-d8d96ce02831">
                                                      <div className="uui-signup-form_wrapper">
                                                          <a className="uui-button-5-copy is-button-large w-inline-block">
                                                              <div>Launch Terminal</div>
                                                          </a>
                                                      </div>
                                                  </form>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </section>
                          <footer className="uui-footer07_component">
                              <div className="uui-page-padding-3">
                                  <div className="uui-container-large">
                                      <div className="uui-padding-vertical-xlarge">
                                          <div className="uui-footer07_top-wrapper">
                                              <a href="#" id="w-node-_03b22535-d2b0-7908-8893-0080a10a8e14-72ae7e2c" className="uui-footer07_logo-link w-nav-brand">
                                                  <div className="uui-logo_component">
                                                      <div className="text-block-18">Turing Terminal</div>
                                                  </div>
                                              </a>
                                              <div className="w-layout-grid uui-footer07_link-list">
                                                  <a href="/pricing" className="uui-footer07_link w-inline-block">
                                                      <div className="text-block-14">Pricing</div>
                                                  </a>
                                                  <a className="uui-footer07_link w-inline-block">
                                                      <div className="text-block-15">Careers</div>
                                                  </a>
                                              </div>
                                          </div>
                                          <p className="paragraph">
                                              Disclaimer: The information provided on this website by ML Software dba Turing Terminal is strictly for informational purposes only and should not be construed as an offer to sell, a solicitation to buy, or a recommendation for any security or strategy. MJ Software dba Turing Terminal is not a broker or registered investment advisor, and we are not registered with any financial or securities regulatory authority to give financial and investment advice. While we make every effort to maintain the accuracy and timeliness of information, we cannot guarantee its absolute accuracy. We strongly recommend conducting personal research or consulting a qualified financial advisor before making any investment decisions. Trading in financial markets involves significant risk, and past performance does not guarantee future results. MJ Software dba Turing Terminal, its employees, or its affiliates will not be held liable for any losses or damages arising from the use of any information on this website. Use of this website signifies your agreement to this disclaimer.
                                              <strong>
                                                  <br/>
                                              </strong>
                                          </p>
                                          <div className="uui-footer07_bottom-wrapper">
                                              <div className="uui-text-size-small text-color-gray500">© 2024 MJ Software. All rights reserved.</div>
                                              <div className="w-layout-grid uui-footer07_legal-list">
                                                  <a target="_blank" className="uui-footer07_legal-link">Terms</a>
                                                  <a className="uui-footer07_legal-link">Privacy</a>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </footer>
                      </div>
                  </div>
              </div>
          </section>
        </div>
    </>
  )
}

export default Home