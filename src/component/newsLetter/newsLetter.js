import './newsLetter.scss'



const NewsLetter = () => {

  return (
    <>
      <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subcribe to our newletter and stay updated</p>
        <div>
            <input type='email' placeholder='Your Email' />
            <button>Subcribe</button>
        </div>
      </div>
    </>
  )
}

export default NewsLetter;
