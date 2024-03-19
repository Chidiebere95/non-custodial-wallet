import React, { useEffect } from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import '../../../assets/scss/modals.scss';
import eth from '../../../assets/images/eth_logo.png';
import lineaGoerli from '../../../assets/images/linea-logo-testnet.png';
import ModalWrapper from '../molecules/Modal';
import Button from '../molecules/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setNetwork as setNetworkRedux } from '../../../features/network/network_slice';
import {
  providerBaseGoerliUrl,
  providerOptimismGoerliUrl,
  providerEthereumMainnetUrl,
  providerPolygonMumbaiUrl,
  providerEthereumSepoliaUrl,
  providerBscMainnetUrl,
  providerBscTestnetUrl,
  providerPolygonMainnetUrl,
} from '../../../utils/providerUrls';
import { RootState } from '../../../store/store';
interface Iprops {
  // network: string;
  setNetwork: React.Dispatch<React.SetStateAction<string>>;
  closeModal: () => void;
}
const NetworksModal = ({ setNetwork, closeModal }: Iprops) => {
  const { networkDetails } = useSelector((state: RootState) => state.network);
  const dispatch = useDispatch<any>();
  useEffect(() => {}, [networkDetails]);

  const handleSetNetwork = (network: string) => {
    if (network === 'ethereum-mainnet') {
      dispatch(
        setNetworkRedux({
          name: network,
          title: 'Ethereum Mainnet',
          symbol: 'Eth',
          usdValue: 4000,
          providerURL: providerEthereumMainnetUrl,
          tokenContractAddresses: [],
        })
      );
    } else if (network === 'ethereum-sepolia') {
      dispatch(
        setNetworkRedux({
          name: network,
          title: 'Ethereum Sepolia',
          symbol: 'Ethereum Sepolia Eth',
          usdValue: 4000,
          providerURL: providerEthereumSepoliaUrl,
          tokenContractAddresses: [],
        })
      );
    } else if (network === 'bsc') {
      dispatch(
        setNetworkRedux({
          name: network,
          title: 'Binance Smart Chain',
          symbol: 'Bnb',
          usdValue: 541,
          providerURL: providerBscMainnetUrl,
          tokenContractAddresses: [],
        })
      );
    } else if (network === 'bsc-testnet') {
      dispatch(
        setNetworkRedux({
          name: network,
          title: 'Binance Smart Chain Testnet',
          symbol: 'Bnb',
          usdValue: 541,
          providerURL: providerBscTestnetUrl,
          tokenContractAddresses: [],
        })
      );
    } else if (network === 'polygon-mainnet') {
      dispatch(
        setNetworkRedux({
          name: network,
          title: 'Polygon Mainnet',
          symbol: 'Matic',
          usdValue: 1.2,
          providerURL: providerPolygonMainnetUrl,
          tokenContractAddresses: [],
        })
      );
    } else if (network === 'polygon-testnet') {
      dispatch(
        setNetworkRedux({
          name: network,
          title: 'Polygon Testnet',
          symbol: 'Matic Mumbai',
          usdValue: 1.2,
          providerURL: providerPolygonMumbaiUrl,
          tokenContractAddresses: [],
        })
      );
    } else if (network === 'base-goerli') {
      dispatch(
        setNetworkRedux({
          name: network,
          title: 'Base Goerli',
          symbol: 'Base Goerli Eth',
          usdValue: 0.0000001833,
          providerURL: providerBaseGoerliUrl,
          tokenContractAddresses: [],
        })
      );
    } else if (network === 'optimism-goerli') {
      dispatch(
        setNetworkRedux({
          name: network,
          title: 'Optimism Goerli',
          symbol: 'Optimism Goerli Eth',
          usdValue: 4.34,
          providerURL: providerOptimismGoerliUrl,
          tokenContractAddresses: [],
        })
      );
    }
    setNetwork(network);
    closeModal();
  };
  return (
    <div className='modal-content-wrapper networks-modal'>
      <div className='header'>
        <h5>Select a network</h5>
        <div className='close-modal center'>
          <LiaTimesSolid />
        </div>
      </div>
      <div className='body'>
        <div className='networks-wrapper'>
          <div
            className={`network ${
              networkDetails.name === 'ethereum-mainnet' && 'active'
            }`}
            onClick={() => handleSetNetwork('ethereum-mainnet')}
          >
            <div className='line'></div>
            <div className='wrapper'>
              <img src={eth} alt='network logo' className='' />
              <p>Ethereum Mainnet</p>
            </div>
          </div>
          <div
            className={`network ${networkDetails.name === 'bsc' && 'active'}`}
            onClick={() => handleSetNetwork('bsc')}
          >
            <div className='line'></div>
            <div className='wrapper'>
              <img src={eth} alt='network logo' className='' />
              <p>BNB Chain</p>
            </div>
          </div>
          <div
            className={`network ${
              networkDetails.name === 'polygon-mainnet' && 'active'
            }`}
            onClick={() => handleSetNetwork('polygon-mainnet')}
          >
            <div className='line'></div>
            <div className='wrapper'>
              <img src={eth} alt='network logo' className='' />
              <p>Polygon</p>
            </div>
          </div>
          {/* <div
            className={`network ${network === 'ethereum-goerli' && 'active'}`}
            onClick={() => handleSetNetwork('ethereum-goerli')}
          >
            <div className='line'></div>
            <div className='wrapper'>
              <img src={eth} alt='network logo' className='' />
              <p>Ethereum Goerli</p>
            </div>
          </div> */}
          <div
            className={`network ${
              networkDetails.name === 'ethereum-sepolia' && 'active'
            }`}
            onClick={() => handleSetNetwork('ethereum-sepolia')}
          >
            <div className='line'></div>
            <div className='wrapper'>
              <img src={lineaGoerli} alt='network logo' className='' />
              <p>Ethereum Sepolia</p>
            </div>
          </div>
          <div
            className={`network ${
              networkDetails.name === 'bsc-testnet' && 'active'
            }`}
            onClick={() => handleSetNetwork('bsc-testnet')}
          >
            <div className='line'></div>
            <div className='wrapper'>
              <img src={lineaGoerli} alt='network logo' className='' />
              <p>BNB Chain Testnet</p>
            </div>
          </div>
          <div
            className={`network ${
              networkDetails.name === 'polygon-testnet' && 'active'
            }`}
            onClick={() => handleSetNetwork('polygon-testnet')}
          >
            <div className='line'></div>
            <div className='wrapper'>
              <img src={lineaGoerli} alt='network logo' className='' />
              <p>Polygon Testnet</p>
            </div>
          </div>
          <div
            className={`network ${
              networkDetails.name === 'base-goerli' && 'active'
            }`}
            onClick={() => handleSetNetwork('base-goerli')}
          >
            <div className='line'></div>
            <div className='wrapper'>
              <img src={eth} alt='network logo' className='' />
              <p>Base Goerli</p>
            </div>
          </div>
          <div
            className={`network ${
              networkDetails.name === 'optimism-goerli' && 'active'
            }`}
            onClick={() => handleSetNetwork('optimism-goerli')}
          >
            <div className='line'></div>
            <div className='wrapper'>
              <img src={lineaGoerli} alt='network logo' className='' />
              <p>Optimism Goerli</p>
            </div>
          </div>
        </div>
        <div className='btn'>
          <Button
            text='Add network'
            width='100%'
            // onClick={() => setStep('2')}
            variant='secondary'
          />
        </div>
      </div>
    </div>
  );
};

export default NetworksModal;
