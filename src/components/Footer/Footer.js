import './Footer.css'
import { Facebook } from '@material-ui/icons'
import { Instagram } from '@material-ui/icons'
import { YouTube } from '@material-ui/icons'
import { Twitter } from '@material-ui/icons'
import { LocationOn } from '@material-ui/icons'
import { Phone } from '@material-ui/icons'

export default function Footer() {

  const iconsStyles = {
    fontSize: '25px'
  }

  const infoStyles = {
    fontSize: '30px',
    marginRight: '15px',
    color: 'lightgray'
  }
  return (
    <div className='footer'>
      <div className='footer__cc'>
        <div className='footer__contact'>
          <div>Contact Us!</div>
          <div className='footer__info'>
            <LocationOn style={infoStyles} />
            3109 Doctors Drive Los Angeles, California
          </div>
          <div className='footer__info'>
            <Phone style={infoStyles} />
            202-555-0124
          </div>
        </div>
        <div className='footer__connect'>
          <div>Connect With Us!</div>
          <div className='footer__icons'>
            <div className='footer__icon'><Facebook style={iconsStyles} /></div>
            <div className='footer__icon'><Instagram style={iconsStyles} /></div>
            <div className='footer__icon'><Twitter style={iconsStyles} /></div>
            <div className='footer__icon'><YouTube style={iconsStyles} /></div>
          </div>
        </div>
      </div>
      <div className='footer__last'>
        <div>Website by Rafael Lopez</div>
        <div style={{ width: '1px', backgroundColor: 'white' }}></div>
        <div>2021 Fitness Studio</div>
      </div>
    </div>
  )
}
