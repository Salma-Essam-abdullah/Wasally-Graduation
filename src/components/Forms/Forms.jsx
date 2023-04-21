import React from 'react'

export default function Forms() {
  return (
    <>
    <section>

    <div className="row mt-5 justify-content-center" data-aos="fade-up">
  <div className="col-lg-10">
    <form  className="dataform">
      <div className="row">
        <div className="col-md-6 pb-2 form-group">
            <label className='p-1'>From</label>
            <input type="text" name="From" className="form-control" id="From" placeholder="From" required />
        </div>
        <div className="col-md-6 pb-2 form-group">
            <label className='p-1'>To</label>
            <input type="text" className="form-control" name="To" id="To" placeholder="To" required />
        </div>
        <div className="col-md-6 pb-2 form-group">
            <label className='p-1'>Date</label>
            <input type="date" name="date" className="form-control" id="date" placeholder="Date" required />
        </div>

        <div className="col-md-6 pb-2 form-group ">
          <label className='p-1'>Item</label>
          <input type="text" className="form-control" name="Item" id="Item" placeholder="Item" required />
        </div> 

        <div className="col-md-6 pb-2 form-group">
        <label className='p-1'>Store Name</label>
        <input type="text" className="form-control" name="store name" id="store name" placeholder="Store Name" required />
        </div>
        <div className="col-md-6 pb-2 form-group">
        <label className='p-1'>Store Location</label>
        <input type="text" name="Store Location" className="form-control" id="Store Location" placeholder="Store Location" required />
        </div>

        <div className="col-md-6 pb-2 form-group">
        <label className='p-1'>Category</label>
        <input type="text" name="Category" className="form-control" id="Category" placeholder="Category" required />
        </div>

        <div className="col-md-6 pb-2 form-group  ">
        <label className='p-1'>Weight</label>
        <input type="text" className="form-control" name="Weight" id="Weight" placeholder="Weight" required />
        </div>

        <div className="col-md-6 pb-2 form-group">
        <label className='p-1'>Price</label>
        <input type="text" name="Price" className="form-control" id="Price" placeholder="Price" required />
        </div>

        <div className="col-md-6 pb-2 form-group ">
        <label className='p-1'>Reward</label>
        <input type="text" className="form-control" name="Reward" id="Reward" placeholder="Reward" required />
        </div>

        <div className="col-md-6 pb-2 form-group ">
        <label className='p-1'>Your Location</label>
        <input type="text" className="form-control" name="Your Location" id="Your Location" placeholder="Your Location" required />
        </div>

        <div className="col-md-6 pb-2 form-group ">
        <label className='p-1'>Another Location </label>
        <input type="text" className="form-control" name="Another Location" id="Another Location" placeholder="Another Location" required />
        </div>

      </div>

      {/* <div className="form-group pb-2 mt-3">
        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
      </div> */}

      <br />
      <div className="text-center  "><div><button className="formButton">ADD REQUEST</button></div></div>
    </form>
  </div>
</div>

    </section>



    </>
  )
}
