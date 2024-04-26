import { ConnectWallet } from '@thirdweb-dev/react'
import { useRef, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Test from './Test'
import ClaimNft from './pages/ClaimNft'
import Home from './pages/Home'
import MarketPlace from './pages/MarketPlace'
import TransferToken from './pages/TransferToken'
function App() {
  const [isSelected, setIsSelected] = useState(true)
  const [contractAddress, setContractAddress] = useState('')
  const refInput1 = useRef()

  function handleSearch(e) {
    e.preventDefault()
    let selected = document.getElementById('selected')
    setIsSelected(selected.value == 'owner' ? true : false)
    setContractAddress(refInput1.current.value)
    refInput1.current.value = ''
  }
  return (
    <div className="App bg-success-subtle h pb-5">
      <Test />
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3" to="/">
            HOME
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link
                  className=" active nav-link fs-5"
                  aria-current="page"
                  to="/claim"
                >
                  Claim NFT
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className=" active nav-link fs-5"
                  aria-current="page"
                  to="/marketplace"
                >
                  Market
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className=" active nav-link fs-5"
                  aria-current="page"
                  to="/transfertoken"
                >
                  Transfer
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <select className="form-select" id="selected">
              <option value={'owner'}>Owner</option>
              <option value={'all'}>All</option>
            </select>
          </div>
          <form className="d-flex col-5">
            <input
              className="form-control mx-2"
              type="text"
              placeholder="Enter your wallet address..."
              aria-label="Search"
              ref={refInput1}
            />
            <button
              onClick={handleSearch}
              className="btn btn-danger mx-2"
              type="submit"
            >
              Search
            </button>
          </form>
          <div>
            <ConnectWallet />
          </div>
        </div>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Home contractAddress={contractAddress} isSelected={isSelected} />
          }
        />
        <Route path="/claim" element={<ClaimNft />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/transfertoken" element={<TransferToken />} />
      </Routes>
    </div>
  )
}

export default App
