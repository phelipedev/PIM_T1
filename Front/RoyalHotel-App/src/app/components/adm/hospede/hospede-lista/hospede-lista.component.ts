import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hospede-lista',
  templateUrl: './hospede-lista.component.html',
  styleUrls: ['./hospede-lista.component.scss']
})
export class HospedeListaComponent implements OnInit {

  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  decline(): void {
    this.modalRef.hide();
  }

}
