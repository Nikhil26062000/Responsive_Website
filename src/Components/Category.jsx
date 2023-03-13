import React from 'react'

const Category = () => {
  return (
    <>
        <div className="threeCat">
            <div className="cat1">
                <div className="box1">
                <div className="left">
                        <img src="./Images/logo1.svg" alt="logo" />
                    </div>

                    <div className="right">
                        <h3>SYRUP</h3>
                        <h5>save upto 25% off...</h5>
                    </div>
                </div>
            </div>

            <div className="cat2">
                <div className="box1">
                    <div className="left">
                        <img src="./Images/logo2.svg" alt="logo" />
                    </div>

                    <div className="right">
                        <h3>Beauty</h3>
                        <h5>save upto 15% off...</h5>
                    </div>

                </div>

            </div>

            <div className="cat3">
                <div className="box1">
                <div className="left">
                        <img src="./Images/logo3.svg" alt="logo" />
                    </div>

                    <div className="right">
                        <h3>WELLNESS</h3>
                        <h5>save upto 85% off...</h5>
                    </div>
                </div>  
            </div>
        </div>



{/* =-----------------------------THIS BELOW SECTION IS FOR MOBILE VERSION BTW 500 TO 768---- */}
        <div className='threeCatMob'>

            <div className='mobBox1'>
                <div className='left'>
                    <img src="./Images/logo1.svg" />
                </div>

                <div className='right' >
                    <h4>Medicine</h4>
                    <h6>Save upto 25%off...</h6>
                </div>

            </div>

            <div className='mobBox2'>
            <div className='left'>
                    <img src="./Images/logo2.svg" />
                </div>

                <div className='right' >
                    <h4>Beauty</h4>
                    <h6>Save upto 25%off...</h6>
                </div>
            </div>

            <div className='mobBox3'>
            <div className='left'>
                    <img src="./Images/logo3.svg" />
                </div>

                <div className='right' >
                    <h4>Wellness</h4>
                    <h6>Save upto 25%off...</h6>
                </div>
            </div>            

        </div>


        {/* -------------------THIS SECTION IS FOR MOB VERSION BELOW 500------------------- */}

        <div clas className='smMob'>
            <div className='sm-box1'>
                <img src="./Images/logo1.svg" />
                <h5>
                    Medicine
                </h5>
                <h6>
                    save upto 25%off.. 
                </h6>

            </div>

            <div className='sm-box2'>
                <img src="./Images/logo2.svg" />
                <h5>
                    Medicine
                </h5>
                <h6>
                    save upto 25%off.. 
                </h6>
            </div>

            <div className='sm-box3'>
             <img src="./Images/logo3.svg" />
             <h5>
                    Medicine
                </h5>
                <h6>
                    save upto 25%off.. 
                </h6>
            </div>


        </div>
    </>
  )
}

export default Category;