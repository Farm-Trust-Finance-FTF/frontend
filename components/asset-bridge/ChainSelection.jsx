import { useState, useEffect } from "react";

import Dropdown, { Option } from "./Dropdown";
import { coinData } from "../../data/coinData";
import { walletData } from "../../data/walletData";

import axios from "axios";

import state from "../../store";

const ChainSelection = () => {
  const [conversionResult, setConversionResult] = useState();

  const swapClick = () => (state.success = true);
  const connectClick = () => setIsOpen(true);
  const [onClick, setOnclick] = useState(() => connectClick);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Connect your wallet");
  const [pay, setPay] = useState();
  const [selectedOptions, setSelectedOptions] = useState({
    fromPay: Option,
    payCoin: Option,
    fromReceive: Option,
    receiveCoin: Option,
  });

  useEffect(() => {
    const endpoint = "live";
    const accessKey = process.env.NEXT_PUBLIC_EXCHANGE_RATE_ACCESS_KEY;

    const fetchData = async () => {
      try {
        const receiveCoinCode = selectedOptions.receiveCoin?.tag;
        const payCoinCode = selectedOptions.payCoin?.tag;
        console.log(receiveCoinCode);
        console.log(payCoinCode);

        if (
          pay === undefined ||
          receiveCoinCode === undefined ||
          receiveCoinCode === null ||
          payCoinCode === undefined ||
          payCoinCode === null
        )
          return;
        const response = await axios.get(
          `http://api.coinlayer.com/api/${endpoint}?access_key=${accessKey}&from=${selectedOptions.payCoin?.tag}&to=${selectedOptions.receiveCoin?.tag}&amount=${pay}`
        );

        const exchangeRates = response.data.rates;
        let receiveRate;
        let payRate;
        let result;

        if (receiveCoinCode !== undefined && receiveCoinCode !== null) {
          receiveRate = exchangeRates?.[receiveCoinCode];
        }
        if (payCoinCode !== undefined && payCoinCode !== null) {
          payRate = exchangeRates?.[payCoinCode];
        }

        if (
          receiveRate !== undefined &&
          payRate !== undefined &&
          pay !== undefined
        ) {
          // Perform the conversion
          result = (payRate / receiveRate) * pay;

          // Update state with the result if needed
          setConversionResult(result);
        } else {
          console.error("Insufficient data for conversion");
        }
      } catch (error) {
        console.error("Error fetching conversion:", error);
      }
    };

    fetchData();
  }, [pay, selectedOptions]);

  const isButtonDisabled =
    !pay ||
    !selectedOptions.fromPay ||
    !selectedOptions.payCoin ||
    !selectedOptions.fromReceive ||
    !selectedOptions.receiveCoin;

  const connect = () => {
    setText("Swap coin");
    setIsOpen(false);

    setOnclick(() => swapClick);
    state.processing = true;
  };

  useEffect(() => {
    state.payCoin = selectedOptions.payCoin;
    state.receiveCoin = selectedOptions.receiveCoin;
  }, [selectedOptions]);

  return (
    <div className="relative">
      {isOpen && (
        <div className="overflow-hidden max-xl:h-full max-h-max z-50 flex justify-center h-screen pt-[140px] md:pt-[176px] pb-[80px] max-md:px-7 w-screen fixed top-0 left-0 bottom-0 bg-opacity-40 bg-[#171717]">
          <div className="bg-white w-full max-w-[631px] rounded-3xl overflow-scroll xl:overflow-hidden small h-full max-md:px-3 p-[56px] pt-[48px]">
            <div className="flex justify-end mb-8 sm:mb-2">
              <button onClick={() => setIsOpen(false)}>
                <img src="/icons/x.svg" alt="close icon" className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-[40px]">
              <div className="space-y-4">
                <h1 className="text-center text-gray-950 text-lg sm:text-[32px] font-medium leading-10">
                  Connect your wallet
                </h1>
                <p className="text-center text-gray-950 text-base font-normal leading-normal tracking-wide">
                  Connect your wallet to continue swapping your coin
                </p>
              </div>
              <div className="space-y-3 flex justify-center flex-col items-center">
                {walletData.map((item, index) => (
                  <button
                    key={index}
                    onClick={connect}
                    className="max-w-[325px] w-full py-3 rounded-lg border border-gray-400 justify-center items-center gap-2 inline-flex"
                  >
                    <img className="w-6 h-6" src={item.icon} />
                    <p className="text-gray-950 text-sm sm:text-base font-semibold leading-normal">
                      {item.name}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className={`relative overflow-hidden rounded-3xl lg:max-w-[631px] w-full p-6 sm:p-141 "bg-white"
        }`}
      >
        <div className=" relative z-40 space-y-4">
          <h2
            className={`text-center text-lg sm:text-[32px] font-medium sm:leading-10 text-gray-950`}
          >
            Swap your coin
          </h2>
          <p
            className={`text-center text-sm sm:text-base font-normal leading-normal tracking-wide text-gray-950`}
          >
            Fill out the transaction form to start swapping your coin
          </p>
        </div>
        <div className="space-y-6 relative z-40 mb-[48px] mt-8">
          <div className="flex sm:items-end max-md:flex-col gap-y-4 justify-start gap-x-4">
            <div className="space-y-2">
              <div
                className={`text-sm font-medium leading-tight text-gray-950`}
              >
                From
              </div>
              <div className="justify-start border rounded-lg border-gray-400 flex items-center">
                <Dropdown
                  options={coinData}
                  text="Select network"
                  onOptionSelect={(option) =>
                    setSelectedOptions({ ...selectedOptions, fromPay: option })
                  }
                />
              </div>
            </div>
            <div className="space-y-2 w-full">
              <div className="flex items-center justify-start rounded-lg border border-gray-400">
                <div className="border-r-gray-400 border-r flex-2">
                  <Dropdown
                    options={coinData}
                    text="Select token"
                    onOptionSelect={(option) => {
                      setSelectedOptions({
                        ...selectedOptions,
                        payCoin: option,
                      });
                    }}
                  />
                </div>
                <div className="w-full">
                  <input
                    type="number"
                    name="figure"
                    placeholder="Amount"
                    value={pay === undefined ? "" : pay.toString()}
                    onChange={(e) =>
                      setPay(
                        e.target.value !== ""
                          ? parseFloat(e.target.value)
                          : undefined
                      )
                    }
                    className={`p-[6px] w-full bg-transparent text-gray-950 focus-visible:outline-none`}
                    id="figure"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/icons/transfer.svg"
              alt="transfer icon"
              className="w-10 h-10"
            />
          </div>
          <div className="flex sm:items-end max-md:flex-col gap-y-4 justify-start gap-x-4">
            <div className="space-y-2">
              <div
                className={`text-sm font-medium leading-tight text-gray-950`}
              >
                To
              </div>
              <div className="justify-start border  rounded-lg border-gray-400 flex items-center">
                <Dropdown
                  options={coinData}
                  text="Select network"
                  onOptionSelect={(option) =>
                    setSelectedOptions({
                      ...selectedOptions,
                      fromReceive: option,
                    })
                  }
                />
              </div>
            </div>
            <div className="space-y-2 w-full">
              <div className="flex items-center justify-start rounded-lg border border-gray-400">
                <div className="border-r-gray-400 border-r flex-2">
                  <Dropdown
                    options={coinData}
                    text="Select token"
                    onOptionSelect={(option) => {
                      setSelectedOptions({
                        ...selectedOptions,
                        receiveCoin: option,
                      });
                    }}
                  />
                </div>
                <div className={`p-[6px] w-full bg-transparent text-gray-950`}>
                  {conversionResult}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative z-30 justify-center w-full">
          <button
            onClick={onClick}
            className={`max-w-[326px] py-[10px] px-[18px] rounded-lg w-full
            ${
              isButtonDisabled
                ? "bg-[#B0B2BA] text-[#545969]"
                : "bg-[#316721] border border-[#316721] text-white"
            }
          `}
            disabled={isButtonDisabled}
          >
            {text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChainSelection;
