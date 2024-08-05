import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Ahmad Z. BALLOUCH</h3>
                            <span>1-year daycare attendee</span>
                        </div>
                    </div>
                    <p>I love this day care facility. Professional provider with professional teachers. Very clean, clear, neat and nice place they have provided.
Thier behavior with children is phenomenal.
They have organized a cool and great environment inside and outside for children to spend time learning something good. It has been only two weeks my child is attending and he learned much more things and I see a positive change in his conduct and behavior.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Ivan Sabarre</h3>
                            <span>5 months daycare attendee</span>
                        </div>
                    </div>
                    <p>There aren’t enough words to express how amazing Mrs. Ghazala, Sunshine Daycare is. A few months before our son we had visited many daycares, but it wasn’t until we met with Mrs. Ghazala that we knew this was the place for our son. Our son has been going to Sunshine Daycare since the age of 3 months, our son is now 7 months and they are amazing with him, giving us updates about how his day is. The caring, loving personality of Mrs. Ghazala is what Sunshine daycare is all about. We don’t know what we would do without Sunshine Daycare. I could not recommend them enough.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Emily Neufeld Jillson</h3>
                            <span>3-year daycare attendee</span>
                        </div>
                    </div>
                    <p>We are so, so happy that we chose to send our son to this daycare. He began when he was three months old and is now a little over a year. Ghazala and her husband treat him (and us!) like family, and our son LOVES going to daycare every day - if that isn't a sign that he is happy, cared for, engaged, and thriving than I don't know what is! We love that Ghazala offers a variety of age-appropriate activities and that there are other children that our son gets to spend time with -- it 's great that the group of children isn't too large, so they each get one-on-one attention and their unique, individual needs are always met. We love that Ms. Ghazala also cooks for the children - her food is delicious (we know first hand!) and it's great that he is able to try foods that we wouldn't necessarily provide at home.</p>
                    <p>Hands down, we couldn't have gotten through our first year as parents without having Ms. Ghazala and her family in our corner. She is responsive, caring, communicative, warm, and loving to our son, and our whole family. Anyone would be lucky to send their child to Sunshine Daycare.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Storie Olsen</h3>
                            <span>2-year daycare attendee</span>
                        </div>
                    </div>
                    <p>I am so happy with Ghazala and Sunshine daycare. She started caring for my baby when she was 3 months old and I couldn't be more comfortable with her. My baby smiles at Ghazala when I drop her off in the morning, which means so much to me. She also sends me multiple videos and pictures throughout the day, and updates me on how her day went when I pick her up. Her hours are incredible and the cost of her care is very reasonable. Again, I'm so happy to have found her.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
