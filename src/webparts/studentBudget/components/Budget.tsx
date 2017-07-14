
import * as ReactDataGrid from 'react-data-grid';
import * as $ from 'jquery';
import { Editors, Toolbar, Formatters } from 'react-data-grid-addons';
import ReactDataGridPlugins from 'react-data-grid-addons';
import { ContextMenu, MenuItem, ContextMenuTrigger, SubMenu } from "react-contextmenu";
require ('!style-loader!css-loader!../../../../src/examples.css');
import { Menu }  from 'react-data-grid-addons';
import * as update from 'immutability-helper';
import * as json2csv from 'json2csv';
import * as React from 'react';

import * as ReactDOM from 'react-dom';

import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
//import { itemsNonFocusable, farItemsNonFocusable } from './data-nonFocusable';

const { Row } = ReactDataGrid;



const YearFormatter = React.createClass({
  render() {
    const year = this.props.value;
    return (
      <div style={{marginTop: '0px'}}>
        <div style = {{color:"#EB6C2C"}} >
          { year }
        </div>
      </div>);
  }
});


const RowRenderer = React.createClass({
  propTypes: {
    idx: React.PropTypes.string.isRequired
  },

  setScrollLeft(scrollBy) {
    // if you want freeze columns to work, you need to make sure you implement this as apass through
    this.row.setScrollLeft(scrollBy);
  },

  getRowStyle() {
    return {
      color: this.getRowBackground()
    };
  },

  getRowBackground() {
    return this.props.idx % 2 ?  'green' : 'blue';
  },

  render: function() {
    // here we are just changing the style
    // but we could replace this with anything we liked, cards, images, etc
    // usually though it will just be a matter of wrapping a div, and then calling back through to the grid
    return (<div style={this.getRowStyle()}><Row ref={ node => this.row = node } {...this.props}/></div>);
  }
});

const MyContextMenu = React.createClass({


  onRowDelete(e, data) {
    if (typeof(this.props.onRowDelete) === 'function') {
      this.props.onRowDelete(e, data);
    }
  },

  onRowInsertAbove(e, data) {
    if (typeof(this.props.onRowInsertAbove) === 'function') {
      this.props.onRowInsertAbove(e, data);
    }
  },

  onRowInsertBelow(e, data) {
    if (typeof(this.props.onRowInsertBelow) === 'function') {
      this.props.onRowInsertBelow(e, data);
    }
  },

  render() {
    return (
      <ContextMenu id="1232">
       
         <MenuItem data={{rowIdx: this.props.rowIdx, idx: this.props.idx}} onClick={this.onRowDelete}>Delete Row</MenuItem>
      </ContextMenu>
    );
  }
});


const Example = React.createClass({

  componentDidUpdate()
  {
    debugger;


  //  for(var i=1; i <= 2; i++ )
  //  {

  //   let grid = "grid" + i

  //   let rowIdx1 = this[grid].state.selected.rowIdx;
  //   let row1 = this[grid].props.rowGetter(rowIdx1);

  //   let idx1 = this[grid].state.selected.idx;
  //   let col1 = this[grid].getColumn(idx1);

  //   let selected1 = ({idx: idx1, rowIdx: rowIdx1, active: false});

  //      //let selected = Object.assign({}, this.state.selected, {idx: idx, rowIdx: rowIdx, active: false});
  //   this[grid].setState({selected: selected1});
    


  //  }
    
   

    let rowIdx1 = this.grid1.state.selected.rowIdx;
    let row1 = this.grid1.props.rowGetter(rowIdx1);

    let idx1 = this.grid1.state.selected.idx;
    let col1 = this.grid1.getColumn(idx1);

    let selected1 = ({idx: idx1, rowIdx: rowIdx1, active: false});

       //let selected = Object.assign({}, this.state.selected, {idx: idx, rowIdx: rowIdx, active: false});
    this.grid1.setState({selected: selected1});
  },


creatHeader(Jan, Feb, Mar, Apr, May, June, July, Aug, Sep, Oct, Nov, Dec, Year){
      var headerName = [
      {
        key: Jan.key,
        name: Jan.name,
        editable: Jan.editable,
        width:Jan.width
      },

      {
        key: Feb.key,
        name: Feb.name,
        editable: Feb.editable,
        width:Feb.width
      },
      {
        key: Mar.key,
        name: Mar.name,
        editable: Mar.editable,
        width: Mar.width
      },
      {
        key: Apr.key,
        name: Apr.name,
        editable: Apr.editable,
        width:Apr.width
      },
      {
        key: May.key,
        name: May.name,
        editable: May.editable,
        width:May.width
      },
      {
        key: June.key,
        name: June.name,
        editable: June.editable,
        width: June.width
      },
      {
        key: July.key,
        name: July.name,
        editable: July.editable,
        width: July.width
      },
      {
        key: Aug.key,
        name: Aug.name,
        editable: Aug.editable,
        width: Aug.width
      },
      {
        key: Sep.key,
        name: Sep.name,
        editable: Sep.editable,
        width: Sep.width
      },
      {
        key: Oct.key,
        name: Oct.name,
        editable: Oct.editable,
        width:Oct.width
      },

      {
        key: Nov.key,
        name: Nov.name,
        editable: Nov.editable,
        width: Nov.width
      },

      {
        key: Dec.key,
        name: Dec.name,
        editable: Dec.editable,
        width: Dec.width
      },

      {
        key: Year.key,
        name: Year.name,
        editable: Year.editable,
        width: Year.width,
        formatter: YearFormatter

      },
    ]
   return headerName
},
onCellSelected(rowIdx, idx){

  
},
  getInitialState() { 

    let  headerName = this.creatHeader(
      { key: 'Jan', name: 'Jan', editable: true,width:50 },
      { key: 'Feb', name: 'Feb', editable: true, width:50 } ,
      { key: 'Mar', name: 'Mar', editable: true, width:50 },
      { key: 'Apr', name: 'Apr', editable: true, width:50 },
      { key: 'May', name: 'May', editable: true, width:50 },
      { key: 'June', name: 'June', editable: true, width:50},
      { key: 'July', name: 'July', editable: true, width:50},
      { key: 'Aug', name: 'Aug', editable: true, width:60 },
      { key: 'Sep', name: 'Sep', editable: true, width:60  },
      { key: 'Oct', name: 'Oct', editable: true, width:50 },
      { key: 'Nov', name: 'Nov', editable: true, width:50 },
      { key: 'Dec',name: 'Dec',editable: true, width:60 },
      {key: 'Year',name: 'Year',width:60,editable: true,formatter: YearFormatter }
  );

  
    let headerWithoutName = this.creatHeader(
      { key: 'Jan', name: '', editable: true, width:50 },
      { key: 'Feb', name: '', editable: true, width:50 },
      { key: 'Mar', name: '', editable: true, width:50 },
      { key: 'Apr', name: '', editable: true, width:50 },
      { key: 'May', name: '', editable: true, width:50 },
      { key: 'June', name: '', editable: true, width:50 },
      { key: 'July', name: '', editable: true, width:50 },
      { key: 'Aug', name: '', editable: true, width: 60 },
      { key: 'Sep', name: '', editable: true, width:50 },
      { key: 'Oct', name: '', editable: true, width:50 },
      { key: 'Nov', name: '', editable: true, width:50 },
      { key: 'Dec', name: '', editable: true, width:60 },
      { key: 'Year', name: '', width:60, editable: true, formatter: YearFormatter }
  );
    
      
    var MonthlyExpenseColumn = [{ key: 'MonthlyExpense', name: 'MONTHLY EXPENSE', width: 185, editable: true }]
    var HousingColumn = [{ key: 'Housing', name: '', width: 185, editable: true }]
    var InsuranceColumn = [{ key: 'Insurance', name: '', width: 185, editable: true }]
    var UtilitiesColumn = [{ key: 'Utilities', name: '', width: 185, editable: true }]
    var LoanPaymentColumn =  [{ key: 'LoanPayment', name: '', width: 185, editable: true }]
    var MonthlyCashColumn = [{ key: 'MonthlyCash', name: 'Monthly Cash After Expense', width: 190, editable: true }]
    var TuitionFeesColumn = [{ key: 'Tuition&Fees', name: '', width: 185, editable: true }]
    var TransportationColumn =  [{ key: 'Transportation', name: '', width: 185, editable: true }]
    var BooksSuppliesColumn = [{ key: 'BooksSupplies', name: '', width: 185, editable: true }]
    var MonthlyIncomeColumn = [{ key: 'MonthlyIncome', name: 'MONTHLY INCOME', width: 185, background: 'red', editable: true }];
    var DiscretionaryColumn = [{ key: 'Discretionary',name: '', width: 185, editable: true }]
    var OtherExpensesColumn = [{ key: 'OtherExpenses', name: '', width: 185, editable: true }]
    var TotalExpensesColumn = [{ key: 'TotalExpenses', name: '', width: 185, editable: true }]


    this._monthlyCashColumns =  MonthlyCashColumn.concat(headerName)
    this._monthlyIncomeColumns = MonthlyIncomeColumn.concat(headerName);
    this._housingColumns =  HousingColumn.concat(headerWithoutName)
    this._monthlyExpenseColumns = MonthlyExpenseColumn.concat(headerName);
    this._insuranceColumns=  InsuranceColumn.concat(headerWithoutName)
    this._utilitiesColumns =  UtilitiesColumn.concat(headerWithoutName)
    this._loanPaymentColumns =  LoanPaymentColumn.concat(headerWithoutName)
    this._transportationColumns =  TransportationColumn.concat(headerWithoutName)
    this._booksSuppliesColumns =  BooksSuppliesColumn.concat(headerWithoutName)
    this._discretionaryColumns =  DiscretionaryColumn.concat(headerWithoutName)
    this._otherExpensesColumns =  OtherExpensesColumn.concat(headerWithoutName)
    this._totalExpensesColumns =  TotalExpensesColumn.concat(headerWithoutName)

        

    
    return { 
      rows: this.createSummaryRows(5), 
     
      monthlyExpenseRows: this.createTable("MonthlyExpense", ["Tuition&Fees","Tuition", "Ancillary fees", "Insurance", "Student card"]),
      housingRows: this.createTable("Housing", ["Housing", "Rent or residence", "Mortgage", "Property taxes"]),
      insurancerows: this.createTable("Insurance", ["Insurance","Car", "Home", "Mortgage"]),
      utilitiesRows: this.createTable("Utilities", ["Utilities","Cell phone", "Hydro", "Water", "Gas", "Electricity", "Cable", "Internet"]),
      loanPaymentRows: this.createTable("LoanPayment", ["LoanPayment","Line of credit", "Bank", "Car loan", "Credit card"]),
      transportationRows: this.createTable("Transportation", ["Transportation","Gas, maintenance","Bus", "Parking", "Taxis", "License and registration", "Transit fares","Travel at holidays"]),
      booksSuppliesRows: this.createTable("BooksSupplies", ["Books & Supplies","Textbooks", "School supplies", "Lab uniforms"]),
      discretionaryRows: this.createTable("Discretionary", ["Discretionary","Savings", "Donations", "Snacks, dining out", "Clothes","Entertainment"]),
      otherExpensesRows: this.createTable("OtherExpenses", ["OtherExpenses","Loan, credit card payment", "Other"]),
      totalExpensesRows: this.createTable("TotalExpenses", ["Total Expenses"]),
   
      cashFlowRows: this.createTable("MonthlyCash", ["Cash flow", "Cumulative cash flow"]),

  
    };

    


  },

  


convertArrayOfObjectsToCSV(args) {
  var result, ctr, keys, columnDelimiter, lineDelimiter, data;
  result = '';
  Object.keys(args).forEach(function(key) {
      data = args[key];

      if (data == null || !data.length) {
                return null;
        }

        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';

        keys = Object.keys(data[0]);

       
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach(function(item) {
            ctr = 0;
            keys.forEach(function(key) {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });
      
   })
        return result;
    },


  downloadCSV(args) {
    debugger;
        var data, filename, link;
        var self = this;
        var csv = this.convertArrayOfObjectsToCSV(
            {data1:this.state.rows, data2: this.state.monthlyExpenseRows, data3: this.state.insurancerows,
             data4: this.state.utilitiesRows, data5: this.state.loanPaymentRows, data6:this.state.transportationRows,
             data7: this.state.booksSuppliesRows, data8: this.state.discretionaryRows, data9: this.state.otherExpensesRows
             
          }
        );
        if (csv == null) return;
        filename = 'export.csv';
        if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
        }
        data = encodeURI(csv);
        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
        self.setState({data: data,fileName: 'export.csv'})

        console.log(self.state.data);
    },
  getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  },

  sum(rows,column){
      var amount = 0;
      rows.forEach(element => {
      amount =  amount + Number(element[column] == undefined ? 0: element[column]);
    });
    return amount;
  },

  sumByColomn(rows,column){
    var temp = $.extend({}, rows);
    var amount = 0;
    delete temp[0]
    Object.keys(temp).forEach(function(key) {
        amount = amount +temp[key][column];
    });
    return amount;
  },


  sumByRow(row){
    var temp = $.extend({}, row);
    var amount = 0;
    delete temp['MonthlyIncome']
    delete temp['Year']
    delete temp['MonthlyExpense']
    delete temp['Housing']
    delete temp['Insurance']
    delete temp['Utilities']
    delete temp['LoanPayment']
    delete temp['MonthlyCash']
    delete temp['Transportation']
    delete temp['BooksSupplies']
    delete temp['Discretionary']
    delete temp['OtherExpenses']
    delete temp['TotalExpenses']
    delete temp['TuitionFees']
    for (var k in temp){ 
      amount = amount + Number(row[k])
    }
      return amount;
  },
  
  onRowSelect(rows) {

     debugger;
      alert(rows);
  },

  sumByYear(rows){
        rows.forEach((element,index) => {
        rows[index]['Year'] = this.sumByRow(rows[index]);
    });
      return rows;
  },

  createSummaryRows(numberOfRows) {
    let rows = [];
    for (let i = 1; i < numberOfRows; i++) {
      rows.push({
        Jan:  Math.min(2000, Math.round(Math.random() * 2000)),
        Feb: Math.min(2000, Math.round(Math.random() * 110)),
        Mar:  Math.min(2000, Math.round(Math.random() * 110)),
        Apr:  Math.min(2000, Math.round(Math.random() * 110)),
        May: Math.min(2000, Math.round(Math.random() * 110)),
        June: Math.min(2000, Math.round(Math.random() * 110)),
        July: Math.min(2000, Math.round(Math.random() * 110)),
        Aug: Math.min(2000, Math.round(Math.random() * 2000)),
        Sep: Math.min(2000, Math.round(Math.random() * 2000)),
        Oct: Math.min(6000, Math.round(Math.random() * 2000)),
        Nov: Math.min(6000, Math.round(Math.random() * 2000)),
        Dec: Math.min(6000, Math.round(Math.random() * 2000))
     
      });
    }
  rows[0].MonthlyIncome = "Employment";
  rows[1].MonthlyIncome = "Saving";
  rows[2].MonthlyIncome = "Allowance";
  rows[3].MonthlyIncome = "Loan";
  rows[0].Year = this.sumByRow(rows[0]);
  rows[1].Year = this.sumByRow(rows[1]);
  rows[2].Year = this.sumByRow(rows[2]);
  rows[3].Year = this.sumByRow(rows[3]);
  
  rows.push(
   {
        MonthlyIncome:  "TOTAL INCOME",
        Jan:  this.sum(rows,'Jan'),
        Feb:  this.sum(rows,'Feb'),
        Mar: this.sum(rows,'Mar'),
        Apr: this.sum(rows,'Apr'),
        May: this.sum(rows,'May'),
        June: this.sum(rows,'June'),
        July: this.sum(rows,'July'),
        Aug: this.sum(rows,'Aug'),
        Sep: this.sum(rows,'Sep'),
        Oct: this.sum(rows,'Oct'),
        Nov: this.sum(rows,'Nov'),
        Dec: this.sum(rows,'Dec')
      
  });
      return rows;
  },

  
  totalSummaryRows(numberOfRows) {
    let rows = [];
    for (let i = 1; i < numberOfRows; i++) {
      rows.push({
        Jan:  Math.min(2000, Math.round(Math.random() * 2000)),
        Feb: Math.min(2000, Math.round(Math.random() * 110)),
        Mar:  Math.min(2000, Math.round(Math.random() * 110)),
        Apr:  Math.min(2000, Math.round(Math.random() * 110)),
        May: Math.min(2000, Math.round(Math.random() * 110)),
        June: Math.min(2000, Math.round(Math.random() * 110)),
        July: Math.min(2000, Math.round(Math.random() * 110)),
        Aug: Math.min(2000, Math.round(Math.random() * 2000)),
        Sep: Math.min(2000, Math.round(Math.random() * 2000)),
        Oct: Math.min(6000, Math.round(Math.random() * 2000)),
        Nov: Math.min(6000, Math.round(Math.random() * 2000)),
        Dec: Math.min(6000, Math.round(Math.random() * 2000))
     
      });
    }
  rows[0].MonthlyIncome = "Employment";
  rows[1].MonthlyIncome = "Saving";
  rows[2].MonthlyIncome = "Allowance";
  rows[3].MonthlyIncome = "Loan";
  rows[0].Year = this.sumByRow(rows[0]);
  rows[1].Year = this.sumByRow(rows[1]);
  rows[2].Year = this.sumByRow(rows[2]);
  rows[3].Year = this.sumByRow(rows[3]);
  
  rows.push(
   {
        MonthlyIncome:  "TOTAL INCOME",
        Jan:  this.sum(rows,'Jan'),
        Feb:  this.sum(rows,'Feb'),
        Mar: this.sum(rows,'Mar'),
        Apr: this.sum(rows,'Apr'),
        May: this.sum(rows,'May'),
        June: this.sum(rows,'June'),
        July: this.sum(rows,'July'),
        Aug: this.sum(rows,'Aug'),
        Sep: this.sum(rows,'Sep'),
        Oct: this.sum(rows,'Oct'),
        Nov: this.sum(rows,'Nov'),
        Dec: this.sum(rows,'Dec')
      
  });
      return rows;
  },

  sumBySections(sections){
    var JanExpense = 0;
    var FebExpense = 0;
    var MarExpense = 0;
    var AprExpense = 0;
    var MayExpense = 0;
    var JuneExpense = 0;
    var JulyExpense = 0;
    var AugExpense = 0;
    var SepExpense = 0;
    var OctExpense = 0;
    var NovExpense = 0;
    var DecExpense = 0;
    var incomeSection = arguments[0];
    var JanIncome = this.sum(incomeSection, 'Jan');
    var FebIncome = this.sum(incomeSection, 'Feb');
    var MarIncome = this.sum(incomeSection, 'Mar');
    var AprIncome = this.sum(incomeSection, 'Apr');
    var MayIncome = this.sum(incomeSection, 'May');
    var JuneIncome = this.sum(incomeSection, 'June');
    var JulyIncome = this.sum(incomeSection, 'July');
    var AugIncome = this.sum(incomeSection, 'Aug');
    var SepIncome = this.sum(incomeSection, 'Sep');
    var OctIncome = this.sum(incomeSection, 'Oct');
    var NovIncome = this.sum(incomeSection, 'Nov');
    var DecIncome = this.sum(incomeSection, 'Dec');
    for (var i = 1; i < arguments.length; i++) {
      var rows = arguments[i];

      JanExpense = JanExpense + Number(rows[0].Jan);
      FebExpense = FebExpense + Number(rows[0].Feb);
      MarExpense = MarExpense + Number(rows[0].Mar);
      AprExpense = AprExpense + Number(rows[0].Apr);
      MayExpense = MayExpense + Number(rows[0].May);
      AugExpense = AugExpense + Number(rows[0].Aug);
      JuneExpense = JuneExpense + Number(rows[0].June);
      JulyExpense = JulyExpense + Number(rows[0].July)
      SepExpense = SepExpense + Number(rows[0].Sep);
      OctExpense = OctExpense + Number(rows[0].Oct);
      NovExpense = NovExpense + Number(rows[0].Nov);
      DecExpense = DecExpense + Number(rows[0].Dec);
  }
  return {
        Jan: JanExpense,
        Feb: FebExpense,
        Mar: MarExpense,
        Apr: AprExpense,
        May: MayExpense,
        June: JuneExpense,
        July: JulyExpense,
        Aug: AugExpense,
        Sep: SepExpense,
        Oct: OctExpense,
        Nov: NovExpense,
        Dec: DecExpense,
        TotalExpenses: "Total Expenses"
      }
  },

  //  createRows1(numberOfRows) {
  //   let rows = [];
  //   for (let i = 1; i < numberOfRows; i++) {
  //     rows.push({
  //       Jan:  Math.min(100, Math.round(Math.random() * 110)),
  //       Feb: Math.min(100, Math.round(Math.random() * 110)),
  //       Mar:  Math.min(100, Math.round(Math.random() * 110)),
  //       Apr:  Math.min(100, Math.round(Math.random() * 110)),
  //       May: Math.min(100, Math.round(Math.random() * 110)),
  //       June: Math.min(100, Math.round(Math.random() * 110)),
  //       July: Math.min(100, Math.round(Math.random() * 110)),
  //       Aug: Math.min(100, Math.round(Math.random() * 110)),
  //       Sep: Math.min(100, Math.round(Math.random() * 110)),
  //       Oct: Math.min(100, Math.round(Math.random() * 110)),
  //       Nov: Math.min(100, Math.round(Math.random() * 110)),
  //       Dec: Math.min(100, Math.round(Math.random() * 110))
     
  //     });
  //   }
  //     rows[0].MonthlyExpense = "Tuition&Fees";
  //     rows[1].MonthlyExpense = "Tuition";
  //     rows[2].MonthlyExpense = "Ancillary fees";
  //     rows[3].MonthlyExpense = "Insurance";
  //     rows[4].MonthlyExpense = "Student card";

  //     rows[0].Jan = this.sumByColomn(rows,'Jan');
  //     rows[0].Feb = this.sumByColomn(rows,'Feb');
  //     rows[0].Mar = this.sumByColomn(rows,'Mar');
  //     rows[0].Apr = this.sumByColomn(rows,'Apr');
  //     rows[0].May = this.sumByColomn(rows,'May');
  //     rows[0].June = this.sumByColomn(rows,'June');
  //     rows[0].July = this.sumByColomn(rows,'July');
  //     rows[0].Aug = this.sumByColomn(rows,'Aug');
  //     rows[0].Sep = this.sumByColomn(rows,'Sep');
  //     rows[0].Oct = this.sumByColomn(rows,'Oct');
  //     rows[0].Nov= this.sumByColomn(rows,'Nov');
  //     rows[0].Dec = this.sumByColomn(rows,'Dec');
  
      
  //     rows[0].Year = this.sumByRow(rows[0]);
  //     rows[1].Year = this.sumByRow(rows[1]);
  //     rows[2].Year = this.sumByRow(rows[2]);
  //     rows[3].Year = this.sumByRow(rows[3]);
  //     rows[4].Year = this.sumByRow(rows[4]);
  //   return rows;
  // },


createTable(firstColumn, columns){
    let rows = [];
    var numberOfRows = columns.length;
    for (let i = 0; i < numberOfRows; i++) {
      rows.push({
        Jan:  Math.min(100, Math.round(Math.random() * 110)),
        Feb: Math.min(100, Math.round(Math.random() * 110)),
        Mar:  Math.min(100, Math.round(Math.random() * 110)),
        Apr:  Math.min(100, Math.round(Math.random() * 110)),
        May: Math.min(100, Math.round(Math.random() * 110)),
        June: Math.min(100, Math.round(Math.random() * 110)),
        July: Math.min(100, Math.round(Math.random() * 110)),
        Aug: Math.min(100, Math.round(Math.random() * 110)),
        Sep: Math.min(100, Math.round(Math.random() * 110)),
        Oct: Math.min(100, Math.round(Math.random() * 110)),
        Nov: Math.min(100, Math.round(Math.random() * 110)),
        Dec: Math.min(100, Math.round(Math.random() * 110))
     
      });
    }
    columns.forEach((element,index) => {
        rows[index][firstColumn] = element;
    });
    rows[0].Jan = this.sumByColomn(rows,'Jan');
    rows[0].Feb = this.sumByColomn(rows,'Feb');
    rows[0].Mar = this.sumByColomn(rows,'Mar');
    rows[0].Apr = this.sumByColomn(rows,'Apr');
    rows[0].May = this.sumByColomn(rows,'May');
    rows[0].June = this.sumByColomn(rows,'June');
    rows[0].July = this.sumByColomn(rows,'July');
    rows[0].Aug = this.sumByColomn(rows,'Aug');
    rows[0].Sep = this.sumByColomn(rows,'Sep');
    rows[0].Oct = this.sumByColomn(rows,'Oct');
    rows[0].Nov= this.sumByColomn(rows,'Nov');
    rows[0].Dec = this.sumByColomn(rows,'Dec');
    columns.forEach((element,index) => {
      rows[index]['Year'] = this.sumByRow(rows[index]);
    });
    return rows;
  },
 
  rowGetterMonthlyExpense(i) {

    return this.state.monthlyExpenseRows[i];
  },

  rowGetterCashFlow(i) {

    var  rows = this.state.rows.slice();
    var result = this.sumBySections(
      this.state.rows,this.state.monthlyExpenseRows, this.state.housingRows, 
      this.state.insurancerows,this.state.utilitiesRows, this.state.loanPaymentRows,
      this.state.transportationRows,this.state.booksSuppliesRows, this.state.discretionaryRows, 
      this.state.otherExpensesRows
    );

    var  rows = this.state.rows.slice();
    var length = rows.length;
    var _rows = this.state.cashFlowRows.slice();
    var length1 = this.state.cashFlowRows.length;
    var items = rows.slice(0,length-1);
    this.sum(items, 'Jan' );

    _rows[0].Jan   =  this.sum(items, 'Jan' ) -result.Jan;
    _rows[0].Feb   =  this.sum(items, 'Feb' ) -result.Feb;
    _rows[0].Mar   =  this.sum(items, 'Mar' ) -result.Mar;
    _rows[0].Apr   =  this.sum(items, 'Apr' ) -result.Apr;
    _rows[0].May   =  this.sum(items, 'May' ) -result.May;
    _rows[0].June  =  this.sum(items, 'June' ) -result.June;
    _rows[0].July  =  this.sum(items, 'July' ) -result.July;
    _rows[0].Aug   =  this.sum(items, 'Aug' ) -result.Aug;
    _rows[0].Sep   =  this.sum(items, 'Sep' ) -result.Sep;
    _rows[0].Oct   =  this.sum(items, 'Oct' ) -result.Oct;
    _rows[0].Nov   =  this.sum(items, 'Nov' ) -result.Nov;
    _rows[0].Dec   =  this.sum(items, 'Dec' ) -result.Dec;


    var Jan = _rows[0].Jan;
    var Feb = _rows[0].Feb + _rows[1].Jan;
    var Mar =  _rows[0].Mar + _rows[1].Feb;
    var Apr =  _rows[0].Apr + _rows[1].Mar;
    var May =  _rows[0].May + _rows[1].Apr;
    var June =  _rows[0].June + May;
    var July =  _rows[0].July + June;
    var Aug =  _rows[0].Aug + July;
    var Sep =  _rows[0].Sep + Aug;
    var Oct =  _rows[0].Oct + Sep;
    var Nov =  _rows[0].Nov + Oct;
    var Dec =  _rows[0].Dec + Nov;

    const newRow = {
            MonthlyCash:  "Cumulative cash flow",
            Jan: Jan,
            Feb:  Feb,
            Mar: Mar,
            Apr:  Apr,
            May:  May,
            June: June,
            July: July,
            Aug: Aug,
            Sep: Sep,
            Oct: Oct,
            Nov: Nov,
            Dec: Dec
      };
    this.state.cashFlowRows[1] = newRow
    return this.state.cashFlowRows[i];
  },

  rowGetterHousing(i) {
    return this.state.housingRows[i];
  },

  rowGetterInsurance(i) {
    return this.state.insurancerows[i];
  },

  
  rowGetterUtilities(i) {
    return this.state.utilitiesRows[i];
  },

  rowGetterLoanPayment(i) {
    return this.state.loanPaymentRows[i];
  },
  rowGetterTransportation(i) {
    return this.state.transportationRows[i];
  },

  rowGetterBooksSupplies(i) {
    return this.state.booksSuppliesRows[i];
  },

  rowGetterDiscretionary(i) {
    return this.state.discretionaryRows[i];
  },


  rowGetterOtherExpenses(i) {
    return this.state.otherExpensesRows[i];
  },

  
 rowGetterTotalExpenses(i) {
    var result = this.sumBySections(this.state.rows,this.state.monthlyExpenseRows, this.state.housingRows, this.state.insurancerows,this.state.utilitiesRows, this.state.loanPaymentRows,
    this.state.transportationRows,this.state.booksSuppliesRows, this.state.discretionaryRows, this.state.otherExpensesRows);
    return result;
  },

  rowGetter(i) {
    return this.state.rows[i];
  },


  handleAddRow({ newRowIndex }) {

    debugger;
    const newRow = { Jan: '', Feb: '', Mar: '', Apr: '', May: '', June: '', July: '', Aug: '', Sep: '', Oct: '', Nov: '', Dec: ''};
    let rows = this.state.rows.slice();
    rows = update(rows, {$push: [newRow]});
    rows[rows.length-1] = rows[rows.length-2];
    this.grid1.openCellEditor(rows.length -2, 0);
    rows[rows.length-2] =  {};
    this.setState({ rows });
  },

  handleGridRowsUpdated({ fromRow, toRow, updated }) {
    let rows = this.state.rows.slice();
    let length = this.state.rows.length;

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});
      rows[i] = updatedRow;
    }

    var result = this.sumBySections(this.state.rows,this.state.monthlyExpenseRows, this.state.housingRows, this.state.insurancerows,this.state.utilitiesRows, this.state.loanPaymentRows,
    this.state.transportationRows,this.state.booksSuppliesRows, this.state.discretionaryRows, this.state.otherExpensesRows);
    rows = rows.slice();
    length = rows.length;

    let _rows = this.state.cashFlowRows.slice();
    let length1 = this.state.cashFlowRows.length;
    var items = rows.slice(0,length-1);
    this.sum(items, 'Jan' );

    _rows[0].Jan  =   this.sum(items, 'Jan' ) -result.Jan;
    _rows[0].Feb  =   this.sum(items, 'Feb' ) -result.Feb;
    _rows[0].Mar  =   this.sum(items, 'Mar' ) -result.Mar;
    _rows[0].Apr  = this.sum(items, 'Apr' ) -result.Apr;
    _rows[0].May  = this.sum(items, 'May' ) -result.May;
    _rows[0].June  = this.sum(items, 'June' ) -result.June;
    _rows[0].July  = this.sum(items, 'July' ) -result.July;
    _rows[0].Aug  =   this.sum(items, 'Aug' ) -result.Aug;
    _rows[0].Sep  = this.sum(items, 'Sep' ) -result.Sep;
    _rows[0].Oct  =  this.sum(items, 'Oct' ) -result.Oct;
    _rows[0].Nov  = this.sum(items, 'Nov' ) -result.Nov;
    _rows[0].Dec  = this.sum(items, 'Dec' ) -result.Dec;


    var Jan = _rows[0].Jan;
    var Feb = _rows[0].Feb + _rows[1].Jan;
    var Mar =  _rows[0].Mar + _rows[1].Feb;

    var newRow = {
            MonthlyCash:  "Cumulative cash flow",
            Jan: 0,
            Feb: 0,
            Mar: 0,
            Apr: 0,
            May:  0,
            June: 0,
            July: 0,
            Aug: 0,
            Sep: 0,
            Oct: 0,
            Nov: 0,
            Dec: 0
      };

  _rows[1] = newRow;
  debugger;

  var items = rows.slice(0,length-1);
      var jan = this.sum(items, 'Jan' );
      var mar = this.sum(items, 'Mar' );
      var feb = this.sum(items, 'Feb' );
      var mar = this.sum(items, 'Mar' );
      var apr = this.sum(items, 'Apr' );
      var may = this.sum(items, 'May' );
      var june = this.sum(items, 'June' );
      var july = this.sum(items, 'July' );
      var aug = this.sum(items, 'Aug' );
      var sep = this.sum(items, 'Sep' );
      var oct = this.sum(items, 'Oct' );
      var nov = this.sum(items, 'Nov' );
      var dec = this.sum(items, 'Dec' );

      var  _row = {
            MonthlyIncome:  "TOTAL INCOME",
            Jan: jan,
            Feb: feb,
            Mar: mar,
            Apr: apr,
            May:  may,
            June: june,
            July: july,
            Aug: aug,
            Sep: sep,
            Oct: oct,
            Nov: nov,
            Dec: dec
      };

    rows[length -1] = _row;
    this.sumByYear(rows);
    this.setState({ rows: rows });
    this.setState({ cashFlowRows: _rows });
},

  createSummaryRow(items,column){
    var jan = this.sum(items, 'Jan' );
    var mar = this.sum(items, 'Mar' );
    var feb = this.sum(items, 'Feb' );
    var mar = this.sum(items, 'Mar' );
    var apr = this.sum(items, 'Apr' );
    var may = this.sum(items, 'May' );
    var june = this.sum(items, 'June' );
    var july = this.sum(items, 'July' );
    var aug = this.sum(items, 'Aug' );
    var sep = this.sum(items, 'Sep' );
    var oct = this.sum(items, 'Oct' );
    var nov = this.sum(items, 'Nov' );
    var dec = this.sum(items, 'Dec' );
    const newRow = { Jan: jan, Feb: feb,Mar: mar, Apr: apr,May:  may, June: june, July: july, Aug: aug, Sep: sep, Oct: oct, Nov: nov, Dec: dec};
    newRow[column] = column;
    return newRow;
},


  createNewRow(column, jan,feb, mar, apr, may, june, july, aug, sep, oct, nov, dec){
        let newRow = {
            column:  column,
            Jan: jan,
            Feb: feb,
            Mar: mar,
            Apr: apr,
            May:  may,
            June: june,
            July: july,
            Aug: aug,
            Sep: sep,
            Oct: oct,
            Nov: nov,
            Dec: dec
      };
  return newRow
},

  handleGridRowsUpdatedMonthlyExpense({ fromRow, toRow, updated }) {

    debugger;
    let monthlyExpenseRows = this.state.monthlyExpenseRows.slice();
    let length = this.state.monthlyExpenseRows.length;

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = monthlyExpenseRows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});
      monthlyExpenseRows[i] = updatedRow;
    }
   
     var items = monthlyExpenseRows.slice(1,length);
      var jan = this.sum(items, 'Jan' );
      var mar = this.sum(items, 'Mar' );
      var feb = this.sum(items, 'Feb' );
      var mar = this.sum(items, 'Mar' );
      var apr = this.sum(items, 'Apr' );
      var may = this.sum(items, 'May' );
      var june = this.sum(items, 'June' );
      var july = this.sum(items, 'July' );
      var aug = this.sum(items, 'Aug' );
      var sep = this.sum(items, 'Sep' );
      var oct = this.sum(items, 'Oct' );
      var nov = this.sum(items, 'Nov' );
      var dec = this.sum(items, 'Dec' );

      const newRow = {
            MonthlyExpense:  "Tuition&Fees",
            Jan: jan,
            Feb: feb,
            Mar: mar,
            Apr: apr,
            May:  may,
            June: june,
            July: july,
            Aug: aug,
            Sep: sep,
            Oct: oct,
            Nov: nov,
            Dec: dec
      };

         monthlyExpenseRows[0] = newRow;
      this.sumByYear(monthlyExpenseRows);

    

      this.setState({ monthlyExpenseRows: monthlyExpenseRows});
    

  },

  

  handleGridRowsUpdatedHousing({ fromRow, toRow, updated }) {
    let housingRows = this.state.housingRows.slice();
    let length = this.state.housingRows.length;

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = housingRows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});
      housingRows[i] = updatedRow;
    }
   
      var items = housingRows.slice(1,length);
      var _row = this.createSummaryRow(items, "Housing");
    //rows[0] = _row;

      housingRows[0] = _row;
      this.sumByYear(housingRows);
      this.setState({ housingRows: housingRows});

  },


  handleGridRowsUpdatedInsurance({ fromRow, toRow, updated }) {
    let rows = this.state.insurancerows.slice();
    let length = this.state.insurancerows.length;

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});
      rows[i] = updatedRow;
    }
    var _row = this.createSummaryRow(rows, "Insurance");
    rows[0] = _row;
    //  debugger;

    this.sumByYear(rows);
    this.setState({ insurancerows: rows});

  },


  
  handleGridRowsUpdatedUtilities({ fromRow, toRow, updated }) {
    let rows = this.state.utilitiesRows.slice();
    let length = this.state.utilitiesRows.length;

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});
      rows[i] = updatedRow;
    }
   
    var items = rows.slice(1,length);
      
    var _row = this.createSummaryRow(items, "Utilities");
     // rows[0] = _row;
      rows[0] = _row;
      this.sumByYear(rows);
      this.setState({ utilitiesRows: rows});

  },


  
  
  handleGridRowsUpdatedLoanPayment({ fromRow, toRow, updated }) {
    let rows = this.state.loanPaymentRows.slice();
    let length = this.state.loanPaymentRows.length;

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});
      rows[i] = updatedRow;
    }
   
     var items = rows.slice(1,length);
     
    var _row = this.createSummaryRow(items, "LoanPayment");
     // rows[0] = _row;
      rows[0] = _row;
     // rows[0] = newRow;
      this.sumByYear(rows);
      this.setState({ loanPaymentRows: rows});

  },



  
  handleGridRowsUpdatedTransportation({ fromRow, toRow, updated }) {
    let rows = this.state.transportationRows.slice();
    let length = this.state.transportationRows.length;

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});
      rows[i] = updatedRow;
    }
   
     var items = rows.slice(1,length);
      // var jan = this.sum(items, 'Jan' );
      // var mar = this.sum(items, 'Mar' );
      // var feb = this.sum(items, 'Feb' );
      // var mar = this.sum(items, 'Mar' );
      // var apr = this.sum(items, 'Apr' );
      // var may = this.sum(items, 'May' );
      // var june = this.sum(items, 'June' );
      // var july = this.sum(items, 'July' );
      // var aug = this.sum(items, 'Aug' );
      // var sep = this.sum(items, 'Sep' );
      // var oct = this.sum(items, 'Oct' );
      // var nov = this.sum(items, 'Nov' );
      // var dec = this.sum(items, 'Dec' );

      // const newRow = {
      //       Transportation:  "Transportation",
      //       Jan: jan,
      //       Feb: feb,
      //       Mar: mar,
      //       Apr: apr,
      //       May:  may,
      //       June: june,
      //       July: july,
      //       Aug: aug,
      //       Sep: sep,
      //       Oct: oct,
      //       Nov: nov,
      //       Dec: dec
      // };  items

  var _row = this.createSummaryRow(items, "Transportation");
     // rows[0] = _row;
      rows[0] = _row;
      //rows[0] = newRow;
      this.sumByYear(rows);
      this.setState({ transportationRows: rows});

  },


  
  handleGridRowsUpdatedbooksSupplies({ fromRow, toRow, updated }) {
    let rows = this.state.booksSuppliesRows.slice();
    let length = this.state.booksSuppliesRows.length;

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});
      rows[i] = updatedRow;
    }
   
     var items = rows.slice(1,length);
     var _row = this.createSummaryRow(items, "BooksSupplies");
     // rows[0] = _row;
     rows[0] = _row;

     // rows[0] = newRow;
      this.sumByYear(rows);
      this.setState({ booksSuppliesRows: rows});

  },



  
  handleGridRowsUpdatedDiscretionary({ fromRow, toRow, updated }) {
    let rows = this.state.discretionaryRows.slice();
    let length = this.state.discretionaryRows.length;

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});
      rows[i] = updatedRow;
    }
   
     var items = rows.slice(1,length);
      
    var _row = this.createSummaryRow(items, "Discretionary");
     // rows[0] = _row;
      rows[0] = _row;
    //  rows[0] = newRow;
      this.sumByYear(rows);
      this.setState({ discretionaryRows: rows});

  },

  handleGridRowsUpdatedOtherExpenses({ fromRow, toRow, updated }) {
    let rows = this.state.otherExpensesRows.slice();
    let length = this.state.otherExpensesRows.length;

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});
      rows[i] = updatedRow;
    }
   
     var items = rows.slice(1,length);
      // var jan = this.sum(items, 'Jan' );
      // var mar = this.sum(items, 'Mar' );
      // var feb = this.sum(items, 'Feb' );
      // var mar = this.sum(items, 'Mar' );
      // var apr = this.sum(items, 'Apr' );
      // var may = this.sum(items, 'May' );
      // var june = this.sum(items, 'June' );
      // var july = this.sum(items, 'July' );
      // var aug = this.sum(items, 'Aug' );
      // var sep = this.sum(items, 'Sep' );
      // var oct = this.sum(items, 'Oct' );
      // var nov = this.sum(items, 'Nov' );
      // var dec = this.sum(items, 'Dec' );

      // const newRow = {
      //       OtherExpenses:  "OtherExpenses",
      //       Jan: jan,
      //       Feb: feb,
      //       Mar: mar,
      //       Apr: apr,
      //       May:  may,
      //       June: june,
      //       July: july,
      //       Aug: aug,
      //       Sep: sep,
      //       Oct: oct,
      //       Nov: nov,
      //       Dec: dec
      // };

  var _row = this.createSummaryRow(items, "OtherExpenses");
     // rows[0] = _row;
      rows[0] = _row;
     // rows[0] = newRow;
      this.sumByYear(rows);
      this.setState({ otherExpensesRows: rows});

  },


 render() {
  function onSelectEvent(event){
    var self = this;
    self.downloadCSV();
  }
    return  (
    <div className="ms-fontColor-themeDarker">
        <div style = {{marginLeft:"25%", height:"50px", color:"blue", paddingBottom:"20px", fontSize: "40px"}}>
          <span ref ="mybudget" onClick={function(){alert('ppp')}}>My Budget</span>
        </div>
        <div>
        <button name="Edit" className="ms-CommandBarItem-link itemLink_ceb80f25" onClick={onSelectEvent.bind(this)} style={{float:"left"}}>
          <i className="ms-Icon ms-Icon--Download ms-CommandBarItem-icon  ms-CommandBarItem-iconColor"></i>
          <span className="ms-CommandBarItem-commandText itemCommandText_ceb80f25">Download</span>
        </button>
        <button name="Edit1" className="ms-CommandBarItem-link itemLink_ceb80f25" style={{float:"left"}}>
            <span className="ms-CommandBarItem-commandText itemCommandText_ceb80f25">Insert Row</span>
        </button>
    </div>

        <ReactDataGrid
            ref={ node => this.grid = node }
            enableCellSelect={true}
            columns={this._monthlyCashColumns}
            rowGetter={this.rowGetterCashFlow}
            rowsCount={this.state.cashFlowRows.length}
            minHeight={100}/>

          <ReactDataGrid 
            ref={ node => this.grid1 = node }
            enableCellSelect={true}
            columns={this._monthlyIncomeColumns}
            rowGetter={this.rowGetter}
            rowsCount={this.state.rows.length}
            minHeight={230}
          // enableRowSelect="multi"
            /*toolbar={<button  onClick={this.handleAddRow.bind(this.grid1)}>Add</button>}*/
            onRowSelect = {this.onRowSelect}
            onCellSelected={this.onCellSelected}
            onGridRowsUpdated={this.handleGridRowsUpdated}/>

          <ReactDataGrid
            ref={ node => this.grid2 = node }
            enableCellSelect={true}
            columns={this._monthlyExpenseColumns}
            rowGetter={this.rowGetterMonthlyExpense}
            rowsCount={this.state.monthlyExpenseRows.length}
            minHeight={210}
            onCellSelected={this.onCellSelected}
            onGridRowsUpdated={this.handleGridRowsUpdatedMonthlyExpense}/>

            <ReactDataGrid
              ref={ node => this.grid3 = node }
              enableCellSelect={true}
              columns={this._housingColumns}
              rowGetter={this.rowGetterHousing}
              rowsCount={this.state.housingRows.length}
              minHeight={180}
              onGridRowsUpdated={this.handleGridRowsUpdatedHousing} />
           
            <ReactDataGrid
              ref={ node => this.grid4 = node }
              enableCellSelect={true}
              columns={this._insuranceColumns}
              rowGetter={this.rowGetterInsurance}
              rowsCount={this.state.insurancerows.length}
              minHeight={180}
              onGridRowsUpdated={this.handleGridRowsUpdatedInsurance} />

            
            <ReactDataGrid
              ref={ node => this.grid5 = node }
              enableCellSelect={true}
              columns={this._utilitiesColumns}
              rowGetter={this.rowGetterUtilities}
              rowsCount={this.state.utilitiesRows.length}
              minHeight={310}
              onGridRowsUpdated={this.handleGridRowsUpdatedUtilities} />

            <ReactDataGrid
              ref={ node => this.grid6 = node }
              enableCellSelect={true}
              columns={ this._loanPaymentColumns }
              rowGetter={this.rowGetterLoanPayment}
              rowsCount={this.state.loanPaymentRows.length}
              minHeight={210}
              onGridRowsUpdated={this.handleGridRowsUpdatedLoanPayment} />
            
            <ReactDataGrid
              ref={ node => this.grid7 = node }
              enableCellSelect={true}
              columns={ this._booksSuppliesColumns }
              rowGetter={this.rowGetterBooksSupplies}
              rowsCount={this.state.booksSuppliesRows.length}
              minHeight={210}
              onGridRowsUpdated={this.handleGridRowsUpdatedbooksSupplies} />
              
                
            <ReactDataGrid
              ref={ node => this.grid8 = node }
              enableCellSelect={true}
              columns={ this._transportationColumns  }
              rowGetter={this.rowGetterTransportation}
              rowsCount={this.state.transportationRows.length}
              minHeight={310}
              onGridRowsUpdated={this.handleGridRowsUpdatedTransportation} />

            
            <ReactDataGrid
              ref={ node => this.grid9 = node }
              enableCellSelect={true}
              columns={ this._discretionaryColumns }
              rowGetter={this.rowGetterDiscretionary}
              rowsCount={this.state.discretionaryRows.length}
              minHeight={210}
              onGridRowsUpdated={this.handleGridRowsUpdatedDiscretionary} />
            
            <ReactDataGrid
              ref={ node => this.grid10 = node }
              enableCellSelect={true}
              columns={ this._otherExpensesColumns }
              rowGetter={this.rowGetterOtherExpenses}
              rowsCount={this.state.otherExpensesRows.length}
              minHeight={150}
              onGridRowsUpdated={this.handleGridRowsUpdatedOtherExpenses} />

           
            <ReactDataGrid
              ref={ node => this.grid11 = node }
              enableCellSelect={true}
              columns={this._totalExpensesColumns}
              rowGetter={this.rowGetterTotalExpenses}
              rowsCount={this.state.totalExpensesRows.length}
              minHeight={210} />

    </div>);
  }
});




export {Example}