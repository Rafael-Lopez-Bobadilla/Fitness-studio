import coach1 from '../../images/coach1.jpg'
import coach2 from '../../images/coach2.jpg'
import coach3 from '../../images/coach3.jpg'
import coach4 from '../../images/coach4.jpg'
import coach5 from '../../images/coach5.jpg'
import coach6 from '../../images/coach6.jpg'
import coach7 from '../../images/coach7.jpg'
import coach8 from '../../images/coach8.jpg'
import boxIcon from '../../images/box-icon.svg'
import challangeIcon from '../../images/challange-icon.svg'
import heartIcon from '../../images/heart-icon.svg'
import foundationIcon from '../../images/foundation-icon.svg'
import pilatesIcon from '../../images/pilates-icon.svg'
import strengthIcon from '../../images/strength-icon.svg'
import yogaIcon from '../../images/yoga-icon.svg'
import meditationIcon from '../../images/meditation-icon.svg'
import muscleIcon from '../../images/muscle-icon.svg'

export const coaches = [
  {
    photo: coach1,
    name: 'ASHLEY JOI',
    description: 'With her unique blend of motivation and determination, trainer Ashley Joi is on a mission to push you to new heights.',
    icons: [{ icon: challangeIcon, name: 'CHALLANGE' }, { icon: heartIcon, name: 'CARDIO' }, { icon: yogaIcon, name: 'YOGA' }]
  },
  {
    photo: coach2,
    name: 'ANDY WALSHE',
    description: 'Dr. Andy Walshe is redefining what the human body is capable of achieving. Or, to put it another way, he’s hacking human potential.',
    icons: [{ icon: muscleIcon, name: 'MUSCLE-BUILDING' }, { icon: strengthIcon, name: 'STRENGTH' }]
  },
  {
    photo: coach3,
    name: 'ERIC GOODMAN',
    description: 'Pain, pain, go away … Eric Goodman, creator of Foundation Training, is here to show you a better way.',
    icons: [{ icon: boxIcon, name: 'BOXING' }, { icon: foundationIcon, name: 'FOUNDATION' }, { icon: meditationIcon, name: 'MEDITATION' }]
  },
  {
    photo: coach4,
    name: 'JACK DAWSON',
    description: 'Your training should challenge you to push through mental/physical limits.  Much broader than that, however, this is about proactively taking care of your health so you can live your best life.',
    icons: [{ icon: heartIcon, name: 'CARDIO' }, { icon: strengthIcon, name: 'STRENGTH' }, { icon: foundationIcon, name: 'FOUNDATION' }, { icon: challangeIcon, name: 'CHALLANGE' }]
  },
  {
    photo: coach5,
    name: 'DRAKE BELL',
    description: 'He believes that giving his clients confidence and the sense of accomplishment is the most rewarding part of his position as a trainer.',
    icons: [{ icon: boxIcon, name: 'BOXING' }, { icon: meditationIcon, name: 'MEDITATION' }, { icon: muscleIcon, name: 'MUSCLE-BUILDING' }]
  },
  {
    photo: coach6,
    name: 'ELSA PATAKY',
    description: 'Elsa Pataky is fast and furious in the kickboxing arena and also appreciates the peaceful mind-body connection she finds on the yoga mat. Now, she is on a mission to help others find a balanced fitness routine of their own.',
    icons: [{ icon: pilatesIcon, name: 'PILATES' }, { icon: yogaIcon, name: 'YOGA' }, { icon: boxIcon, name: 'BOXING' }]
  },
  {
    photo: coach7,
    name: 'TED MOSBY',
    description: 'Khloe’s ‘Revenge Body.’ Matthew McConaughey’s Magic Mike abs. Angelina Jolie’s Tomb Raider assets. The LA Lakers’ on-court endurance. Keeping Rocky fit and fighting. Gunnar Peterson is the trainer who has a hand in shaping Hollywood.',
    icons: [{ icon: heartIcon, name: 'CARDIO' }, { icon: strengthIcon, name: 'STRENGTH' }, { icon: foundationIcon, name: 'FOUNDATION' }]
  },
  {
    photo: coach8,
    name: 'JOSEPH SAKODA',
    description: 'Navy SEALs, first responders, Special Forces. Sure, they’re tough … but just wait ’til you meet the guy who trains them.',
    icons: [{ icon: challangeIcon, name: 'CHALLANGE' }, { icon: yogaIcon, name: 'YOGA' }, { icon: heartIcon, name: 'CARDIO' }]
  }
]