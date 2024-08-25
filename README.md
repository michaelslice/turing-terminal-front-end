# Turing-Terminal-Front-End

This is a React project that was initiated with [`npm create vite@latest`](https://vitejs.dev/guide/)

## Description

Turing-Terminal is a web-based financial terminal developed using React, TypeScript, Django, Python, PostgreSQL, Firebase, Docker, and SocketIO.

## Prerequisites

- Node.js: Ensure node.js is installed on your machine. [Download  here](https://nodejs.org/en/download/prebuilt-installer/current)
- A PostgreSQL account: This project used PostgreSQL for database management. An account can be through Postgres after downloading [here](https://www.postgresql.org/download/)
- Firebase Account: Firebase Authentication is used for authentication in this project. This can be done [here](https://firebase.google.com/)
- Docker Account: This project's frontend and backend are containerized using Docker. Setup [here](https://www.docker.com/products/docker-desktop/)

## Installation & Setup

1.  **Clone the repository**
   
```
git clone https://github.com/michaelslice/turing-terminal-front-end.git
cd turing-terminal-front-end/turing-terminal-front-end
```

2. **Start Front-End**
```
npm run dev
```

3. **Build Front-End**
```
npm run build
```

3. **Test on Docker**

```
docker build -t test .
docker run -dp 127.0.0.1.5173:5173 test
```
4. **Stop Docker Container**
```
docker ps
docker kill <CONTAINER ID>
```
### Alternatively, manually setup the project

1. Navigate to the project directory
   After cloning the repository, navigate to the project directory by executing <br>
   ```cd turing-terminal-front-end/src ```
2. Install the Dependencies
   The project dependencies can be installed by executing: <br>
   ```npm install```
3. Setup the Environment Variables
   The environment variables need to be set up next. Follow these steps: <br>
   - In the directory ```turing-terminal-front/turing-terminal-front-end/```
   - Access the ```.env``` file in your text editor.
   - Append the following lines to the file: <br>
   ```
   VITE_API_URL=<The Hosting URL>
   VITE_APIKEY=<Your Firebase API Key>
   VITE_AUTHDOMAIN=<Your Firebase project auth domain name>
   VITE_PROJECTID=<Your Firebase project name>
   VITE_STORAGEBUCKET=<Your Firebase project storage name>
   VITE_MESSAGINGSENDERID=<Your Firebase message sender ID>
   VITE_APPID=<Your Firebase app ID>
   ```
   - Replace the placeholders with your actual values. Here's how you can obtain each of these:
     - VITE_API_URL: This is the base URL of your application. During development, this is usually <br>
        ```http://127.0.0.1:8000/```
     - The rest of the above values are provided by Firebase. After creating an account and a new project, the ```VITE_APIKEY```, ```VITE_AUTHDOMAIN```, ```VITE_PROJECTID```, ```VITE_STORAGEBUCKET```, ```VITE_MESSAGINGSENDERID```, ```VITE_APPID```, can be found once you register an app and go to the Project Settings option. An example of the values you need in Firebase can seen below. <br>
     ![image](https://github.com/user-attachments/assets/87ddb90a-f163-4452-b675-b28a2c26d68d)
   - After obtaining these values, replace the placeholders in ```.env``` file with the actual values and save the file.
  
4. Build the app <br>
   The app may be built with: <br>
   ```npm run build```
5. Start the production server <br>
   The product server can be started by executing: <br>
   ```npm run dev``` <br>
   The project should now be running at ```http://localhost:5173/``` <br>

# Setting up The Backend

## Turing Terminal Functionality 
The Turing Terminal allows viewing company filings, holders, news, live market data, charts, user-created stock lists, account creation, account management, live chat rooms, company financials, company events, options chains, equity screening, initial public offerings, and world indices data. 

# Landing Page

## Login
At the top of the landing page, users can create accounts with Google or through email. <br>
![image](https://github.com/user-attachments/assets/31c437d5-62bd-46fa-8761-444520d61bd1) <br>
After clicking ```LOGIN``` <br>
![image](https://github.com/user-attachments/assets/229d6dec-9060-4673-8a3a-a234de965d11)<br>
Users are capable of creating accounts or logging in with Google, or email. After a successful login, the user will be navigated to the financial terminal.

## Launch Terminal 
![image](https://github.com/user-attachments/assets/88b82375-b927-4a3c-a28c-5bb3a49d4695)
After logging in the user is now able to access the terminal enabling functionality for using 16 API endpoints, and creating a custom environment designed for their own needs through resizable and draggable components.
## Accessing Components
Hovering your mouse over the text at the top will display the component name, and simply clicking on it will open it within the terminal.
![image](https://github.com/user-attachments/assets/d5f1b264-8a5b-4835-9480-8ee1370f654a)
![image](https://github.com/user-attachments/assets/8b06960f-7233-443f-90ad-24f177bb0980)

## Filings
To view a company's most recent SEC filings, enter the TICKER name, and either press ```Enter``` or click ```Search``` and the request will be made to the API endpoint ```http://127.0.0.1:8000/api/v1/filings/getfilings/```
![image](https://github.com/user-attachments/assets/006ebe63-03dd-4412-b5a9-784a25ac25d8)
An example query for NVDA's SEC filings.

## Holders
To view a company's largest holders access the ```HDS``` component, and enter in the TICKER name and either press ```Enter``` or click ```Search``` and the request will be made to the API endpoint ```http://127.0.0.1:8000/api/v1/holders/getholders/```
![image](https://github.com/user-attachments/assets/83bec1e8-ccb7-49c8-bd62-c344d5ddeeb7)
An example query for META's largest holders.

## News
To view a company's most recent news access the ```N``` component, enter in the TICKER name and either press ```Enter``` or click ```Search``` and the request will be made to the API endpoint ```http://127.0.0.1:8000/api/v1/news/getnews/```
![image](https://github.com/user-attachments/assets/ccf09864-6997-4c9e-aadf-a919da97eed6)
An example query for AMZN's most recent news.

## Focus 
To view a company's most recent price, day change, and day percent change access the ```FOCUS``` component, and enter in the TICKER name and press ```Enter``` and the request will be made to the API endpoint ```http://127.0.0.1:8000/api/v1/focus/ticker/```
![image](https://github.com/user-attachments/assets/dbe67c9e-ac4f-4d79-878c-d4971c3db976) <br>
An example query for AAPL's most recent price, day change, and day percent change. <br>

## Chart
To view a company's all-time chart access the ```Chart``` component, enter in the TICKER name and press ```Enter``` and the request will be made to the API endpoint ```http://127.0.0.1:8000/api/v1/chart/getdailydata/```
![image](https://github.com/user-attachments/assets/c2fa6899-8f75-4f84-8b4b-7369bcb77b6b) <br>
An example query for IBM's all-time stock chart.

## Bio
Users on Turing Terminal can uniquely identify themselves with a username, to do so navigate to the ```BIO``` component, enter your information, and click ```Next```, after doing so the data will be saved in PostgreSQL.
![image](https://github.com/user-attachments/assets/aa3472d2-b178-4dc5-9d91-8a02370ab452)

## Account Management
If you are logged in and have created your bio you can view your most recent settings by accessing the ```ACM``` component. <br>
![image](https://github.com/user-attachments/assets/efcb9c0d-898f-4a2d-b522-bd6a7e021a63)

## Description
To view a company's description access the ```DES``` component, enter in the TICKER name and press ```Enter``` and the request will be made to the API endpoint ```http://127.0.0.1:8000/api/v1/chart/getdailydata/```
![image](https://github.com/user-attachments/assets/a18fd96f-68d6-4e81-877f-2252b8e17eaa)

## Financials
To view a company's financial information for the balance sheet, cash flow statement, and income statement access the ```FA``` component, and enter the Ticker name, and click the option for the document type you would like, and a request will be made to one of the following API endpoints ```http://127.0.0.1:8000/api/v1/financials/getbalancesheet/```, ```http://127.0.0.1:8000/api/v1/financials/getcashflow/```, ```http://127.0.0.1:8000/api/v1/financials/getincomestatement/```
![image](https://github.com/user-attachments/assets/6009d10f-2ab2-4cc4-8350-c06f2544411d) <br>
An example query for IBM's annual cash flow statement data for the last 15 years.

## Company Events
To view a company's most recent company events access the ```EVT``` component, enter in the TICKER name, and press ```Enter``` and the request will be made to the API endpoint ```http://127.0.0.1:8000/api/v1/companyevents/get_company_events/```  
![image](https://github.com/user-attachments/assets/81887a2f-4e4c-4f2b-a8c3-a9282142e336) <br>
An example query for AVGO's most recent company events.

## Option Chain
To view a company's most recent company events access the ```OPT``` component, enter in the TICKER name click ```Enter``` and click the option for the document type you would like and a request will be made to one of the following API endpoints  ```http://127.0.0.1:8000/api/v1/optionchain/getoptionchain/```, ```http://127.0.0.1:8000/api/v1/optionchain/getcalls/```, ```http://127.0.0.1:8000/api/v1/optionchain/getputs/```
![image](https://github.com/user-attachments/assets/100f4c77-8259-4a54-9650-10609b09b29e) <br>
An example query for IBM's call option chain.

## Equity Screener

To screen companies in the S&P500 by market cap access the ```EQS``` component, and you will be prompted for an inequality, and a market cap value after entering in the following click query and a request will be made to the API endpoint ```http://127.0.0.1:8000/api/v1/equityscreener/screener/``` <br>
![image](https://github.com/user-attachments/assets/19e2d513-dcdc-40ad-b19d-dce1f5711691)
 <br>
An example query for companies with a market cap greater than a billion. 

## World Indices

To view data for the world indices, access the ```WI``` component, and click ```Refresh``` and a request will be made to the API endpoint ```http://127.0.0.1:8000/api/v1/worldindices/getworldindices/```
![image](https://github.com/user-attachments/assets/b871516a-da51-4bcc-b104-7856c7fb0e3e) <br>
An example query.


## Technologies Used

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/reference/react)
- [SocketIO](https://socket.io/)
- [ReactApexCharts](https://apexcharts.com/docs/react-charts/)
- [Firebase Authentication](https://firebase.google.com/docs/auth/)
- [Docker](https://www.docker.com/)
  
## References
- [React Documentation](https://react.dev/reference/react)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Firebase Authentication Documentation](https://firebase.google.com/docs/auth/web/google-signin)
- [Line Chart with Tooltip](https://observablehq.com/@d3/line-with-tooltip/2?intent=fork)
