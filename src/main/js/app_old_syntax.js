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
      member: '',
      vegetables: [
        '01',
        '02',
        '03',
        '04',
        '05'
      ],
      data:[],
      selectedVegetable: 'No'
    };
  },
  // componentDidMount() {
  //   console.log("Hi React");
  //   var that = this;
  //   var url = 'http://localhost:8080/api/members/'
  //   fetch(url)
  //   .then(function(response) {
  //     if (response.status >= 400) {
  //       throw new Error("Bad response from server");
  //     }
  //     return response.json();
  //   })
  //   .then(function(data) {
  //     // that.setState({ person: data.person });
  //     console.log(data._embedded.members)
  //     that.setState({data:data._embedded.members})
  //   });
  // },
  
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


  // render: function() {
  //   var musicalIns = this.state.selectedVegetable
  //   var memberId = this.state.member


  // function handleClick(Id,Ins) {
  //       return function () {
  //         if(musicalIns != 'No'){
  //           ons.notification.alert('คุณได้เลือกรายการที่:'+musicalIns);
  //             client({method: 'GET', path: '/member/'+memberId+'/musical/'+musicalIns}).done(
  //             )
  //         }else{
  //           ons.notification.alert('กรุณาเลือกเครื่องดนตรี')

  //         }
  //       }
  //     }
  
  render: function() {

   function handleClick(id,point) {
        return function () {
            client({method: 'GET', path: '/vote/'+id+'/point/'+point}).done(
                ons.notification.alert('Voted!')
        )}
    }

     return (
        <Ons.Page renderToolbar={this.renderToolbar}>
        {this.componentDidMount}
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
             <Ons.Button onClick={handleClick(1,2)}>ตกลง</Ons.Button>
           </section>
       
         
       
        {/* // <div>
         //  {this.state.data.map((d,idx)=>{
        //  return <div key={idx}>{d.name}{d.tel}</div>
       //  })}
         //</div> */}

         
            
        </Ons.Page>
      );


    // return(
    //   <Ons.Page renderToolbar={this.renderToolbar}>
    //     <img src={"img/01.jpg"} alt="เลือกเครื่องดนตรี" style={{width: '100%'}} />
    //     <div className="content">
    //       <Ons.List>
    //         <Ons.ListHeader>
    //         <Ons.Icon icon='heartbeat' />
    //         &nbsp;&nbsp;Heart
    //         </Ons.ListHeader>
    //         <Ons.ListItem onClick={handleClick(1,250)}>
    //           <Ons.Icon style={{color: 'red'}} icon='heart' />
    //         </Ons.ListItem>
    //         <Ons.ListItem onClick={handleClick(1,300)}>
    //         <Ons.Icon style={{color: 'red'}} icon='heart' />
    //         <Ons.Icon style={{color: 'red'}} icon='heart' />
    //       </Ons.ListItem>
    //       <Ons.ListItem onClick={handleClick(1,500)}>
    //         <Ons.Icon style={{color: 'red'}} icon='heart' />
    //         <Ons.Icon style={{color: 'red'}} icon='heart' />
    //         <Ons.Icon style={{color: 'red'}} icon='heart' />
    //       </Ons.ListItem>
    //       </Ons.List>
    //       <br/>

    //     </div>

    //   </Ons.Page>
    // )
  }
});

ReactDOM.render(<ReactApp />, document.getElementById('react'));