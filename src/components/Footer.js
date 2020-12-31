import React from "react"

import style from "./footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/fontawesome'

const Footer = ({ siteTitle }) => (
	<footer id="footer">
		<div className="container">
			<div className="footer-ribbon">
				<span>Get in Touch</span>
			</div>
			<div className="row py-5 my-4">
				<div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
					{/* <h5 className="text-3 mb-3">NEWSLETTER</h5>
				<p className="pr-1">Keep up on our always evolving product features and technology. Enter your e-mail address and subscribe to our newsletter.</p>
				<div className="alert alert-success d-none" id="newsletterSuccess">
					<strong>Success!</strong> You've been added to our email list.
				</div>
				<div className="alert alert-danger d-none" id="newsletterError"></div>
				<form id="newsletterForm" action="php/newsletter-subscribe.php" method="POST" className="mr-4 mb-3 mb-md-0">
					<div className="input-group input-group-rounded">
						<input className="form-control form-control-sm bg-light" placeholder="Email Address" name="newsletterEmail" id="newsletterEmail" type="text">
						<span className="input-group-append">
							<button className="btn btn-light text-color-dark" type="submit"><strong>GO!</strong></button>
						</span>
					</div>
				</form> */}
				</div>
				<div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
					<h5 className="text-3 mb-3">LATEST TWEETS</h5>
					<div id="tweet" className="twitter" data-plugin-tweets data-plugin-options="{'username': 'oklerthemes', 'count': 2}">
						<p>Please wait...</p>
					</div>
				</div>
				<div className="col-md-6 col-lg-3 mb-4 mb-md-0">
					<div className="contact-details">
						<h5 className="text-3 mb-3">CONTACT ME</h5>
						<ul className="list list-icons list-icons-lg">
							<li className="mb-1"><i className="far fa-dot-circle text-color-primary"></i><p className="m-0">London City</p></li>
							{/* <li className="mb-1"><i className="fab fa-whatsapp text-color-primary"></i><p className="m-0"><a href="tel:8001234567">(800) 123-4567</a></p></li> */}
							<li className="mb-1"><i className="far fa-envelope text-color-primary"></i><p className="m-0"><a href="mailto:mail@example.com">sumithpd@gmail.com</a></p></li>
						</ul>
					</div>
				</div>
				<div className="col-md-6 col-lg-2">
					<h5 className="text-3 mb-3">FOLLOW ME</h5>


					<ul className="social-icons">
						<li className="social-icons-facebook">
							<a href="http://www.facebook.com/@FacebookUsername" target="_blank" title="Facebook">
								<FontAwesomeIcon icon={['fab', 'facebook-f']} />
							</a></li>
						<li className="social-icons-twitter"><a href="http://www.twitter.com/@TwitterUsername" target="_blank" title="Twitter">

							<FontAwesomeIcon icon={['fab', 'twitter']} />
						</a></li>
						<li className="social-icons-linkedin"><a href="http://www.linkedin.com/@LinkedInUsername" target="_blank" title="Linkedin">

							<FontAwesomeIcon icon={['fab', 'linkedin-in']} />
						</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div className="footer-copyright">
			<div className="container py-2">
				<div className="row py-4">
					<div className="col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-start mb-2 mb-lg-0">
						Sumith Parambat Damodaran
				</div>
					<div className="col-lg-7 d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-lg-0">
						<p>© {new Date().getFullYear()} {siteTitle}. All Rights Reserved.</p>
					</div>
					{/* <div className="col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-end">
					<nav id="sub-menu">
						<ul>
							<li><i className="fas fa-angle-right"></i><a href="page-faq.html" className="ml-1 text-decoration-none"> FAQ's</a></li>
							<li><i className="fas fa-angle-right"></i><a href="sitemap.html" className="ml-1 text-decoration-none"> Sitemap</a></li>
							<li><i className="fas fa-angle-right"></i><a href="contact-us.html" className="ml-1 text-decoration-none"> Contact Us</a></li>
						</ul>
					</nav>
				</div> */}
				</div>
			</div>
		</div>
	</footer>
)

export default Footer
