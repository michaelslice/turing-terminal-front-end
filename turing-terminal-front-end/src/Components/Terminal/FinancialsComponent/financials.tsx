import { useState } from "react";
import useDragger from "../DraggerComponent/dragger";
import api from "../../../../api";
import { cashFlowInterface } from "./interfaces";
import { balanceSheetInterface } from "./interfaces";
import { incomeStatementInterface } from "./interfaces";
import "./financials.css"

function Financials({setOpenFinancials}: any) {
    
    useDragger("financials-box");
    
    const closeOpenFinancials = () => {
        setOpenFinancials(false);
    }

    const [display, setDisplay] = useState<any>()
    const renderDisplay = (event: React.MouseEvent) => {

        switch(event.currentTarget.id) {
            case "balanceSheet":
                getBalanceSheet();    
                return setDisplay("balanceSheet");
            case "incomeStatement":
                getIncomeStatement();
                return setDisplay("incomeStatement");
            case "cashFlow":
                getCashFlow();
                return setDisplay("cashFlow");
            case "quarterly":
                return setDisplay("quarterly");
            case "yearly":
                return setDisplay("yearly");
        }
    };
    
    const [ticker, setTicker] = useState('');
    const [balanceSheetData, setBalanceSheetData] = useState<any[]>([]);
    const [cashFlowData, setCashFlowData] = useState<any[]>([]);
    const [incomeStatementData, setIncomeStatementData] = useState<any[]>([]);

    const getBalanceSheet = async () => {
        try {
            const response = await api.get("http://127.0.0.1:8000/api/v1/financials/getbalancesheet/", {
                params: { ticker: ticker }
            });

            const data = response.data;
            const dataArray = data.map((item: balanceSheetInterface) =>({
                fiscalDateEnding: item.fiscalDateEnding,
                reportedCurrency: item.reportedCurrency,
                totalAssets: item.totalAssets,
                totalCurrentAssets: item.totalCurrentAssets,
                cashAndCashEquivalentsAtCarryingValue: item.cashAndCashEquivalentsAtCarryingValue,
                cashAndShortTermInvestments: item.cashAndShortTermInvestments,
                inventory: item.inventory,
                currentNetReceivables: item.currentNetReceivables,
                totalNonCurrentAssets: item.totalNonCurrentAssets,
                propertyPlantEquipment: item.propertyPlantEquipment,
                accumulatedDepreciationAmortizationPPE: item.accumulatedDepreciationAmortizationPPE,
                intangibleAssets: item.intangibleAssets,
                intangibleAssetsExcludingGoodwill: item.intangibleAssetsExcludingGoodwill,
                goodwill: item.goodwill,
                investments: item.investments,
                longTermInvestments: item.longTermInvestments,
                shortTermInvestments: item.shortTermInvestments,
                otherCurrentAssets: item.otherCurrentAssets,
                otherNonCurrentAssets: item.otherNonCurrentAssets,
                totalLiabilities: item.totalLiabilities,
                totalCurrentLiabilities: item.totalCurrentLiabilities,
                currentAccountsPayable: item.currentAccountsPayable,
                deferredRevenue: item.deferredRevenue,
                currentDebt: item.currentDebt,
                shortTermDebt: item.shortTermDebt,
                totalNonCurrentLiabilities: item.totalNonCurrentLiabilities,
                capitalLeaseObligations: item.capitalLeaseObligations,
                longTermDebt: item.longTermDebt,
                currentLongTermDebt: item.currentLongTermDebt,
                longTermDebtNoncurrent: item.longTermDebtNoncurrent,
                shortLongTermDebtTotal: item.shortLongTermDebtTotal,
                otherCurrentLiabilities: item.otherCurrentLiabilities,
                otherNonCurrentLiabilities: item.otherNonCurrentLiabilities,
                totalShareholderEquity: item.totalShareholderEquity,
                treasuryStock: item.treasuryStock,
                retainedEarnings: item.retainedEarnings,
                commonStock: item.commonStock,
                commonStockSharesOutstanding: item.commonStockSharesOutstanding,
            }));

            setBalanceSheetData(dataArray);

        } catch (error) {
            console.log(error);
        }
    }

    const getCashFlow = async () => {
        try {
            const response = await api.get("http://127.0.0.1:8000/api/v1/financials/getcashflow/", {
                params: { ticker: ticker }
            });

            const data = response.data;
            const dataArray = data.map((item: cashFlowInterface) =>({
                fiscalDateEnding: item.fiscalDateEnding,
                reportedCurrency: item.reportedCurrency,
                operatingCashflow: item.operatingCashflow,
                paymentsForOperatingActivities: item.paymentsForOperatingActivities,
                proceedsFromOperatingActivities: item.proceedsFromOperatingActivities,
                changeInOperatingLiabilities: item.changeInOperatingLiabilities,
                changeInOperatingAssets: item.changeInOperatingAssets,
                depreciationDepletionAndAmortization: item.depreciationDepletionAndAmortization,
                capitalExpenditures: item.capitalExpenditures,
                changeInReceivables: item.changeInReceivables,
                changeInInventory: item.changeInInventory,
                profitLoss: item.profitLoss,
                cashflowFromInvestment: item.cashflowFromInvestment,
                cashflowFromFinancing: item.cashflowFromFinancing,
                proceedsFromRepaymentsOfShortTermDebt: item.proceedsFromRepaymentsOfShortTermDebt,
                paymentsForRepurchaseOfCommonStock: item.paymentsForRepurchaseOfCommonStock,
                paymentsForRepurchaseOfEquity: item.paymentsForRepurchaseOfEquity,
                paymentsForRepurchaseOfPreferredStock: item.paymentsForRepurchaseOfPreferredStock,
                dividendPayout: item.dividendPayout,
                dividendPayoutCommonStock: item.dividendPayoutCommonStock,
                dividendPayoutPreferredStock: item.dividendPayoutPreferredStock,
                proceedsFromIssuanceOfCommonStock: item.proceedsFromIssuanceOfCommonStock,
                proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet: item.proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet,
                proceedsFromIssuanceOfPreferredStock: item.proceedsFromIssuanceOfPreferredStock,
                proceedsFromRepurchaseOfEquity: item.proceedsFromRepurchaseOfEquity,
                proceedsFromSaleOfTreasuryStock: item.proceedsFromSaleOfTreasuryStock,
                changeInCashAndCashEquivalents: item.changeInCashAndCashEquivalents,
                changeInExchangeRate: item.changeInExchangeRate,
                netIncome: item.netIncome,
            }));

            setCashFlowData(dataArray);

        } catch (error) {
            console.log(error);
        }
    }

    const getIncomeStatement = async () => {
        try {
            const response = await api.get("http://127.0.0.1:8000/api/v1/financials/getincomestatement/", {
                params: { ticker: ticker }
            });

            const data = response.data;
            const dataArray = data.map((item: incomeStatementInterface) =>({
                fiscalDateEnding: item.fiscalDateEnding,
                reportedCurrency: item.reportedCurrency,
                grossProfit: item.grossProfit,
                totalRevenue: item.totalRevenue,
                costOfRevenue: item.costOfRevenue,
                costOfGoodsAndServicesSold: item.costOfGoodsAndServicesSold,
                operatingIncome: item.operatingIncome,
                sellingGeneralAndAdministrative: item.sellingGeneralAndAdministrative,
                researchAndDevelopment: item.researchAndDevelopment,
                operatingExpenses: item.operatingExpenses,
                investmentIncomeNet: item.investmentIncomeNet,
                netInterestIncome: item.netInterestIncome,
                interestIncome: item.interestIncome,
                interestExpense: item.interestExpense,
                nonInterestIncome: item.nonInterestIncome,
                otherNonOperatingIncome: item.otherNonOperatingIncome,
                depreciation: item.depreciation,
                depreciationAndAmortization: item.depreciationAndAmortization,
                incomeBeforeTax: item.incomeBeforeTax,
                incomeTaxExpense: item.incomeTaxExpense,
                interestAndDebtExpense: item.interestAndDebtExpense,
                netIncomeFromContinuingOperations: item.netIncomeFromContinuingOperations,
                comprehensiveIncomeNetOfTax: item.comprehensiveIncomeNetOfTax,
                ebit: item.ebit,
                ebitda: item.ebitda,
                netIncome: item.netIncome,
            }));

            setIncomeStatementData(dataArray);

        } catch (error) {
            console.log(error);
        }
    };
    return(
        <div id="financials-box" className="box">
            <div className="top-settings-row">
            
            <div className="settings-text">
                <span>Financials</span>
                <input id="company" onChange={(e) => setTicker(e.target.value)} placeholder="Ticker"></input>
            </div>
            <div className="settings-right-side-buttons">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="gear" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                    </svg>
                </button>
                <button onClick={closeOpenFinancials}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="x" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
            </div>       
        </div>

        <div className="top-options-row"> 
            <button className="search-button" onClick={renderDisplay} id="balanceSheet">
                <span>Balance Sheet</span>
            </button>
            <button className="search-button" onClick={renderDisplay} id="incomeStatement">
                <span>Income</span>
            </button>
            <button className="search-button" onClick={renderDisplay} id="cashFlow">
                <span>Cash Flow</span>
            </button>
        </div>

        {display === "balanceSheet" && 
        <div className="filing-table">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {balanceSheetData.map((item, index) => (
                            <th key={index}>{item.fiscalDateEnding}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Reported Currency</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.reportedCurrency}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Total Assets</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.totalAssets}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Total Current Assets</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.totalCurrentAssets}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Cash And Cash Equivalents At Carrying Value</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.cashAndCashEquivalentsAtCarryingValue}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Cash And Short Term Investments</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.cashAndShortTermInvestments}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Inventory</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.inventory}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Current Net Receivables</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.currentNetReceivables}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Total Non Current Assets</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.totalNonCurrentAssets}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Property Plant Equipment</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.propertyPlantEquipment}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Accumulated Depreciation Amortization PPE</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.accumulatedDepreciationAmortizationPPE}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Intangible Assets</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.intangibleAssets}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Intangible Assets Excluding Goodwill</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.intangibleAssetsExcludingGoodwill}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Goodwill</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.goodwill}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Investments</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.investments}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Long Term Investments</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.longTermInvestments}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Short Term Investments</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.shortTermInvestments}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Other Current Assets</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.otherCurrentAssets}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Other Non Current Assets</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.otherNonCurrentAssets}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Total Liabilities</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.totalLiabilities}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Total Current Liabilities</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.totalCurrentLiabilities}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Current Accounts Payable</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.currentAccountsPayable}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Deferred Revenue</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.deferredRevenue}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Current Debt</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.currentDebt}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Short Term Debt</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.shortTermDebt}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Total Non Current Liabilities</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.totalNonCurrentLiabilities}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Capital Lease Obligations</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.capitalLeaseObligations}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Long Term Debt</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.longTermDebt}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Current Long Term Debt</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.currentLongTermDebt}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Long Term Debt Noncurrent</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.longTermDebtNoncurrent}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Short Long Term Debt Total</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.shortLongTermDebtTotal}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Other Current Liabilities</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.otherCurrentLiabilities}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Other Non Current Liabilities</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.otherNonCurrentLiabilities}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Total Shareholder Equity</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.totalShareholderEquity}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Treasury Stock</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.treasuryStock}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Retained Earnings</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.retainedEarnings}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Common Stock</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.commonStock}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Common Stock Shares Outstanding</td>
                        {balanceSheetData.map((item, index) => (
                            <td key={index}>{item.commonStockSharesOutstanding}</td>
                        ))}
                    </tr>
                </tbody>
            </table>    
        </div>}


        {display === "cashFlow" && 
            <div className="filing-table">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            {cashFlowData.map((item, index) => (
                                <th key={index}>{item.fiscalDateEnding}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Reported Currency</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.reportedCurrency}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Operating Cashflow</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.operatingCashflow}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Payments for Operating Activities</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.paymentsForOperatingActivities}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Proceeds from Operating Activities</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.proceedsFromOperatingActivities}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Change in Operating Liabilities</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.changeInOperatingLiabilities}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Change in Operating Assets</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.changeInOperatingAssets}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Depreciation, Depletion and Amortization</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.depreciationDepletionAndAmortization}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Capital Expenditures</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.capitalExpenditures}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Change in Receivables</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.changeInReceivables}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Change in Inventory</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.changeInInventory}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Profit/Loss</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.profitLoss}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Cashflow from Investment</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.cashflowFromInvestment}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Cashflow from Financing</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.cashflowFromFinancing}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Proceeds from Repayments of Short Term Debt</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.proceedsFromRepaymentsOfShortTermDebt}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Payments for Repurchase of Common Stock</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.paymentsForRepurchaseOfCommonStock}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Payments for Repurchase of Equity</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.paymentsForRepurchaseOfEquity}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Payments for Repurchase of Preferred Stock</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.paymentsForRepurchaseOfPreferredStock}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Dividend Payout</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.dividendPayout}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Dividend Payout Common Stock</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.dividendPayoutCommonStock}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Dividend Payout Preferred Stock</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.dividendPayoutPreferredStock}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Proceeds from Issuance of Common Stock</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.proceedsFromIssuanceOfCommonStock}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Proceeds from Issuance of Long Term Debt and Capital Securities Net</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Proceeds from Issuance of Preferred Stock</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.proceedsFromIssuanceOfPreferredStock}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Proceeds from Repurchase of Equity</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.proceedsFromRepurchaseOfEquity}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Proceeds from Sale of Treasury Stock</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.proceedsFromSaleOfTreasuryStock}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Change in Cash and Cash Equivalents</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.changeInCashAndCashEquivalents}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Change in Exchange Rate</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.changeInExchangeRate}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Net Income</td>
                            {cashFlowData.map((item, index) => (
                                <td key={index}>{item.netIncome}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>    
        </div>}


        {display === "incomeStatement" && 
            <div className="filing-table">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {incomeStatementData.map((item, index) => (
                            <th key={index}>{item.fiscalDateEnding}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Reported Currency</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.reportedCurrency}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Gross Profit</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.grossProfit}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Total Revenue</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.totalRevenue}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Cost of Revenue</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.costOfRevenue}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Cost of Goods and Services Sold</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.costOfGoodsAndServicesSold}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Operating Income</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.operatingIncome}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Selling, General and Administrative</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.sellingGeneralAndAdministrative}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Research and Development</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.researchAndDevelopment}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Operating Expenses</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.operatingExpenses}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Investment Income, Net</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.investmentIncomeNet}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Net Interest Income</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.netInterestIncome}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Interest Income</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.interestIncome}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Interest Expense</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.interestExpense}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Non-Interest Income</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.nonInterestIncome}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Other Non-Operating Income</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.otherNonOperatingIncome}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Depreciation</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.depreciation}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Depreciation and Amortization</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.depreciationAndAmortization}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Income Before Tax</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.incomeBeforeTax}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Income Tax Expense</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.incomeTaxExpense}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Interest and Debt Expense</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.interestAndDebtExpense}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Net Income from Continuing Operations</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.netIncomeFromContinuingOperations}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Comprehensive Income Net of Tax</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.comprehensiveIncomeNetOfTax}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>EBIT</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.ebit}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>EBITDA</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.ebitda}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Net Income</td>
                        {incomeStatementData.map((item, index) => (
                            <td key={index}>{item.netIncome}</td>
                        ))}
                    </tr>
                </tbody>
            </table>    
        </div>}

    </div>)
}

export default Financials