import React from 'react';
import { NavBar } from '../../common/NavBar';
import "./create.css";
import { DragDropFile } from './DND/DragnDrop';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';


export const Create = () => {

    const [haveMetamask, sethaveMetamask] = useState(true);
    const [accountAddress, setAccountAddress] = useState('');
    const [accountBalance, setAccountBalance] = useState('');
    const [isConnected, setIsConnected] = useState(false);

    const { ethereum } = window;
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    useEffect(() => {
        const { ethereum } = window;
        const checkMetamaskAvailability = async () => {
          if (!ethereum) {
            sethaveMetamask(false);
          }
          sethaveMetamask(true);
        };
        checkMetamaskAvailability();
      }, []);

    const connectWallet = async () => {
        try {
          if (!ethereum) {
            sethaveMetamask(false);
          }
          const accounts = await ethereum.request({
            method: 'eth_requestAccounts',
          });
          let balance = await provider.getBalance(accounts[0]);
          let bal = ethers.utils.formatEther(balance);
          setAccountAddress(accounts[0]);
          setAccountBalance(bal);
          setIsConnected(true);
        } catch (error) {
          setIsConnected(false);
        }
    };


    return (
        <>
        <NavBar/>
        <div class="create-title">
            👇 Create your first event below 👇
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
        <div className="App">
      <header className="App-header">
        {haveMetamask ? (
          <div className="App-header">
            {isConnected ? (
              <div className="card">
                <div className="card-row">
                  <h3>Wallet Address:</h3>
                  <p>
                    {accountAddress.slice(0, 4)}...
                    {accountAddress.slice(38, 42)}
                  </p>
                </div>
                <div className="card-row">
                  <h3>Wallet Balance:</h3>
                  <p>{accountBalance}</p>
                </div>
              </div>
            ) : 
            <>
            </>}
            {isConnected ? (
              <p className="info">🎉 Connected Successfully</p>
            ) : (
              <button className="btn" onClick={connectWallet}>
                Connect
              </button>
            )}
          </div>
        ) : (
          <p>Please Install MataMask</p>
        )}
      </header>
    </div>
        

        </>

    )
}
