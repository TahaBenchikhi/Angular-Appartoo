import { Component, OnInit } from '@angular/core';
import { AppGuard } from '../guard/app.guard';
import { Http } from '@angular/http';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  private id;
  constructor(private guard: AppGuard, private http: Http) { }

  ngOnInit() {
    this.id = this.guard.GetUser()['id'];
  }
  onSubmit(formulaire: HTMLFormElement) {
    this.http.post('http://127.0.0.1:8000/changerprofil', {
      user: this.id,
      nom: formulaire.form.value.MyForm.nom,
      prenom: formulaire.form.value.MyForm.prenom,
      age: formulaire.form.value.MyForm.age,
      race: formulaire.form.value.MyForm.race,
      famille: formulaire.form.value.MyForm.famille,
      nourriture: formulaire.form.value.MyForm.nourriture,

    }).subscribe(response => {
      // tslint:disable-next-line:triple-equals
      if (response['_body'] == 'ok') {
        alert('Profil modifier avec succes :)');
      }
      // tslint:disable-next-line:one-line
      else {
        alert('Erreur :(');
      }

    });
  }

}
