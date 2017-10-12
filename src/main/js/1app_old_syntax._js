var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
var page = true;
var page2 = true;
var index = [0,0];
var code = '';
var pro = ['กลองชุด ราคา 500 บาท/วัน','กีตาร์ไฟฟ้า  ราคา 450 บาท/วัน','กีตาร์โปร่ง  ราคา 450 บาท/วัน','เบส    ราคา 450 บาท/วัน','คีย์บอร์ด  ราคา 450 บาท/วัน'];

var URL = ["https://www.uppic.org/thumb-0E98_599FE98A.jpg","https://www.uppic.org/thumb-BF40_59A6DAF3.jpg","https://www.uppic.org/thumb-A7C3_59A6DC4B.jpg",
"https://www.uppic.org/thumb-72F6_59A6DCD8.jpg","https://www.uppic.org/thumb-3483_59A6DD4B.jpg"];


var ReactApp = React.createClass({
  getInitialState: function() {
    return {
      rentdate: '',
      returndate: '',
      member: '',
      vegetables: [
        'กลองชุด',
        'กีตาร์ไฟฟ้า',
        'กีตาร์โปร่ง',
        'เบส',
        'คีย์บอร์ด'
      ],
      selectedVegetable: 'No'
    };
  },

renderToolbar: function() {
    return (
      <Ons.Toolbar>
        <div className='center'>เช่าเครื่องดนตรี</div>
        <div className='right'>
          <Ons.ToolbarButton>
              <Ons.Icon icon='ion-navicon, material:md-menu'></Ons.Icon>
          </Ons.ToolbarButton>
        </div>


      </Ons.Toolbar>
    )
  },

  renderCheckboxRow(row,c) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='right'>
          <Ons.Checkbox
            inputId={`checkbox-${row}`}
            checked={row === this.state.selectedVegetable}
            onChange={this.handleVegetableChange.bind(this, row)}
          />
        </label>

        <label htmlFor={`checkbox-${pro[c]}`} className = 'center'>
          <img src={URL[c]} style={{width: '80',height: '75'}} />&emsp;{pro[c]}
        </label>

        <label htmlFor={`checkbox-${row}`} className='right'>

        </label>

    </Ons.ListItem>

    );
  },


   handleMemberChange(e) {
     this.setState({member: e.target.value});
   },

  handleRentDateChange(e) {
    this.setState({rentdate: e.target.value});
  },

  handleReturnDateChange(e) {
    this.setState({returndate: e.target.value});
  },


  handleVegetableChange(vegetable) {
    this.setState({selectedVegetable: vegetable});
  },


 handleClick: function(navigator) {
     var musicalIns = this.state.selectedVegetable
     var memberId = this.state.member
     //var rentIns = this.state.rentdate
     //var returnIns = this.state.returndate



    // if(memberId === 'No'){
    //   ons.notification.alert('คุณยังไม่เลือกเครื่องดนตรี');
    // }else {
    //   ons.notification.alert('คุณเลือกเช่า:'+memberId);
    // }

      return function () {
            client({method: 'GET', path: '/member/'+memberId+'/musicalIns/'+musicalIns}).done(
                ons.notification.alert('Voted!')
        )}

  },

 render: function() {

     return (
        <Ons.Page renderToolbar={this.renderToolbar}>
         <section style={{textAlign: 'center'}}>
          <p>
            <Ons.Input
              value={this.state.member}
              onChange={this.handleMemberChange}
              modifier='underbar'
              float
              placeholder='กรอกรหัสสมาชิก' />
          </p>

          <p>
            <Ons.Input
              value={this.state.rentdate}
              onChange={this.handleRentDateChange}
              modifier='underbar'
              float
              placeholder='วันที่เช่า' />
          </p>

          <p>
            <Ons.Input
              value={this.state.returndate}
              onChange={this.handleReturnDateChange}
              modifier='underbar'
              float
              placeholder='วันที่ส่งคืน' />
          </p>

         </section>
          <Ons.List
             dataSource={this.state.vegetables}
             renderHeader={() => <Ons.ListHeader>เลือกเครื่องดนตรี</Ons.ListHeader>}
             renderRow={this.renderCheckboxRow}
            />

           <section style={{margin: '16px', textAlign: 'center'}}>
             <Ons.Button onClick={this.handleClick}>ค้นหา</Ons.Button>
           </section>

        </Ons.Page>
      );
  }
});

ons.ready(function() {
  ReactDOM.render(<ReactApp />, document.getElementById('react'));
});
