import { Component, OnInit } from "@angular/core";
import { Contacto } from "../../models/contacto";
import { ContactosService } from "../../services/contactos.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalDialogService } from "../../services/modal-dialog.service";

@Component({
  selector: "app-contactos",
  templateUrl: "./contactos.component.html",
  styleUrls: ["./contactos.component.css"]
})
export class ContactosComponent implements OnInit {
  visibleTabla = false;
  visibleContacto = false;
  tablaContactos: Contacto[];

  fg: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private contactosService: ContactosService,
    private modalDialogService: ModalDialogService
  ) {}

  ngOnInit() {
    this.contactosService.get().subscribe({
      next: contactos => (this.tablaContactos = contactos),
      error: err => console.log(err)
    });

    this.fg = this.formBuilder.group({
      IdContacto: [
        "",
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]
      ],
      Nombre: ["", [Validators.required, Validators.maxLength(30)]],
      FechaNacimiento: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](19|20)[0-9]{2}"
          )
        ]
      ],
      Telefono: ["", [Validators.required]]
    });
  }

  mostrarTabla() {
    this.visibleTabla = !this.visibleTabla;
    this.contactosService.get().subscribe({
      next: contactos => (this.tablaContactos = contactos),
      error: err => console.log(err)
    });
  }

  cargarContactos() {
    this.visibleTabla = false;
    this.visibleContacto = true;
  }

  ocultarContacto() {
    this.visibleTabla = false;
    this.visibleContacto = false;
  }

  nuevoContacto() {
    const itemCopy = { ...this.fg.value };
    if (this.fg.valid) {
      this.contactosService.post(itemCopy).subscribe((res: any) => {
        this.modalDialogService.Alert('Registro agregado correctamente.');
      });

      this.modalDialogService.Alert("Registro agregado correctamente.");
      this.fg.reset();
    }
  }
}
