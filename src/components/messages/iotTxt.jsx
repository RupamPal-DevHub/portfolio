"use client";

const IotTxt = ({ curFol, formData }) => {
  return (
    <div key="error" className="font-bold mb-2 text-sm md:text-sm lg:text-base">
      <p className="text-green-400">
        rupam@terminal :&nbsp;~{curFol}&nbsp;
        <span className="text-white">$</span> &nbsp;
        <span className="text-white font-normal">{formData}</span>
      </p>
      <p>
        <br />
        +++++++++++++++++++++++++++++ <br />
        IoT in Soil Erosion Monitoring Project <br />
        <br />
        +++++++++++++++++++++++++++++ <br />
        <br />
        ## Overview ##
        <br />
        <span className="font-normal">
          This project addresses the issue of soil erosion in agricultural
          lands, especially rice fields, by utilizing IoT technology. It
          collects data such as soil moisture, turbidity (water clarity), and
          rainfall to detect early signs of erosion and provides timely alerts
          to farmers.{" "}
        </span>
        <br />
        <br />
        ## Key Components ##
        <br />
        # ESP32 Microcontroller -<br />
        <span className="font-normal">
          &nbsp;&nbsp;+ Acts as the central unit to process data from sensors.{" "}
          <br />
          &nbsp;&nbsp;+ Facilitates wireless communication for data
          transmission.{" "}
        </span>
        <br />
        # Sensors <br />
        <span className="font-normal">
          &nbsp;&nbsp;+ Soil Moisture Sensor: Measures the moisture content in
          the soil to assess irrigation levels and erosion risks. <br />
          &nbsp;&nbsp;+ Turbidity Sensor: Analyzes water quality, detecting
          increased sediment levels indicative of soil erosion. <br />
          &nbsp;&nbsp;+ Rain Sensor: Detects rainfall, which can lead to surface
          runoff and soil displacement.
        </span>
        <br />
        # Blynk Platform <br />
        <span className="font-normal">
          &nbsp;&nbsp;+ Used for the backend, providing a user-friendly
          interface for farmers to monitor real-time data. <br />
          &nbsp;&nbsp;+ Sends notifications via email when specific thresholds
          (indicating erosion) are breached.
        </span>
        <br />
        <br />
        ## Functionality ##
        <br />
        # Real-Time Monitoring: <br />
        <span className="font-normal">
          &nbsp;&nbsp;+ Data from sensors are collected and processed by the
          ESP32, then displayed on the Blynk app for easy access by farmers.{" "}
        </span>
        <br />
        # Alert System: <br />
        <span className="font-normal">
          &nbsp;&nbsp;+ If the turbidity sensor detects muddy water or if soil
          moisture drops below a critical level, an email alert is sent to
          farmers. <br />
          &nbsp;&nbsp;+ Alerts are also sent during heavy rainfall to warn about
          potential erosion risks. <br />
        </span>
        # Environmental Tracking: <br />
        <span className="font-normal">
          &nbsp;&nbsp;+ Monitors weather conditions and environmental factors to
          help farmers plan irrigation and mitigate erosion proactively.{" "}
        </span>
        <br />
        <br />
        ## Project Benefits ##
        <br />
        <span className="font-normal">
          &nbsp;&nbsp;+ Cost-Effective Solution: Uses affordable sensors and
          components to make it accessible to small-scale farmers. <br />
          &nbsp;&nbsp;+ Early Warning System: Reduces the impact of soil erosion
          on crop yield by providing actionable alerts. <br />
          &nbsp;&nbsp;+ Data-Driven Decisions: Helps farmers optimize irrigation
          and land management based on sensor readings. <br />
          &nbsp;&nbsp;+ Sustainability: Promotes better soil and water
          conservation practices.{" "}
        </span>
        <br />
        <br />
        ## Technology Stack ## <br />
        <span className="font-normal">
          &nbsp;&nbsp;+ Hardware: ESP32, Soil Moisture Sensor, Turbidity Sensor,
          Rain Sensor. <br />
          &nbsp;&nbsp;+ Software: Arduino IDE for programming, Blynk platform
          for backend monitoring and alerts.{" "}
        </span>
        <br />
        <br />
        ## Impact ##
        <br />
        <span className="font-normal">
          This IoT-based solution empowers farmers by giving them real-time
          insights and early warnings about soil erosion. It helps reduce crop
          losses and promotes sustainable farming practices by leveraging
          technology for agricultural development.{" "}
        </span>
        <br />
      </p>
    </div>
  );
};

export default IotTxt;
