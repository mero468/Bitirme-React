import React from 'react';
import { NavBar } from '../../common/NavBar';
import "./create.css";
import { DragDropFile } from './DND/DragnDrop';

export const Create = () => {

  return (
    <>
    <NavBar/>
    <div class="create-title">👇 Create
                            your
                            first
                            event below 👇
        </div>
    <div className='center'>

        <div className='create-cont'>
            <form>
                <div class="form-group mb-4">
                    <input type="" class="form-control" id="exampleFormControlInput1" placeholder="title of your epic event goes here"/>
                </div>
                <div class="form-group">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='describe your event. Add time, Location and anything that might be helpful'></textarea>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-12'>
                    <DragDropFile/>
                    </div>
                    <div className='col-lg-6 col-12 mt-5'>
                        <div class="form-group mb-2">
                            <label for="">Number of tickets</label>
                            <input type="" class="form-control" id="" placeholder="10"/>
                            <label for="">How many tickets you want for your event?</label>
                        </div>
                        <div class="form-group mb-2">
                            <label for="">Duration</label>
                            <input type="" class="form-control" id="" placeholder="2"/>
                            <label for="">How many hours this rager is going on?</label>
                        </div>
                        <div class="form-group mb-2">
                            <label for="">Price</label>
                            <input type="" class="form-control" id="" placeholder="0"/>
                            <label for="">How much does a single ticket costs? (in $MATIC)</label>
                        </div>
                    </div>
                    <div class="form-group mt-4 mb-2">
                            <label for="">Email</label>
                            <input type="" class="form-control" id="" placeholder="example@email.com"/>
                    </div>
                </div>
            </form>
        </div>
    </div>

    </>

  )
}
