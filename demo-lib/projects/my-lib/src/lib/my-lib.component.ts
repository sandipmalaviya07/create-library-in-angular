import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
  
<form  method="post">
  <div >
    <label for="uname"><b>Username: </b></label>
    <input type="text" placeholder="Enter Username" name="uname" required style="margin:10px;">
  <br/>
    <label for="psw"><b>Password: </b></label>
    <input type="password" placeholder="Enter Password" name="psw" required style="margin:10px;">
  <br/>
     <button type="submit">Login</button>
 
</div>
</form>
  `,
  styles: [
  ]

})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
