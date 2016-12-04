import React from 'react'
import {Link} from 'office-ui-fabric-react/lib/Link'
import '../_styles/Footer.css'

const Footer = () => (
  <div className="footer-container">
    {'© Awesome App 2016. '}
    <Link href="https://github.com/guzmonne/office-ui-layout/tree/01-blank-project">Get in touch!</Link>
    {' -- Made with '}
    <span className="text-red">♥</span>
    {' by '}
    <Link href="https://github.com/guzmonne">Guzmán Monné {'<@guzmonne>'}</Link>    
  </div>
)

export default Footer
