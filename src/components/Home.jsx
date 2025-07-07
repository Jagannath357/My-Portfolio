import Profile from '../assets/images/Jagannath.jpg'
function Home() {
    return ( 
        <div className="hero w-100">
            <div className="container" >
                <div className="container row" id='profileContainer'>
                    <div className="col-10 d-flex flex-column align-items-start gap-2 hero-desc">
                        <h1>Hi, I'm <span className="text-warning">Jagannath Padhi</span></h1>
<<<<<<< HEAD
<<<<<<< HEAD
                        <p className='text-light'>Full Stack developer passionate about creating innovative web solutions</p>
=======
                        <p className='text-light'>Full Stack Developer passionate about creating innovative web solutions</p>
>>>>>>> 839ea40 (file updated)
=======
                        <p className='text-light'>Full Stack Developer passionate about creating innovative web solutions</p>
>>>>>>> 839ea409065ef179815922bc914439bc4a190db0
                        <div className="d-flex touch">
                            <button type="button" className="btn btn-warning btn">Vew My Work</button>
                            <button type="button" className="btn btn-outline-light ms-sm-5" id='mom'>Get In Touch</button>
                        </div>
                    </div>
                    <div className="col-sm-2" id='profileImage'>
                        <img src={Profile} alt="Profile Image" className='w-100 h-100 rounded-circle' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;