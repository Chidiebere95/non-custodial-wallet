import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { LiaTimesSolid } from 'react-icons/lia';
import '../../../assets/scss/modals.scss';
import accountDefault from '../../../assets/images/account-default.png';
import lineaGoerli from '../../../assets/images/linea-logo-testnet.png';
import ModalWrapper from '../molecules/Modal';
import Button from '../molecules/Button';
import { RiMore2Line } from 'react-icons/ri';
import { IoMdMore } from 'react-icons/io';
interface Iprops {
  closeModal: () => void;
  onClickBtn: () => void;
  accounts: {
    name: string;
    address: string;
  }[];
  setAccounts: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        address: string;
      }[]
    >
  >;
  providerMain: any;
  network: string;
}
const AccountsModal = ({
  closeModal,
  onClickBtn,
  accounts,
  setAccounts,
  providerMain,
  network,
}: Iprops) => {
  const [accountsUpdated, setAccountsUpdated] = useState<
    {
      name: string;
      address: string;
      balance: string | number;
      symbol: string;
    }[]
  >([]);

  const getBalance = async (account: { name: string; address: string }) => {
    let symbol;
    if (network === 'ethereum-mainnet') {
      symbol = 'ETH';
    } else if (network === 'ethereum-goerli') {
      symbol = 'Goerli ETH';
    } else if (network === 'base-goerli') {
      symbol = 'Goerli BASE';
    } else if (network === 'optimism-goerli') {
      symbol = 'Goerli OPT';
    } else if (network === 'polygon-mumbai') {
      symbol = 'mumbai MATIC';
    } else {
      symbol = '';
    }

    try {
      let balance = await providerMain.getBalance(account.address);
      balance = ethers.utils.formatEther(balance);
      const accountTemp = { ...account, balance, symbol };
      setAccountsUpdated([...accountsUpdated, accountTemp]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('accounts', accounts);

    accounts.forEach((account) => {
      getBalance(account);
    });
  }, []);
  console.log('accountsUpdated', accountsUpdated);

  return (
    <div className='modal-content-wrapper accounts-modal'>
      <div className='header'>
        <h5>Select an account</h5>
        <div className='close-modal center'>
          <LiaTimesSolid />
        </div>
      </div>
      <div className='body'>
        <div className='accounts-wrapper'>
          {accountsUpdated.map((account) => (
            <div
              className={`account ${
                'ethereum-mainnet' === 'ethereum-mainnet' && 'active'
              }`}
              onClick={() => {
                closeModal();
              }}
            >
              <div className='line'></div>
              <div className='wrapper'>
                <div className='details'>
                  <img src={accountDefault} alt='network logo' className='' />
                  <div className='info'>
                    <p>{account.name}</p>
                    {/* <p>{account.address}</p> */}
                    <p>
                      {`${account.address.substring(
                        0,
                        6
                      )}...${account.address.substring(35)}`}
                    </p>
                  </div>
                </div>
                <div className='details details-2'>
                  <div className='info'>
                    <p>{`${account.balance} ${account.symbol}`}</p>
                    <p>{`${account.balance} ${account.symbol}`}</p>
                  </div>
                  <IoMdMore className='icon' />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='btn'>
          <Button
            text='Add Account or hardware wallet'
            width='100%'
            onClick={onClickBtn}
            variant='secondary'
          />
        </div>
      </div>
    </div>
  );
};

export default AccountsModal;
