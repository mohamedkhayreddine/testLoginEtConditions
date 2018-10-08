import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router} from '@angular/router'; window['$'] = $; window['jQuery'] = $;
@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    $(document).ready( function() {
      $('#terms').scroll(function () {

        if ($(this).scrollTop() === $(this)[0].scrollHeight - $(this).height()) {

          $('#chk').removeAttr('disabled');
        }
      });
    });
  }
  onSubmit() {
    $.post('https://jsonplaceholder.typicode.com/posts', {
        userId: 1,
        title: 'test',
        body: 'test'
      },
      function(data, status) {
        alert('c est une action Ajax de type POST en utilisant un fake web service du JsonPlaceHolder ' + 'Status: ' + status);
      });
  }
  doLogOut() {
    this.router.navigateByUrl('');
  }

}
