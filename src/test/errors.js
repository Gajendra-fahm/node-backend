import React, { useState } from 'react';
import { Box } from '@mui/material';
import Textarea from 'react-textarea-autosize';
import Navbar from './Navbar'; // Assuming Navbar is another component

const AddClient = ({ activetab }) => {
  const [clientName, setClientName] = useState('');
  const [industry, setIndustry] = useState('');
  const [clientPlatform, setClientPlatform] = useState('');
  const [ats, setAts] = useState('');
  const [dailyResumeLimit, setDailyResumeLimit] = useState('');
  const [totalResumeLimit, setTotalResumeLimit] = useState('');
  const [basePrompt, setBasePrompt] = useState('');
  const [customPrompt, setCustomPrompt] = useState('');
  const [deAndI, setDeAndI] = useState(false);
  const [autoAtsSync, setAutoAtsSync] = useState(false);
  const [standardization, setStandardization] = useState(false);
  const [active, setActive] = useState(false);
  const [errors, setErrors] = useState({});

  const handleIndustryChange = (e) => setIndustry(e.target.value);

  const handleSave = () => {
    const newErrors = {};

    if (clientName.trim() === '') {
      newErrors.clientName = 'Client name is required.';
    }
    if (industry.trim() === '') {
      newErrors.industry = 'Industry is required.';
    }
    if (clientPlatform.trim() === '') {
      newErrors.clientPlatform = 'Client platform is required.';
    }
    if (dailyResumeLimit.trim() === '') {
      newErrors.dailyResumeLimit = 'Daily resume limit is required.';
    }
    if (totalResumeLimit.trim() === '') {
      newErrors.totalResumeLimit = 'Total resume limit is required.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Handle save logic here
    }
  };

  return (
    <Box className="flex overflow-auto xl:overflow-hidden">
      <Navbar data={activetab} />
      <Box component="main" className="px-6 pt-6" sx={{ flexGrow: 1, width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="head-title">
            <p className="pro">Add New Client </p>
          </div>
          <div
            style={{
              maxWidth: "78vm",
              height: "683px",
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              boxShadow: "0px 0px 20px #5B93ED33",
              borderRadius: "5px",
              opacity: 1,
              padding: "10px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                padding: "6px",
                gap: "50px",
              }}
            >
              <div style={{ flex: "1px", width: "100%" }}>
                <p
                  style={{
                    height: "18px",
                    textAlign: "left",
                    font: "normal normal medium 15px/23px Rubik",
                    letterSpacing: "0px",
                    textTransform: "uppercase",
                    opacity: 1,
                  }}
                >
                  CLIENT NAME
                  <span style={{ color: "red", marginLeft: "5px" }}>
                    *
                  </span>
                </p>
                <input
                  placeholder="Enter Client Name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  style={{
                    display: "block",
                    width: "98%",
                    height: "40px",
                    border: "1px solid #708EA4",
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    borderRadius: "5px",
                    opacity: 1,
                    padding: "7px",
                    marginTop: "10px",
                  }}
                />
                {errors.clientName && (
                  <p style={{ color: 'red', marginTop: '5px' }}>{errors.clientName}</p>
                )}
              </div>

              <div style={{ flex: "1px", width: "100%" }}>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "18px",
                    textAlign: "left",
                    font: "normal normal medium 15px/23px Rubik",
                    letterSpacing: "0px",
                    textTransform: "uppercase",
                    opacity: 1,
                  }}
                >
                  INDUSTRY
                  <span style={{ color: "red", marginLeft: "5px" }}>
                    *
                  </span>
                </p>
                <select
                  id="industry"
                  value={industry}
                  onChange={handleIndustryChange}
                  style={{
                    display: "block",
                    width: "98%",
                    height: "40px",
                    border: "1px solid #708EA4",
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    borderRadius: "5px",
                    opacity: 1,
                    padding: "7px",
                    marginTop: "10px",
                    textAlign: "left",
                  }}
                >
                  <option value="">Select Industry</option>
                  <option value="US" id="1">United States</option>
                  <option value="CA" id="2">Canada</option>
                  <option value="FR" id="3">France</option>
                  <option value="DE" id="4">Germany</option>
                </select>
                {errors.industry && (
                  <p style={{ color: 'red', marginTop: '5px' }}>{errors.industry}</p>
                )}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                padding: "6px",
                gap: "50px",
              }}
            >
              <div style={{ flex: "1px", width: "100%" }}>
                <p
                  style={{
                    display: "flex",
                    height: "18px",
                    textAlign: "left",
                    font: "normal normal medium 15px/23px Rubik",
                    letterSpacing: "0px",
                    textTransform: "uppercase",
                    color: "#1F2E39",
                  }}
                >
                  CLIENT PLATFORM
                  <span style={{ color: "red", marginLeft: "5px" }}>
                    *
                  </span>
                </p>
                <input
                  placeholder="Client Platform"
                  value={clientPlatform}
                  onChange={(e) => setClientPlatform(e.target.value)}
                  style={{
                    display: "block",
                    width: "98%",
                    height: "40px",
                    border: "1px solid #708EA4",
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    borderRadius: "5px",
                    opacity: 1,
                    padding: "7px",
                    marginTop: "10px",
                  }}
                />
                {errors.clientPlatform && (
                  <p style={{ color: 'red', marginTop: '5px' }}>{errors.clientPlatform}</p>
                )}
              </div>
              <div style={{ flex: "1px", width: "100%" }}>
                <p
                  style={{
                    height: "18px",
                    textAlign: "left",
                    font: "normal normal medium 15px/23px Rubik",
                    letterSpacing: "0px",
                    textTransform: "uppercase",
                    color: "#1F2E39",
                    opacity: 1,
                  }}
                >
                  ATS
                </p>
                <select
                  id="ats"
                  value={ats}
                  onChange={(e) => setAts(e.target.value)}
                  style={{
                    display: "block",
                    width: "98%",
                    height: "40px",
                    border: "1px solid #708EA4",
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    borderRadius: "5px",
                    opacity: 1,
                    padding: "7px",
                    marginTop: "10px",
                    textAlign: "left",
                  }}
                >
                  <option selected>Select ATS</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                padding: "6px",
                gap: "50px",
              }}
            >
              <div style={{ flex: "1px", width: "100%" }}>
                <p
                  style={{
                    alignItems: "center",
                    height: "18px",
                    textAlign: "left",
                    font: "normal normal medium 15px/23px Rubik",
                    letterSpacing: "0px",
                    textTransform: "uppercase",
                    color: "#1F2E39",
                    opacity: 1,
                  }}
                >
                  DAILY RESUME LIMIT
                  <span style={{ color: "red", marginLeft: "5px" }}>
                    *
                  </span>
                </p>
                <input
                  placeholder="Enter Daily Limit for Resume"
                  value={dailyResumeLimit}
                  onChange={(e) => setDailyResumeLimit(e.target.value)}
                  style={{
                    display: "block",
                    width: "98%",
                    height: "40px",
                    border: "1px solid #708EA4",
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    borderRadius: "5px",
                    opacity: 1,
                    padding: "7px",
                    marginTop: "10px",
                    textAlign: "left",
                  }}
                />
                {errors.dailyResumeLimit && (
                  <p style={{ color: 'red', marginTop: '5px' }}>{errors.dailyResumeLimit}</p>
                )}
              </div>

              <div style={{ flex: "1px", width: "100%" }}>
                <p
                  style={{
                    height: "18px",
                    textAlign: "left",
                    font: "normal normal medium 15px/23px Rubik",
                    letterSpacing: "0px",
                    textTransform: "uppercase",
                    opacity: 1,
                  }}
                >
                  TOTAL RESUME LIMIT
                  <span style={{ color: "red", marginLeft: "5px" }}>
                    *
                  </span>
                </p>
                <input
                  placeholder="Enter Total Limit for Resume"
                  value={totalResumeLimit}
                  onChange={(e) => setTotalResumeLimit(e.target.value)}
                  style={{
                    display: "block",
                    width: "98%",
                    height: "40px",
                    border: "1px solid #708EA4",
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    borderRadius: "5px",
                    opacity: 1,
                    padding: "7px",
                    marginTop: "10px",
                    textAlign: "left",
                  }}
                />
                {errors.totalResumeLimit && (
                  <p style={{ color: 'red', marginTop: '5px' }}>{errors.totalResumeLimit}</p>
                )}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                padding: "6px",
              }}
            >
              <div style={{ flex: "1px", width: "100%" }}>
                <p
                  style={{
                    height: "18px",
                    textAlign: "left",
                    font: "normal normal medium 15px/23px Rubik",
                    letterSpacing: "0px",
                    color: "#1F2E39",
                    textTransform: "uppercase",
                    opacity: 1,
                  }}
                >
                  BASE PROMPT
                </p>
                <Textarea
                  placeholder="Enter Base Prompt"
                  name="basePrompt"
                  value={basePrompt}
                  onChange={(e) => setBasePrompt(e.target.value)}
                  style={{
                    width: "99%",
                    height: "80px",
                    border: "1px solid #708EA4",
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    borderRadius: "5px",
                    opacity: 1,
                    padding: "7px",
                    marginTop: "10px",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                padding: "6px",
              }}
            >
              <div style={{ flex: "1px", width: "100%" }}>
                <p
                  style={{
                    height: "18px",
                    textAlign: "left",
                    font: "normal normal medium 15px/23px Rubik",
                    letterSpacing: "0px",
                    color: "#1F2E39",
                    textTransform: "uppercase",
                    opacity: 1,
                  }}
                >
                  CUSTOM PROMPT
                </p>
                <Textarea
                  placeholder="Enter Custom Prompt"
                  name="customPrompt"
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  style={{
                    width: "99%",
                    height: "80px",
                    border: "1px solid #708EA4",
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    borderRadius: "5px",
                    opacity: 1,
                    padding: "7px",
                    marginTop: "10px",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                flex: "1px",
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                padding: "6px",
              }}
            >
              <div>
                <p style={{ marginTop: "10px" }}>
                  <text
                    style={{
                      color: "#1F2E39",
                      font: "normal normal medium 15px/23px Rubik",
                      fontWeight: "600",
                      fontSize: "15px",
                      marginRight: "90px",
                    }}
                  >
                    D, E & I
                  </text>
                </p>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={deAndI}
                    onChange={(e) => setDeAndI(e.target.checked)}
                  />
                  <span className="slider round"></span>
                </label>
              </div>

              <div>
                <p style={{ marginTop: "10px" }}>
                  <text
                    style={{
                      color: "#1F2E39",
                      font: "normal normal medium 15px/23px Rubik",
                      fontWeight: "600",
                      fontSize: "15px",
                      marginRight: "90px",
                    }}
                  >
                    AUTO ATS SYNC
                  </text>
                </p>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={autoAtsSync}
                    onChange={(e) => setAutoAtsSync(e.target.checked)}
                  />
                  <span className="slider round"></span>
                </label>
              </div>

              <div>
                <p style={{ marginTop: "10px" }}>
                  <text
                    style={{
                      color: "#1F2E39",
                      font: "normal normal medium 15px/23px Rubik",
                      fontWeight: "600",
                      fontSize: "15px",
                      marginRight: "90px",
                    }}
                  >
                    STANDARDIZATION
                  </text>
                </p>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={standardization}
                    onChange={(e) => setStandardization(e.target.checked)}
                  />
                  <span className="slider round"></span>
                </label>
              </div>

              <div>
                <p style={{ marginTop: "10px" }}>
                  <text
                    style={{
                      color: "#1F2E39",
                      font: "normal normal medium 15px/23px Rubik",
                      fontWeight: "600",
                      fontSize: "15px",
                      marginRight: "90px",
                    }}
                  >
                    Active
                  </text>
                </p>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={active}
                    onChange={(e) => setActive(e.target.checked)}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className="mb-2 mt-4 flex p-2">
              <button
                className="Add-Client"
                onClick={handleSave}
                style={{
                  top: "725px",
                  left: "300px",
                  width: "150px",
                  height: "40px",
                  background: "#21D6AA 0% 0% no-repeat padding-box",
                  borderRadius: "5px",
                  opacity: 1,
                }}
              >
                Save
              </button>

              <button
                className="discard"
                style={{
                  top: "736px",
                  left: "480px",
                  marginLeft: "44px",
                  marginTop: "3px",
                  width: "66px",
                  height: "18px",
                  textAlign: "left",
                  font: "normal normal medium 15px/23px Rubik",
                  letterSpacing: "0px",
                  color: "#E77388",
                  textTransform: "uppercase",
                  opacity: 1,
                }}
              >
                DISCARD
              </button>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default AddClient;